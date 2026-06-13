# AVS Fitness — Next.js Website

Premium single-gym portfolio website for **AVS Fitness, Pune**.

## Sections
- Navbar (sticky, transparent → solid on scroll, mobile menu)
- Hero (animated tagline, stats, gym status card)
- About (story, achievements, key metrics)
- Programs (6 programs: weights, HIIT, yoga, boxing, cycling, functional)
- Facilities (8 facility cards with sticky left panel)
- Trainers (4 certified trainer profiles)
- Membership (Silver / Gold / Platinum with monthly/quarterly/annual toggle)
- Gallery (CSS grid layout of gym zones)
- Testimonials (3 reviews + stats bar)
- Contact (contact info + free trial booking form)
- Footer (links, CTA banner, timings)

## Run Locally

```bash
# Requires Node.js 18+
cd avs-fitness
npm install
npm run dev
# Open http://localhost:3000
```

## Customise
- **Gym name/address**: `components/Navbar.js`, `components/Footer.js`, `components/Contact.js`
- **Pricing**: `components/Membership.js`
- **Trainers**: `components/Trainers.js`
- **Programs**: `components/Programs.js`
- **Colors**: `tailwind.config.js` → `gold` and `dark` palette
# AVS-fitness
