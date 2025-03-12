import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';

export default defineConfig(() => ({
  base: '/vite-template-island/',
  plugins: [solidPlugin()],
  css: {
    postcss: {
      plugins: [
        postcssJitProps(OpenProps)
      ]
    }
  }
}));


