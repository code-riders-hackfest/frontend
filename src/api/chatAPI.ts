// ...existing code...

import { BACKEND_URL } from "../config/sectrets";

// Function to handle user login
export async function getResponse() {
    const response = await fetch(`${BACKEND_URL}/get`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return await response.json();
}

// Function to handle user signup
export async function sendResponse(data: any) {
    const response = await fetch(`${BACKEND_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
}