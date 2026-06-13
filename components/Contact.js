import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Start Your<br /><span className="text-gold-500">Free Trial Today.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Walk in for a free trial session. No commitment, no payment — just come experience AVS Fitness for yourself.
            </p>

            <div className="space-y-5">
              {[
                ['📍', 'Location', 'AVS Fitness, FC Road, Shivajinagar, Pune – 411005'],
                ['📞', 'Phone', '+91 98765 43210'],
                ['✉️', 'Email', 'hello@avsfitness.in'],
                ['🕐', 'Timings', 'Mon–Sun: 5:00 AM – 11:00 PM'],
              ].map(([icon, label, val]) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-dark-700 border border-white/5 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-white font-medium text-sm">{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-10">
              {[['📸', 'Instagram'], ['📘', 'Facebook'], ['▶️', 'YouTube']].map(([icon, label]) => (
                <button key={label}
                  className="flex items-center gap-2 bg-dark-700 hover:bg-dark-600 border border-white/5 hover:border-gold-500/30 text-gray-400 hover:text-gold-400 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all">
                  {icon} {label}
                </button>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-dark-800 border border-white/5 rounded-2xl p-8">
            <h3 className="text-white font-black text-xl mb-6">Book a Free Trial</h3>

            {sent ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">✅</div>
                <div className="text-green-400 font-bold">Request Sent!</div>
                <div className="text-gray-400 text-sm mt-1">We&apos;ll call you within 2 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Rahul Sharma' },
                  { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@email.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      required
                      className="w-full bg-dark-700 border border-white/10 focus:border-gold-500/50 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your fitness goal..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-dark-700 border border-white/10 focus:border-gold-500/50 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-dark-900 font-black py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/30 text-sm tracking-wide">
                  BOOK FREE TRIAL →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
