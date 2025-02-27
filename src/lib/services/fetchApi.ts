export const fetchApi = async (url: string, method: string = 'GET', body?: any) => {
    const options: RequestInit = {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    };
    const response = await fetch(url, options);
    return await response.json();
  };