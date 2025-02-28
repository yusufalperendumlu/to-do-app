import AddToDo from "@/components/AddToDo";
import ToDoList from "@/components/ToDoList";
import { getPosts } from "@/lib/services/postServices";

export default async function Home() {
  return (
    <div className="w-full mx-auto p-4 mt-40 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <ToDoList />
    </div>
  );
}
