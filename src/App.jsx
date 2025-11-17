import Header from './components/Header'
import Sections from './components/Sections'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">Life Moves</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">Art, movement, and mindfulness in one place. Learn, practice, and grow with community support.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/login" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-semibold shadow hover:bg-blue-700 transition-colors">Get Started</a>
          <a href="/library" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-5 py-3 font-semibold shadow border border-gray-200 hover:bg-gray-50 transition-colors">Explore Library</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Start your wellness journey today</h2>
        <p className="mt-2 text-gray-700">Try free sessions and unlock the full library with a Pro plan anytime.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/signup" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-3 font-semibold shadow hover:bg-blue-700 transition-colors">Create account</a>
          <a href="/plans" className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 font-semibold shadow border border-gray-200 hover:bg-gray-50 transition-colors">See plans</a>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <Sections />
      <CTA />
    </div>
  )
}

export default App
