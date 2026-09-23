// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: change this to your own domain once you buy it.
  // It is used for canonical URLs and Open Graph metadata.
  site: 'https://your-domain.com',

  // Fully static output: the build produces plain HTML/CSS in dist/.
  // That means the site can be hosted anywhere, forever, with no server.
  output: 'static',

  build: {
    // Inline small stylesheets to cut one network request on first paint.
    inlineStylesheets: 'auto',
  },
});
