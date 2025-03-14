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
  notes: string;
  promotionStartTime: Date | null;
  promotionEndTime: Date | null;
  soldDuringPromotion: number;
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
        id: '1',
        slug: 'airpod-2',
        name: 'Airpod 2',
        price: 150,
        shortDescription: 'Tai nghe không dây Airpod 2',
        detailedDescription: 'Tai nghe không dây Airpod 2 với âm thanh chất lượng cao và thời lượng pin lâu.',
        quantity: 100,
        brand: 'Apple',
        originalPrice: '200',
        imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        sold: 50,
        notes: 'Sản phẩm chất lượng cao',
        promotionStartTime: new Date("2025-03-14T17:35:00"),
        promotionEndTime: new Date("2025-03-21T17:35:00"),
        soldDuringPromotion: 30,
        totalSale: 100
      },
      {
        id: '2',
        slug: 'airpod-3',
        name: 'Airpod 3',
        price: 180,
        shortDescription: 'Tai nghe không dây Airpod 3',
        detailedDescription: 'Tai nghe không dây Airpod 3 với âm thanh không gian và thời lượng pin lâu.',
        quantity: 100,
        brand: 'Apple',
        originalPrice: '230',
        imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        sold: 60,
        notes: 'Sản phẩm mới nhất của Apple',
        promotionStartTime: new Date("2025-03-14T17:35:00"),
        promotionEndTime: new Date("2025-03-21T17:35:00"),
        soldDuringPromotion: 40,
        totalSale: 1000
      },
      {
        id: '3',
        slug: 'airpod-pro',
        name: 'Airpod Pro',
        price: 250,
        shortDescription: 'Tai nghe không dây Airpod Pro',
        detailedDescription: 'Tai nghe không dây Airpod Pro với chống ồn chủ động và âm thanh vượt trội.',
        quantity: 100,
        brand: 'Apple',
        originalPrice: '300',
        imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        sold: 70,
        notes: 'Sản phẩm cao cấp với chất lượng âm thanh tuyệt vời',
        promotionStartTime: new Date("2025-03-14T17:35:00"),
        promotionEndTime: new Date("2025-03-21T17:35:00"),
        soldDuringPromotion: 50,
        totalSale: 50
      },
    ];

    // Set promotion start and end times - change these values as needed
    const promotionStartTime = new Date("2025-03-13T16:40:00");
    const promotionEndTime = new Date("2025-03-13T17:35:00");

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