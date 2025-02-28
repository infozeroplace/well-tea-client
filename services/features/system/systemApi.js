import { api } from "@/services/api/apiSlice";
import generateServiceUrl from "@/utils/generateServiceUrl";

const systemApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSystemConfig: builder.query({
      query: () => {
        const url = generateServiceUrl("/public/system");

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["system"],
    }),
  }),
});

export const { useGetSystemConfigQuery } = systemApi;
