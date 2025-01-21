import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define interfaces for Auth API
export interface LoginResponse {
  data: {
    token: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgetPasswordResponse {
  message: string;
}

export interface ForgetPasswordRequest {
  email: string;
}

// Create a separate API instance for authentication
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_AUTH_API_URL}/api`, // Different base URL for auth
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: credentials,
      }),
    }),
    forgetPassword: builder.mutation<
      ForgetPasswordResponse,
      ForgetPasswordRequest
    >({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useForgetPasswordMutation } = authApi;
