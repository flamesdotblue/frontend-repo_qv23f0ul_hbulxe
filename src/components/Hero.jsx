import { ArrowRight, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-pink-100 blur-3xl opacity-60" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
              <Flame className="h-4 w-4 text-indigo-600" />
              Transform your body. Elevate your mind.
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Your New Favorite Gym Experience
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Science-backed programs, elite coaches, and a community that keeps you accountable. Train smarter, recover faster, and feel unstoppable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium shadow-sm hover:bg-gray-50"
              >
                Explore Programs
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <dt className="text-sm text-gray-500">Members</dt>
                <dd className="text-2xl font-semibold text-gray-900">10k+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Classes Weekly</dt>
                <dd className="text-2xl font-semibold text-gray-900">120+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Avg. Rating</dt>
                <dd className="text-2xl font-semibold text-gray-900">4.9/5</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1920&auto=format&fit=crop"
                alt="Athlete lifting weights in a modern gym"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
