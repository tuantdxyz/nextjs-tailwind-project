import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',  // Tùy chỉnh trang đăng nhập
    error: '/auth/error'     // Tùy chỉnh trang lỗi
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 ngày
    updateAge: 24 * 60 * 60,   // Làm mới session mỗi 24 giờ
  },
};

console.log('Google Client ID:', process.env.GOOGLE_CLIENT_ID);

const handler = NextAuth(options);

export { handler as GET, handler as POST };