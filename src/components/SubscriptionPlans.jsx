import React from "react";

const plans = [
  {
    title: "Starter",
    price: "Free",
    features: ["Up to 50 users", "Basic HR queries", "Community support"],
    button: "Get Started",
  },
  {
    title: "Pro",
    price: "$29/month",
    features: ["Up to 500 users", "Priority support", "Customizable workflows"],
    button: "Choose Pro",
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Unlimited users", "Dedicated support", "Advanced analytics"],
    button: "Contact Sales",
  },
];

const SubscriptionPlans = () => {
  return (
    <section id="plans" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Subscription Plans</h2>
        <p className="text-slate-600 mb-12">Choose a plan that fits your organization's needs.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
              <ul className="text-slate-600 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
