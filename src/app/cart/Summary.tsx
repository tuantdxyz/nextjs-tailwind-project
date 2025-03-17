import React from 'react';
import Link from 'next/link';
import DiscountCode from './DiscountCode';

interface SummaryProps {
    subtotal: number;
    shipping: number;
    discountAmount: number;
    total: number;
    setDiscountAmount: (amount: number) => void;
}

const Summary: React.FC<SummaryProps> = ({ subtotal, shipping, discountAmount, total, setDiscountAmount }) => (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md mt-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Summary</h2>
        <div className="h-px w-full border-b border-gray-200 dark:border-gray-600 mt-1"></div>
        <DiscountCode setDiscountAmount={setDiscountAmount} />
        <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
            <span>Taxes</span>
            <span>$0.00</span>
        </div>
        {discountAmount > 0 && (
            <div className="flex justify-between mt-2">
                <span>Discount</span>
                <span className="text-red-500">-${discountAmount.toFixed(2)}</span>
            </div>
        )}
        <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 mt-4">
            <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="flex-shrink-0 w-24 text-right">${total.toFixed(2)}</span>
            </div>
        </div>
        <Link href="/payment">
            <div className="bg-gray-800 text-white w-full py-4 mt-8 text-center rounded-md hover:bg-gray-700 cursor-pointer">
                Proceed to Checkout
            </div>
        </Link>
    </div>
);

export default Summary;