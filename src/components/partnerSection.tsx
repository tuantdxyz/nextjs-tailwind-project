'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerSection: React.FC = () => {
    const settings = {
        dots: false, // Disable dots
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true, // Enable arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const partners = [
        { src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 1' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 2' },
        { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 3' },
        { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 4' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&w=120', alt: 'Partner 5' },
    ];

    return (
        <section className="py-6">
            <div className="container mx-auto px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-32">
                <div className="text-center mb-8">
                    <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
                        Our Partners
                    </h2>
                    <p className="mt-4 text-base leading-6 text-gray-500 sm:text-lg sm:leading-6 md:text-xl md:leading-7 lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-9">
                        We are proud to collaborate with these amazing partners.
                    </p>
                </div>
                <Slider {...settings}>
                    {partners.map((partner, index) => (
                        <div key={index} className="px-2"> {/* Adjust px-2 to reduce the space between images */}
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                                width={120}
                                height={120}
                                className="mx-auto"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PartnerSection;