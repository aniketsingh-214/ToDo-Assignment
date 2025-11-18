/// <reference types="vite/client" />

// (Optional) If you need to explicitly define your VITE_... values:
interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  // add other VITE_* keys here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
