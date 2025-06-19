import React from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">VipraCo</h3>
                <p className="text-slate-400 text-sm">AI HR Assistant</p>
              </div>
            </motion.div>

            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Empowering organizations with AI-driven HR solutions that deliver
              instant, secure, and personalized employee experiences.
            </p>

            <div className="text-sm text-slate-500 leading-relaxed">
              <p>CIN: U62099BR2023PTC064479</p>
              <p>Email: info@viprasoftware.com</p>
              <p className="mt-2">
                Corporate Office: Srikant Vista, 8th Cross Rd, Abbaiah Reddy
                Layout,
                <br />
                CV Raman Nagar, Bengaluru, Karnataka - 560093
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 tracking-wide text-white">
              Product
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Features
                </a>
              </li>
              <li>
                <Link
                  to="/assistant"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Demo
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 tracking-wide text-white">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom Links */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 VipraCo. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white hover:underline underline-offset-4 text-sm transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white hover:underline underline-offset-4 text-sm transition-all"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
