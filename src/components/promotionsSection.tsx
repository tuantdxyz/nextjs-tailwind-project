"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePromotion } from "../lib/features/promotion/promotionContext";

const PROMOTION_ACTIVE_TEXT = "Hot Deal";
const PROMOTION_UPCOMING_TEXT = "Sản phẩm sắp tới khuyến mại trong";
const PROMOTION_ENDED_TEXT = "Sản phẩm đã hết thời gian khuyến mại, xin đợi vào dịp sau";
const VIEW_DETAILS_TEXT = "Xem chi tiết";

const PromotionsSection: React.FC = () => {
  const { state } = usePromotion();
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isPromotionActive, setIsPromotionActive] = useState(false);
  const [isUpcomingPromotion, setIsUpcomingPromotion] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (state.startTime && state.endDate) {
      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const startTime = state.startTime!.getTime();
        const endTime = state.endDate!.getTime();

        if (now < startTime) {
          const distance = startTime - now;
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setCountdown({ hours, minutes, seconds });
          setIsPromotionActive(false);
          setIsUpcomingPromotion(distance <= 3600000);
        } else if (now >= startTime && now <= endTime) {
          const distance = endTime - now;
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setCountdown({ hours, minutes, seconds });
          setIsPromotionActive(true);
          setIsUpcomingPromotion(false);
        } else {
          clearInterval(countdownInterval);
          setCountdown({ hours: 0, minutes: 0, seconds: 0 });
          setIsPromotionActive(false);
          setIsUpcomingPromotion(false);
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [state.startTime, state.endDate]);

  if (!mounted) return null;

  const handleToggleCoupon = () => setIsCouponOpen(!isCouponOpen);

  return (
    <section className="pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-3 space-y-4 px-6 md:px-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              {PROMOTION_ACTIVE_TEXT}
            </h2>
            {isPromotionActive && (
              <div className="flex items-center gap-2 text-red-500">
                <Image src="/set.svg" alt="Set Icon" width={18} height={21} />
                <div className="flex gap-2 items-baseline text-xs md:text-base">
                  <div className="flex items-center">
                    <span className="countdown font-mono text-3xl md:text-5xl">
                      <span style={{ "--value": countdown.hours } as React.CSSProperties} aria-live="polite" aria-label="hours">
                        {countdown.hours}
                      </span>
                    </span>
                    <span className="text-lg text-black ml-1">h</span>
                  </div>
                  <div className="flex items-center">
                    <span className="countdown font-mono text-3xl md:text-5xl">
                      <span style={{ "--value": countdown.minutes } as React.CSSProperties} aria-live="polite" aria-label="minutes">
                        {countdown.minutes}
                      </span>
                    </span>
                    <span className="text-lg text-black ml-1">m</span>
                  </div>
                  <div className="flex items-center">
                    <span className="countdown font-mono text-3xl md:text-5xl">
                      <span style={{ "--value": countdown.seconds } as React.CSSProperties} aria-live="polite" aria-label="seconds">
                        {countdown.seconds}
                      </span>
                    </span>
                    <span className="text-lg text-black ml-1">s</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {isPromotionActive ? (
          <div className="w-fit mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-6 gap-x-4 mt-2 mb-2">
            {state.promotions.map((promotion, index) => (
              <Link key={index} href={`/product/${promotion.slug}`}>
                <div className="w-36 md:w-72 bg-white dark:bg-gray-800 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <Image src={promotion.imageSrc} alt={promotion.name} width={144} height={160} className="h-40 md:h-80 w-36 md:w-72 object-cover rounded-t-xl" />
                  <div className="px-2 md:px-4 py-3 w-36 md:w-72">
                    <span className="text-gray-400 dark:text-gray-300 mr-3 uppercase text-xs">{promotion.brand}</span>
                    <p className="text-sm md:text-lg font-bold text-black dark:text-white truncate block capitalize">{promotion.name}</p>
                    <div className="flex items-center">
                      <p className="text-sm md:text-lg font-semibold text-black dark:text-white cursor-auto my-3">${promotion.price.toFixed(2)}</p>
                      {/* DIV PROGRESS CONFIG */}
                      <div className="flex flex-col items-center w-full ml-2">
                        <div className="bg-white rounded-lg w-full block">
                          <div className="w-full h-4 bg-gray-400 rounded-full">
                            <div className="h-full text-center text-xs text-white bg-red-300 rounded-full" style={{ width: `${(promotion.sold / promotion.totalSale) * 100}%` }}>
                              {`${promotion.sold} sold`}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto">
                        {/* TODO ảnh sale, deal */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 text-black dark:text-white">
                          <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <details className="bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg" open={isCouponOpen} onToggle={handleToggleCoupon}>
            <summary className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-3 px-4 py-2 cursor-pointer">
              <Image src="/coupon-arrow.svg" alt="Coupon Icon" width={20} height={20} className="w-5 h-5" />
              {VIEW_DETAILS_TEXT}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className={`stroke-current shrink-0 w-6 h-6 ml-auto transition-transform duration-300 ${isCouponOpen ? 'rotate-45' : 'rotate-0'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </summary>
            <div className="text-sm p-4 text-gray-700 dark:text-gray-300">
              {isUpcomingPromotion ? (
                <div className="flex items-center gap-2">
                  <span>{PROMOTION_UPCOMING_TEXT}</span>
                  <div className="flex items-center">
                    <span className="countdown font-mono text-3xl md:text-5xl">
                      <span style={{ "--value": countdown.hours } as React.CSSProperties} aria-live="polite" aria-label="hours">
                        {countdown.hours}
                      </span>
                    </span>
                    <span className="text-lg text-black ml-1">h</span>
                  </div>
                  <div className="flex items-center">
                    <span className="countdown font-mono text-3xl md:text-5xl">
                      <span style={{ "--value": countdown.minutes } as React.CSSProperties} aria-live="polite" aria-label="minutes">
                        {countdown.minutes}
                      </span>
                    </span>
                    <span className="text-lg text-black ml-1">m</span>
                  </div>
                  <div className="flex items-center">
                    <span className="countdown font-mono text-3xl md:text-5xl">
                      <span style={{ "--value": countdown.seconds } as React.CSSProperties} aria-live="polite" aria-label="seconds">
                        {countdown.seconds}
                      </span>
                    </span>
                    <span className="text-lg text-black ml-1">s</span>
                  </div>
                </div>
              ) : (
                <p>{PROMOTION_ENDED_TEXT}.</p>
              )}
            </div>
          </details>
        )}
      </div>
    </section>
  );
};

export default PromotionsSection;