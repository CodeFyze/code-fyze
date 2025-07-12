// app/env.d.ts or app/types.d.ts

export {};

declare global {
  interface Window {
    ENV: {
      API_BASE_URL: string;
      TOKEN:string;
      editor_API:string
    };
  }
}
