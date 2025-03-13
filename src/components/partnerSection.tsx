'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PARTNER_TEXT = 'Partner to display';
const partners = [
    { href: '#', src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 1', height: 120 },
    { href: '#', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 2', height: 120 },
    { href: '#', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 3', height: 120 },
    { href: '#', src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 4', height: 120 },
    { href: '#', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 5', height: 120 },
];

const PartnerSection: React.FC = () => {
    return (
        <div className="py-6">
            <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-gray-800 dark:text-white">
                {PARTNER_TEXT}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 my-2 sm:mt-2">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-32 transition-transform duration-300 hover:scale-105"
                    >
                        <Link href={partner.href} aria-label={`${partner.alt} Link`} passHref>
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                                height={partner.height}
                                width={partner.height}
                                className="mx-auto"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerSection;