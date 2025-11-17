import { Sparkles, Library, Users, Trophy } from 'lucide-react'

export default function Sections() {
  const features = [
    { icon: <Library className="w-6 h-6" />, title: 'Wellness Library', desc: 'Art, movement, mindfulness. Curated lessons and sessions.' },
    { icon: <Users className="w-6 h-6" />, title: 'Squads & Community', desc: 'Join accountability squads and share progress.' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Progress Tracking', desc: 'Daily check-ins, streaks, and weekly tasks.' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Programs & Challenges', desc: 'Guided multi-week programs and friendly competitions.' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow bg-white">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
