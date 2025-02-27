"use client";

import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";

interface AddTodoProps {
  activeTodo: { id: string; title: string } | null;
  addTodo: () => void;
  updateTodo: (id: string, data: { title: string }) => void;
  cancelUpdate: () => void;
}

export default function AddTodo({
  activeTodo,
  addTodo,
  updateTodo,
  cancelUpdate,
}: AddTodoProps) {
  const { title, setTitle } = useTodoStore();

  // Eğer düzenleme modundaysak title'ı aktif todo ile güncelle
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (activeTodo) {
        updateTodo(activeTodo.id, { title: title });
      } else {
        addTodo();
      }
    }
  };

  const handleUpdate = () => {
    if (activeTodo) {
      updateTodo(activeTodo.id, { title: title });
      cancelUpdate(); // Güncellemeyi tamamla, düzenleme modunu kapat
    }
  };

  return (
    <div className="w-full flex items-center justify-center space-x-2 py-4">
      <input
        className="border-none text-black rounded-xl w-[20rem] p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        value={title} // Başlık state'ini buraya bağla
        onChange={(e) => setTitle(e.target.value)} // Title state'ini güncelle
        onKeyUp={handleKeyPress}
        placeholder={activeTodo ? "Update todo..." : "Add a new todo..."}
      />
      <button onClick={handleUpdate}>
        {activeTodo ? "Update" : "Add"}{" "}
        {/* Eğer düzenleniyorsa Update, değilse Add */}
      </button>
      {activeTodo && (
        <button onClick={cancelUpdate}>Cancel</button> // Düzenlemeyi iptal et butonu
      )}
    </div>
  );
}
