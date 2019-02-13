import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'

export default {
  input: './index.js',
  output: {
    file: `./docs/dev-build.js`,
    format: 'umd',
    name: pkg.name,
  },
  plugins: [
    resolve(),
    commonjs(),
    serve({
      open: true,
      contentBase: ['./docs', './']
    }),
    livereload('./docs')
  ]
}