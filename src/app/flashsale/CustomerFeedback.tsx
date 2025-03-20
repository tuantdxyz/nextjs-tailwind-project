// src/components/CustomerFeedback.tsx

import React from 'react';

interface FeedbackProps {
    name: string;
    feedback: string;
}

const CustomerFeedback: React.FC<FeedbackProps> = ({ name, feedback }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <p className="italic"> `${feedback} `</p>
            <p className="font-bold text-right">- {name}</p>
        </div>
    );
};

export default CustomerFeedback;