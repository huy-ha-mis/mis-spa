const MGNL_BASE = import.meta.env.MGNL_IS_PREVIEW
  ? import.meta.env.MGNL_PUBLIC_URL
  : import.meta.env.MGNL_BASE_PUBLIC;
const MGNL_URL = import.meta.env.MGNL_HOST + MGNL_BASE;

export const environment = {
  appBase: import.meta.env.MGNL_SITE_PATH,
  pageBase: MGNL_URL + import.meta.env.MGNL_API_PAGES,
  templateAnnotationsBase: MGNL_URL + import.meta.env.MGNL_API_TEMPLATES,
  navBase: MGNL_URL + import.meta.env.MGNL_API_NAV,
  damRawBase: import.meta.env.MGNL_HOST,
  languages: import.meta.env.MGNL_LANGUAGES.split(' '),
};
