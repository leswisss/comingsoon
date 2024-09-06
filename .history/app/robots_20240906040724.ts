import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        a
      }
    ],
    sitemap: "https://bettermarque.com/sitemap.xml"
  }
}