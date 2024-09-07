import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astroI18next from "astro-i18next";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://am-web-ruddy.vercel.app/', // CHANGE ON FINAL RELEASE
  integrations: [mdx(), sitemap(), tailwind(), astroI18next()]
});