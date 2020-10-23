import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import pkgJson from './package.json';

export default [{
  input: 'lib/index.js',

  output: [{
    name: "Switchover",
    file: './dist/switchover.min.js',
    format: 'umd',
    exports: 'named',
    sourcemap: true,
  }, {
    name: "Switchover",
    file: './dist/switchover.es.js',
    format: 'es',
    exports: 'named',
    sourcemap: true,
  }],
  plugins: [
    resolve(),
    commonjs(),
    /*babel({
      exclude: 'node_modules/**',
    }),*/
    terser()
  ],
}];
