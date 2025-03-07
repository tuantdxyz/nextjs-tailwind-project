import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: 'Increase sales',
        description: 'Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit.',
    },
    {
        title: 'Enterprise-ready',
        description: 'Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.',
    },
    {
        title: 'Unlimited growth',
        description: 'Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.',
    },
    {
        title: 'Recommended by experts',
        description: 'Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.',
    },
    {
        title: 'Modern platform',
        description: 'Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.',
    },
    {
        title: 'Integrations',
        description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur.',
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <div className="pb-6">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="container mx-auto px-6 p-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
                            Tại sao chọn chúng tôi
                        </h2>
                    </div>
                    <div className="flex flex-wrap my-12">
                        {features.map((feature) => (
                            <div key={feature.title} className="w-full border-b md:w-1/2 lg:w-1/3 p-8">
                                <div className="flex items-center mb-6">
                                    <Image src="/icon_checked.svg" alt="Checked Icon" width={20} height={20} className="h-6 w-6" />
                                    <div className="ml-4 text-xl text-gray-800">{feature.title}</div>
                                </div>
                                <p className="leading-loose text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;