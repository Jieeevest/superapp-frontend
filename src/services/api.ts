import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define interfaces for data structures
interface PaginatedResponse<T> {
  data: {
    orderBy: string;
    orderDirection: string;
    pageNumber: number;
    pageSize: number;
    totalData: number;
    roles: T[];
    members: T[];
    packages: T[];
    menu: T[];
  };
}

export interface RoleData {
  id: number;
  name: string;
  status: string;
  description: string;
  authorizedMenu: any[];
  createdAt: string;
  updatedAt: string;
}

export interface MemberData {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface MenuData {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface PackageData {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

// API setup
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    // Add token to the request headers if available
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Roles", "Members", "Packages", "Menus"],

  endpoints: (builder) => ({
    /** Roles Endpoint */
    getRoles: builder.query<PaginatedResponse<RoleData>, void>({
      query: () => "/roles",
      providesTags: ["Roles"],
    }),
    createRole: builder.mutation<void, Partial<RoleData>>({
      query: (newRole) => ({
        url: "/roles",
        method: "POST",
        body: newRole,
      }),
      invalidatesTags: ["Roles"],
    }),
    updateRole: builder.mutation<
      void,
      { id: number; updates: Partial<RoleData> }
    >({
      query: ({ id, updates }) => ({
        url: `/roles/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["Roles"],
    }),
    deleteRole: builder.mutation<void, number>({
      query: (id) => ({
        url: `/roles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Roles"],
    }),

    /** Members Endpoint */
    getMembers: builder.query<PaginatedResponse<MemberData>, void>({
      query: () => "/members",
      providesTags: ["Members"],
    }),
    createMember: builder.mutation<void, Partial<MemberData>>({
      query: (newMember) => ({
        url: "/members",
        method: "POST",
        body: newMember,
      }),
      invalidatesTags: ["Members"],
    }),
    updateMember: builder.mutation<
      void,
      { id: number; updates: Partial<MemberData> }
    >({
      query: ({ id, updates }) => ({
        url: `/members/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["Members"],
    }),
    deleteMember: builder.mutation<void, number>({
      query: (id) => ({
        url: `/members/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Members"],
    }),

    /** Menu Endpoint */
    getMenus: builder.query<PaginatedResponse<MenuData>, void>({
      query: () => "/menu",
      providesTags: ["Menus"],
    }),
    createMenu: builder.mutation<void, Partial<MenuData>>({
      query: (newMenu) => ({
        url: "/menu",
        method: "POST",
        body: newMenu,
      }),
      invalidatesTags: ["Menus"],
    }),
    updateMenu: builder.mutation<
      void,
      { id: number; updates: Partial<MenuData> }
    >({
      query: ({ id, updates }) => ({
        url: `/menu/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["Menus"],
    }),
    deleteMenu: builder.mutation<void, number>({
      query: (id) => ({
        url: `/menu/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Menus"],
    }),

    /** Packages Endpoint */
    getPackages: builder.query<PaginatedResponse<PackageData>, void>({
      query: () => "/packages",
      providesTags: ["Packages"],
    }),
    createPackage: builder.mutation<void, Partial<PackageData>>({
      query: (newPackage) => ({
        url: "/packages",
        method: "POST",
        body: newPackage,
      }),
      invalidatesTags: ["Packages"],
    }),
    updatePackage: builder.mutation<
      void,
      { id: number; updates: Partial<PackageData> }
    >({
      query: ({ id, updates }) => ({
        url: `/packages/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["Packages"],
    }),
    deletePackage: builder.mutation<void, number>({
      query: (id) => ({
        url: `/packages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Packages"],
    }),
  }),
});

export const {
  useGetRolesQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
  useGetMembersQuery,
  useCreateMemberMutation,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
  useGetMenusQuery,
  useCreateMenuMutation,
  useUpdateMenuMutation,
  useDeleteMenuMutation,
  useGetPackagesQuery,
  useCreatePackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
} = api;
