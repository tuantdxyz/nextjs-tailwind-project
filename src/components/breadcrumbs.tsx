import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
    name: string;
    href: string;
    current?: boolean;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const getIcon = (name: string) => {
        switch (name) {
            case 'Home':
                return (
                    <svg className="h-4 w-4 shrink-0 fill-gray-500" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M12 3l10 9h-4v9h-12v-9h-4z" />
                    </svg>
                );
            case 'Products':
                return (
                    <svg className="h-4 w-4 shrink-0 fill-gray-500" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M12 2l8 6v8l-8 6-8-6v-8z" />
                    </svg>
                );
            case 'Services':
                return (
                    <svg className="h-4 w-4 shrink-0 fill-gray-500" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M12 2l8 6v8l-8 6-8-6v-8z" />
                    </svg>
                );
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path>
                    </svg>
                );
        }
    };

    return (
        <nav aria-label="breadcrumb">
            <ul className="flex flex-wrap space-x-3 text-sm font-medium text-red-500"> {/* Thêm màu chữ đỏ */}
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        {index !== 0 && (
                            <div aria-hidden="true" className="h-4 w-px rotate-12 rounded-full bg-gray-300"></div>
                        )}
                        {item.current ? (
                            <span className="flex items-center space-x-1">
                                {getIcon(item.name)}
                                <span className="text-red-500">{item.name}</span>
                            </span>
                        ) : (
                            <Link href={item.href}>
                                <div className="flex items-center space-x-1 text-red-500 cursor-pointer">
                                    {getIcon(item.name)}
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;