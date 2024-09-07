import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: "https://bettermarque.com/sitemap.xml",
  };
}
