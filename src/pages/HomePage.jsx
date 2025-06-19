import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Globe,
  Award,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spline from "@splinetool/react-spline";
import { Link as ScrollLink } from "react-scroll";
import SubscriptionPlans from "../components/SubscriptionPlans";

const HomePage = () => {
  const stats = [
    { number: "10,000+", label: "Employees Served" },
    { number: "500+", label: "Organizations" },
    { number: "99.9%", label: "Uptime" },
    { number: "< 2s", label: "Response Time" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                AI-Powered HR Assistant
                <span className="block text-blue-600">
                  for Modern Workplaces
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                VipraCo delivers instant, secure, and personalized HR answers
                across organizations. Empower your employees with 24/7 AI
                assistance while reducing HR workload by 80%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Try Live Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="#features"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center space-x-3 text-lg font-semibold"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            {/* Right 3D Robot Section */}
            <div className="w-full h-[500px]">
              <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <Features />
      {/* About Section */}
      <About />
      {/* Testimonials Section */}
      <Testimonials />

      <SubscriptionPlans />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
