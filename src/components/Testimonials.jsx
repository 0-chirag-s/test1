import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Star,
  Building2,
} from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arijeet Das",
      role: "Engineering Manager, Site crafter",
      content:
        "VipraCo has transformed how our employees interact with HR. No more waiting for simple queries!",
    },
    {
      name: "Gowtham",
      role: "Production Manager, National College",
      content:
        "The multi-tenant architecture ensures our data stays secure while providing instant access to policies.",
    },
    {
      name: "Dr Danish",
      role: "Director, BMS College",
      content:
        "Our HR team can now focus on strategic initiatives instead of answering repetitive questions.",
    },
  ];

  // Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-slate-600">
              See what our clients say about VipraCo's impact on their HR
              operations
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={card}
                className="bg-white group p-8 rounded-2xl shadow-sm border border-slate-100 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl will-change-transform"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-600 group-hover:text-blue-100 mb-6 leading-relaxed transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 group-hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300">
                    <Building2 className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 group-hover:text-white transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using VipraCo to empower
            their employees and streamline HR processes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/assistant"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center space-x-3 text-lg font-semibold shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Start Free Demo</span>
            </Link>

            <a
              href="mailto:info@viprasoftware.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-3 text-lg font-semibold"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
