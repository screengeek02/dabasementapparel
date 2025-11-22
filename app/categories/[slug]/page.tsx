"use client";

import { getProductsByCategory } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import useModal from "@/components/useModal";
import { categoryNames } from "@/lib/categoryNames";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const products = getProductsByCategory(slug);
  const modal = useModal();
  const title = categoryNames[slug] || "Category";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <ProductGrid products={products} onProductClick={modal.show} />
      <ProductModal open={modal.open} data={modal.data} hide={modal.hide} />
    </div>
  );
}
