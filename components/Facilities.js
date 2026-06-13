const facilities = [
  { icon: '🏋️', name: 'Free Weights Zone', desc: 'Olympic barbells, dumbbells up to 100kg, power racks and cable machines' },
  { icon: '🏃', name: 'Cardio Floor', desc: '30+ treadmills, ellipticals, rowing machines and assault bikes' },
  { icon: '🧘', name: 'Yoga Studio', desc: 'Dedicated air-conditioned studio with premium mats and props' },
  { icon: '🥊', name: 'Boxing Ring', desc: 'Full-size boxing ring with heavy bags, speed bags and mitts' },
  { icon: '🚿', name: 'Premium Locker Rooms', desc: 'Spacious locker rooms with hot showers, steam room and sauna' },
  { icon: '🥤', name: 'Nutrition Bar', desc: 'Post-workout protein shakes, smoothies and healthy snacks on-site' },
  { icon: '💆', name: 'Recovery Zone', desc: 'Foam rollers, massage guns, stretching area and cold plunge pool' },
  { icon: '📱', name: 'Smart Equipment', desc: 'App-connected machines that track reps, sets, and progress automatically' },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">World-Class Equipment</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Facilities Built<br />
              <span className="text-gold-500">to Perform.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every inch of AVS Fitness is engineered for one purpose — your best workout. 12,000 sq.ft of premium space with top-of-the-line equipment from global brands.
            </p>

            <div className="bg-dark-700 border border-gold-500/20 rounded-2xl p-6">
              <div className="text-gold-400 font-black text-3xl mb-1">12,000 sq.ft</div>
              <div className="text-gray-400 text-sm mb-4">of premium fitness space</div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[['100+', 'Machines'], ['50+', 'Free weights'], ['3', 'Dedicated Zones']].map(([n, l]) => (
                  <div key={l} className="bg-dark-600 rounded-xl p-3">
                    <div className="text-white font-black text-lg">{n}</div>
                    <div className="text-gray-500 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {facilities.map(f => (
              <div key={f.name}
                className="bg-dark-700 hover:bg-dark-600 border border-white/5 hover:border-gold-500/20 rounded-2xl p-5 transition-all group cursor-pointer">
                <span className="text-3xl block mb-3">{f.icon}</span>
                <h3 className="text-white font-bold text-sm mb-1.5 group-hover:text-gold-400 transition-colors">{f.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
