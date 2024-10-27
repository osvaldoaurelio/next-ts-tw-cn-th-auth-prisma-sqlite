import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

const credentials = Credentials({
  credentials: {},
  authorize: () => ({}),
});

const nextAuthConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [credentials],
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(nextAuthConfig);
