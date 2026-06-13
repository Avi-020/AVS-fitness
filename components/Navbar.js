import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 select-none group">
            <div className="w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center font-black text-dark-900 text-sm group-hover:scale-110 transition-transform">
              AVS
            </div>
            <div>
              <div className="text-white font-black text-lg leading-none tracking-wide">AVS FITNESS</div>
              <div className="text-gold-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Premium Gym · Pune</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
            {links.map(l => (
              <Link key={l.label} href={l.href}
                className="hover:text-gold-400 transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="#membership"
              className="bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-105">
              Join Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-800 border-t border-white/10 px-4 pb-6 pt-4">
          {links.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-gold-400 font-medium border-b border-white/5 transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="#membership" onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-gold-500 text-dark-900 font-bold py-3 rounded-lg">
            Join Now
          </Link>
        </div>
      )}
    </nav>
  )
}
