import { create } from "zustand";
import { createPost, getPosts, updatePost, deletePost } from "@/lib/services/postServices";

import toastr from "toastr";
import "toastr/build/toastr.min.css";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoState {
  todoElements: Todo[];
  title: string;
  isLoaded: boolean;
  setTitle: (title: string) => void;
  fetchTodos: () => Promise<void>;
  addTodo: () => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo: (id: string, title: { title: string; }) => Promise<void>;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todoElements: [],
  title: "",
  setTitle: (title) => set({ title }),
  isLoaded: false,

  fetchTodos: async () => {
    const posts = await getPosts();
    set({ todoElements: posts, isLoaded: true });
  },

  addTodo: async () => {
    const { title, setTitle, fetchTodos } = get();  // fetchTodos is here
    if (!title.trim()) return;

    const response = await createPost({ title });

    if (response) {
      setTitle(""); // Input'u temizle
      fetchTodos(); // Yeni todo eklendikten sonra tüm todos listesini al ve state'i güncelle
      toastr.success("Todo successfully created!");
    } else {
      toastr.error("An error occurred!");
    }
  },

  deleteTodo: async (id: string) => {
    const { fetchTodos } = get(); // FetchTodos is now accessed here
    const response = await deletePost(id);
    if (response) {
      fetchTodos(); // Refresh the list after deleting
      toastr.success("Todo successfully deleted!");
    } else {
      toastr.error("An error occurred while deleting!");
    }
  },

  updateTodo: async (id: string, data: { title: string; }) => {
    const { fetchTodos } = get(); // FetchTodos is now accessed here
    const response = await updatePost(id, data);
    if (response) {
      fetchTodos(); // Refresh the list after updating
      toastr.success("Todo successfully updated!");
    } else {
      toastr.error("An error occurred while updating!");
    }
  },
}));
