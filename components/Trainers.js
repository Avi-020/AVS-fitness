const trainers = [
  {
    name: 'Arjun Pawar',
    title: 'Head Strength Coach',
    exp: '12 years',
    certs: ['NSCA-CSCS', 'ACE Certified'],
    speciality: 'Powerlifting & Body Composition',
    avatar: '👨‍🦱',
    emoji: '🏆',
  },
  {
    name: 'Priya Deshmukh',
    title: 'Yoga & Wellness Coach',
    exp: '9 years',
    certs: ['RYT-500', 'NASM Certified'],
    speciality: 'Yoga, Pilates & Recovery',
    avatar: '👩‍🦰',
    emoji: '🧘',
  },
  {
    name: 'Vikram Naik',
    title: 'HIIT & Sports Coach',
    exp: '8 years',
    certs: ['CrossFit L3', 'ACE CPT'],
    speciality: 'Functional Fitness & Athletics',
    avatar: '👨‍🦲',
    emoji: '⚡',
  },
  {
    name: 'Sneha Kulkarni',
    title: 'Nutrition & Fitness Coach',
    exp: '7 years',
    certs: ['INFS Certified', 'ISSA CPT'],
    speciality: 'Weight Loss & Nutrition Planning',
    avatar: '👩',
    emoji: '🥗',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Team</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Expert Trainers</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Certified professionals who don&apos;t just coach — they transform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map(t => (
            <div key={t.name}
              className="group bg-dark-800 border border-white/5 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5">
              {/* Avatar area */}
              <div className="bg-gradient-to-br from-dark-700 to-dark-600 p-8 text-center relative">
                <div className="text-7xl mb-1">{t.avatar}</div>
                <div className="absolute top-4 right-4 text-2xl">{t.emoji}</div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-black text-lg group-hover:text-gold-400 transition-colors">{t.name}</h3>
                <div className="text-gold-500 text-xs font-semibold mb-3">{t.title}</div>

                <div className="text-gray-400 text-xs mb-4 leading-relaxed">{t.speciality}</div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {t.certs.map(c => (
                    <span key={c} className="text-xs bg-dark-700 text-gray-400 px-2.5 py-1 rounded-full">{c}</span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="text-gold-500">⭐</span> {t.exp} experience
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
