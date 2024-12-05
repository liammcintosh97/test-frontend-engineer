import { MetadataRoute } from "next/types";

/**
 * Generates a robot.txt for search engine crawlers
 * @returns {MetadataRoute.Robots}
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${process.env.HOST}/sitemap.xml`,
  }
}