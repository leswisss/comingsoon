import { MetadataRoute } from "next";

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://bettermarque.com",
    },
  ];
}
