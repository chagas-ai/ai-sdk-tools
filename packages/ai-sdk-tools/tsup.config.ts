import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/client.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "@chagas-ai/agents",
    "@chagas-ai/artifacts",
    "@ai-sdk-tools/cache",
    "@chagas-ai/devtools",
    "@chagas-ai/memory",
    "@chagas-ai/store",
    "ai",
    "@ai-sdk/react",
    "react",
    "react-dom",
    "zod",
    "zustand",
  ],
});
