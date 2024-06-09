import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
  outDir: "dist",
  entry: {
    index: "./src/index.ts",
    functionEvaluator: "./functionEvaluator.ts",
    styleResolver: "./styleResolver.ts",
  },
});
