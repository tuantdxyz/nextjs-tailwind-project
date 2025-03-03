import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from './../lib/features/cart/cartContext';

const CartIcon: React.FC = () => {
    const { state } = useCart();

    return (
        <Link href="/cart" className="btn btn-ghost btn-circle">
            <div className="indicator relative">
                <Image src="/cart.svg" alt="Cart Icon" width={40} height={40} className="w-10 h-10 text-black dark:text-white" />
                {state.items.length > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-white bg-opacity-75 text-black rounded-full w-5 h-5 flex items-center justify-center">
                        {state.items.length}
                    </span>
                )}
            </div>
        </Link>
    );
};

export default CartIcon;