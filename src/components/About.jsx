import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "Reduces HR workload by 80%",
    "24/7 instant employee support",
    "Personalized responses for each employee",
    "Seamless integration with existing HRMS",
    "Advanced multi-tenant architecture",
    "Enterprise-grade security & compliance",
  ];

  const benefitContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const benefitItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Revolutionizing HR with AI Intelligence
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              VipraCo is an advanced AI-driven HR assistant that transforms how
              employees access information and interact with HR systems. Built
              on a robust multi-tenant architecture, it ensures secure,
              personalized, and instant responses to employee queries.
            </p>

            <motion.div
              className="space-y-4 mb-10"
              variants={benefitContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={benefitItem}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <Link
              to="/assistant"
              className="inline-flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              <span className="font-medium">Experience VipraCo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right Visual Panel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-3xl p-8 shadow-inner">
              {/* Bot Reply */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-800">
                    VipraCo Assistant
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  “Hello Gowtham! You have <strong>7 casual leaves</strong> left
                  and your next salary will be credited on{" "}
                  <strong>30th January</strong>.”
                </p>
              </div>

              {/* User Query */}
              <div className="bg-blue-600 text-white rounded-xl shadow-xl p-6 ml-10 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300">
                <p className="text-sm">
                  "What's my leave balance and when is my next salary?"
                </p>
              </div>
            </div>

            {/* Floating Clock Icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 bg-green-500 text-white p-3 rounded-full shadow-lg"
            >
              <Clock className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
