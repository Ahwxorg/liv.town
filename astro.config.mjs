import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
  integrations: [embeds(), tailwind(), react(), mdx()],
  site: 'https://liv.town'
});
