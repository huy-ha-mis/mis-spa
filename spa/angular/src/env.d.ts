// Define the type of the environment variables.
declare interface Env {
  readonly NODE_ENV: string;
  MGNL_PUBLIC_URL: string;

  MGNL_HOST: string;
  MGNL_IS_PREVIEW: string;
  MGNL_DAM_RAW: string;

  MGNL_LANGUAGES: string;

  MGNL_BASE_AUTHOR: string;
  MGNL_BASE_PUBLIC: string;

  MGNL_SITE_PATH: string;

  MGNL_API_TEMPLATES: string;
  MGNL_API_PAGES: string;
  MGNL_API_NAV: string;
}

declare interface ImportMeta {
  readonly env: Env;
}
