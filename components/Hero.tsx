export default function Hero() {
  return (
    <section className="border-b border-zinc-800 py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">

        <div className="flex-1">
          <p className="text-xs text-baseRed uppercase tracking-widest mb-3">Men Only</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-3">
            Streetwear & Kicks  
            <span className="text-baseRed"> Curated</span> For Da Basement
          </h1>
          <p className="text-gray-300 mb-6 text-sm max-w-md">
            Amazon finds we’d actually rock — pulled straight from the culture.
          </p>
        </div>

        <div className="flex-1 w-full">
          <div className="aspect-[4/5] w-full rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-gray-500">
            Add hero image later
          </div>
        </div>

      </div>
    </section>
  );
}
