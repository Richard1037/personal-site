// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The canonical origin of the site — used for canonical URLs, Open Graph
  // metadata and any future sitemap. Update this whenever the address changes
  // (for example, once you point your own domain at the Worker).
  site: 'https://personal-site.hongrui-w.workers.dev',

  // Fully static output: the build produces plain HTML/CSS in dist/.
  // That means the site can be hosted anywhere, forever, with no server.
  output: 'static',

  build: {
    // Inline small stylesheets to cut one network request on first paint.
    inlineStylesheets: 'auto',
  },
});
