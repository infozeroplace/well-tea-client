export const env = {
  env: import.meta.env.VITE_ENV,

  app_url:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_APP_URL_PROD
      : import.meta.env.VITE_APP_URL_DEV,

  app_route_url:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_APP_ROUTE_URL_PROD
      : import.meta.env.VITE_APP_ROUTE_URL_DEV,

  app_self_url:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_APP_SELF_PROD_URL
      : import.meta.env.VITE_APP_SELF_DEV_URL,

  stripe_publishable_key:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_PROD
      : import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_DEV,

  cloud_upload_preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  cloud_upload_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  google_client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
  ip_data_api_key: import.meta.env.VITE_IP_DATA_API_KEY,
};
