// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
// Import mock users
import { mockUsers } from "../../../lib/timesheets"; 


declare module "next-auth" {
  interface Session {
    user: {
      id: string; 
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & Session["user"]; 
  }

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
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id; // No underline here
      }
      return token;
    },
    // Correct types for session callback
    async session({ session, token, user }) {
      if (session.user && token.id) { 
        session.user.id = token.id; 
      }
      return session;
    }
  },
};

export default NextAuth(authOptions);