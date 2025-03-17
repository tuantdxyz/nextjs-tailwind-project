export interface Product {
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

// export interface CartProduct {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     imageSrc: string;
//     shortDescription: string;
//     detailedDescription: string;
// }