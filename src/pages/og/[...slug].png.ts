import fs from "node:fs/promises";
import path from "node:path";
import { getCollection } from "astro:content";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import { createElement } from "react";
import satori from "satori";
import { OgImage } from "../../components/OgImage";

export const GET: APIRoute = async ({ params }) => {
  try {
    // ブログ記事の取得
    const posts = await getCollection("blog");
    const post = posts.find(
      (post) =>
        post.slug === params.slug || post.slug === `posts/${params.slug}`,
    );

    if (!post) {
      console.error("Post not found:", params.slug);
      return new Response("Not Found", { status: 404 });
    }

    // フォントの読み込み
    const fontRegular = await fs.readFile(
      path.resolve(
        process.cwd(),
        "src/assets/fonts/LINESeed-jp/LINESeedJP-OTF-Rg.woff",
      ),
    );

    const fontBold = await fs.readFile(
      path.resolve(
        process.cwd(),
        "src/assets/fonts/LINESeed-jp/LINESeedJP-OTF-Bd.woff",
      ),
    );

    // SVGの生成
    const svg = await satori(
      createElement(OgImage, {
        title: post.data.title,
      }),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "LINE Seed JP",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "LINE Seed JP",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      },
    );

    // SVGからPNGへの変換
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: 1200,
      },
    });
    const pngBuffer = resvg.render().asPng();

    return new Response(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("OGP生成エラー:", error);
    if (error.stack) {
      console.error(error.stack);
    }
    return new Response(`Failed to generate OGP: ${error.message}`, {
      status: 500,
    });
  }
};

// 静的なパスの生成
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug.replace("posts/", "") },
  }));
}
