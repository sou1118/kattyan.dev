import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkLinkCard from "remark-link-card-plus";
import remarkMath from "remark-math";

export default defineConfig({
  site: "https://kattyan.dev",
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkMath,
        [
          remarkLinkCard,
          {
            cache: false,
            shortenUrl: true,
            thumbnailPosition: "right",
          },
        ],
      ],
      rehypePlugins: [rehypeKatex],
    }),
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
  },
  integrations: [mdx(), sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  redirects: {
    "/blog/hello-world": "/blog/posts/hello-world",
    "/blog/renewal-blog-astro": "/blog/posts/renewal-blog-astro",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
