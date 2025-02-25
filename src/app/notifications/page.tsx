"use client";

import { useSession } from "next-auth/react";

const NotificationsPage = () => {
    const { data: session } = useSession();

    if (!session || !session.user) {
        return <p className="text-center text-red-500">Bạn cần đăng nhập để xem thông báo.</p>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold mb-4">Thông báo của bạn</h1>
            <ul className="space-y-3">
                <li className="p-3 bg-gray-100 rounded-md">🔔 Thông báo 1</li>
                <li className="p-3 bg-gray-100 rounded-md">🔔 Thông báo 2</li>
                <li className="p-3 bg-gray-100 rounded-md">🔔 Thông báo 3</li>
            </ul>
        </div>
    );
};

export default NotificationsPage;
