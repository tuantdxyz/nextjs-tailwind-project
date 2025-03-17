
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { getDiscountCodes, updateDiscountCode } from '../../lib/db/jsonDb';

interface DiscountCodeProps {
    setDiscountAmount: (amount: number) => void;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ setDiscountAmount }) => {
    const [discountCode, setDiscountCode] = useState<string>('');
    const [isDiscountCodeVisible, setDiscountCodeVisible] = useState(false);
    const [discountCodes, setDiscountCodes] = useState<Record<string, { discount: number, used: number, maxcount: number }>>({});

    useEffect(() => {
        async function fetchDiscountCodes() {
            const codes = await getDiscountCodes();
            if (codes) {
                setDiscountCodes(codes);
            }
        }
        fetchDiscountCodes();
    }, []);

    const handleApplyDiscount = async () => {
        const code = discountCodes[discountCode.toUpperCase()];
        if (code) {
            if (code.used < code.maxcount) {
                setDiscountAmount(code.discount);
                await updateDiscountCode(discountCode.toUpperCase(), code.used + 1);
                toast.success(`Applied discount code: ${discountCode}`);
            } else {
                setDiscountAmount(0); // Reset discount amount
                toast.error(`Discount code ${discountCode} has reached its usage limit!`);
            }
        } else {
            setDiscountAmount(0); // Reset discount amount
            toast.error(`Invalid discount code,  ${discountCode} `);
        }
    };

    return (
        <>
            <label className="font-sans flex gap-x-1 my-2 items-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                    onClick={() => setDiscountCodeVisible(prev => !prev)}
                >
                    Add gift card or discount code
                </button>
                <Image src="/quanlity_add.svg" alt="Info Icon" width={20} height={20} />
            </label>
            {isDiscountCodeVisible && (
                <div className="w-full bg-white dark:bg-gray-700 flex items-center p-4 rounded-lg shadow-md mt-1">
                    <input
                        placeholder="Discount code"
                        className="h-10 w-2/3 px-4 border rounded-md focus:outline-none bg-transparent"
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleApplyDiscount}
                        className="bg-gray-800 text-white px-4 py-2 rounded-md ml-2 h-10"
                    >
                        Apply
                    </button>
                </div>
            )}
        </>
    );
};

export default DiscountCode;