import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Facilities from '../components/Facilities'
import Trainers from '../components/Trainers'
import Membership from '../components/Membership'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>AVS Fitness — Premium Gym in Pune</title>
        <meta name="description" content="AVS Fitness — Pune's most premium gym. 12,000 sq.ft of world-class training space, expert trainers, and programs for every goal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="AVS Fitness — Premium Gym in Pune" />
        <meta property="og:description" content="Build strength. Forge discipline. Define your limits at AVS Fitness, Pune." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Trainers />
        <Membership />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
