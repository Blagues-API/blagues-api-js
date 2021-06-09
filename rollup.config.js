/* eslint-disable no-undef */
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { resolve } from 'path';
import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const tsConfig = typescript({
  useTsconfigDeclarationDir: true,
  tsconfigOverride: {
    allowJs: false,
    include: ['src'],
    exclude: ['tests', '*.js'],
  },
});

export default [{
  input: "src/index.ts",
  external: ['cross-fetch', 'cross-fetch/polyfill'],
  output: {
    name: 'BlaguesAPI',
    extend: true,
    exports: 'default',
    file: resolve(__dirname, './', pkg.browser),
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    tsConfig,
    babel({
      babelrc: false,
      extensions: ['.ts'],
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['last 2 versions', 'ie >= 11'],
            },
          },
        ],
      ],
    }),
    nodeResolve({
      mainFields: ['jsnext', 'main'],
      preferBuiltins: true,
      browser: true,
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
    json(),
    terser({ format: { comments: false } }),
  ],
},
{
  input: 'src/index.ts',
  external: ['cross-fetch', 'cross-fetch/polyfill'],
  output: {
    file: resolve(__dirname, './', pkg.module),
    exports: 'named',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    tsConfig,
    terser({ format: { comments: false } }),
  ],
},];
