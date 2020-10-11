import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default [{
  input: 'dist/index.js',
  output: {
    name: "Switchover",
    file: './dist-browser/switchover.min.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser()
  ],
}];