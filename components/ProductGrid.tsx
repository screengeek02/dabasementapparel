import ProductCard from "./ProductCard";
import { Product } from "@/lib/products";

export default function ProductGrid({ products, onProductClick }: { products: Product[]; onProductClick: (p: Product) => void }) {
  if (!products.length) {
    return <p className="text-gray-400 text-sm">No products yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.asin} product={p} onClick={onProductClick} />
      ))}
    </div>
  );
}
