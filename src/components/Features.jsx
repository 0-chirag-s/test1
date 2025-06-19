import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Shield, Zap, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: (
        <MessageCircle className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors duration-300" />
      ),
      title: "Instant AI Responses",
      description:
        "Get immediate answers to HR queries 24/7 with our advanced AI assistant",
    },
    {
      icon: (
        <Shield className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors duration-300" />
      ),
      title: "Multi-Tenant Security",
      description:
        "Enterprise-grade security with complete data isolation for each organization",
    },
    {
      icon: (
        <Zap className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors duration-300" />
      ),
      title: "Lightning Fast",
      description:
        "Retrieve personalized employee data and policies in milliseconds",
    },
    {
      icon: (
        <Users className="w-8 h-8 group-hover:text-white text-blue-600 transition-colors duration-300" />
      ),
      title: "Scalable Architecture",
      description:
        "Built to handle thousands of organizations and millions of employees",
    },
  ];

  // Framer Motion Variants for container & cards
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Powerful Features for Modern HR
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built with cutting-edge technology to revolutionize how employees
            interact with HR systems
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white group p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:bg-blue-600 cursor-pointer hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 transform hover:-translate-y-3 hover:scale-[1.03] will-change-transform"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors duration-300 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
