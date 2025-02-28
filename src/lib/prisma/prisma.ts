import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export { prisma };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // API'ye gelen JSON veriyi al
    const newTodo = await prisma.todo.create({
      data: {
        title: body.title || "New Todo",
        completed: body.completed ?? false,
      },
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Connection error!" }, { status: 500 });
  }
}


export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Connection error!" }, { status: 500 });
  }
}
