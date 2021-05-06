import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        gruvbox: {
          bg_h: 'var(--bg_h)',
          bg: 'var(--bg)',
          bg_s: 'var(--bg_s)',
          bg1: 'var(--bg1)',
          bg2: 'var(--bg2)',
          bg3: 'var(--bg3)',
          bg4: 'var(--bg4)',

          fg: 'var(--fg)',
          fg1: 'var(--fg1)',
          fg2: 'var(--fg2)',
          fg3: 'var(--fg3)',
          fg4: 'var(--fg4)',

          red: 'var(--red)',
          green: 'var(--green)',
          yellow: 'var(--yellow)',
          blue: 'var(--blue)',
          purple: 'var(--purple)',
          aqua: 'var(--aqua)',
          orange: 'var(--orange)',
          gray: 'var(--gray)',

          redDim: 'var(--red-dim)',
          greenDim: 'var(--green-dim)',
          yellowDim: 'var(--yellow-dim)',
          blueDim: 'var(--blue-dim)',
          purpleDim: 'var(--purple-dim)',
          aquaDim: 'var(--aqua-dim)',
          orangeDim: 'var(--orange-dim)',
          grayDim: 'var(--gray-dim)',
        }
      }
    }
  }
})