import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  BarChart3,
  Globe2,
  ShoppingCart,
  Code2,
  Share2,
  ChevronDown,
  X,
  CheckCircle2,
  Star,
} from "lucide-react";
import ClientReviews from "./Components/reviewSlider";
import ContactForm from "./Components/contactForm";
import ReviewSlider from "./Components/reviewSlider";
import CTASection from "./Components/ctaSection";

const services = [
  {
    icon: <Globe2 className="w-12 h-12" />,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions to boost your online presence",
    details:
      "Our digital marketing services include SEO optimization, content marketing, PPC campaigns, and comprehensive analytics. We create data-driven strategies that increase your visibility and drive meaningful engagement.",
    steps: [
      {
        title: "Strategy Development",
        description: "Comprehensive analysis and custom strategy creation",
      },
      {
        title: "Campaign Setup",
        description: "Implementation of targeted marketing campaigns",
      },
      {
        title: "Optimization",
        description: "Continuous monitoring and performance optimization",
      },
      {
        title: "Reporting & Analysis",
        description: "Detailed analytics and ROI tracking",
      },
    ],
  },
  {
    icon: <Share2 className="w-12 h-12" />,
    title: "Social Media Management",
    description: "Comprehensive social media strategy and content management",
    details:
      "From content creation to community management, we handle all aspects of your social media presence. Our team crafts engaging content, manages paid campaigns, and builds meaningful connections with your audience.",
    steps: [
      {
        title: "Account Setup & Branding",
        description: "Platform optimization and brand alignment",
      },
      {
        title: "Content Strategy",
        description: "Development of engaging content calendar",
      },
      {
        title: "Community Engagement",
        description: "Active community management and growth",
      },
      {
        title: "Performance Analysis",
        description: "Tracking metrics and engagement rates",
      },
    ],
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Leads Generation",
    description:
      "Targeted lead generation campaigns to grow your customer base",
    details:
      "We implement multi-channel lead generation strategies that attract qualified prospects. Our approach combines marketing automation, content marketing, and targeted advertising to drive consistent lead flow.",
    steps: [
      {
        title: "Target Audience Analysis",
        description: "Identifying ideal customer profiles",
      },
      {
        title: "Campaign Design",
        description: "Creating compelling lead magnets",
      },
      {
        title: "Funnel Optimization",
        description: "Building effective conversion funnels",
      },
      {
        title: "Lead Nurturing",
        description: "Automated follow-up sequences",
      },
    ],
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Sales Growth",
    description: "Data-driven strategies to increase your sales and revenue",
    details:
      "Our sales growth solutions combine CRM optimization, sales funnel development, and conversion rate optimization. We help you turn leads into loyal customers through proven methodologies.",
    steps: [
      {
        title: "Sales Process Audit",
        description: "Analyzing current sales performance",
      },
      {
        title: "Strategy Development",
        description: "Creating customized growth plans",
      },
      {
        title: "Implementation",
        description: "Executing optimization strategies",
      },
      {
        title: "Performance Tracking",
        description: "Monitoring KPIs and results",
      },
    ],
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "Web Development",
    description: "Custom web solutions tailored to your business needs",
    details:
      "From responsive websites to complex web applications, our development team creates scalable, modern solutions. We use cutting-edge technologies to deliver fast, secure, and user-friendly web experiences.",
    steps: [
      {
        title: "Requirements Analysis",
        description: "Understanding project scope and goals",
      },
      {
        title: "Design & Planning",
        description: "Creating detailed project blueprint",
      },
      {
        title: "Development",
        description: "Building robust web solutions",
      },
      {
        title: "Testing & Launch",
        description: "Quality assurance and deployment",
      },
    ],
  },
  {
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "E-commerce Solutions",
    description: "End-to-end e-commerce development and optimization",
    details:
      "We build and optimize e-commerce platforms that drive sales. Our solutions include custom shopping carts, payment integration, inventory management, and conversion optimization.",
    steps: [
      {
        title: "Platform Selection",
        description: "Choosing the right e-commerce solution",
      },
      {
        title: "Store Setup",
        description: "Implementation and customization",
      },
      {
        title: "Payment Integration",
        description: "Secure payment gateway setup",
      },
      {
        title: "Launch & Optimization",
        description: "Store launch and performance tuning",
      },
    ],
  },
];

const projects = [
  {
    title: "TechCorp Rebrand",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Digital Marketing",
    size: "large",
  },
  {
    title: "EcoStore Platform",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "E-commerce",
    size: "small",
  },
  {
    title: "SocialBoost Campaign",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Social Media",
    size: "small",
  },
  {
    title: "EcoStore Platform",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "E-commerce",
    size: "small",
  },
  {
    title: "SocialBoost Campaign",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Social Media",
    size: "small",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    content:
      "Clicky Solutions transformed our digital presence completely. Their strategic approach and attention to detail exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, EcoWare",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    content:
      "The team's expertise in digital marketing helped us achieve a 200% growth in online sales. Their dedication to our success was remarkable.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Founder, StyleHub",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    content:
      "Working with Clicky Solutions was a game-changer for our brand. Their innovative solutions and professional team delivered outstanding results.",
    rating: 5,
  },
];

const timeline = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Company Founded",
    description:
      "Clicky Solutions was established with a vision to transform digital presence. Clicky Solutions was established with a vision to transform digital presence",
  },
  {
    year: 2021,
    title: "Service Expansion",
    description:
      "Added comprehensive digital marketing and social media services",
  },
  {
    year: 2022,
    title: "Team Growth",
    description: "Expanded our team and opened new office location",
  },
  {
    year: 2023,
    title: "Global Reach",
    description:
      "Started serving international clients across multiple industries",
  },
  {
    year: 2024,
    title: "Innovation Leader",
    description: "Recognized as industry leader in digital solutions",
  },
];

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: (typeof services)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="text-[#5F01D3] bg-[#5F01D3]/10 p-3 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {service.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600 text-lg mb-8">{service.details}</p>

          <div className="space-y-6 mb-8">
            <h4 className="text-xl font-semibold text-gray-900">Our Process</h4>
            <div className="space-y-4">
              {service.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-50"
                >
                  <div className="text-[#5F01D3]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      {step.title}
                    </h5>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-[#5F01D3] to-[#FDD100] hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="w-20 h-20 mb-6 rounded-full overflow-hidden ring-4 ring-[#5F01D3]/20">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FDD100] text-[#FDD100]"
                />
              ))}
            </div>
            <p className="text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <h4 className="font-semibold text-lg text-gray-900">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 mb-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-[#5F01D3]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [projects] = useState([
    {
      year: "2023",
      image:
        "https://i.pinimg.com/736x/82/02/99/820299860c517c8e1979b5f37d6f69e9.jpg",
      title: "Project One",
      description: "Brief description of Project One.",
    },
    {
      year: "2022",
      image:
        "https://i.pinimg.com/736x/10/48/eb/1048ebdd4b94f1058c966f49dc4e0ff1.jpg",
      title: "Project Two",
      description: "Brief description of Project Two.",
    },
    {
      year: "2021",
      image:
        "https://i.pinimg.com/736x/03/38/c4/0338c4cb19d7d22de9a21de2e100c3db.jpg",
      title: "Project Three",
      description: "Brief description of Project Three.",
    },
    {
      year: "2023",
      image:
        "https://i.pinimg.com/736x/82/02/99/820299860c517c8e1979b5f37d6f69e9.jpg",
      title: "Project One",
      description: "Brief description of Project One.",
    },
    {
      year: "2022",
      image:
        "https://i.pinimg.com/736x/10/48/eb/1048ebdd4b94f1058c966f49dc4e0ff1.jpg",
      title: "Project Two",
      description: "Brief description of Project Two.",
    },
    {
      year: "2021",
      image:
        "https://i.pinimg.com/736x/03/38/c4/0338c4cb19d7d22de9a21de2e100c3db.jpg",
      title: "Project Three",
      description: "Brief description of Project Three.",
    },
  ]);

  return (
    <div className="relative">
      {/* Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5F01D3] to-[#FDD100]">
              Clicky Solutions
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#5F01D3]">
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-[#5F01D3]"
              >
                Services
              </a>
              <a href="#journey" className="text-gray-700 hover:text-[#5F01D3]">
                Journey
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#5F01D3]">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5F01D3] via-purple-500 to-[#FDD100] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We craft digital experiences that drive growth and success for
              your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#5F01D3] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10"
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Transforming Businesses Through Digital Innovation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Clicky Solutions, we're passionate about helping businesses
                  thrive in the digital age. Our team of experts combines
                  creativity with technical expertise to deliver outstanding
                  results.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  With years of experience and a proven track record, we've
                  helped numerous businesses achieve their digital goals and
                  establish a strong online presence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#5F01D3] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="grid grid-cols-6 grid-rows-6 gap-4">
                {projects.map((projects, index) => {
                  let className =
                    "overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105";

                  // Dynamic grid positioning based on size
                  switch (index) {
                    case 0: // Large project
                      className += " col-span-4 row-span-4";
                      break;
                    case 1: // Small project
                      className += " col-span-2 row-span-2";
                      break;
                    case 2: // Small project
                      className += " col-span-2 row-span-2";
                      break;
                  }

                  return (
                    <motion.div
                      key={index}
                      className={className}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative h-full group">
                        <img
                          src={projects.image}
                          alt={projects.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5F01D3]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-semibold text-lg">
                            {projects.title}
                          </h3>
                          <p className="text-white/80">{projects.category}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our Services
            </h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedService(service.title)}
                >
                  <div className="text-[#5F01D3] mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>

          <AnimatePresence>
            {selectedService && (
              <ServiceModal
                service={services.find((s) => s.title === selectedService)!}
                onClose={() => setSelectedService(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section id="journey" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our Past Projects
            </h2>
          </FadeInWhenVisible>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#5F01D3] to-[#FDD100]" />

            {timeline.map((item, index) => (
              <FadeInWhenVisible key={index}>
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  } mb-12 relative`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-5/12 ${index % 2 === 0 ? "mr-12" : "ml-12"}`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <span className="text-[#5F01D3] font-bold text-xl">
                        {item.year}
                      </span>
                      <img src={item.image} alt="" />
                      <h3 className="text-xl font-semibold text-gray-900 mt-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 mt-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-[#5F01D3] to-[#FDD100] hover:opacity-90 transition-opacity"
                      >
                        Get a Quote
                      </motion.button>
                    </div>
                  </motion.div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#5F01D3] rounded-full shadow-lg" />
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our Projects
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  {/* <span className="text-[#5F01D3] font-bold text-xl">
                    {project.year}
                  </span> */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-md mt-2"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  {/* <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 mt-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-[#5F01D3] to-[#8c4fd5] hover:opacity-90 transition-opacity"
                  >
                    Get a Quote
                  </motion.button> */}
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              What Our Clients Say
            </h2>
          </FadeInWhenVisible>
          <TestimonialSlider />
        </div>
      </section> */}
      {/* <ClientReviews /> */}
      <CTASection />
      <ReviewSlider />
      <ContactForm />
      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#5F01D3] to-[#FDD100] text-transparent bg-clip-text">
                Clicky Solutions
              </h3>
              <p className="text-gray-300">
                Transforming businesses through digital innovation
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#FDD100]">
                Services
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-[#5F01D3] transition-colors">
                  Digital Marketing
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Social Media Management
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Web Development
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  E-commerce Solutions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#FDD100]">
                Company
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-[#5F01D3] transition-colors">
                  About Us
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Our Journey
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Careers
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#FDD100]">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@clickysolutions.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Digital Street</li>
                <li>Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Clicky Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
