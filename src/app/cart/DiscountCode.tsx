import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { Discount } from '../../types/index';

// interface DiscountCodeData {
//     code: string;
//     discount: number;
//     used: number;
//     maxcount: number;
// }

interface DiscountCodeProps {
    setDiscountAmount: (amount: number) => void;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ setDiscountAmount }) => {
    const [discountCode, setDiscountCode] = useState<string>("");
    const [isDiscountCodeVisible, setDiscountCodeVisible] = useState(false);
    const [discountCodes, setDiscountCodes] = useState<Discount[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch danh sách mã giảm giá khi component mount
    useEffect(() => {
        async function fetchDiscountCodes() {
            setLoading(true);
            try {
                const response = await fetch('/api/discount');
                if (!response.ok) {
                    throw new Error(`API request failed with status: ${response.status}`);
                }

                const codes: Discount[] = await response.json();
                console.log("Fetched discount codes:", codes);

                if (Array.isArray(codes)) {
                    setDiscountCodes(codes);
                } else {
                    console.error("Invalid discount code format:", codes);
                    toast.error("No valid discount codes found.");
                    setDiscountCodes([]); // Đảm bảo luôn có mảng rỗng
                }
            } catch (error) {
                console.error("Error fetching discount codes:", error);
                toast.error("Error loading discount codes.");
                setDiscountCodes([]); // Đảm bảo set state ngay cả khi lỗi
            } finally {
                setLoading(false);
            }
        }

        fetchDiscountCodes();
    }, []);

    // Xử lý nhập mã giảm giá
    const handleApplyDiscount = async () => {
        const trimmedCode = discountCode.trim().toUpperCase();
        if (!trimmedCode) {
            toast.error("Please enter a discount code.");
            return;
        }

        const foundCodeIndex = discountCodes.findIndex((dc) => dc.code === trimmedCode);
        if (foundCodeIndex === -1) {
            setDiscountAmount(0);
            toast.error(`Invalid discount code: ${discountCode}`);
            return;
        }

        const foundCode = discountCodes[foundCodeIndex];

        if (foundCode.used >= foundCode.maxcount) {
            setDiscountAmount(0);
            toast.error(`Discount code ${foundCode.code} has reached its usage limit!`);
            return;
        }

        // Cập nhật số lần sử dụng và set giá trị giảm giá
        try {
            await fetch('/api/discount', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: foundCode.code, usedCount: foundCode.used + 1 }),
            });

            // Cập nhật state để phản ánh số lần sử dụng mới
            const updatedCodes = [...discountCodes];
            updatedCodes[foundCodeIndex] = {
                ...foundCode,
                used: foundCode.used + 1,
            };
            setDiscountCodes(updatedCodes);

            setDiscountAmount(foundCode.discount);
            toast.success(`Applied discount code: ${foundCode.code}`);
        } catch (error) {
            console.error("Error updating discount code:", error);
            toast.error("Failed to apply discount code.");
        }
    };

    return (
        <>
            <label className="font-sans flex gap-x-1 my-2 items-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                    onClick={() => setDiscountCodeVisible((prev) => !prev)}
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
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={handleApplyDiscount}
                        className="bg-gray-800 text-white px-4 py-2 rounded-md ml-2 h-10 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Apply"}
                    </button>
                </div>
            )}
        </>
    );
};

export default DiscountCode;