import React from 'react';

interface ReviewCardProps {
    name: string;
    role: string;
    avatar: string;
    review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, avatar, review }) => {
    return (
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={avatar} alt="user avatar" width="200" height="200" loading="lazy" />
                <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">{name}</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
                </div>
            </div>
            <p className="mt-8 text-gray-600 dark:text-gray-300">{review}</p>
        </div>
    );
};

export default ReviewCard;