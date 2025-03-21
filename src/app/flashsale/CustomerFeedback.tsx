// src/components/CustomerFeedback.tsx

import React from 'react';
import Image from 'next/image';

interface FeedbackProps {
    name: string;
    feedback: string;
    avatarSrc: string;
    isReversed?: boolean;
}

const CustomerFeedback: React.FC<FeedbackProps> = ({ name, feedback, avatarSrc, isReversed }) => {
    return (
        <div
            className={`flex items-center gap-3 p-3 bg-gray-100 rounded-lg shadow-md w-full ${isReversed ? 'flex-row-reverse' : ''
                }`}
        >
            {/* Avatar */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                    src={avatarSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </div>

            {/* Tên và Phản hồi */}
            <div className={`flex flex-col ${isReversed ? 'items-end' : 'items-start'}`}>
                <div
                    className={`text-white px-2 py-0.5 rounded-md ${isReversed ? 'bg-green-600' : 'bg-blue-600'
                        }`}
                >
                    <p className="text-xs sm:text-sm font-semibold">{name}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg shadow-sm mt-0.5 w-fit">
                    <p className="text-gray-700 italic text-xs sm:text-sm">{feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;