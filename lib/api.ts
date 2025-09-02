import { User, ApiResponse } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<ApiResponse<User[]>> {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return { data };
  } catch (error) {
    return {
      data: [],
      error: error instanceof Error ? error.message : "Failed to fetch users",
    };
  }
}

export async function fetchUserById(
  id: number
): Promise<ApiResponse<User | null>> {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Failed to fetch user",
    };
  }
}
