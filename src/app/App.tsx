import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Building2,
  Cog,
  Construction,
  ClipboardCheck,
  TreePine,
} from "lucide-react";
import { ImageWithFallback } from "./components/ImageWithFallback/ImageWithFallback";

import haileImage from "../assets/haile.png";
import saraImage from "../assets/Sara.png";
import yitbarekImage from "../assets/yitbarek.png";
import haileGImage from "../assets/HaileG.png";
import logoImage from "../assets/logo.png";

type Project = {
  category: "buildings" | "infrastructure" | "landmark" | "engineering";
  name: string;
  location: string;
  value?: string;
  description: string;
  image: string;
  imageAlt: string;
};

const aboutSlides = [
  { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80", label: "Architectural Design" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", label: "Project Management" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", label: "Infrastructure" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80", label: "Engineering" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80", label: "Urban Development" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80", label: "Sustainable Architecture" },
  { src: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=800&q=80", label: "Structural Engineering" },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", label: "Construction" },
];

function AboutSlideshow() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % aboutSlides.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl h-[280px] sm:h-[360px] lg:h-[420px]">
        {/* Slides */}
        {aboutSlides.map((s, i) => (
          <motion.img
            key={s.src}
            src={s.src}
            alt={s.label}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === slide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />

        {/* Logo watermark top-right */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
          <img src={logoImage} alt="HH Consulting" className="h-8 w-auto opacity-90" />
        </div>

        {/* Current slide label */}
        <div className="absolute bottom-14 left-0 right-0 text-center">
          <motion.span
            key={slide}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-[#F59E0B]/90 text-[#0F172A] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
          >
            {aboutSlides[slide].label}
          </motion.span>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {aboutSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide ? "bg-[#F59E0B] w-5" : "bg-white/40 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#F59E0B]/10 -z-10 rounded-full" />
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F59E0B]/5 -z-10 rounded-full" />
    </motion.div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      alt: "Modern Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
      alt: "Addis Ababa Skyline",
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
      alt: "Infrastructure Construction",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Architectural Design",
      description:
        "Innovative and sustainable architectural solutions for modern living and commercial spaces.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Engineering Systems",
      description:
        "Comprehensive MEP and structural engineering design for complex projects.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: "Infrastructure Development",
      description:
        "Planning and design of roads, bridges, airports, and critical infrastructure.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Project Management",
      description:
        "Full-service construction supervision and project coordination from concept to completion.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "Environmental Assessment",
      description:
        "Environmental impact studies and sustainability consulting for responsible development.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Urban Planning",
      description:
        "Strategic urban development planning and zoning for sustainable city growth.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Structural Engineering",
      description:
        "Advanced structural analysis and design for buildings and infrastructure.",
      image:
        "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: "Construction Consulting",
      description:
        "Expert construction methodology and material selection consulting.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const projectCategories = [
    { id: "all", label: "All" },
    { id: "buildings", label: "Buildings" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "landmark", label: "Landmark" },
    { id: "engineering", label: "Engineering" },
  ];

  const projects: Project[] = [
    {
      category: "buildings",
      name: "Kebede Mixed Use G+34",
      location: "Addis Ababa, Ethiopia",
      description:
        "High-rise mixed-use development with commercial frontage and upper-floor office and residential space.",
      image:
        "https://ddgconstructions.com/extensions/uploads/sites/163/2024/09/photo_2024-09-25_12-05-20-1024x682.jpg",
      imageAlt: "Representative mixed-use development in Ethiopia",
    },
    {
      category: "buildings",
      name: "Churchill Hotel",
      location: "Churchill Avenue, Addis Ababa, Ethiopia",
      description:
        "Urban hospitality project positioned in a central historic corridor of Addis Ababa.",
      image:
        "https://images.trvl-media.com/lodging/32000000/31670000/31670000/31669992/53185735.jpg?impolicy=resizecrop&ra=fit&rw=598",
      imageAlt: "Exterior view of Churchill Hotel in Addis Ababa",
    },
    {
      category: "buildings",
      name: "Haramaya University Guest House",
      location: "Haramaya, Oromia, Ethiopia",
      description:
        "Guest accommodation facility supporting university visitors, staff, and academic partners.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/Haramaya_gate.jpg",
      imageAlt: "Haramaya University main gate",
    },
    {
      category: "infrastructure",
      name: "Axum International Airport",
      location: "Axum, Tigray Region, Ethiopia",
      description:
        "Airport infrastructure serving northern Ethiopia and regional air connectivity.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Axum_Airport_Stehmann-1.jpg/250px-Axum_Airport_Stehmann-1.jpg",
      imageAlt: "Axum Airport terminal area",
    },
    {
      category: "infrastructure",
      name: "Jimma Airport",
      location: "Jimma, Oromia, Ethiopia",
      description:
        "Regional aviation gateway supporting passenger access and economic links in southwest Ethiopia.",
      image:
        "data:image/jpeg;base64,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",
      imageAlt: "Representative view of Jimma, Ethiopia",
    },
    {
      category: "landmark",
      name: "Bule Hora Stadium",
      location: "Bule Hora, Oromia, Ethiopia",
      description:
        "Community sports venue envisioned as a civic landmark for the growing Bule Hora area.",
      image:
        "https://www.bhu.edu.et/sites/default/files/slideshows%20documents/wonddd.jpg",
      imageAlt: "Representative Bule Hora area image",
    },
    {
      category: "engineering",
      name: "Sidama Bridge Projects",
      location: "Sidama Region, Ethiopia",
      description:
        "Bridge engineering works focused on improving movement, access, and network resilience.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Bridge_over_the_Blue_Nile%2C_Ethiopia.jpg",
      imageAlt: "Representative bridge project image from Ethiopia",
    },
  ];

  const team = [
    {
      name: "HAILEMICHAEL SOLOMON",
      role: "GENERAL MANAGER",
      image: haileImage,
    },
    {
      name: "FEVEN GIRMA",
      role: "DEPUTY GENERAL MANAGER",
      image: saraImage,
    },
    {
      name: "YITBAREK TEKLE",
      role: "HUMAN RESOURCE DEPARTMENT",
      image: yitbarekImage,
    },
    {
      name: "HAILEGIORGIS SOLOMON ",
      role: "IT DEPARTMENT",
      image: haileGImage,
    },
  ];

  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "40+", label: "Completed Projects" },
    { value: "15+ Billion ETB", label: "Project Value" },
    { value: "2", label: "Countries Served" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#F59E0B]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-13">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl bg-white/5 border border-white/10 shadow-[0_20px_60px_-40px_rgba(245,158,11,0.75)] p-3"
            >
              <ImageWithFallback
                src={logoImage}
                alt="HH Consulting Logo"
                className="h-12 w-auto"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Services", "Projects", "Team", "Contact"].map(
                (item, i) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/90 uppercase tracking-[0.12em] font-semibold hover:text-[#F59E0B] transition-colors duration-300"
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-t border-[#F59E0B]/20"
          >
            <div className="px-4 py-4 space-y-3">
              {["About", "Services", "Projects", "Team", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-[#F59E0B] transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pb-16 sm:pb-20">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, i) => (
            <motion.img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === heroSlide ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-transparent"></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === heroSlide ? "bg-[#F59E0B] w-6" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Floating Project Thumbnails */}
        <div className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
          {[
            {
              icon: <Building2 className="w-5 h-5" />,
              label: "Buildings",
              img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=120&q=80",
            },
            {
              icon: <Construction className="w-5 h-5" />,
              label: "Infrastructure",
              img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=120&q=80",
            },
            {
              icon: <Cog className="w-5 h-5" />,
              label: "Engineering",
              img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=120&q=80",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 60 }}
              animate={[
                { opacity: 1, x: 0, transition: { delay: 0.6 + i * 0.25, duration: 0.7, ease: "easeOut" } },
                { y: [0, -6, 0], transition: { delay: 1.2 + i * 0.25, duration: 2.8 + i * 0.4, repeat: Infinity, ease: "easeInOut" } },
              ]}
              whileHover={{ scale: 1.12, x: -6, boxShadow: "0 0 22px 4px rgba(245,158,11,0.55)" }}
              className="relative w-24 h-20 rounded-xl overflow-hidden border border-[#F59E0B]/50 shadow-lg cursor-pointer group"
              style={{ boxShadow: "0 0 0px 0px rgba(245,158,11,0)" }}
            >
              {/* Pulsing border glow */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-[#F59E0B] pointer-events-none"
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />

              <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0F172A]/60 group-hover:bg-[#0F172A]/30 transition-colors duration-300" />

              {/* Shimmer sweep on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-1">
                <motion.span
                  className="text-[#F59E0B]"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.span>
                <span className="text-[10px] font-semibold tracking-wide drop-shadow">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 lg:pt-28">
          <div className="relative max-w-3xl lg:max-w-4xl bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2rem] p-5 sm:p-8 lg:p-12 shadow-2xl shadow-[#000000]/20 overflow-hidden">
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#F59E0B]/10 blur-3xl"></div>
            <div className="pointer-events-none absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-[#F59E0B]/15 blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              {/* Credibility Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#F59E0B]/15 border border-[#F59E0B]/40 rounded-full px-3 py-1.5 mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse flex-shrink-0" />
                <span className="text-[#F59E0B] text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase">
                  Est. 2014 · Addis Ababa, Ethiopia
                </span>
              </motion.div>

              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="text-[#F59E0B]">Landmark</span> buildings.
                <br />
                Infrastructure with{" "}
                <span className="relative inline-block">
                  purpose
                  <motion.span
                    className="absolute left-0 -bottom-1 h-[3px] bg-[#F59E0B] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
                .
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Bringing Ethiopian engineering ambition to life with clean design,
              local insight, and confident delivery.
            </motion.p>

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                <div className="text-[#F59E0B] font-semibold mb-2">
                  Built for growth
                </div>
                Trusted by regional developers and public partners across East
                Africa.
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                <div className="text-[#F59E0B] font-semibold mb-2">
                  40+ projects
                </div>
                A mix of commercial towers, airports, and civic infrastructure.
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-white bg-white/10 px-6 py-3 sm:px-8 sm:py-4 text-white font-semibold hover:bg-white hover:text-[#0F172A] transition-all duration-300"
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
      <motion.section
        id="about"
        className="py-20 lg:py-32 bg-white"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo badge */}
              <div className="flex items-center gap-3 mb-6">
                <img src={logoImage} alt="HH Consulting Logo" className="h-10 w-auto" />
                <div className="h-2 w-16 bg-[#F59E0B]" />
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Building Africa's Future
              </h2>

              <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                HH Consulting Architects & Engineers PLC is a multidisciplinary
                consulting firm delivering high-quality architectural and
                engineering solutions for projects across Ethiopia and Djibouti.
              </p>

              {/* Inline image chip — team meeting */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-sm"
              >
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=160&h=80&q=80"
                  alt="Team meeting"
                  className="w-20 sm:w-28 h-16 object-cover flex-shrink-0"
                />
                <p className="text-sm text-gray-600 pr-3 leading-relaxed">
                  The company specializes in building design, infrastructure
                  development, and construction supervision — integrating
                  innovation and local expertise into every project.
                </p>
              </motion.div>

              {/* Inline image chip — blueprints */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex items-center gap-3 mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-sm"
              >
                <img
                  src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=160&h=80&q=80"
                  alt="Engineering blueprints"
                  className="w-20 sm:w-28 h-16 object-cover flex-shrink-0"
                />
                <p className="text-sm text-gray-600 pr-3 leading-relaxed">
                  From high-rise buildings and airports to roads, bridges, and
                  irrigation systems — delivering practical, impactful solutions
                  that support community growth.
                </p>
              </motion.div>

              <p className="text-lg text-gray-700 italic border-l-4 border-[#F59E0B] pl-4">
                We create with heart, and build with mind.
              </p>
            </motion.div>

            <AboutSlideshow />
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="h-2 w-20 bg-[#F59E0B] mx-auto mb-6"></div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive engineering and architectural solutions for complex
              projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -12, scale: 1.02 }}
                whileTap={{ y: -12, scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-white border-b-4 border-transparent hover:border-[#F59E0B] transition-all duration-500 group cursor-pointer"
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Hover overlay with animated border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#F59E0B]/0 group-hover:border-[#F59E0B]/60 rounded-xl transition-all duration-300"
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1 }}
                  />
                </div>

                {/* Content Container */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col min-h-[280px] sm:min-h-[400px]">
                  {/* Icon with enhanced animation */}
                  <motion.div
                    className="text-[#F59E0B] mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.6 },
                    }}
                    whileTap={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title with slide animation */}
                  <motion.h3
                    className="text-xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-[#F59E0B]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description with fade and slide animation */}
                  <motion.p
                    className="text-gray-200 leading-relaxed flex-grow transition-all duration-300"
                    initial={{ opacity: 1, y: 0 }}
                    whileHover={{
                      opacity: 0.9,
                      y: -3,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Animated call-to-action indicator */}
                  <motion.div
                    className="mt-6 flex items-center text-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-semibold mr-2">
                      Learn More
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </div>

                {/* Loading shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                />
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transforming landscapes with innovative infrastructure solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#F59E0B] text-[#0F172A]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.label}
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
                className="group cursor-pointer rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-[#000000]/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[#F59E0B]/20"
              >
                <div className="relative overflow-hidden mb-4 h-64">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.value && (
                    <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#0F172A] px-4 py-2 font-bold">
                      {project.value}
                    </div>
                  )}
                  <div className="absolute left-4 top-4 bg-white/90 text-[#0F172A] px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
                    {project.category.replace("-", " ")}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 h-full">
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-[#F59E0B] transition-colors"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-[#F59E0B] text-sm mb-3">
                    📍 {project.location}
                  </p>
                  {project.value && (
                    <p className="text-white text-sm mb-3">
                      💰 {project.value}
                    </p>
                  )}
                  <p className="text-gray-400 leading-relaxed">
                    📝 {project.description}
                  </p>
                </div>
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
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0F172A] mb-2 flex items-baseline justify-center gap-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {stat.value.includes("Billion ETB") ? (
                    <>
                      <span>{stat.value.split(" Billion ETB")[0]}</span>
                      <span className="text-sm sm:text-xl lg:text-3xl">Billion ETB</span>
                    </>
                  ) : (
                    stat.value
                  )}
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Internationally recognized experts driving innovation and
              excellence
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 bg-gradient-to-br from-[#0F172A] to-[#1e293b] flex items-center justify-center overflow-hidden relative rounded-full">
                  <div className="absolute inset-0 bg-[#F59E0B]/0 group-hover:bg-[#F59E0B]/10 transition-colors duration-300 rounded-full"></div>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full relative z-10"
                  />
                </div>
                <h3
                  className="text-xl font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#F59E0B] mb-2 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="Construction site background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-2 w-20 bg-[#F59E0B] mb-6"></div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Get in Touch
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Ready to discuss your next project? Our team is here to help
                bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Head Office</h4>
                    <p className="text-gray-300">
                      22 Mazoriya, Efrata Building, 3rd Floor
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">011 8683830</p>
                    <p className="text-gray-300">011 6672951</p>
                    <p className="text-gray-300">+251 913592121</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <p className="text-gray-300">
                      hhconsultingarchitectengineers@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 border-l-4 border-[#F59E0B] shadow-2xl"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#F59E0B] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] font-medium mb-2">
                    Project Type
                  </label>
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
                  <label className="block text-[#0F172A] font-medium mb-2">
                    Message
                  </label>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-gray-400">
                Building Africa's future through innovative engineering and
                architectural excellence.
              </p>
            </div>
            <div>
              <h4
                className="font-bold mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Quick Links
              </h4>
              <div className="space-y-2">
                {["About", "Services", "Projects", "Team", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-400 hover:text-[#F59E0B] transition-colors"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div>
              <h4
                className="font-bold mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Office Hours
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} HH Consulting Architects &
              Engineers PLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
