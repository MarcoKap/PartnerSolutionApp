import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base = Repo-Name, damit Assets auf GitHub Pages unter
// https://<user>.github.io/PartnerSolutionApp/ korrekt aufgelöst werden.
export default defineConfig({
  base: '/PartnerSolutionApp/',
  plugins: [react(), tailwindcss()],
})
