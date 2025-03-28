/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly WEB3_FORMS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}