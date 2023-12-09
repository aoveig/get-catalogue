import type { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import path from "path";

const config: RollupOptions[] = [
  {
    input: "src/lib/getCatalogue.ts",
    output: [
      {
        file: path.resolve(__dirname, "./dist/getCatalogue.mjs"),
        format: "es"
      },
      {
        file: path.resolve(__dirname, "./dist/getCatalogue.cjs"),
        format: "cjs"
      }
    ],
    plugins: [typescript()]
  },
  {
    input: "src/lib/getCatalogue.ts",
    output: {
      file: path.resolve(__dirname, "./dist/getCatalogue.d.ts"),
      format: "es"
    },
    plugins: [dts()]
  }
];

export default config;
