"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/features/cart/cartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuantityChange, onRemove }) => {
  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-md flex flex-col sm:flex-row sm:justify-between">
      <img
        src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
        alt="Product"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="flex flex-col sm:ml-4 sm:w-full">
        <div className="mt-5">
          <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
          <p className="mt-1 text-xs text-gray-700">{product.description}</p>
          <p className="mt-1 text-lg font-bold">Price: ${product.price.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border-gray-100">
            <button
              onClick={() => onQuantityChange(product.id, Math.max(product.quantity - 1, 1))}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 hover:bg-blue-500 hover:text-blue-50"
            >
              <img src="quanlity_sub.svg" alt="Subtract" width={20} height={20} />
            </button>
            <input
              className="h-8 w-12 border bg-white text-center text-xs outline-none"
              type="number"
              value={product.quantity}
              readOnly
            />
            <button
              onClick={() => onQuantityChange(product.id, Math.min(product.quantity + 1, 10))}
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 hover:bg-blue-500 hover:text-blue-50"
            >
              <img src="quanlity_add.svg" alt="Add" width={20} height={20} />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">${(product.price * product.quantity).toFixed(2)}</p>
            <svg
              onClick={() => onRemove(product.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { state: cart, dispatch } = useCart();
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isDiscountCodeVisible, setDiscountCodeVisible] = useState(false);
  const shipping = 0;

  useEffect(() => {
    calculateTotals(cart.items);
  }, [cart.items]);

  const calculateTotals = (items: Product[]) => {
    const calculatedSubtotal = items.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setSubtotal(calculatedSubtotal);
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id, quantity } });
  };

  const toggleDiscountCode = () => {
    setDiscountCodeVisible(prev => !prev);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">Products in Cart</h1>
        <div className="flex flex-col gap-6">
          {cart.items.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">Your cart is empty.</p>
          ) : (
            cart.items.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuantityChange={handleQuantityChange}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        {/* thông tin ship */}
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Choose More Ship</h2>
          <Link href="/" className="flex items-center font-semibold text-blue-600 text-sm mt-4">
            <img src="/back.svg" alt="pre" width={20} height={20} className="mr-2" />
            <span className="ml-2">Continue Shopping</span>
          </Link>
        </div>

        {cart.items.length > 0 && (
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md mt-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Summary</h2>
            <label className="font-sans txt-compact-medium font-normal flex gap-x-1 my-2 items-center">
              <button
                type="button"
                className="txt-medium text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                onClick={toggleDiscountCode}
              >
                Add gift card or discount code
              </button>
              <img src="/quanlity_add.svg" alt="Info Icon" width={20} height={20} />
            </label>
            {isDiscountCodeVisible && (
              <div className="w-full bg-white flex items-center p-4 rounded-lg shadow-md mt-1">
                <input
                  placeholder="Discount code"
                  className="h-10 w-2/3 px-4 border rounded-md appearance-none focus:outline-none focus:ring-0"
                  type="text"
                  name="discountCode"
                />
                <button
                  type="button"
                  onClick={() => { /* Logic to handle discount code here */ }}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md ml-2 h-10"
                >
                  Apply
                </button>
              </div>
            )}

            <div className="h-px w-full border-b border-gray-200 mt-1"></div>
            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Taxes</span>
              <span>$0.00</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 mt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="flex-shrink-0 w-24 text-right">${(subtotal + shipping).toFixed(2)}</span>
              </div>
            </div>
            <Link href="/payment">
              <div className="bg-gray-800 text-white w-full py-4 mt-8 text-center rounded-md hover:bg-gray-700 cursor-pointer">
                Proceed to Checkout
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;