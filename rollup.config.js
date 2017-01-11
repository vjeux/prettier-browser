import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import babili from 'rollup-plugin-real-babili';

export default {
  entry: 'node_modules/prettier/index.js',
  dest: 'prettier.min.js',
  format: 'iife',
  plugins: [
    resolve(),
    commonjs(),
    builtins(),
    babili({comments: false, sourceMap: false}),
  ],
  useStrict: false,
  moduleName: 'prettier',
};
