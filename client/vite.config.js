import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')
  if (command === 'serve') {
    return {
      // dev specific congig
      plugins: [react()],

      server: {
        proxy: {
          '/api': `http://localhost:${env.EXPRESS_PORT ?? 2300}`,
        },
      },
    }
  } else {
    return {
      // build specific config
      plugins: [react()],
      build: {
        outDir: '../server/public',
        emptyOutDir: true,
      },
    }
  }
})
