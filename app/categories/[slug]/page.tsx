"use client";

import { useMemo, useState } from "react";
import { getProductsByCategory } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import useModal from "@/components/useModal";
import { categoryNames } from "@/lib/categoryNames";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const baseProducts = getProductsByCategory(slug);
  const modal = useModal();
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const title = categoryNames[slug] || "Category";

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return baseProducts;
    return baseProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query, baseProducts]);

  const visibleProducts = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          <p className="text-xs text-gray-400">
            Showing {filtered.length} item(s) in {title}.
          </p>
        </div>
        <input
          type="text"
          placeholder={`Search in ${title}...`}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisibleCount(8);
          }}
          className="w-full md:w-64 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm outline-none focus:border-baseRed"
        />
      </div>

      <ProductGrid
        products={visibleProducts}
        onProductClick={modal.show}
      />

      {canLoadMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((c) => c + 8)}
            className="px-6 py-2 text-sm rounded-full border border-zinc-700 hover:border-baseRed hover:text-baseRed transition"
          >
            Load more
          </button>
        </div>
      )}

      <ProductModal open={modal.open} data={modal.data} hide={modal.hide} />
    </div>
  );
}
