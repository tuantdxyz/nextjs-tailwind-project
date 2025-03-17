import React from 'react';
import Image from 'next/image';

interface PaymentMethodProps {
    hasEnterprisePackage: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ hasEnterprisePackage }) => (
    <div className="mb-3 flex justify-center items-center space-x-8">
        <div className="flex flex-col items-center">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
                <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="paymentType"
                    id="type1"
                    defaultChecked={true}
                />
                <Image src="/qr-code.png" className="h-8 ml-3" alt="QR Code" width={32} height={32} />
            </label>
            <span className="text-center mt-1">QR Code</span>
        </div>
        <div className="flex flex-col items-center relative group">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
                <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="paymentType"
                    id="type2"
                    disabled={hasEnterprisePackage}
                />
                <Image src="/cash-on-delivery.png" className="h-8 ml-3" alt="COD" width={32} height={32} />
                {hasEnterprisePackage && (
                    <div className={`absolute top-full ml-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bg-white bg-opacity-75 text-red-500 text-xs rounded p-1 whitespace-nowrap`}>
                        Không hỗ trợ COD
                    </div>
                )}
            </label>
            <span className="text-center mt-1">COD</span>
        </div>
    </div>
);

export default PaymentMethod;