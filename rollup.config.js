import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: './index.js',
    output: {
      file: `./dist/${pkg.name}.js`,
      format: 'umd',
      name: pkg.name,
    },
    plugins: [
      resolve(),
      commonjs(),
    ]
  },
  {
    input: './index.js',
    output: {
      file: `./dist/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
    ]
  }
]