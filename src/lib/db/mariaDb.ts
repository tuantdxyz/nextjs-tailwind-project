// import prisma from '../../lib/prisma';
// import type { Prisma } from '@prisma/client';

// TODO chua code, err

// const mariaDb = {
//     // ✅ Lấy danh sách sản phẩm
//     getProducts: async () => prisma.product.findMany(),

//     // ✅ Lấy sản phẩm theo ID
//     getProductById: async (id: string) =>
//         prisma.product.findUnique({ where: { id } }),

//     // ✅ Thêm sản phẩm mới
//     addProduct: async (product: Prisma.ProductCreateInput) =>
//         prisma.product.create({ data: product }),

//     // ✅ Cập nhật sản phẩm
//     updateProduct: async (id: string, updatedData: Prisma.ProductUpdateInput) =>
//         prisma.product.update({ where: { id }, data: updatedData }),

//     // ✅ Xóa sản phẩm
//     deleteProduct: async (id: string) =>
//         prisma.product.delete({ where: { id } }),

//     // ✅ Lấy danh sách mã giảm giá
//     getDiscountCodes: async () => {
//         const discountCodes = await prisma.discountCode.findMany();
//         return discountCodes.map(({ code, discount, used, maxcount }) => ({
//             code,
//             discount,
//             used,
//             maxcount,
//         }));
//     },

//     // ✅ Cập nhật số lần sử dụng mã giảm giá
//     updateDiscountCode: async (code: string, usedCount: number) =>
//         prisma.discountCode.update({
//             where: { code },
//             data: { used: usedCount },
//         }),
// };

// export default mariaDb;
