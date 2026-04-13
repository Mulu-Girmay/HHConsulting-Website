import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Cog, Construction, ClipboardCheck, TreePine } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Architectural Design",
      description: "Innovative and sustainable architectural solutions for modern living and commercial spaces."
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Engineering Systems",
      description: "Comprehensive MEP and structural engineering design for complex projects."
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: "Infrastructure Development",
      description: "Planning and design of roads, bridges, airports, and critical infrastructure."
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Project Management",
      description: "Full-service construction supervision and project coordination from concept to completion."
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "Environmental Assessment",
      description: "Environmental impact studies and sustainability consulting for responsible development."
    }
  ];

  const projects = [
    {
      category: "buildings",
      name: "Grand Commercial Tower",
      location: "Addis Ababa, Ethiopia",
      description: "45-story mixed-use development featuring retail, office, and residential spaces",
      value: "$120M",
      image: "https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      category: "airports",
      name: "International Airport Terminal",
      location: "Addis Ababa, Ethiopia",
      description: "State-of-the-art terminal expansion with capacity for 15 million passengers annually",
      value: "$450M",
      image: "https://images.unsplash.com/photo-1758087016878-7450e700eba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      category: "bridges",
      name: "Nile River Crossing",
      location: "Blue Nile Region, Ethiopia",
      description: "2.4km cable-stayed bridge connecting major economic zones",
      value: "$85M",
      image: "https://images.unsplash.com/photo-1759603955894-0e874a184e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      category: "buildings",
      name: "Modern Office Complex",
      location: "Nairobi, Kenya",
      description: "Eco-friendly corporate headquarters with LEED Gold certification",
      value: "$65M",
      image: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      category: "bridges",
      name: "Highland Expressway Bridge",
      location: "Ethiopian Highlands",
      description: "Multi-span prestressed concrete bridge through mountainous terrain",
      value: "$42M",
      image: "https://images.unsplash.com/photo-1724118135465-edeef6acf221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      category: "irrigation",
      name: "Agricultural Water System",
      location: "Awash Valley, Ethiopia",
      description: "Large-scale irrigation infrastructure serving 50,000 hectares of farmland",
      value: "$95M",
      image: "https://images.unsplash.com/photo-1598369980727-ff123e4b8ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const team = [
    {
      name: "Dr. Haile Gebremariam",
      role: "CEO & Principal Architect",
      education: "PhD Architecture, MIT"
    },
    {
      name: "Eng. Sarah Tesfaye",
      role: "Chief Engineer",
      education: "MSc Structural Engineering, TU Delft"
    },
    {
      name: "Eng. Michael Bekele",
      role: "Director of Infrastructure",
      education: "MSc Civil Engineering, Stanford"
    },
    {
      name: "Dr. Rahel Assefa",
      role: "Environmental Lead",
      education: "PhD Environmental Science, Oxford"
    }
  ];

  const stats = [
    { value: "30+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "$2.5B+", label: "Total Project Value" },
    { value: "15", label: "Countries Served" }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#F59E0B]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center">
                <span className="text-[#0F172A] font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>HH</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>HH Consulting</div>
                <div className="text-[#F59E0B] text-xs">Architects & Engineers</div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Services', 'Projects', 'Team', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#F59E0B] transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-t border-[#F59E0B]/20"
          >
            <div className="px-4 py-4 space-y-3">
              {['About', 'Services', 'Projects', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white hover:text-[#F59E0B] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 mb-6">
                <span className="text-[#F59E0B] text-sm font-medium">Established 1994</span>
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Engineered Excellence.<br />
                <span className="text-[#F59E0B]">Designed for the Future.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Your global partner in design and construction supervision
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-[#F59E0B] text-[#0F172A] font-semibold hover:bg-[#F59E0B]/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0F172A] transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-[#F59E0B] rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-2 w-20 bg-[#F59E0B] mb-6"></div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Building Africa's Future
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in Ethiopia in 1994, HH Consulting Architects & Engineers PLC has grown into one of Africa's most trusted consulting firms, delivering world-class engineering and architectural solutions across 15 countries.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of internationally trained engineers and architects combines global expertise with deep local knowledge, creating sustainable infrastructure that serves communities and drives economic growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to innovation, environmental responsibility, and excellence in every project we undertake—from iconic buildings to critical infrastructure that connects nations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1710701455648-e85f21bf3a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Modern building"
                  className="w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1686524904908-02b541949e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Airport terminal"
                  className="w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#F59E0B]/10 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="h-2 w-20 bg-[#F59E0B] mx-auto mb-6"></div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive engineering and architectural solutions for complex projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 border-b-4 border-transparent hover:border-[#F59E0B] transition-all duration-300 group"
              >
                <div className="text-[#0F172A] group-hover:text-[#F59E0B] transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="h-2 w-20 bg-[#F59E0B] mx-auto mb-6"></div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transforming landscapes with innovative infrastructure solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'buildings', 'airports', 'bridges', 'irrigation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#F59E0B] text-[#0F172A]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4 h-64">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#0F172A] px-4 py-2 font-bold">
                    {project.value}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F59E0B] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.name}
                </h3>
                <p className="text-[#F59E0B] text-sm mb-2">{project.location}</p>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F59E0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-5xl lg:text-6xl font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#0F172A]/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="h-2 w-20 bg-[#F59E0B] mx-auto mb-6"></div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Internationally recognized experts driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[#0F172A] to-[#1e293b] flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#F59E0B]/0 group-hover:bg-[#F59E0B]/10 transition-colors duration-300"></div>
                  <span className="text-6xl font-bold text-[#F59E0B]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-[#F59E0B] mb-2 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.education}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-2 w-20 bg-[#F59E0B] mb-6"></div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to discuss your next project? Our team is here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] mb-1">Head Office</h4>
                    <p className="text-gray-600">
                      Bole Road, Atlas Building 5th Floor<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] mb-1">Phone</h4>
                    <p className="text-gray-600">+251 11 661 8899</p>
                    <p className="text-gray-600">+251 11 661 9900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] mb-1">Email</h4>
                    <p className="text-gray-600">info@hhconsulting.et</p>
                    <p className="text-gray-600">projects@hhconsulting.et</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 border-l-4 border-[#F59E0B]"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:border-[#F59E0B] focus:outline-none transition-colors">
                    <option>Select a service</option>
                    <option>Architectural Design</option>
                    <option>Engineering Systems</option>
                    <option>Infrastructure Development</option>
                    <option>Project Management</option>
                    <option>Environmental Assessment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#F59E0B] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] text-[#0F172A] font-bold py-4 hover:bg-[#d97706] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center">
                  <span className="text-[#0F172A] font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>HH</span>
                </div>
                <div>
                  <div className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>HH Consulting</div>
                  <div className="text-[#F59E0B] text-xs">Architects & Engineers</div>
                </div>
              </div>
              <p className="text-gray-400">
                Building Africa's future through innovative engineering and architectural excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Services', 'Projects', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-400 hover:text-[#F59E0B] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Office Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HH Consulting Architects & Engineers PLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
