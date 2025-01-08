// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('next-auth.session-token'); // Lấy token từ cookie
    const isAuthPage = request.nextUrl.pathname.startsWith('/auth'); // Kiểm tra nếu là trang xác thực

    console.log("Token:", token); // Ghi log token để kiểm tra

    // Nếu không có token và không phải trang xác thực, chuyển hướng đến trang đăng nhập
    if (!token && !isAuthPage) {
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    // Nếu có token và đang cố gắng truy cập trang xác thực, chuyển hướng về trang chính
    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next(); // Tiếp tục xử lý yêu cầu
}

// Cấu hình các route mà middleware sẽ áp dụng
export const config = {
    matcher: ['/dashboard/:path*', '/product/:path*', '/auth/:path*'],
};