import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const systemApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMenuList: builder.query({
      query: () => ({
        url: generateServiceUrl("/public/menu/list"),
        method: "GET",
      }),
      providesTags: ["system"],
    }),
    getSystemConfig: builder.query({
      query: () => ({
        url: generateServiceUrl("/public/system"),
        method: "GET",
      }),
      providesTags: ["system"],
    }),
  }),
});

export const { useGetMenuListQuery, useGetSystemConfigQuery } = systemApi;
