import React from 'react';
import ReviewCard from './reviewCard';

const reviews = [
    {
        name: 'Daniella Doe',
        role: 'Mobile dev',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        name: 'Jane Doe',
        role: 'Marketing',
        avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
        review: 'Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    },
    {
        name: 'Yanick Doe',
        role: 'Developer',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    },
    // {
    //     name: 'Jane Doe',
    //     role: 'Mobile dev',
    //     avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    //     review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    // }
    // {
    //     name: 'Andy Doe',
    //     role: 'Manager',
    //     avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
    //     review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    // },
    // {
    //     name: 'Yanndy Doe',
    //     role: 'Mobile dev',
    //     avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
    //     review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    // }
];

const ReviewsSection: React.FC = () => {
    return (
        <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        We have some fans.
                    </h2>
                </div>
                <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            name={review.name}
                            role={review.role}
                            avatar={review.avatar}
                            review={review.review}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;