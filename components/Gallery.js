const gallery = [
  { emoji: '🏋️', label: 'Free Weights Zone', span: 'col-span-2 row-span-2' },
  { emoji: '🏃', label: 'Cardio Floor', span: '' },
  { emoji: '🥊', label: 'Boxing Ring', span: '' },
  { emoji: '🧘', label: 'Yoga Studio', span: '' },
  { emoji: '🚴', label: 'Spin Studio', span: '' },
  { emoji: '🥤', label: 'Nutrition Bar', span: 'col-span-2' },
]

const colors = [
  'from-slate-800 to-slate-700',
  'from-zinc-800 to-zinc-700',
  'from-stone-800 to-stone-700',
  'from-neutral-800 to-neutral-700',
  'from-gray-800 to-gray-700',
  'from-dark-700 to-dark-600',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Inside AVS</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Tour Our Facility</h2>
          <p className="text-gray-400 text-lg">See what makes AVS Fitness Pune&apos;s premium destination</p>
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {gallery.map((item, i) => (
            <div key={item.label}
              className={`${item.span} bg-gradient-to-br ${colors[i]} rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
              <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
              <div className="text-white font-bold text-sm opacity-80 group-hover:opacity-100 transition-opacity">{item.label}</div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-all duration-300 rounded-2xl border border-white/5 group-hover:border-gold-500/30" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border border-white/20 hover:border-gold-500/50 text-white hover:text-gold-400 font-bold px-8 py-3.5 rounded-xl transition-all text-sm">
            Book a Free Tour →
          </button>
        </div>
      </div>
    </section>
  )
}
