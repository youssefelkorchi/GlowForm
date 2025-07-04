import React, { useState } from 'react';
import { User, Mail, MessageCircle, ChevronDown, Zap, Sparkles, Brush, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  const [emailValid, setEmailValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailValid(emailRegex.test(value) || value === '');
    }
  };

  const FloatingParticles = () => (
    <div className="floating-particles">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background Gradient */}
      <div className="gradient-bg fixed inset-0 z-0" />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="font-clash text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Build your dream form
            </h1>
            <h2 className="font-clash text-4xl md:text-6xl font-bold mb-8 gradient-text">
              in minutes
            </h2>
          </div>
          
          <div className="fade-in fade-in-delay-1">
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Create stunning, interactive forms with beautiful animations and zero code. 
              Perfect for designers who want results without complexity.
            </p>
          </div>

          {/* Interactive Form Demo */}
          <div className="fade-in fade-in-delay-2">
            <div className="neumorphic max-w-md mx-auto p-8 relative">
              <h3 className="font-clash text-2xl font-semibold mb-6 text-center glow-text">
                Try it yourself
              </h3>
              
              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                             focus:outline-none input-glow text-white placeholder-gray-400"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg 
                             focus:outline-none input-glow text-white placeholder-gray-400
                             ${emailValid ? 'border-gray-600' : 'border-red-500'}`}
                  />
                  {!emailValid && (
                    <p className="text-red-400 text-sm mt-1">Please enter a valid email</p>
                  )}
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                             focus:outline-none input-glow text-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="development">Development</option>
                    <option value="consultation">Consultation</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <ChevronDown size={20} />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <div className="absolute left-3 top-4 text-gray-400">
                    <MessageCircle size={20} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                             focus:outline-none input-glow text-white placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button className="w-full py-3 button-gradient rounded-lg font-semibold text-white 
                                 transition-all duration-300 hover:scale-105 glow-box">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Why Choose GlowForm?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lightning Fast Setup */}
            <div className="text-center fade-in fade-in-delay-1">
              <div className="w-16 h-16 mx-auto mb-6 glow-box rounded-full flex items-center justify-center">
                <Zap size={40} className="text-blue-400" />
              </div>
              <h3 className="font-clash text-2xl font-semibold mb-4 glow-text">
                Lightning Fast Setup
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Get your forms up and running in minutes, not hours. Our intuitive interface 
                makes form creation effortless and enjoyable.
              </p>
            </div>

            {/* Stunning Animations */}
            <div className="text-center fade-in fade-in-delay-2">
              <div className="w-16 h-16 mx-auto mb-6 glow-box-secondary rounded-full flex items-center justify-center">
                <Sparkles size={40} className="text-purple-400" />
              </div>
              <h3 className="font-clash text-2xl font-semibold mb-4 glow-text">
                Stunning Animations
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Captivate your users with smooth, eye-catching animations that bring 
                your forms to life and improve user engagement.
              </p>
            </div>

            {/* Code-Free Design */}
            <div className="text-center fade-in fade-in-delay-3">
              <div className="w-16 h-16 mx-auto mb-6 glow-box-accent rounded-full flex items-center justify-center">
                <Brush size={40} className="text-pink-400" />
              </div>
              <h3 className="font-clash text-2xl font-semibold mb-4 glow-text">
                Code-Free Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Focus on creativity, not coding. Design beautiful forms with our 
                visual editor and let us handle the technical complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-morphism p-12 relative overflow-hidden">
            <FloatingParticles />
            
            <div className="relative z-10">
              <h2 className="font-clash text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already building amazing forms with GlowForm.
              </p>
              
              <button className="inline-flex items-center gap-3 px-8 py-4 button-gradient rounded-full 
                               text-lg font-semibold transition-all duration-300 hover:scale-105 glow-box">
                Start Building Now
                <ArrowRight size={20} />
              </button>
              
              <p className="text-gray-400 mt-4">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-clash text-2xl font-bold mb-4 gradient-text">
            GlowForm
          </div>
          <p className="text-gray-400">
            © 2025 GlowForm. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;