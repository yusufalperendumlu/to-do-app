// app/api/todos/[id]/route.js

import { prisma } from "@/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { id, title } = await req.json();  // Body'den id ve title alıyoruz

    if (!id || !title) {
      return NextResponse.json(
        { error: "id ve title gerekli" },  // Eğer id veya title yoksa hata ver
        { status: 400 }
      );
    }

    const todo = await prisma.todo.update({
      where: { id: String(id) },  // id'yi string'e çevirerek kullanıyoruz
      data: { title },  // title'ı güncelliyoruz
    });

    return NextResponse.json(todo);  // Güncellenen todo'yu geri gönderiyoruz
  } catch (error) {
    console.error(error);  // Hata mesajını konsola yazdır
    return NextResponse.json(
      { error: "Todo güncellenirken hata oluştu" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();  // Body'den id'yi alıyoruz

    if (!id) {
      return NextResponse.json(
        { error: "id gerekli" },
        { status: 400 }
      );
    }

    const todoExists = await prisma.todo.findUnique({
      where: { id: String(id) },  // id'yi doğru şekilde string'e çevirerek sorguluyoruz
    });

    if (!todoExists) {
      return NextResponse.json(
        { error: "Bu id'ye sahip bir todo bulunamadı" },
        { status: 404 }
      );
    }

    const todo = await prisma.todo.delete({
      where: { id: String(id) },  // Silme işlemi
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { error: "Todo silinirken hata oluştu" },
      { status: 500 }
    );
  }
}
