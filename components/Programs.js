const programs = [
  {
    icon: '🏋️',
    name: 'Weight Training',
    desc: 'Build raw strength and muscle with our fully-equipped free weights zone and guided progressive overload programs.',
    duration: '45–90 min',
    level: 'All levels',
    sessions: '6 days/week',
  },
  {
    icon: '🔥',
    name: 'HIIT & Cardio',
    desc: 'High-intensity interval training designed to torch fat, improve endurance, and boost metabolism.',
    duration: '30–45 min',
    level: 'Intermediate',
    sessions: 'Daily',
  },
  {
    icon: '🧘',
    name: 'Yoga & Flexibility',
    desc: 'Recover smarter and move better with expert-led yoga and mobility sessions for all fitness levels.',
    duration: '60 min',
    level: 'All levels',
    sessions: '5 days/week',
  },
  {
    icon: '🥊',
    name: 'Boxing & MMA',
    desc: 'Punch your way to peak fitness. Our boxing program combines technique, conditioning, and mental toughness.',
    duration: '60 min',
    level: 'Beginner–Advanced',
    sessions: '4 days/week',
  },
  {
    icon: '🚴',
    name: 'Spin Cycling',
    desc: 'High-energy group cycling classes on premium bikes with immersive music and motivating instructors.',
    duration: '45 min',
    level: 'All levels',
    sessions: '6 days/week',
  },
  {
    icon: '🤸',
    name: 'Functional Fitness',
    desc: 'Movement-based training that builds real-world strength, stability, and athletic performance.',
    duration: '45–60 min',
    level: 'All levels',
    sessions: '5 days/week',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Our Programs</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From strength to serenity — AVS Fitness offers expert-led programs for every goal and every level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <div key={p.name}
              className="group bg-dark-800 border border-white/5 hover:border-gold-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5 cursor-pointer">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-white font-black text-xl mb-2 group-hover:text-gold-400 transition-colors">{p.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                {[['⏱', p.duration], ['📊', p.level], ['📅', p.sessions]].map(([icon, val]) => (
                  <span key={val} className="text-xs text-gray-400 bg-dark-700 px-3 py-1.5 rounded-full flex items-center gap-1">
                    {icon} {val}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
