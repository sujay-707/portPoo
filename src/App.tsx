import React from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram, 
  TrendingUp, 
  Edit3, 
  Search, 
  Target, 
  BarChart3, 
  Palette, 
  MessageCircle, 
  Calendar, 
  FileText, 
  Zap, 
  ExternalLink,
  MapPin,
  Briefcase,
  Star,
  Users,
  Globe,
  BookOpen,
  Camera,
  Heart
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-lavender-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-72 h-96 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/10">
                  <img 
                    src="/pooja1.jpg.png" 
                    alt="Pooja Hubli - Digital Marketer & Content Strategist"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-1/4 -right-6 w-5 h-5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Pooja Hubli
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-purple-100">
                Freelance Digital Marketer & Content Strategist
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-purple-100 max-w-2xl leading-relaxed mb-8">
                Helping brands grow through powerful content, strategy, and creativity.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
                <a href="mailto:poojahubli2000@gmail.com" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                  poojahubli2000@gmail.com
                </a>
                <a href="tel:+91-8660269138" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                  +91-8660269138
                </a>
                <a href="https://linkedin.com/in/pooja-hubli-a29a08221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ✨ About Me
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Hi, I'm Pooja Hubli, a passionate freelance Digital Marketer & Content Strategist who thrives on building brands through engaging storytelling, impactful visuals, and smart strategies.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                I've worked with a diverse set of clients including fitness brands, astrologers, event management companies, and educational institutions. I specialize in content writing, social media strategy, and creative campaigns.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">Instagram</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">Canva</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">Meta Ads</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">ChatGPT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🎯 Skills & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, text: "Social Media Management" },
              { icon: Target, text: "Content Strategy" },
              { icon: Search, text: "SEO (On/Off-Page, Keyword Research)" },
              { icon: Edit3, text: "Creative Copywriting" },
              { icon: BarChart3, text: "Meta Ads Manager" },
              { icon: Palette, text: "Canva, ChatGPT, GMB" },
              { icon: BarChart3, text: "Analytics, Google Sheets" },
              { icon: MessageCircle, text: "Brand Communication" }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <skill.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm md:text-base font-medium text-gray-700">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🧾 Services Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, title: "Social Media Management", desc: "Complete social media strategy and execution" },
              { icon: Calendar, title: "Content Calendars & Strategy", desc: "Strategic content planning and scheduling" },
              { icon: FileText, title: "Reels & Script Writing", desc: "Engaging video content and scripts" },
              { icon: Search, title: "SEO Blog & Web Copy", desc: "Optimized content for search engines" },
              { icon: Zap, title: "Paid Ad Creatives", desc: "High-converting ad copy and visuals" },
              { icon: Heart, title: "Brand Storytelling", desc: "Compelling narratives that connect with audiences" }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🧾 Client Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                company: "Framebox", 
                role: "Ad Content Creator & Shoot Coordinator", 
                icon: Camera,
                color: "from-purple-500 to-pink-500"
              },
              { 
                company: "SoulFit Dubai", 
                role: "Content Specialist", 
                icon: Star,
                color: "from-blue-500 to-purple-500"
              },
              { 
                company: "Dr. Sidhant Arun Guruji", 
                role: "Spiritual Content Creator", 
                icon: Heart,
                color: "from-indigo-500 to-purple-500"
              },
              { 
                company: "SET Institute", 
                role: "Scriptwriter & Social Media Creator", 
                icon: BookOpen,
                color: "from-purple-500 to-indigo-500"
              },
              { 
                company: "Evolves Event Co.", 
                role: "Social Media Strategist", 
                icon: Users,
                color: "from-pink-500 to-purple-500"
              }
            ].map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-full flex items-center justify-center mb-6`}>
                  <client.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{client.company}</h3>
                <p className="text-purple-600 font-medium">{client.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            💼 Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Website Manager</h3>
                    <p className="text-purple-600 font-medium">Colive</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">Feb 2025 – Present</p>
                <p className="text-gray-700">Managing website operations and digital presence for innovative co-living solutions.</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Social Media Manager</h3>
                    <p className="text-purple-600 font-medium">Extro Marketing Agency</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">Mar 2023 – Feb 2025</p>
                <p className="text-gray-700">Led social media strategies and content creation for multiple clients across diverse industries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            📞 Let's Work Together
          </h2>
          <p className="text-xl mb-12 text-purple-100 max-w-2xl mx-auto">
            Ready to elevate your brand with strategic content and creative campaigns? Let's connect and make it happen!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:poojahubli2000@gmail.com" className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300">
              <Mail className="w-5 h-5" />
              <span>poojahubli2000@gmail.com</span>
            </a>
            <a href="tel:+91-8660269138" className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300">
              <Phone className="w-5 h-5" />
              <span>+91-8660269138</span>
            </a>
          </div>
          
          <a 
            href="https://linkedin.com/in/pooja-hubli-a29a08221" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Pooja Hubli. Crafted with creativity and strategy.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;