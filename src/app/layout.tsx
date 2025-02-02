// src/app/layout.tsx

import { getServerSession } from "next-auth"; // Nhập phương thức lấy session
import { Metadata } from "next"; // Nhập type Metadata
import { Inter } from "next/font/google"; // Nhập font Google
import "./globals.css"; // Nhập file CSS toàn cục
import { CartProvider } from '../lib/features/cart/cartContext'; // Nhập CartProvider
import { ToastContainer } from 'react-toastify'; // Nhập ToastContainer
import SessionProviderClientComponent from "./sessionProviderClientComponent";
import Navbar from '../components/navbar';

const inter = Inter({ subsets: ['latin'] });

// Metadata để sử dụng trong head
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(); // Lấy session từ server

  return (
    <html lang="en">
      <body>
        <SessionProviderClientComponent session={session}> {/* Bọc children trong SessionProviderClientComponent */}
          <CartProvider> {/* Bọc CartProvider quanh children */}
          <Navbar />
            {children}
          </CartProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />
        </SessionProviderClientComponent>
      </body>
    </html>
  );
}