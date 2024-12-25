// src/app/cart/page.tsx
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../lib/features/cart/productSlice';

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

const CartPage = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const shipping = 0;

  useEffect(() => {
    const items = localStorage.getItem('cartItems');
    if (items) {
      const parsedItems = JSON.parse(items);
      setCartItems(parsedItems);
      calculateTotals(parsedItems);
    }
  }, []);

  const calculateTotals = (items: Product[]) => {
    const calculatedSubtotal = items.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal + shipping);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const updatedItems = cartItems
      .map(item => item.id === id ? { ...item, quantity } : item)
      .filter(item => item.quantity > 0);

    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    calculateTotals(updatedItems);
  };

  const removeItem = (id: string) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    dispatch(removeProduct(id));
    calculateTotals(updatedItems);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Products in Cart</h1>
        </div>
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
          {/* Cột Order */}
          {/* Cột Order */}
          <div className="flex flex-col bg-white dark:bg-gray-700 rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Order</h2>
            <div className="h-px w-full border-b border-gray-200 mt-1"></div>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600 dark:text-gray-300">Your cart is empty.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Item</th>
                      <th className="text-left">Quantity</th>
                      <th className="text-left">Price</th>
                      <th className="text-left">Total</th>
                      <th className="text-left">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((product) => (
                      <tr key={product.id} className="border-b">
                        <td className="py-2 flex items-center">
                          {/* Thêm ảnh nhỏ ở đây */}
                          <img
                            alt="Thumbnail"
                            draggable="false"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="h-16 w-16 object-cover rounded-md mr-4 border border-gray-300" // Thêm border ở đây
                            src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" // Cập nhật URL ảnh theo slug hoặc ID sản phẩm
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                          </div>
                        </td>
                        <td className="py-2">
                          <div className="join flex items-center">
                            <button
                              onClick={() => updateQuantity(product.id, Math.min(product.quantity + 1, 10))}
                              className="btn btn-sm join-item flex items-center justify-center"
                            >
                              <img src="quanlity_add.svg" alt="add" width={20} height={20} />
                            </button>
                            <input
                              className="input input-sm input-bordered join-item w-12 text-center"
                              value={product.quantity}
                              onChange={(e) => {
                                const value = Math.max(1, Math.min(Number(e.target.value), 10));
                                updateQuantity(product.id, value);
                              }}
                            />
                            <button
                              onClick={() => updateQuantity(product.id, Math.max(product.quantity - 1, 1))}
                              className="btn btn-sm join-item flex items-center justify-center"
                            >
                              <img src="quanlity_sub.svg" alt="subtract" width={20} height={20} />
                            </button>
                          </div>
                        </td>
                        <td className="py-2">${product.price.toFixed(2)}</td>
                        <td className="py-2">${(product.price * product.quantity).toFixed(2)}</td>
                        <td className="py-2">
                          <button onClick={() => removeItem(product.id)}>
                            <img src="remove.svg" alt="Remove" width={20} height={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Cột Summary và Mã Giảm Giá */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Summary</h2>
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
            {/* Bọc cột Total trong một div với background màu xám nhẹ */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 mt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Mã Giảm Giá */}


            <Link href="/payment">
              <div className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 mt-8 hover:bg-gray-700 cursor-pointer">
                Proceed to Checkout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;