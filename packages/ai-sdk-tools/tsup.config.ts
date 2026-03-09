import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/client.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "@chagas-ai/ai-sdk-tools-agents",
    "@chagas-ai/ai-sdk-tools-artifacts",
    "@ai-sdk-tools/cache",
    "@chagas-ai/ai-sdk-tools-devtools",
    "@chagas-ai/ai-sdk-tools-memory",
    "@chagas-ai/ai-sdk-tools-store",
    "ai",
    "@ai-sdk/react",
    "react",
    "react-dom",
    "zod",
    "zustand",
  ],
});
