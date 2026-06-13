const reviews = [
  {
    name: 'Rohan Joshi',
    since: 'Member since 2021',
    stars: 5,
    avatar: '👨',
    text: 'AVS Fitness is in a different league. The equipment is always maintained, trainers are genuinely invested in your progress. Lost 18kg in 6 months here.',
  },
  {
    name: 'Ananya Kulkarni',
    since: 'Member since 2022',
    stars: 5,
    avatar: '👩',
    text: 'The yoga studio alone is worth the membership. Priya ma\'am is exceptional. Clean, spacious, premium — exactly what Pune needed.',
  },
  {
    name: 'Siddharth Rao',
    since: 'Member since 2020',
    stars: 5,
    avatar: '🧑',
    text: 'I\'ve been to 10+ gyms in Pune. Nothing compares to AVS. The vibe is serious but never intimidating. Arjun coach helped me go from 60kg to 82kg clean.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Results Speak</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Member Stories</h2>
          <p className="text-gray-400 text-lg">Real people. Real transformations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {reviews.map(r => (
            <div key={r.name} className="bg-dark-700 border border-white/5 hover:border-gold-500/20 rounded-2xl p-7 transition-all hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-gold-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="text-3xl">{r.avatar}</div>
                <div>
                  <div className="text-white font-bold text-sm">{r.name}</div>
                  <div className="text-gray-500 text-xs">{r.since}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['4.9 ★', 'Google Rating', '500+ reviews'],
            ['2,500+', 'Active Members', 'and growing'],
            ['95%', 'Retention Rate', 'members who renew'],
            ['10+', 'Years of Trust', 'in Pune'],
          ].map(([big, label, sub]) => (
            <div key={label} className="bg-dark-700 rounded-2xl p-6 text-center border border-white/5">
              <div className="text-gold-400 font-black text-2xl mb-1">{big}</div>
              <div className="text-white font-bold text-sm mb-0.5">{label}</div>
              <div className="text-gray-600 text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
