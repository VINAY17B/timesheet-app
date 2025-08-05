// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
// Import your mock users
import { mockUsers } from "../../../lib/timesheets"; 


// This block extends NextAuth's default types to include our custom 'id'.
declare module "next-auth" {
  // Extend the default User type
  interface User {
    id: string; 
  }

  // Extend the default Session type to use our extended User type
  interface Session {
    user: User;
  }

  // Extend the default JWT type to include our custom 'id'
  interface JWT {
    id?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        const user = mockUsers.find(u => u.email === email);

        if (user && user.password === password) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account: _account, profile: _profile, isNewUser: _isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    
    async session({ session, token, user: _user }) {
      if (session.user && token.id) {
        // FINAL FIX: Explicitly cast token.id to a string to resolve Vercel's compiler error
        session.user.id = token.id as string; 
      }
      return session;
    }
  },
  pages: {
    signIn: "/", 
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);