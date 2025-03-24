// src/types/index.d.ts

// Model quản lý thông tin người dùng
export interface User {
    id: number; // Đổi từ string sang number
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    roleId: number; // Đổi từ string sang number
    walletId?: number | null; // Đổi từ string sang number
    userLevelId: number; // Đổi từ string sang number
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
}

// Model quản lý vai trò người dùng
export interface Role {
    id: number; // Đổi từ string sang number
    name: string;
}

// Model quản lý các cấp độ người dùng
export interface UserLevel {
    id: number; // Đổi từ string sang number
    name: string;
    minPoints: number;
}

// Model quản lý ví tiền của người dùng
export interface Wallet {
    id: number; // Đổi từ string sang number
    userId: number; // Đổi từ string sang number
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}

// Model quản lý sản phẩm
export interface Product {
    id: number; // Đổi từ string sang number
    slug: string;
    name: string;
    price: number;
    shortDescription: string;
    detailedDescription: string;
    quantity: number;
    brand: string;
    originalPrice: number;
    imageSrc: string;
    sold: number;
    notes: string;
    categoryId: number; // Đổi từ string sang number
}

// Model quản lý danh mục sản phẩm
export interface Category {
    id: number; // Đổi từ string sang number
    name: string;
}

// Model quản lý mã giảm giá
export interface Discount {
    code: string; // Giữ nguyên string vì đây không phải id tự tăng
    discount: number;
    used: number;
    maxCount: number;
}

// Model quản lý chiến dịch khuyến mãi
export interface Sale {
    id: number; // Đổi từ string sang number
    name: string;
    discountId: string; // Giữ nguyên string vì tham chiếu đến code của Discount
    soldDuringPromotion: number;
    totalSale: number;
    revenue: number;
}

// Bảng trung gian quản lý nhiều sản phẩm trong nhiều chiến dịch khuyến mãi
export interface SaleProduct {
    id: number; // Đổi từ string sang number
    saleId: number; // Đổi từ string sang number
    productId: number; // Đổi từ string sang number
}

// Model quản lý nhóm mua hàng
export interface GroupBuy {
    id: number; // Đổi từ string sang number
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

// Model quản lý thành viên trong nhóm mua hàng
export interface GroupMembership {
    id: number; // Đổi từ string sang number
    groupId: number; // Đổi từ string sang number
    userId: number; // Đổi từ string sang number
    joinedAt: Date;
}

// Model quản lý vai trò trong nhóm mua hàng
export interface GroupRole {
    id: number; // Đổi từ string sang number
    groupId: number; // Đổi từ string sang number
    roleId: number; // Đổi từ string sang number
}

// Model quản lý giỏ hàng
export interface Cart {
    id: number; // Đổi từ string sang number
    userId?: number | null; // Đổi từ string sang number
    groupId?: number | null; // Đổi từ string sang number
    createdAt: Date;
    updatedAt: Date;
}

// Model quản lý sản phẩm trong giỏ hàng
export interface CartItem {
    id: number; // Đổi từ string sang number
    cartId: number; // Đổi từ string sang number
    productId: number; // Đổi từ string sang number
    quantity: number;
}

// Model quản lý phiên đấu giá
export interface Auction {
    id: number; // Đổi từ string sang number
    productId: number; // Đổi từ string sang number
    startingPrice: number;
    startDate: Date;
    endDate: Date;
    highestBidderId?: number | null; // Đổi từ string sang number
    highestBid?: number | null;
    isActive: boolean;
}

// Model quản lý lượt đấu giá trong phiên đấu giá
export interface AuctionBid {
    id: number; // Đổi từ string sang number
    auctionId: number; // Đổi từ string sang number
    userId: number; // Đổi từ string sang number
    bidAmount: number;
    createdAt: Date;
}

// Model quản lý lịch trình khuyến mãi
export interface PromotionalSchedule {
    id: number; // Đổi từ string sang number
    startDate: Date;
    endDate: Date;
}

// Model quản lý đánh giá của khách hàng
export interface Review {
    id: number; // Đổi từ string sang number
    userId: number; // Đổi từ string sang number
    productId: number; // Đổi từ string sang number
    content: string;
    rating: number;
    imageUrl?: string | null;
    createdAt: Date;
}

// Model quản lý sản phẩm trong whitelist của khách hàng
export interface WhitelistProduct {
    id: number; // Đổi từ string sang number
    userId: number; // Đổi từ string sang number
    productId: number; // Đổi từ string sang number
    addedAt: Date;
}