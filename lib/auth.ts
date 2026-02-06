import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

// User types
export type UserRole = "admin" | "investor" | "partner" | "customer";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  company?: string;
  avatar?: string;
}

// Validation schemas
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Demo users for development (replace with database in production)
const demoUsers: (User & { password: string })[] = [
  {
    id: "1",
    email: "admin@datacentr.ke",
    password: "admin123",
    name: "Admin User",
    role: "admin",
    company: "Datacentr Kenya",
  },
  {
    id: "2",
    email: "investor@example.com",
    password: "investor123",
    name: "Zhang Wei",
    role: "investor",
    company: "Beijing Capital Partners",
  },
  {
    id: "3",
    email: "partner@example.com",
    password: "partner123",
    name: "Partner User",
    role: "partner",
    company: "Tech Solutions Ltd",
  },
  {
    id: "4",
    email: "customer@example.com",
    password: "customer123",
    name: "John Doe",
    role: "customer",
    company: "AI Startup Inc",
  },
];

// Auth configuration
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        // Find user in demo users (replace with database lookup)
        const user = demoUsers.find(
          (u) => u.email === email && u.password === password
        );

        if (!user) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          company: user.company,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as User).role;
        token.company = (user as User).company;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
        session.user.company = token.company as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/portal/login",
    error: "/portal/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  trustHost: true,
});

// Type augmentation for next-auth
declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface JWT {
    id: string;
    role: UserRole;
    company?: string;
  }
}
