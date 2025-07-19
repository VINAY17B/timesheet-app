// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
// Import your mock users
import { mockUsers } from "../../../lib/timesheets"; 


declare module "next-auth" {
  
  interface User {
    id: string; // Your custom user ID from mockUsers
    
  }

  // Extend the default Session type to use your extended User type
  interface Session {
    user: User; // Ensure Session.user is our extended User type
  }

  // Extend the default JWT type to include custom properties
  interface JWT {
    id?: string; // Add your custom ID property to the token
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

        // Find the user in your mock data
        const user = mockUsers.find(u => u.email === email);

        // If user exists and password matches (for mock data)
        if (user && user.password === password) {
          
          return { id: user.id, name: user.name, email: user.email };
        }
        // If no user found or password doesn't match
        return null;
      }
    })
  ],
  callbacks: {
    // Correct types for jwt callback and handling unused parameters
    async jwt({ token, user, account: _account, profile: _profile, isNewUser: _isNewUser }) {
      if (user) {
        token.id = user.id; // Assign custom user ID to token
      }
      return token;
    },
    
    async session({ session, token, user: _user }) { // 'user' from NextAuth context is often unused here
      
      if (session.user && token.id) {
        session.user.id = token.id; // Assign ID from token to session.user
      }
      return session;
    }
  },
  pages: {
    signIn: "/", 
    
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  secret: process.env.NEXTAUTH_SECRET, // Environment variable for session encryption/signing
};

export default NextAuth(authOptions);