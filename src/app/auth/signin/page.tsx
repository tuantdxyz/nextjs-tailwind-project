"use client";

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SignInPage() {
  const router = useRouter();
  const { data: session, status } = useSession(); // Lấy session và trạng thái
  const [isLoading, setIsLoading] = useState(true);

  const handleGoogleSignIn = async () => {
    const result = await signIn('google', { redirect: false }); // Đăng nhập bằng Google
    if (result?.error) {
      console.error("Error signing in with Google:", result.error); // Xử lý lỗi nếu có
    }
  };

  const handleFacebookSignIn = async () => {
    const result = await signIn('facebook', { redirect: false }); // Đăng nhập bằng Facebook
    if (result?.error) {
      console.error("Error signing in with Facebook:", result.error); // Xử lý lỗi nếu có
    }
  };

  useEffect(() => {
    if (status === "loading") return; // Chờ cho session được tải

    if (session) {
      console.log("Session", session);
      router.push('/'); // Chuyển hướng đến trang chính nếu đã đăng nhập
    } else {
      setIsLoading(false); // Nếu không có session, ngừng trạng thái loading
    }
  }, [session, status, router]);

  return (
    <div className="h-screen flex items-center justify-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap items-center justify-center lg:justify-between w-full max-w-4xl">
          <div className="hidden lg:block lg:w-6/12 xl:w-6/12">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
              width={500}
              height={500}
            />
          </div>

          <div className="w-full lg:w-5/12 xl:w-5/12">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 me-4 text-lg">Sign in with</p>

                {/* Facebook Button */}
                <button
                  type="button"
                  onClick={handleFacebookSignIn}
                  className="mx-1 inline-flex items-center justify-center h-9 w-9 rounded-full text-white transition-transform duration-200 ease-in-out transform hover:scale-125"
                  aria-label="Sign in with Facebook"
                >
                  <Image src="/facebook_login.svg" alt="Facebook" width={20} height={20} />
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="mx-1 inline-flex items-center justify-center h-9 w-9 rounded-full text-white transition-transform duration-200 ease-in-out transform hover:scale-125"
                  aria-label="Sign in with Google"
                >
                  <Image src="/google_login.svg" alt="Google" width={20} height={20} />
                </button>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold">Ghi Chú</p>
              </div>

              <div className="mb-6 flex items-center justify-between">
                <Link href="#!">Forgot password?</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}