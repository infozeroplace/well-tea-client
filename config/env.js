export const env = {
  env: process.env.NEXT_PUBLIC_ENV,

  app_url:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_URL_PROD
      : process.env.NEXT_PUBLIC_URL_DEV,

  app_route_url:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_ROUTE_URL_PROD
      : process.env.NEXT_PUBLIC_ROUTE_URL_DEV,

  app_self_url:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_SELF_URL_PROD
      : process.env.NEXT_PUBLIC_SELF_URL_DEV,

  image_path:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_IMAGE_PATH_PROD
      : process.env.NEXT_PUBLIC_IMAGE_PATH_DEV,

  stripe_publishable_key:
    process.env.NEXT_PUBLIC_ENV === "production"
      ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_PROD
      : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_DEV,

  google_client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  google_analytic_id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID,
  tidio_id: process.env.NEXT_PUBLIC_TIDIO_ID,
};
