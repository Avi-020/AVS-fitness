import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center font-black text-dark-900 text-sm">AVS</div>
              <div>
                <div className="text-white font-black text-lg leading-none">AVS FITNESS</div>
                <div className="text-gold-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Pune</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Pune&apos;s premium fitness destination. 12,000 sq.ft of world-class training space.
            </p>
            <div className="text-xs text-gray-600">
              <div>📍 FC Road, Shivajinagar, Pune</div>
              <div className="mt-1">📞 +91 98765 43210</div>
            </div>
          </div>

          {[
            ['Quick Links', ['Home', 'About', 'Programs', 'Facilities', 'Trainers', 'Membership']],
            ['Programs', ['Weight Training', 'HIIT & Cardio', 'Yoga & Flex', 'Boxing & MMA', 'Spin Cycling']],
            ['Support', ['Contact Us', 'Book Free Trial', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy']],
          ].map(([heading, items]) => (
            <div key={heading}>
              <div className="text-white font-bold text-sm mb-5">{heading}</div>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <div className="text-white font-black text-lg">Ready to transform?</div>
            <div className="text-gray-400 text-sm">Walk in today for your free trial session.</div>
          </div>
          <Link href="#contact"
            className="flex-shrink-0 bg-gold-500 hover:bg-gold-400 text-dark-900 font-black px-6 py-3 rounded-xl transition-all text-sm">
            Book Free Trial →
          </Link>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© 2024 AVS Fitness Pvt. Ltd. All rights reserved. | Pune, Maharashtra</p>
          <div className="flex gap-3 text-xs text-gray-600">
            <span>Mon–Sun: 5 AM – 11 PM</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
