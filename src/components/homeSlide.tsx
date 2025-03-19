"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useTranslation } from "next-i18next";

const HomeSlide: React.FC = () => {
  // const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    // { src: "/img4.jpg", alt: t("Image 4 alt text"), label: t("Slide 1 label"), content: t("Slide 1 content") },
    // { src: "/img5.jpg", alt: t("Image 5 alt text"), label: t("Slide 2 label"), content: t("Slide 2 content") },
    // { src: "/img6.jpg", alt: t("Image 6 alt text"), label: t("Slide 3 label"), content: t("Slide 3 content") },
    { src: "/slide-show01.jpg", alt: "Image 4 alt text", label: "Slide 1 label", content: "Slide 1 content" },
    { src: "/slide-show02.jpg", alt: "Image 5 alt text", label: "Slide 2 label", content: "Slide 2 content" },
    { src: "/slide-show03.jpg", alt: "Image 6 alt text", label: "Slide 3 label", content: "Slide 3 content" }
  ];
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]); // Thêm slides.length vào dependency array

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative pt-16 pb-16" // Add padding top to avoid header overlap
      style={{ height: "400px" }} // Set the height of the carousel
    >
      {/* Carousel items */}
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <Link
            key={index}
            href="#"
            className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${index === activeIndex ? 'block' : 'hidden'}`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={slide.src}
              className="block w-full h-[400px] object-cover" // Set height and keep aspect ratio
              alt={slide.alt}
              width={800}
              height={400}
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{slide.label}</h5>
              {/* <p>{slide.content}</p> */}
            </div>
          </Link>
        ))}
      </div>

      {/* Carousel indicators */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 pb-16 flex list-none justify-center p-0"
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${index === activeIndex ? 'opacity-100' : ''}`}
            aria-current={index === activeIndex ? "true" : "false"}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div> */}

      {/* Carousel controls - prev item */}
      <button onClick={handlePrevSlide} className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" title="Previous slide">
        <Image
          src="/prev_icon.svg"
          className="block"
          alt="Previous slide"
          width={20} // Adjust size as needed
          height={20}
        />
      </button>
      {/* Carousel controls - next item */}
      <button onClick={handleNextSlide} className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" title="Next slide">
        <Image
          src="/next_icon.svg"
          className="block"
          alt="Next slide"
          width={20} // Adjust size as needed
          height={20}
        />
      </button>
    </div>
  );
};

export default HomeSlide;