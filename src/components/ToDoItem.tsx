import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa"; // Silme ve düzenleme ikonları için react-icons kütüphanesini kullanabilirsiniz
import { useTodoStore } from "@/store/todoStore";

interface TodoItemProps {
  todoId: string;
  todoTitle: string;
  onUpdate: (id: string, title: string) => void;
}

export default function TodoItem({
  todoId,
  todoTitle,
  onUpdate,
}: TodoItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { deleteTodo } = useTodoStore();

  return (
    <div
      className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-neutral-800 hover:bg-opacity-25 transition-all duration-200 ease-linear relative"
      onMouseEnter={() => setIsHovered(true)} // Hover etkin olduğunda
      onMouseLeave={() => setIsHovered(false)} // Hover dışı olduğunda
    >
      <span className="w-4 h-4 before:content-['\2192'] flex items-center"></span>
      <span>{todoTitle}</span> {/* Todo başlığı */}
      {/* Hover durumunda ikonları göster */}
      {isHovered && (
        <div className="absolute right-2 flex gap-2">
          {/* Düzenleme butonu */}
          <FaEdit
            className="text-blue-500 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear"
            onClick={() => onUpdate(todoId, todoTitle)}
          />
          {/* Silme butonu */}
          <FaTrashAlt
            className="text-red-500 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear"
            onClick={() => deleteTodo(todoId)}
          />
        </div>
      )}
    </div>
  );
}
