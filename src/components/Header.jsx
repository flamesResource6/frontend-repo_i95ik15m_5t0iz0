import { Menu, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">Life Moves</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="/library" className="hover:text-gray-900">Library</a>
          <a href="/community" className="hover:text-gray-900">Community</a>
          <a href="/progress" className="hover:text-gray-900">Progress</a>
          <a href="/plans" className="hover:text-gray-900">Plans</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/login" className="hidden sm:inline-flex items-center rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium hover:bg-gray-50">Log in</a>
          <a href="/signup" className="inline-flex items-center rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm font-semibold shadow hover:bg-blue-700">Join</a>
          <button className="md:hidden inline-flex items-center p-2 rounded hover:bg-gray-100" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
