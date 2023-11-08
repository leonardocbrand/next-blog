import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '../../lib/prismadb';
import { Prisma } from '@prisma/client';

export const POST = async (req: NextRequest) => {
  const {email, name, password } = await req.json();
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const addUser = await prisma.user.create({ data: { name, email, hashedPassword } });

    return NextResponse.json({ message: 'Usuário cadastrado com sucesso', data: { name: addUser.name } }, { status: 201 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return NextResponse.json({ message: 'Já existe um usuário com este email' }, { status: 400 })
      }
    }
    throw e;
  }
};
