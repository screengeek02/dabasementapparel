"use client";

import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductModal({ open, data, hide }: { open: boolean; data: Product | null; hide: () => void }) {
  if (!open || !data) return null;

  const url = `https://www.amazon.com/dp/${data.asin}?tag=${data.affiliateTag}`;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50" onClick={hide}>
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={hide} className="absolute top-3 right-3 text-gray-400 hover:text-white">✕</button>

        <div className="aspect-[4/5] rounded-xl bg-zinc-900 overflow-hidden mb-4">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        </div>

        <h2 className="text-xl font-bold mb-1">{data.title}</h2>
        <p className="text-baseRed font-semibold mb-1">{data.price}</p>
        <p className="text-xs text-gray-400 uppercase mb-4">{data.category}</p>

        <Link href={url} target="_blank" className="block w-full text-center py-3 rounded-full bg-baseRed font-semibold hover:bg-red-500">
          Continue to Amazon →
        </Link>
      </div>
    </div>
  );
}
