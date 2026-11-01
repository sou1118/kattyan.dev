import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

const execFileAsync = promisify(execFile);

// Typst でテンプレートから PNG を生成する
const renderOgImage = async (title: string) => {
  const { stdout } = await execFileAsync(
    "typst",
    [
      "compile",
      "--ignore-system-fonts",
      "--font-path",
      path.resolve(process.cwd(), "src/assets/fonts/LINESeed-jp"),
      "--input",
      `title=${title}`,
      "--format",
      "png",
      "--ppi",
      "72",
      path.resolve(process.cwd(), "src/og/template.typ"),
      "-",
    ],
    { encoding: "buffer", maxBuffer: 16 * 1024 * 1024 },
  );
  return stdout;
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props.title);
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};

// 静的なパスの生成
export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");
  return [
    { params: { slug: "default" }, props: { title: "kattyan.dev" } },
    ...posts.map((post) => ({
      params: { slug: post.id.replace("posts/", "") },
      props: { title: post.data.title },
    })),
  ];
}) satisfies GetStaticPaths;
