import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'

import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/common.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    postcss({
      autoModules: true,
      namedExports: true,
      modules: true,
      extensions: ['.css', '.scss']
    }),
    alias({
      entries: {
        components: './components'
      },
      resolve: ['.jsx', '.js']
    }),
    eslint(),
    babel({
      exclude: ['node_modules/**']
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json']
    }),
    commonjs({
      sourcemap: false
    }),
    production && terser()
  ]
}
