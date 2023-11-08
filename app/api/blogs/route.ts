import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/app/services/getCurrentUser";
import prisma from "../../lib/prismadb";

export const POST = async (req: NextRequest) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("Usuário não está logado");
    }

    const body = await req.json();

    const newBlogPost = {
      ...body,
      userId: currentUser.id,
    };

    const createBlogPost = await prisma.listing.create({ data: newBlogPost });

    return NextResponse.json(
      { message: "Post criado com sucesso", data: createBlogPost },
      { status: 201 },
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 401 });
    }
  }
};
