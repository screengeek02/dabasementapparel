"use client";

import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import useModal from "@/components/useModal";
import { getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const modal = useModal();
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Featured Drops 🔥</h2>
        <ProductGrid products={featured} onProductClick={modal.show} />
      </div>

      <ProductModal open={modal.open} data={modal.data} hide={modal.hide} />
    </>
  );
}
