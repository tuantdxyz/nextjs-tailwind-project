// import fs from 'fs';
// import path from 'path';
import config from '../../config/configDB';
import mariaDb from './mariaDb';

// const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.json');

interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    shortDescription: string;
    detailedDescription: string;
    quantity: number;
    brand: string;
    originalPrice: string;
    imageSrc: string;
    sold: number;
    notes: string;
    promotionStartTime: Date | null;
    promotionEndTime: Date | null;
    soldDuringPromotion: number;
    totalSale: number;
}

interface DiscountCode {
    code: string;
    discount: number;
    used: number;
    maxcount: number;
}

interface Data {
    products: Product[];
    discountCodes: DiscountCode[];
}

let cachedDiscountCodes: DiscountCode[] | null = null;

export async function getDiscountCodes(): Promise<DiscountCode[] | null> {
    if (config.useJson) {
        console.log("Running data");
        if (cachedDiscountCodes) {
            console.log("Returning cached discount codes");
            return cachedDiscountCodes;
        }

        try {
            console.log("Fetching discount codes from API...");
            const response = await fetch('/api/discount');
            if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API response:", data);

            if (Array.isArray(data)) {
                cachedDiscountCodes = data;
                return data;
            } else {
                console.error("Invalid discount code format:", data);
                return null;
            }
        } catch (error) {
            console.error("Error fetching discount codes:", error);
            return null;
        }
    } else {
        console.log("Running MariaDB");
        return await mariaDb.getDiscountCodes();
    }
}

export async function updateDiscountCode(code: string, usedCount: number): Promise<void> {
    if (config.useJson) {
        await fetch('/api/discount', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, usedCount }),
        });

        // Cập nhật cache
        if (cachedDiscountCodes) {
            cachedDiscountCodes = cachedDiscountCodes.map(dc =>
                dc.code === code ? { ...dc, used: usedCount } : dc
            );
        }
    } else {
        await mariaDb.updateDiscountCode(code, usedCount);
    }
}
