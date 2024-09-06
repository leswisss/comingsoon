import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bettermarque.com",
    },
  ];
}