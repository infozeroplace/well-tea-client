import { env } from "@/config/env";

export const getBaseUrl = () => {
  return env.app_route_url;
};
