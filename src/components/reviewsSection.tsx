import React from 'react';
import ReviewCard from './reviewCard';

const REVIEW_TEXT = 'KOL fans nói gì';
const reviews = [
    {
        name: 'Nguyễn Hà',
        role: 'Ca Sĩ',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        review: 'Sản phẩm rất tốt, tôi rất hài lòng. Chất lượng vượt trội và dịch vụ hỗ trợ khách hàng tuyệt vời.',
    },
    {
        name: 'Trần Anh',
        role: 'Diễn Viên',
        avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
        review: 'Dịch vụ giao hàng nhanh chóng và sản phẩm đúng như mô tả. Tôi sẽ tiếp tục ủng hộ.',
    },
    {
        name: 'Lê Công',
        role: 'Top Tictoker',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
        review: 'Tôi rất ấn tượng với chất lượng sản phẩm và dịch vụ của các bạn. Sẽ giới thiệu đến bạn bè.',
    },
];

const ReviewsSection: React.FC = () => {
    return (
        <div className="text-gray-600 dark:text-gray-300 pt-2" id="reviews">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-2 space-y-4 px-6 md:px-0">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                        {REVIEW_TEXT}
                    </h2>
                </div>
                <div className="md:columns-2 lg:columns-3 gap-8 space-y-2">
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