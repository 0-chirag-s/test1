import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  X
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "Instant AI Responses",
      description: "Get immediate answers to HR queries 24/7 with our advanced AI assistant"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Multi-Tenant Security",
      description: "Enterprise-grade security with complete data isolation for each organization"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "Retrieve personalized employee data and policies in milliseconds"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Scalable Architecture",
      description: "Built to handle thousands of organizations and millions of employees"
    }
  ];

  const benefits = [
    "Reduces HR workload by 80%",
    "24/7 instant employee support",
    "Personalized responses for each employee",
    "Seamless integration with existing HRMS",
    "Advanced multi-tenant architecture",
    "Enterprise-grade security & compliance"
  ];

  const stats = [
    { number: "10,000+", label: "Employees Served" },
    { number: "500+", label: "Organizations" },
    { number: "99.9%", label: "Uptime" },
    { number: "< 2s", label: "Response Time" }
  ];

  const testimonials = [
    {
      name: "Arijeet Das",
      role: "Engineering Manager, Site crafter",
      content: "test1 has transformed how our employees interact with HR. No more waiting for simple queries!"
    },
    {
      name: "Gowtham",
      role: "Production Manager, National college",
      content: "The multi-tenant architecture ensures our data stays secure while providing instant access to policies."
    },
    {
      name: "Dr Danish",
      role: "Director, BMS College",
      content: "Our HR team can now focus on strategic initiatives instead of answering repetitive questions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Test1</h1>
                <p className="text-xs text-slate-500">AI HR Assistant</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <Link 
                to="/assistant" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>Try Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">Testimonials</a>
                <Link 
                  to="/assistant" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 w-fit"
                >
                  <span>Try Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              AI-Powered HR Assistant
              <span className="block text-blue-600">for Modern Workplaces</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              test1 delivers instant, secure, and personalized HR answers across organizations. 
              Empower your employees with 24/7 AI assistance while reducing HR workload by 80%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/assistant" 
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Powerful Features for Modern HR
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built with cutting-edge technology to revolutionize how employees interact with HR systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Revolutionizing HR with AI Intelligence
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                test1 is an advanced AI-driven HR assistant that transforms how employees access 
                information and interact with HR systems. Built on a robust multi-tenant architecture, 
                it ensures secure, personalized, and instant responses to employee queries.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/assistant" 
                className="inline-flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Experience test1</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-800">test1 Assistant</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    "Hello gowtham! You have 7 casual leaves remaining and your next salary credit is on 30th January."
                  </p>
                </div>
                
                <div className="bg-blue-600 rounded-xl shadow-lg p-6 ml-8">
                  <p className="text-white text-sm">
                    "What's my leave balance and when is my next salary?"
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-slate-600">
              See what our clients say about test1's impact on their HR operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using test1 to empower their employees 
            and streamline HR processes.
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

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">test1</h3>
                  <p className="text-slate-400 text-sm">AI HR Assistant</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Empowering organizations with AI-driven HR solutions that deliver instant, 
                secure, and personalized employee experiences.
              </p>
              <div className="text-sm text-slate-500">
                <p>CIN: U62099BR2023PTC064479</p>
                <p>Email: info@viprasoftware.com</p>
                <p className="mt-2">Corporate Office: Srikant Vista, 8th Cross Rd, Abbaiah Reddy Layout,<br />CV Raman Nagar, Bengaluru, Karnataka India - 560093</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/assistant" className="hover:text-white transition-colors">Demo</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 test1. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
