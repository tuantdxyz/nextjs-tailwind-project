// Interface quản lý thông tin người dùng
export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    roleId: string;
    walletId: string;
    userLevelId: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    groups: GroupMembership[];
    cart?: Cart;
}

// Interface quản lý vai trò người dùng
export interface Role {
    id: string;
    name: string;
}

// Interface quản lý các cấp độ người dùng
export interface UserLevel {
    id: string;
    name: string;
    minPoints: number;
}

// Interface quản lý ví tiền của người dùng
export interface Wallet {
    id: string;
    userId: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}

// Interface quản lý sản phẩm
export interface Product {
    id: string;
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
    categoryId: string;
}

// Interface quản lý danh mục sản phẩm
export interface Category {
    id: string;
    name: string;
    products: Product[];
}

// Interface quản lý mã giảm giá
export interface Discount {
    code: string;
    discount: number;
    used: number;
    maxCount: number;
}

// Interface quản lý chiến dịch khuyến mãi
export interface Sale {
    id: string;
    name: string;
    discountId: string;
    soldDuringPromotion: number;
    totalSale: number;
    revenue: number;
    discount: Discount;
    products: SaleProduct[];
}

// Interface cho bảng trung gian quản lý nhiều sản phẩm trong nhiều chiến dịch khuyến mãi
export interface SaleProduct {
    id: string;
    saleId: string;
    productId: string;
    sale: Sale;
    product: Product;
}

// Interface quản lý nhóm mua hàng
export interface GroupBuy {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    memberships: GroupMembership[];
    roles: GroupRole[];
    cart?: Cart;
}

// Interface quản lý thành viên trong nhóm mua hàng
export interface GroupMembership {
    id: string;
    groupId: string;
    userId: string;
    joinedAt: Date;
}

// Interface quản lý vai trò trong nhóm mua hàng
export interface GroupRole {
    id: string;
    groupId: string;
    roleId: string;
}

// Interface quản lý giỏ hàng
export interface Cart {
    id: string;
    userId: string | null;
    groupId: string | null;
    createdAt: Date;
    updatedAt: Date;
    items: CartItem[];
}

// Interface quản lý sản phẩm trong giỏ hàng
export interface CartItem {
    id: string;
    cartId: string;
    productId: string;
    quantity: number;
    product: Product;
}

// Interface quản lý phiên đấu giá
export interface Auction {
    id: string;
    productId: string;
    startingPrice: number;
    startDate: Date;
    endDate: Date;
    highestBidderId: string | null;
    highestBid: number | null;
    isActive: boolean;
    product: Product;
    bids: AuctionBid[];
}

// Interface quản lý lượt đấu giá trong phiên đấu giá
export interface AuctionBid {
    id: string;
    auctionId: string;
    userId: string;
    bidAmount: number;
    createdAt: Date;
}

// Interface quản lý lịch trình khuyến mãi
export interface PromotionalSchedule {
    id: string;
    startDate: Date;
    endDate: Date;
    sales: Sale[];
}