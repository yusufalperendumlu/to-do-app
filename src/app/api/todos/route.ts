import { prisma } from "@/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { error: "Todolar getirilirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();
    const todo = await prisma.todo.create({
      data: {
        title,
        completed: false,
      },
    });
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Todo eklenirken hata oluştu" },
      { status: 500 }
    );
  }
} 



export async function PUT(req: NextRequest) {
    try {
      const { id, title } = await req.json(); // JSON body'den id ve title alıyoruz
  
      if (!id || !title) {
        return NextResponse.json(
          { error: "id ve title gerekli" },
          { status: 400 }
        );
      }
  
      const todo = await prisma.todo.update({
        where: { id: String(id) },
        data: { title },
      });
  
      return NextResponse.json(todo);
    } catch (error) {
      return NextResponse.json(
        { error: "Todo güncellenirken hata oluştu" },
        { status: 500 }
      );
    }
  }
  
  export async function DELETE(req: NextRequest) {
    try {
      const { id } = await req.json(); // JSON body'den id alıyoruz
  
      if (!id) {
        return NextResponse.json(
          { error: "id gerekli" },
          { status: 400 }
        );
      }
  
      const todo = await prisma.todo.delete({
        where: { id: String(id) },
      });
  
      return NextResponse.json(todo);
    } catch (error) {
      return NextResponse.json(
        { error: "Todo silinirken hata oluştu" },
        { status: 500 }
      );
    }
  }
  