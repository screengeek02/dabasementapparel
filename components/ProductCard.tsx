import { Product } from "@/lib/products";

export default function ProductCard({ product, onClick }: { product: Product; onClick: (p: Product) => void }) {
  return (
    <div
      onClick={() => onClick(product)}
      className="cursor-pointer bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-baseRed transition"
    >
      <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-3">
        <p className="text-[11px] text-gray-400 uppercase">{product.category}</p>
        <h3 className="text-sm font-semibold mt-1 line-clamp-2">{product.title}</h3>
        <p className="text-baseRed text-sm mt-2">{product.price}</p>
      </div>
    </div>
  );
}
