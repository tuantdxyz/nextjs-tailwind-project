import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

// Định nghĩa kiểu dữ liệu
interface DiscountCode {
  code: string;
  discount: number;
  used: number;
  maxcount: number;
}

interface Data {
  discountCodes: DiscountCode[];
}

const dataFilePath = path.join(process.cwd(), "src", "lib", "data.json");

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

// Xử lý GET request - Lấy danh sách mã giảm giá
export async function GET() {
  const data = await readData();

  if (!data || !Array.isArray(data.discountCodes)) {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 500 });
  }

  return NextResponse.json(data.discountCodes, { status: 200 });
}

// Xử lý PUT request - Cập nhật số lần sử dụng mã giảm giá
export async function PUT(req: Request) {
  try {
    const { code, usedCount }: { code: string; usedCount: number } = await req.json();

    if (!code || typeof usedCount !== "number") {
      return NextResponse.json({ error: "Dữ liệu đầu vào không hợp lệ" }, { status: 400 });
    }

    const data = await readData();

    if (!data || !Array.isArray(data.discountCodes)) {
      return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 500 });
    }

    // Tìm mã giảm giá trong danh sách
    const discountCode = data.discountCodes.find((item) => item.code === code);

    if (!discountCode) {
      return NextResponse.json({ message: "Mã giảm giá không tồn tại" }, { status: 404 });
    }

    // Cập nhật số lần sử dụng
    discountCode.used = usedCount;
    await writeData(data);

    return NextResponse.json(discountCode, { status: 200 });
  } catch (error) {
    console.error("Lỗi cập nhật dữ liệu:", error);
    return NextResponse.json({ error: "Lỗi cập nhật dữ liệu" }, { status: 500 });
  }
}
