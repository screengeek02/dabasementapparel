import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <p className="text-xs text-baseRed uppercase tracking-[0.35em] mb-3">
            Da Basement • Men Only
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Streetwear & Kicks{" "}
            <span className="text-baseRed">Curated From Amazon.</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-md">
            Strictly men’s fits — sneakers, hoodies and tees we’d actually rock.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/categories/mens"
              className="px-5 py-2.5 rounded-full bg-baseRed text-sm font-semibold hover:bg-red-500 transition"
            >
              Shop Men’s 🔥
            </Link>
            <Link
              href="/categories/shoes"
              className="px-5 py-2.5 rounded-full border border-zinc-700 text-sm hover:border-baseRed hover:text-baseRed transition"
            >
              Browse Kicks 👟
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="aspect-[4/5] w-full rounded-3xl border border-zinc-800 overflow-hidden bg-zinc-900">
            <img
              src="/hero.jpg"
              alt="DaBasementApparel hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

