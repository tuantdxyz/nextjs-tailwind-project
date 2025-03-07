import React from 'react';

const ProductMixSection: React.FC = () => {
    const regions_one = [
        "Africa",
        "Antarctica",
        "Asia",
        "Australia (also known as Oceania)",
    ];

    const regions_two = [
        "Europe",
        "North America",
        "South America",
    ];

    return (
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
            <div className="w-full lg:w-1/2 p-2">
                <h3 className="text-xl font-semibold mb-4">Region One</h3>
                {regions_one.map((region, index) => (
                    <div key={index} className="p-2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="font-medium">{region}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full lg:w-1/2 p-2">
                <h3 className="text-xl font-semibold mb-4">Region Two</h3>
                {regions_two.map((region, index) => (
                    <div key={index} className="p-2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="font-medium">{region}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductMixSection;