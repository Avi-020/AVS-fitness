import { useState } from 'react'

const plans = [
  {
    name: 'Silver',
    icon: '🥈',
    price: { monthly: 1499, quarterly: 1299, annual: 999 },
    highlight: false,
    features: [
      { ok: true, text: 'Full gym floor access' },
      { ok: true, text: 'All cardio equipment' },
      { ok: true, text: 'Locker room access' },
      { ok: true, text: '2 group classes/month' },
      { ok: false, text: 'Personal trainer sessions' },
      { ok: false, text: 'Nutrition consultation' },
      { ok: false, text: 'Sauna & steam room' },
    ],
  },
  {
    name: 'Gold',
    icon: '🥇',
    price: { monthly: 2999, quarterly: 2499, annual: 1999 },
    highlight: true,
    badge: 'Most Popular',
    features: [
      { ok: true, text: 'Full gym floor access' },
      { ok: true, text: 'Unlimited group classes' },
      { ok: true, text: 'Locker room + towel service' },
      { ok: true, text: '4 PT sessions/month' },
      { ok: true, text: '1 Nutrition consultation' },
      { ok: true, text: 'Sauna & steam room' },
      { ok: false, text: 'Unlimited PT sessions' },
    ],
  },
  {
    name: 'Platinum',
    icon: '💎',
    price: { monthly: 5999, quarterly: 4999, annual: 3999 },
    highlight: false,
    features: [
      { ok: true, text: 'Full gym floor access' },
      { ok: true, text: 'Unlimited group classes' },
      { ok: true, text: 'Premium locker + towel' },
      { ok: true, text: 'Unlimited PT sessions' },
      { ok: true, text: 'Monthly nutrition plan' },
      { ok: true, text: 'Sauna, steam & cold plunge' },
      { ok: true, text: 'Guest passes (2/month)' },
    ],
  },
]

export default function Membership() {
  const [period, setPeriod] = useState('monthly')

  return (
    <section id="membership" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Membership</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Join AVS Fitness</h2>
          <p className="text-gray-400 text-lg mb-8">Pick a plan. Show up. Transform.</p>

          {/* Period toggle */}
          <div className="inline-flex bg-dark-700 rounded-xl p-1.5 gap-1 border border-white/5">
            {['monthly', 'quarterly', 'annual'].map(p => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all ${period === p ? 'bg-gold-500 text-dark-900' : 'text-gray-400 hover:text-white'}`}>
                {p}
                {p === 'annual' && <span className="ml-1 text-xs opacity-80">-33%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map(plan => (
            <div key={plan.name}
              className={`relative rounded-2xl p-7 transition-all hover:scale-[1.01] ${
                plan.highlight
                  ? 'bg-gold-500/10 border-2 border-gold-500 shadow-2xl shadow-gold-500/20'
                  : 'bg-dark-700 border border-white/5'
              }`}>
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-dark-900 text-xs font-black px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="flex items-center gap-2 mb-5">
                <span className="text-3xl">{plan.icon}</span>
                <span className={`text-lg font-black ${plan.highlight ? 'text-gold-400' : 'text-white'}`}>{plan.name}</span>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-gold-400' : 'text-white'}`}>
                    ₹{plan.price[period].toLocaleString('en-IN')}
                  </span>
                  <span className="text-gray-500 text-sm mb-1">/mo</span>
                </div>
                {period !== 'monthly' && (
                  <p className="text-green-400 text-xs font-semibold mt-1">
                    Save ₹{((plan.price.monthly - plan.price[period]) * (period === 'quarterly' ? 3 : 12)).toLocaleString('en-IN')}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f.text} className={`flex items-start gap-2.5 text-sm ${f.ok ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className={`mt-0.5 flex-shrink-0 ${f.ok ? 'text-gold-400' : 'text-gray-700'}`}>
                      {f.ok ? '✓' : '✗'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-black text-sm transition-all ${
                plan.highlight
                  ? 'bg-gold-500 hover:bg-gold-400 text-dark-900 hover:shadow-lg hover:shadow-gold-500/30'
                  : 'border border-white/20 hover:border-gold-500/50 text-white hover:text-gold-400'
              }`}>
                Get {plan.name} →
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          All plans include free trial class. No registration fee. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
