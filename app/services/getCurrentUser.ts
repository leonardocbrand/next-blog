import { getServerSession } from "next-auth/next";

import prisma from "../lib/prismadb";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export async function getSession() {
  return await getServerSession(nextAuthOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      throw new Error("Session not found");
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      throw new Error("Session user not found");
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    console.error(error);
  }
}
