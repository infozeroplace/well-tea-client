import { env } from "@/config/env";
import axios from "axios";

const BASE_URL = env.app_route_url;

export default axios.create({
  baseURL: BASE_URL,
});

// For now unnecessary private axios
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
