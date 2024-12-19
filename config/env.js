export const env = {
  env: process.env.NEXT_PUBLIC_ENV,

  app_url:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_URL_PROD
      : process.env.NEXT_PUBLIC_APP_URL_DEV,

  app_route_url:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_ROUTE_URL_PROD
      : process.env.NEXT_PUBLIC_APP_ROUTE_URL_DEV,

  app_self_url:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_SELF_PROD_URL
      : process.env.NEXT_PUBLIC_APP_SELF_DEV_URL,

  stripe_publishable_key:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_PROD
      : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_DEV,

  cloud_upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  cloud_upload_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  google_client_id: process.env.NEXT_PUBLIC_APP_GOOGLE_CLIENT_ID,
  ip_data_api_key: process.env.NEXT_PUBLIC_IP_DATA_API_KEY,
};
