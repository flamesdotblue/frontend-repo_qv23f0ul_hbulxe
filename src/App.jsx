import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <Pricing />

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Come train with us</h3>
                <p className="mt-3 text-gray-600">
                  Have questions about memberships, classes, or personal coaching? Drop your email and our team will reach out within a day.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <li className="rounded-lg border border-gray-200 p-4">Open 5am – 11pm</li>
                  <li className="rounded-lg border border-gray-200 p-4">Free parking</li>
                  <li className="rounded-lg border border-gray-200 p-4">Towel service</li>
                  <li className="rounded-lg border border-gray-200 p-4">Sauna + ice baths</li>
                </ul>
              </div>
              <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Alex" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Morgan" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">What are your goals?</label>
                    <textarea className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows="4" placeholder="Build muscle, drop 10lbs, run a faster 5k..." />
                  </div>
                </div>
                <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500 transition-colors w-full">
                  Request a call
                </button>
                <p className="mt-3 text-xs text-gray-500 text-center">We respect your inbox. No spam, ever.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pulse Fitness. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#programs" className="hover:text-gray-900">Programs</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
