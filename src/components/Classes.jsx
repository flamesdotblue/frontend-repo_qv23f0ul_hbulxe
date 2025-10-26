import { Dumbbell, Heart, Timer, Activity } from "lucide-react";

const classes = [
  {
    title: "Strength & Conditioning",
    description: "Progressive weight training to build muscle and boost performance.",
    icon: Dumbbell,
    color: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "HIIT & MetCon",
    description: "High-intensity intervals for fat loss and metabolic conditioning.",
    icon: Activity,
    color: "bg-pink-50 text-pink-700",
  },
  {
    title: "Mobility & Recovery",
    description: "Improve flexibility, reduce pain, and speed up recovery.",
    icon: Heart,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Endurance & Cardio",
    description: "Build stamina with coached runs, rides, and row sessions.",
    icon: Timer,
    color: "bg-amber-50 text-amber-700",
  },
];

export default function Classes() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Programs that fit your goals</h2>
          <p className="mt-3 text-gray-600">
            Whether you’re just starting or pushing for a new PR, our expert-designed programs adapt to you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((cls) => (
            <div key={cls.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex items-center justify-center rounded-lg ${cls.color} h-12 w-12 ring-1 ring-black/5`}>
                <cls.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{cls.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{cls.description}</p>
              <a href="#pricing" className="mt-4 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Join this class →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
