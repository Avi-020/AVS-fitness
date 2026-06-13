import Link from 'next/link'
import { useEffect, useState } from 'react'

const taglines = [
  'Build Your Strength.',
  'Forge Your Discipline.',
  'Define Your Limits.',
  'Own Your Results.',
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % taglines.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background — geometric pattern */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        {/* Gold accent glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-2xl" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#E6B800 1px, transparent 1px), linear-gradient(90deg, #E6B800 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
              Now Open in Pune
            </div>

            <div className="mb-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                AVS
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gold-500 leading-none tracking-tight">
                FITNESS
              </h1>
            </div>

            <div className="h-12 mb-6 mt-4">
              <p className={`text-xl sm:text-2xl font-light text-gray-300 transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {taglines[idx]}
              </p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Pune&apos;s most premium fitness destination. State-of-the-art equipment, world-class trainers, and a community that pushes you beyond your limits.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10 pb-10 border-b border-white/10">
              {[['10+', 'Years'], ['2500+', 'Members'], ['15+', 'Trainers'], ['50+', 'Programs']].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-black text-gold-400">{n}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#membership"
                className="bg-gold-500 hover:bg-gold-400 text-dark-900 font-black px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30 text-sm tracking-wide">
                START YOUR JOURNEY →
              </Link>
              <Link href="#about"
                className="border border-white/20 hover:border-gold-500/50 text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm hover:text-gold-400">
                EXPLORE GYM
              </Link>
            </div>
          </div>

          {/* Right — visual card stack */}
          <div className="hidden lg:block relative">
            {/* Main card */}
            <div className="bg-dark-700 border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '🏋️', label: 'Weight Training', active: true },
                  { icon: '🧘', label: 'Yoga & Stretch', active: false },
                  { icon: '🔥', label: 'HIIT & Cardio', active: false },
                  { icon: '🥊', label: 'Boxing', active: false },
                ].map(item => (
                  <div key={item.label}
                    className={`rounded-2xl p-4 flex items-center gap-3 transition-all ${item.active ? 'bg-gold-500/15 border border-gold-500/40' : 'bg-dark-600 border border-white/5'}`}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`text-xs font-semibold ${item.active ? 'text-gold-400' : 'text-gray-400'}`}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Live indicator */}
              <div className="bg-dark-600 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center text-lg">👥</div>
                  <div>
                    <div className="text-white font-bold text-sm">Gym is Open</div>
                    <div className="text-gray-400 text-xs">147 members checked in today</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">LIVE</span>
                </div>
              </div>

              {/* Timing */}
              <div className="mt-4 flex gap-3">
                <div className="flex-1 bg-dark-600 rounded-xl p-3 text-center">
                  <div className="text-gold-400 font-black text-lg">5 AM</div>
                  <div className="text-gray-500 text-xs">Opens</div>
                </div>
                <div className="flex-1 bg-dark-600 rounded-xl p-3 text-center">
                  <div className="text-gold-400 font-black text-lg">11 PM</div>
                  <div className="text-gray-500 text-xs">Closes</div>
                </div>
                <div className="flex-1 bg-gold-500/10 border border-gold-500/30 rounded-xl p-3 text-center">
                  <div className="text-gold-400 font-black text-lg">7</div>
                  <div className="text-gray-500 text-xs">Days/week</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gold-500 text-dark-900 rounded-2xl p-4 shadow-xl shadow-gold-500/30 font-black text-center z-20">
              <div className="text-2xl">⭐</div>
              <div className="text-sm">4.9/5</div>
              <div className="text-xs font-medium">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-bounce" />
      </div>
    </section>
  )
}
