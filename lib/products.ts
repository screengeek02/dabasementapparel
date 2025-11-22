import productsJson from "./products.json";
import categoriesJson from "./categories.json";

export type Product = {
  asin: string;
  title: string;
  image: string;
  price: string;
  category: string;
  affiliateTag: string;
};

const products = productsJson as Record<string, Omit<Product, "asin">>;
const categories = categoriesJson as Record<string, string[]>;

export function getProduct(asin: string): Product | null {
  const p = products[asin];
  if (!p) return null;
  return { asin, ...p };
}

export function getFeaturedProducts(): Product[] {
  return categories.featured
    .map((a) => getProduct(a))
    .filter((p): p is Product => p !== null);
}

export function getProductsByCategory(slug: string): Product[] {
  const asins = categories[slug] || [];
  return asins
    .map((a) => getProduct(a))
    .filter((p): p is Product => p !== null);
}
