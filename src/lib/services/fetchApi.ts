const BASE_URL = process.env.NEXT_PUBLIC_API_URL ;

export const fetchApi = async (endpoint: string, method: string, body?: any) => {
    try {
        const options: RequestInit = {
            method,
            headers: { "Content-Type": "application/json" },
            body: body ? JSON.stringify(body) : undefined,
        };
        
        console.log(`Fetching: ${BASE_URL}/api/${endpoint}`);  // Debug için log ekleyelim
        
        const response = await fetch(`${BASE_URL}/api/${endpoint}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};
