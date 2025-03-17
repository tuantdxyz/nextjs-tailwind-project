import prisma from '../prisma';

export async function getProducts() {
    return await prisma.product.findMany();
}

export async function getProductById(id: string) {
    return await prisma.product.findUnique({
        where: { id },
    });
}

export async function addProduct(product: any) {
    return await prisma.product.create({
        data: product,
    });
}

export async function updateProduct(updatedProduct: any) {
    return await prisma.product.update({
        where: { id: updatedProduct.id },
        data: updatedProduct,
    });
}

export async function deleteProduct(id: string) {
    return await prisma.product.delete({
        where: { id },
    });
}

export async function getDiscountCodes() {
    const discountCodes = await prisma.discountCode.findMany();
    return discountCodes.reduce((acc: any, row: any) => {
        acc[row.code] = { discount: row.discount, used: row.used, maxcount: row.maxcount };
        return acc;
    }, {});
}

export async function updateDiscountCode(code: string, usedCount: number) {
    return await prisma.discountCode.update({
        where: { code },
        data: { used: usedCount },
    });
}