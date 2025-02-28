// import { IMeta } from "@/types/common";
// import type { BaseQueryFn } from "@reduxjs/toolkit/query";
// import type { AxiosRequestConfig, AxiosError } from "axios";
// import { instance  } from "./axiosInstance";
import { instance as axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
  ({ baseUrl }) =>
  async (temp) => {
    const { url, method, body, params, contentType } = temp;
    console.log("temp: ", temp);
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        body,
        method,
        // data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
        withCredentials: true,
      });

      console.log("result: ", result);

      // Ensure the returned object has a `data` property
      return { data: result };
    } catch (axiosError) {
      console.log("axiosError: ", axiosError);
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
