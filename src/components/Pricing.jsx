import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 19,
    period: "mo",
    highlight: false,
    features: [
      "Gym floor access",
      "3 classes / week",
      "Locker room & showers",
      "Community events",
    ],
  },
  {
    name: "Elite",
    price: 49,
    period: "mo",
    highlight: true,
    features: [
      "Unlimited classes",
      "Personalized plan",
      "Recovery lounge",
      "Guest pass (2/mo)",
    ],
  },
  {
    name: "Pro Coach",
    price: 99,
    period: "mo",
    highlight: false,
    features: [
      "1:1 coaching (weekly)",
      "Form feedback",
      "Nutrition guidance",
      "Priority booking",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">No contracts. Cancel anytime. Start with a 7-day free trial.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.highlight ? "border-indigo-300 bg-white shadow-xl" : "border-gray-200 bg-white shadow-sm"
              } p-6 flex flex-col`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Most Popular</span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-gray-900">${plan.price}</span>
                <span className="text-sm text-gray-500">/{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
