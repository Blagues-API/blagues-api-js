import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "src/index.ts",
  external: ["node-fetch"],
  output: {
    name: "BlaguesAPI",
    exports: "named",
    globals: {
      "node-fetch": "fetch",
    },
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      typescript: require('typescript'),
    }),
    terser(),
  ],
};
