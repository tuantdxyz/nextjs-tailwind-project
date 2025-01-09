// /app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',  // Tùy chỉnh trang đăng nhập
    error: '/auth/error'      // Tùy chỉnh trang lỗi
  },
  // session: {
  //   strategy: 'jwt',          // Sử dụng JWT cho session
  //   maxAge: 10,               // Thời gian sống của session (1 phút)
  //   updateAge: 10,            // Cập nhật session mỗi 30 giây
  // },
});

// In giá trị clientId ra console
console.log('Google Client ID:', process.env.GOOGLE_CLIENT_ID);

export { handler as GET, handler as POST };