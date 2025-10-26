import { Dumbbell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <Dumbbell className="h-6 w-6 text-indigo-600" />
            <span className="tracking-tight">Pulse Fitness</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#programs" className="text-gray-600 hover:text-gray-900 transition-colors">Programs</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800 transition-colors">Join Now</a>
            <button aria-label="Open menu" className="inline-flex md:hidden items-center rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
