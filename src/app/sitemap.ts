import { MetadataRoute } from "next/types";
import { getProducts } from "./page";

const routes = [
  "cart"
]

/**
 * Generates a Sitemap.xml file
 * @returns {Promise<MetadataRoute.Sitemap>}
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getProducts()

  const products = data.map(({ id }) => ({
    url: `${process.env.HOST}/${id}`,
    lastModified: new Date().toISOString(),
  }));
 
  const _routes = routes.map((route) => ({
    url: `${process.env.HOST}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [..._routes, ...products];
}