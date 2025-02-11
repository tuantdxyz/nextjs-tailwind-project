import React from 'react';

const features = [
    {
        title: 'Increase sales',
        description: 'Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit.',
        icon: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z'
    },
    {
        title: 'Enterprise-ready',
        description: 'Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.',
        icon: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z'
    },
    {
        title: 'Unlimited growth',
        description: 'Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.',
        icon: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z'
    },
    {
        title: 'Recommended by experts',
        description: 'Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.',
        icon: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z'
    },
    {
        title: 'Modern platform',
        description: 'Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.',
        icon: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z'
    },
    {
        title: 'Integrations',
        description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur.',
        icon: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z'
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <div className="bg-white pb-6">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="container mx-auto px-6 p-6 bg-white">
                    <div className="mb-16 text-center">
                        <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">How we change the game</p>
                    </div>
                    <div className="flex flex-wrap my-12">
                        {features.map((feature) => (
                            <div key={feature.title} className="w-full border-b md:w-1/2 lg:w-1/3 p-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-indigo-500">
                                        <path d={feature.icon}></path>
                                    </svg>
                                    <div className="ml-4 text-xl">{feature.title}</div>
                                </div>
                                <p className="leading-loose text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;