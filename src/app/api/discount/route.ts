import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import prisma from '../../../lib/prisma';
import { Discount } from '../../../types/index';

// // Định nghĩa kiểu dữ liệu
// interface DiscountCode {
//     code: string;
//     discount: number;
//     used: number;
//     maxcount: number;
// }

interface Data {
    discountCodes: Discount[];
}

// read file data json DB = data.json
const dbJson = process.env.JSON_DB;
if (!dbJson) {
    throw new Error('JSON_DB environment variable is not set.');
}
const dataFilePath = path.join(process.cwd(), "src", "lib", dbJson);

// Hàm đọc dữ liệu từ file JSON
async function readData(): Promise<Data | null> {
    try {
        const jsonData = await fs.readFile(dataFilePath, "utf-8");
        return JSON.parse(jsonData) as Data;
    } catch (error) {
        console.error("Lỗi đọc file JSON:", error);
        return null;
    }
}

// Hàm ghi dữ liệu vào file JSON
async function writeData(data: Data): Promise<void> {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Lỗi ghi file JSON:", error);
    }
}

// Hàm lấy danh sách mã giảm giá
async function getDiscountCodes(): Promise<Discount[] | null> {
    if (process.env.DB === '1') {
        const data = await readData();
        return data?.discountCodes || null;
    } else if (process.env.DB === '2') {
        return await prisma.discountCode.findMany();
    } else {
        console.error("Invalid DB configuration");
        return null;
    }
}

// Hàm cập nhật số lần sử dụng mã giảm giá
async function updateDiscountCode(code: string, usedCount: number): Promise<Discount | null> {
    // TODO check dat hang thanh cong thi moi tru di 1  (-1 means)
    if (process.env.DB === '1') {
        const data = await readData();
        if (!data || !Array.isArray(data.discountCodes)) {
            return null;
        }

        const discountCode = data.discountCodes.find((item) => item.code === code);
        if (!discountCode) {
            return null;
        }

        discountCode.used = usedCount;
        await writeData(data);
        return discountCode;
    } else if (process.env.DB === '2') {
        const updatedCode = await prisma.discountCode.update({
            where: { code },
            data: { used: usedCount },
        });
        return updatedCode;
    } else {
        console.error("Invalid DB configuration");
        return null;
    }
}

// Xử lý GET request - Lấy danh sách mã giảm giá
export async function GET() {
    const discountCodes = await getDiscountCodes();

    if (!discountCodes) {
        return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 500 });
    }

    return NextResponse.json(discountCodes, { status: 200 });
}

// Xử lý PUT request - Cập nhật số lần sử dụng mã giảm giá
export async function PUT(req: Request) {
    try {
        const { code, usedCount }: { code: string; usedCount: number } = await req.json();

        if (!code || typeof usedCount !== "number") {
            return NextResponse.json({ error: "Dữ liệu đầu vào không hợp lệ" }, { status: 400 });
        }

        const updatedCode = await updateDiscountCode(code, usedCount);

        if (!updatedCode) {
            return NextResponse.json({ message: "Mã giảm giá không tồn tại" }, { status: 404 });
        }

        return NextResponse.json(updatedCode, { status: 200 });
    } catch (error) {
        console.error("Lỗi cập nhật dữ liệu:", error);
        return NextResponse.json({ error: "Lỗi cập nhật dữ liệu" }, { status: 500 });
    }
}