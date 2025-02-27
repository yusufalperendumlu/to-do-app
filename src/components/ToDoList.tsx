"use client";
import { useEffect, useState } from "react";
import TodoItem from "@/components/ToDoItem";
import AddTodo from "@/components/AddToDo";
import { useTodoStore } from "@/store/todoStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function TodoList() {
  const { todoElements, fetchTodos, addTodo, updateTodo, deleteTodo } =
    useTodoStore();
  const [activeTodo, setActiveTodo] = useState<{
    id: string;
    title: string;
  } | null>(null); // Seçilen todo'yu tutmak için state

  const [parent] = useAutoAnimate();

  // Sayfa yüklenince todos'ları al
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleUpdate = (id: string, title: string) => {
    setActiveTodo({ id, title }); // Düzenlenmek üzere seçilen todo'yu aktif hale getir
  };

  const handleCancelUpdate = () => {
    setActiveTodo(null); // Düzenlemeyi iptal et
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Eğer activeTodo varsa, input alanında düzenlemeye izin ver */}
      <AddTodo
        activeTodo={activeTodo}
        addTodo={addTodo}
        updateTodo={updateTodo}
        cancelUpdate={handleCancelUpdate}
      />
      <div ref={parent} className="space-y-2 mt-4">
        {/* Todo öğelerini listele */}
        {todoElements.map((todo) => (
          <TodoItem
            key={todo.id}
            todoId={todo.id}
            todoTitle={todo.title}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}
