import fs from 'fs';
import path from 'path';
import config from '../../config/configDB';
// import mariaDb from './mariaDb';

const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.json');

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
    discount: number;
    used: number;
    maxcount: number;
}

interface Data {
    products: Product[];
    discountCodes: Record<string, DiscountCode>;
}

export async function getProducts(): Promise<Product[]> {
    if (config.useJson) {
        const response = await fetch('/api/data');
        const data: Data = await response.json();
        return data.products;
    } else {
        return await mariaDb.getProducts();
    }
}

export async function getProductById(id: string): Promise<Product | undefined> {
    if (config.useJson) {
        const products = await getProducts();
        return products.find((product) => product.id === id);
    } else {
        return await mariaDb.getProductById(id);
    }
}

export async function addProduct(product: Product): Promise<void> {
    if (config.useJson) {
        await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
    } else {
        await mariaDb.addProduct(product);
    }
}

export async function updateProduct(updatedProduct: Product): Promise<void> {
    if (config.useJson) {
        await fetch(`/api/products/${updatedProduct.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
    } else {
        await mariaDb.updateProduct(updatedProduct);
    }
}

export async function deleteProduct(id: string): Promise<void> {
    if (config.useJson) {
        await fetch(`/api/products/${id}`, {
            method: 'DELETE',
        });
    } else {
        await mariaDb.deleteProduct(id);
    }
}

export async function getDiscountCodes(): Promise<Record<string, DiscountCode> | null> {
    if (config.useJson) {
        console.log("getDiscountCodes");
        const response = await fetch('/api/discount');
        const data: Data = await response.json();
        console.log("data:", data);
        return data.discountCodes;
    } else {
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
    } else {
        await mariaDb.updateDiscountCode(code, usedCount);
    }
}