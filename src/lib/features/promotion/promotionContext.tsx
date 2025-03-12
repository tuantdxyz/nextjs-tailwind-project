"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

interface Promotion {
  id: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  detailedDescription: string;
  quantity: number;
  brand: string;
  originalPrice: string;
  imageSrc: string;
  sold: number;
  totalSale: number;
}

interface PromotionState {
  promotions: Promotion[];
  startTime: Date | null;
  endDate: Date | null;
}

type PromotionAction =
  | { type: 'SET_PROMOTIONS'; payload: Promotion[] }
  | { type: 'SET_START_TIME'; payload: Date }
  | { type: 'SET_END_DATE'; payload: Date };

const initialState: PromotionState = {
  promotions: [],
  startTime: null,
  endDate: null,
};

const PromotionContext = createContext<{ state: PromotionState; dispatch: React.Dispatch<PromotionAction> } | undefined>(undefined);

const promotionReducer = (state: PromotionState, action: PromotionAction): PromotionState => {
  switch (action.type) {
    case 'SET_PROMOTIONS':
      return { ...state, promotions: action.payload };
    case 'SET_START_TIME':
      return { ...state, startTime: action.payload };
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
};

export const PromotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(promotionReducer, initialState);

  useEffect(() => {
    // Simulated server response
    const promotions: Promotion[] = [
      {
        id: "1",
        slug: "eco-friendly-bamboo-toothbrush",
        name: "Eco-friendly Bamboo Toothbrush",
        price: 5,
        shortDescription: "Eco-friendly Bamboo Toothbrush",
        detailedDescription: "Eco-friendly Bamboo Toothbrush with soft bristles and ergonomic handle.",
        quantity: 0,
        brand: "EcoHome",
        originalPrice: "10",
        imageSrc: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        sold: 40,
        totalSale: 100,
      },
      {
        id: "2",
        slug: "wireless-bluetooth-headphones",
        name: "Wireless Bluetooth Headphones",
        price: 79,
        shortDescription: "Wireless Bluetooth Headphones",
        detailedDescription: "High-quality wireless Bluetooth headphones with noise cancellation and long battery life.",
        quantity: 0,
        brand: "Techie",
        originalPrice: "129",
        imageSrc: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        sold: 60,
        totalSale: 1200,
      },
      {
        id: "6",
        slug: "wi-fi-smart-plug",
        name: "Wi-Fi Smart Plug",
        price: 15,
        shortDescription: "Wi-Fi Smart Plug",
        detailedDescription: "Wi-Fi smart plug for remote control of home appliances and energy monitoring.",
        quantity: 0,
        brand: "SmartHome",
        originalPrice: "25",
        imageSrc: "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        sold: 80,
        totalSale: 500,
      },
    ];

    // Set promotion start and end times - change these values as needed
    const promotionStartTime = new Date("2025-03-12T14:40:00");
    const promotionEndTime = new Date("2025-03-12T17:35:00");

    dispatch({ type: 'SET_PROMOTIONS', payload: promotions });
    dispatch({ type: 'SET_START_TIME', payload: promotionStartTime });
    dispatch({ type: 'SET_END_DATE', payload: promotionEndTime });
  }, []);

  return (
    <PromotionContext.Provider value={{ state, dispatch }}>
      {children}
    </PromotionContext.Provider>
  );
};

export const usePromotion = () => {
  const context = useContext(PromotionContext);
  if (!context) {
    throw new Error('usePromotion must be used within a PromotionProvider');
  }
  return context;
};