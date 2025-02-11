import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Kattyan's Blog",
    description: "A blog about programming and other things.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}`,
    })),
  });
}
