// lib/auth.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next"; // <-- Import GetServerSidePropsContext

// Define an interface for the session object if you've customized it
// For example, if you added 'id' to session.user in [...nextauth].ts
interface CustomSession {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
}

// Function to require authentication for server-side rendered pages
export async function requireAuth(context: GetServerSidePropsContext) { // <-- Use GetServerSidePropsContext for type

  const session = await getServerSession(context.req, context.res, authOptions) as CustomSession;

  if (!session || !session.user || !session.user.id) { // Also check for session.user and session.user.id if critical
    return {
      redirect: {
        destination: "/", // Redirect to login page
        permanent: false,
      },
    };
  }

  // Return the session so getServerSideProps can pass it to the page
  return { props: { session } }; // Return as props
}