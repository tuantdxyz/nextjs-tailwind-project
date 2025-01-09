"use client"; // Đánh dấu file này là Client Component

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const { data: session, status } = useSession(); // Lấy session và trạng thái

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
    }
  }, [session, status, router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center lg:justify-between w-full max-w-4xl">
        <div className="hidden lg:block lg:w-6/12 xl:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image"
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
                <img src="/facebook_login.svg" alt="Facebook" width={20} height={20} />
              </button>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="mx-1 inline-flex items-center justify-center h-9 w-9 rounded-full text-white transition-transform duration-200 ease-in-out transform hover:scale-125"
                aria-label="Sign in with Google"
              >
                <img src="/google_login.svg" alt="Google" width={20} height={20} />
              </button>
            </div>

            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold">Ghi Chú</p>
            </div>

            {/* Email input (optional) */}
            {/* <div className="relative mb-6">
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
              <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary"
              >
                Email address
              </label>
            </div> */}

            {/* Password input (optional) */}
            {/* <div className="relative mb-6">
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                id="exampleFormControlInput22"
                placeholder="Password"
              />
              <label
                htmlFor="exampleFormControlInput22"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary"
              >
                Password
              </label>
            </div> */}

            <div className="mb-6 flex items-center justify-between">
              <a href="#!">Forgot password?</a>
            </div>

            {/* Login button (optional) */}
            {/* <div className="text-center lg:text-left">
              <button
                type="button"
                className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-accent-300"
              >
                Login
              </button>

              <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                Don't have an account?
                <Link href="#!" className="text-danger transition duration-150 ease-in-out hover:text-danger-600">
                  Register
                </Link>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}