// CartContext.tsx
"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '../../../types/index';

// interface Product {
//   id: string;
//   slug: string;
//   name: string;
//   price: number;
//   shortDescription: string;
//   detailedDescription: string;
//   quantity: number;
//   imageSrc: string; 
// }

interface CartState {
  items: Product[];
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_PRODUCT'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: Product[] };

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return state; // Không làm gì nếu sản phẩm đã tồn tại
      }
      const updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      const updatedTotalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case 'UPDATE_PRODUCT_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      const updatedTotalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case 'REMOVE_PRODUCT': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const updatedTotalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case 'CLEAR_CART':
      return initialState;

    case 'LOAD_CART':
      return {
        items: action.payload,
        totalAmount: action.payload.reduce((total, item) => total + item.price * item.quantity, 0),
      };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // Load cart from sessionStorage on mount
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
    }
  }, []);

  useEffect(() => {
    // Save cart to sessionStorage whenever it changes
    sessionStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};