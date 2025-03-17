import React from 'react';
import ProductCard from './ProductCard';
// import { CartProduct } from '../../types/index';
import { Product } from '../../types/index';

interface CartItemProps {
    product: Product;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onQuantityChange, onRemove }) => (
    <ProductCard
        key={product.id}
        product={product}
        onQuantityChange={onQuantityChange}
        onRemove={onRemove}
    />
);

export default CartItem;