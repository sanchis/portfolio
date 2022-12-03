// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config'

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default defineConfig({
  site: 'https://asanchis.dev',
  integrations: [tailwind()],
});
