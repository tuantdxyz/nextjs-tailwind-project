import React from 'react';

const INPUT_LABEL_TEXT = ['Name', 'Phone', 'Email', 'Address', 'City', 'Note'];

const ShippingInformation: React.FC = () => (
    <div className="rounded-lg p-6 shadow-md mt-4">
        <h2 className="text-2xl">Shipping Information</h2>
        <fieldset className="mb-3 shadow-lg rounded">
            {INPUT_LABEL_TEXT.map((label, index) => (
                <label key={index} className="flex border-b border-gray-200 dark:border-gray-600 h-12 py-3 items-center">
                    <span className="text-right px-2">{label}</span>
                    <input name={label.toLowerCase()} className="focus:outline-none px-3 w-full bg-transparent" placeholder={`Enter ${label}`} required />
                </label>
            ))}
        </fieldset>
    </div>
);

export default ShippingInformation;