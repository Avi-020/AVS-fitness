export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Story</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              More Than a Gym.<br />
              <span className="text-gold-500">A Lifestyle.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              Founded in Pune with a single vision — to create a fitness space that matches international standards at the heart of the city. AVS Fitness has grown from a local gym into Pune&apos;s most trusted premium fitness destination.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We believe fitness is not just about lifting weights — it&apos;s about building character, consistency, and confidence. Every corner of AVS Fitness is designed to push you one rep further than you thought possible.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                ['🏆', 'Best Gym Award', 'Pune Fitness Awards 2023'],
                ['🌟', 'ISO Certified', 'International standards'],
                ['💪', 'Expert Trainers', 'Certified & experienced'],
                ['🔒', 'Safe Environment', 'CCTV & 24/7 security'],
              ].map(([icon, title, sub]) => (
                <div key={title} className="flex items-start gap-3 p-4 bg-dark-700 rounded-xl border border-white/5">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual blocks */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { bg: 'bg-dark-700', icon: '🏋️', big: '10+', label: 'Years in Pune', span: '' },
              { bg: 'bg-gold-500/10 border border-gold-500/20', icon: '👥', big: '2,500+', label: 'Active Members', span: '' },
              { bg: 'bg-dark-700', icon: '📐', big: '12,000', label: 'Sq.ft of Space', span: 'col-span-2' },
            ].map((item) => (
              <div key={item.label}
                className={`${item.bg} ${item.span} rounded-2xl p-7 flex flex-col justify-between min-h-[150px]`}>
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <div className="text-gold-400 font-black text-3xl">{item.big}</div>
                  <div className="text-gray-400 text-sm font-medium mt-1">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
