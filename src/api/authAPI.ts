import apiClient from "./apiClient";


export interface LoginInput {
    email: string;
    password: string;
}

export interface SignUpInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    location?: string;
    profession?: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        phone: string;
    };
}

// Function to handle user login
export async function login(data: LoginInput){
    const response = await apiClient.post<AuthResponse>("/auth/login", data);
    return response.data;
};
// Function to handle user signup
export async function signUp(data: SignUpInput) {
    const response = await apiClient.post<AuthResponse>("/auth/signup", data);
    return response.data;
}
// Function to handle user logout
export async function logout() {
    const response = await apiClient.post("/auth/logout");
    return response.data;
}