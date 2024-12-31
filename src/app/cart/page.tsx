"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/features/cart/cartContext';
import { toast } from 'react-toastify';

interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  detailedDescription: string;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuantityChange, onRemove }) => {
  // console.log("product", product); // Hiển thị thông tin sản phẩm trong console
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
        <p className="mt-1 text-xs text-gray-700">{product.shortDescription}</p>
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
const CartPage: React.FC = () => {
  const { state: cart, dispatch } = useCart();
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isDiscountCodeVisible, setDiscountCodeVisible] = useState(false);
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const shipping = 0;

  const hasEnterprisePackage = cart.items.some(item => item.name === 'Enterprise Plan');

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

  const discountCodes = {
    SAVE10: { discount: 10, used: 0, maxcount: 10 },
    SAVE20: { discount: 15, used: 0, maxcount: 10 },
    SAVE30: { discount: 20, used: 0, maxcount: 10 },
  };

  const handleApplyDiscount = () => {
    const code = discountCodes[discountCode.toUpperCase() as keyof typeof discountCodes];
    if (code) {
      if (code.used < code.maxcount) {
        setDiscountAmount(code.discount);
        code.used += 1; // Increment usage count
        toast.success(`Applied discount code: ${discountCode}`);
      } else {
        setDiscountAmount(0); // Reset discount amount
        toast.error(`Discount code ${discountCode} has reached its usage limit!`);
      }
    } else {
      setDiscountAmount(0); // Reset discount amount
      toast.error('Invalid discount code');
    }
  };

  const total = subtotal + shipping - discountAmount;

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

        {/* Shipping Information */}
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md mt-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Shipping Information</h2>
          <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
            {['Name', 'Email', 'Address', 'City', 'State', 'ZIP'].map((label, index) => (
              <label key={index} className="flex border-b border-gray-200 h-12 py-3 items-center">
                <span className="text-right px-2">{label}</span>
                <input name={label.toLowerCase()} className="focus:outline-none px-3" placeholder={`Enter ${label}`} required />
              </label>
            ))}
            <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
              <span className="text-right px-2">Country</span>
              <select name="country" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none" defaultValue="AU">
                <option value="AU">Australia</option>
                <option value="BE">Belgium</option>
                <option value="BR">Brazil</option>
              </select>
            </label>
          </fieldset>

          {/* Payment Method */}
          <h2 className="tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Method</h2>
          <div className="mb-3 flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <label htmlFor="type1" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="paymentType"
                  id="type1"
                  defaultChecked={true}
                />
                <img src="qr-code.png" className="h-8 ml-3" alt="QR Code" />
              </label>
              <span className="text-center mt-1">QR Code</span>
            </div>
            <div className="flex flex-col items-center relative group">
              <label htmlFor="type2" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="paymentType"
                  id="type2"
                  disabled={hasEnterprisePackage} // Vô hiệu hóa nếu có gói Enterprise
                />
                <img src="cash-on-delivery.png" className="h-8 ml-3" alt="COD" />
                {hasEnterprisePackage && (<div className={`absolute top-full ml-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bg-white bg-opacity-75 text-red-500 text-xs rounded p-1 whitespace-nowrap`}>
                  Không hỗ trợ COD
                </div>)}
              </label>
              <span className="text-center mt-1">COD</span>
            </div>
          </div>

          <Link href="/" className="flex items-center font-semibold text-blue-600 text-sm mt-4">
            <img src="/back.svg" alt="Back" width={20} height={20} className="mr-2" />
            <span className="ml-2">Continue Shopping</span>
          </Link>
        </div>

        {cart.items.length > 0 && (
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md mt-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Summary</h2>
            <label className="font-sans flex gap-x-1 my-2 items-center">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800"
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
                  className="h-10 w-2/3 px-4 border rounded-md focus:outline-none"
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleApplyDiscount}
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
            {discountAmount > 0 && (
              <div className="flex justify-between mt-2">
                <span>Discount</span>
                <span className="text-red-500">-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 mt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="flex-shrink-0 w-24 text-right">${total.toFixed(2)}</span>
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