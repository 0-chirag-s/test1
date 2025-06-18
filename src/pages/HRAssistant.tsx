import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Send, User, Building2, LogOut, Menu, X, Calendar, Clock, DollarSign, MapPin, Mail, UserCheck, Briefcase, Home, ArrowLeft } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  manager: string;
  joinDate: string;
  location: string;
  leaveBalance: {
    casual: number;
    sick: number;
    earned: number;
  };
  salary: {
    base: number;
    ctc: number;
  };
}

interface Organization {
  id: string;
  name: string;
  plan: string;
}

const organizations: Organization[] = [
  { id: '1', name: 'Site Crafter', plan: 'Basic' },
  { id: '2', name: 'BMS college', plan: 'Standard' },
  { id: '3', name: 'National college', plan: 'Enterprise' }
];

const employees: { [key: string]: Employee } = {
  '1': {
    id: 'TCI_EMP002',
    name: 'test1_employee',
    email: 'test1_employee@sitecrafter.com',
    role: 'Software Engineer',
    department: 'Engineering',
    manager: 'Arijeet',
    joinDate: '2021-03-10',
    location: 'Bangalore',
    leaveBalance: { casual: 7, sick: 6, earned: 10 },
    salary: { base: 45000, ctc: 85000 }
  },
  '2': {
    id: 'MGF_EMP002',
    name: 'test2_employee',
    email: 'test2_employee.devi@bmscollege.com',
    role: 'Quality Control Specialist',
    department: 'Quality Control',
    manager: 'Chinmay',
    joinDate: '2022-09-01',
    location: 'Bangalore',
    leaveBalance: { casual: 6, sick: 6, earned: 8 },
    salary: { base: 30000, ctc: 55000 }
  },
  '3': {
    id: 'EDU_EMP001',
    name: 'test2_employee',
    email: 'test2_employee@nationalcollege.com',
    role: 'Academic Coordinator',
    department: 'Academics',
    manager: 'Dr. Abhay',
    joinDate: '2020-06-15',
    location: 'bangalore',
    leaveBalance: { casual: 8, sick: 7, earned: 12 },
    salary: { base: 55000, ctc: 95000 }
  }
};

const HRAssistant = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<Organization>(organizations[0]);
  const [currentEmployee, setCurrentEmployee] = useState<Employee>(employees['1']);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello ${employees['1'].name}! I'm test1, your AI HR assistant. I can help you with leave balances, company policies, salary information, and more. What would you like to know?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleLogin = (orgId: string) => {
    const org = organizations.find(o => o.id === orgId)!;
    const employee = employees[orgId];
    
    setSelectedOrg(org);
    setCurrentEmployee(employee);
    setIsLoggedIn(true);
    
    setMessages([{
      id: Date.now().toString(),
      text: `Hello ${employee.name}! I'm test1, your AI HR assistant for ${org.name}. I can help you with leave balances, company policies, salary information, and more. What would you like to know?`,
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('leave') && (message.includes('balance') || message.includes('left'))) {
      if (message.includes('casual')) {
        return `You have ${currentEmployee.leaveBalance.casual} casual leaves remaining.`;
      } else if (message.includes('sick')) {
        return `You have ${currentEmployee.leaveBalance.sick} sick leaves remaining.`;
      } else if (message.includes('earned')) {
        return `You have ${currentEmployee.leaveBalance.earned} earned leaves remaining.`;
      } else {
        return `Your current leave balance:\n• Casual Leave: ${currentEmployee.leaveBalance.casual} days\n• Sick Leave: ${currentEmployee.leaveBalance.sick} days\n• Earned Leave: ${currentEmployee.leaveBalance.earned} days`;
      }
    }
    
    if (message.includes('salary') || message.includes('ctc') || message.includes('compensation')) {
      return `Your current compensation details:\n• Base Salary: ₹${currentEmployee.salary.base.toLocaleString()}\n• CTC: ₹${currentEmployee.salary.ctc.toLocaleString()}`;
    }
    
    if (message.includes('manager') || message.includes('reporting')) {
      return `Your reporting manager is ${currentEmployee.manager}.`;
    }
    
    if (message.includes('employee id') || message.includes('emp id')) {
      return `Your employee ID is ${currentEmployee.id}.`;
    }
    
    if (message.includes('department') || message.includes('team')) {
      return `You work in the ${currentEmployee.department} department.`;
    }
    
    if (message.includes('joining') || message.includes('join date')) {
      return `You joined ${selectedOrg.name} on ${new Date(currentEmployee.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`;
    }
    
    if (message.includes('policy') || message.includes('wfh') || message.includes('work from home')) {
      if (selectedOrg.id === '1') {
        return `Site Crafter's Work from Home Policy: Employees are allowed to work from home for up to 2 days a week, with prior manager approval. Ensure stable internet connection and productive environment.`;
      } else if (selectedOrg.id === '2') {
        return `Attendance & Punctuality Policy: All college staff must clock in daily using biometric scanners. Lateness will result in a deduction from pay after 3 instances.`;
      }
      return `Please contact HR for specific policy information.`;
    }
    
    if (message.includes('holiday') || message.includes('next holiday')) {
      if (selectedOrg.id === '1') {
        return `The next company holiday for Site Crafter employees in Bangalore is Independence Day, August 15, 2025.`;
      } else if (selectedOrg.id === '2') {
        return `Upcoming public holidays in UP for 2025 include Diwali (Oct 29), Chhath Puja (Nov 5-6), and Christmas (Dec 25).`;
      }
      return `Please check the company calendar for upcoming holidays.`;
    }
    
    if (message.includes('profile') || message.includes('information') || message.includes('details')) {
      return `Your Profile:\n• Name: ${currentEmployee.name}\n• Email: ${currentEmployee.email}\n• Role: ${currentEmployee.role}\n• Department: ${currentEmployee.department}\n• Location: ${currentEmployee.location}\n• Manager: ${currentEmployee.manager}`;
    }
    
    // Default responses
    const defaultResponses = [
      "I can help you with leave balances, salary information, company policies, and your profile details. What specific information do you need?",
      "I'm here to assist with HR-related queries. You can ask about your leaves, compensation, manager details, or company policies.",
      "Feel free to ask about your leave balance, salary details, company policies, or any other HR-related questions!"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const switchOrganization = (orgId: string) => {
    const org = organizations.find(o => o.id === orgId)!;
    const employee = employees[orgId];
    
    setSelectedOrg(org);
    setCurrentEmployee(employee);
    setShowSidebar(false);
    
    setMessages([{
      id: Date.now().toString(),
      text: `Hello ${employee.name}! I'm test1, your AI HR assistant for ${org.name}. I can help you with leave balances, company policies, salary information, and more. What would you like to know?`,
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-white w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">test1</h1>
            <p className="text-slate-600">AI-Powered HR Assistant</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-700 mb-4">Select Your Organization</h2>
            {organizations.map((org) => (
              <button
                key={org.id}
                onClick={() => handleLogin(org.id)}
                className="w-full p-4 text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <Building2 className="text-slate-400 group-hover:text-blue-600 w-5 h-5" />
                  <div>
                    <div className="font-medium text-slate-800">{org.name}</div>
                    <div className="text-sm text-slate-500">{org.plan} Plan</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Demo accounts with sample HR data
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center">
                  <MessageCircle className="text-white w-5 h-5" />
                </div>
                <div>
                  <h1 className="font-bold text-slate-800">test1</h1>
                  <p className="text-xs text-slate-500">{selectedOrg.plan} Plan</p>
                </div>
              </div>
              <button
                onClick={() => setShowSidebar(false)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Employee Info */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center">
                <User className="text-slate-600 w-6 h-6" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-800">{currentEmployee.name}</h2>
                <p className="text-sm text-slate-500">{currentEmployee.role}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="text-slate-400 w-4 h-4" />
                <span className="text-slate-600">{currentEmployee.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Briefcase className="text-slate-400 w-4 h-4" />
                <span className="text-slate-600">{currentEmployee.department}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="text-slate-400 w-4 h-4" />
                <span className="text-slate-600">{currentEmployee.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <UserCheck className="text-slate-400 w-4 h-4" />
                <span className="text-slate-600">{currentEmployee.manager}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Calendar className="text-blue-600 w-4 h-4" />
                  <span className="text-xs text-blue-600 font-medium">Casual</span>
                </div>
                <div className="text-lg font-bold text-blue-800">{currentEmployee.leaveBalance.casual}</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Clock className="text-green-600 w-4 h-4" />
                  <span className="text-xs text-green-600 font-medium">Sick</span>
                </div>
                <div className="text-lg font-bold text-green-800">{currentEmployee.leaveBalance.sick}</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg col-span-2">
                <div className="flex items-center space-x-2 mb-1">
                  <DollarSign className="text-purple-600 w-4 h-4" />
                  <span className="text-xs text-purple-600 font-medium">CTC</span>
                </div>
                <div className="text-lg font-bold text-purple-800">₹{currentEmployee.salary.ctc.toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* Organization Switcher */}
          <div className="flex-1 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Switch Organization</h3>
            <div className="space-y-2">
              {organizations.map((org) => (
                <button
                  key={org.id}
                  onClick={() => switchOrganization(org.id)}
                  className={`w-full p-3 text-left rounded-lg transition-all duration-200 ${
                    selectedOrg.id === org.id
                      ? 'bg-blue-100 border border-blue-200 text-blue-800'
                      : 'bg-slate-50 hover:bg-slate-100 border border-transparent text-slate-700'
                  }`}
                >
                  <div className="font-medium text-sm">{org.name}</div>
                  <div className="text-xs opacity-75">{org.plan}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="p-6 border-t border-slate-200">
            <Link
              to="/"
              className="flex items-center space-x-3 w-full p-3 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors duration-200 mb-2"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center space-x-3 w-full p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSidebar(true)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
              >
                <Menu className="w-5 h-5 text-slate-600" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-slate-800">{selectedOrg.name}</h1>
                <p className="text-sm text-slate-500">Chat with test1 AI Assistant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white ml-auto'
                    : 'bg-white border border-slate-200 text-slate-800'
                }`}
              >
                <p className="whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-2 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-slate-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="bg-white border-t border-slate-200 p-4">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about your leaves, salary, policies, or any HR query..."
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={1}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
};

export default HRAssistant;
