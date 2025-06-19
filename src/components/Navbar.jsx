import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 rounded-lg w-11 h-11 flex items-center justify-center shadow-md">
              <MessageCircle className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
                VipraCo
              </h1>
              <p className="text-xs text-slate-500">AI HR Assistant</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 font-medium text-slate-600">
            <ScrollLink
              to="features"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-blue-600 transition-all"
            >
              Features
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setIsMenuOpen(false)} // close menu after click
              className="px-2 cursor-pointer hover:text-blue-600 transition-all"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setIsMenuOpen(false)} // close menu after click
              className="px-2 cursor-pointer hover:text-blue-600 transition-all"
            >
              Testimonials
            </ScrollLink>

            <Link
              to="/assistant"
              className="ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              <span>Try Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 pt-4 pb-6">
            <div className="flex flex-col space-y-4 text-slate-600 font-medium">
              <a
                href="#features"
                className="px-2 hover:text-blue-600 transition-all"
              >
                Features
              </a>
              <a
                href="#about"
                className="px-2 hover:text-blue-600 transition-all"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="px-2 hover:text-blue-600 transition-all"
              >
                Testimonials
              </a>
              <Link
                to="/assistant"
                className="bg-blue-600 text-white px-5 py-2 rounded-xl w-fit hover:bg-blue-700 transition-all flex items-center gap-2 mt-2"
              >
                <span>Try Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
