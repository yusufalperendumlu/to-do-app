import { fetchApi } from '@/lib/services/fetchApi';

export const getPosts = async () => {

    const data = await fetchApi('todos', 'GET');

    
  return data;
};

export const createPost = async (data: { title: string; }) => {
  return await fetchApi('todos', 'POST', data);
};

export const updatePost = async (id: string, data: { title: string }) => {
    try {
      const response = await fetch(`/api/todos`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title: data.title }),  // id ve title'ı body'ye gönderiyoruz
      });
  
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
      return null;
    }
  };

export const deletePost = async (id: string) => {
    try {
      const response = await fetch("/api/todos", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),  // Body'e id'yi JSON formatında gönderiyoruz
      });
  
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
      return null;
    }
  };