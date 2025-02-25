import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Định nghĩa kiểu cho token.user
interface UserToken {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

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
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = token.user as UserToken;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email,
          image: user.image
        };
      }
      return token;
    },
  },
};

// In giá trị clientId ra console
console.log('Google Client ID:', process.env.GOOGLE_CLIENT_ID);

const handler = NextAuth(options);

export { handler as GET, handler as POST };