"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/features/cart/cartContext';
// import { toast } from 'react-toastify';
import StepOrderProcess from '../../components/StepOrderProcess';
import Image from 'next/image';
import CartItem from './CartItem';
// import DiscountCode from './DiscountCode';
import PaymentMethod from './PaymentMethod';
import ShippingInformation from './ShippingInformation';
import Summary from './Summary';
// import { Product } from '../../types/index';

const CartPage: React.FC = () => {
  const { state: cart, dispatch } = useCart();
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const shipping = 0;

  const hasEnterprisePackage = cart.items.some(item => item.name === 'Enterprise Plan');

  const subtotal = cart.items.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_PRODUCT_QUANTITY', payload: { id, quantity } });
  };

  const total = subtotal + shipping - discountAmount;

  return (
    <div className="py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">Products in Cart</h1>

        <StepOrderProcess currentStep={0} paymentStatus='Unpaid' />

        <div className="flex flex-col gap-6">
          {cart.items.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">Your cart is empty.</p>
          ) : (
            cart.items.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onQuantityChange={handleQuantityChange}
                onRemove={removeItem}
              />
            ))
          )}
        </div>
        <Link href="/" className="flex items-center text-blue-600 dark:text-blue-400 text-sm mt-4">
          <Image src="/back.svg" alt="Back" width={20} height={20} className="mr-2" />
          <span className="ml-2">Continue Shopping</span>
        </Link>

        {cart.items.length > 0 && (
          <>
            <ShippingInformation />
            <h2 className="text-2xl">Payment Method</h2>
            <PaymentMethod hasEnterprisePackage={hasEnterprisePackage} />
            <Summary
              subtotal={subtotal}
              shipping={shipping}
              discountAmount={discountAmount}
              total={total}
              setDiscountAmount={setDiscountAmount}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;