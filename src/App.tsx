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
import catWalkImg from "./assets/images/catWalk.jpeg";
import dnaPerfumes from "./assets/images/dnaPerfume.jpeg";
import shanAfzal from "./assets/images/shanAfzal.jpeg";
import jeevaTextile from "./assets/images/jeevaTextiles.jpeg";
import heNshe from "./assets/images/heNshe.jpeg";
import fusionive from "./assets/images/fusionive.jpeg";
import WhatsappBtn from "./Components/whatsappBtn";

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
    title: "Seo",
    description:
      "Boost rankings, drive traffic, optimize content, and convert visitors effectively.",
    details:
      "Our SEO growth solutions focus on website optimization, content strategy, and conversion-driven SEO. We help you rank higher, drive organic traffic, and turn visitors into loyal customers with proven strategies .",
    steps: [
      {
        title: "SEO Audit",
        description: "Analyzing current website performance and rankings",
      },
      {
        title: "Strategy Development",
        description: "Creating customized SEO plans for growth",
      },
      {
        title: "Implementation",
        description: "Optimizing content, keywords, and technical SEO",
      },
      {
        title: "Performance Tracking",
        description: "Monitoring rankings, traffic, and conversions",
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
    title: "Shopify Growth Solutions",
    description:
      "Store optimization, conversion strategy, and performance marketing.",
    details:
      "Our Shopify growth solutions focus on store optimization, conversion strategy, and performance marketing. We help you enhance user experience, drive sales, and scale your business with proven strategies.",
    steps: [
      {
        title: "Store Audit",
        description: "Analyzing current store performance and user experience.",
      },
      {
        title: "Strategy Development",
        description: "Creating customized Shopify growth plans.",
      },
      {
        title: "Implementation",
        description: "Optimizing design, product pages, and checkout process.",
      },
      {
        title: "Performance Tracking",
        description: "Monitoring sales, traffic, and conversions.",
      },
      {
        title: "Customization & Optimization",
        description: "Enhancing user experience, speed, and performance.",
      },
    ],
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

          {/* <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-[#5F01D3] to-[#FDD100] hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </motion.button> */}
        </div>
      </motion.div>
    </motion.div>
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
      image: dnaPerfumes,
      title: "DNA Perfume",
      description:
        "Experience luxury fragrances with premium, long-lasting scents.",
      url: "https://dnaperfumo.com/",
    },
    {
      image: catWalkImg,
      title: "Catwalk",
      description:
        "Step into fashion with trendy, stylish, and comfortable footwear.",
      url: "https://catwalkheel.com/",
    },
    {
      image: shanAfzal,
      title: "Shahnaz Afzal",
      description:
        "Elevate your wardrobe with premium, high-quality women's fashion.",
      url: "https://shahnazafzal.com/",
    },
    {
      image: jeevaTextile,
      title: "Jeeva Textiles",
      description:
        "Discover men’s premium apparel crafted for style and comfort.",
      url: "https://jeevatextiles.com/",
    },
    {
      image: heNshe,
      title: "He & She Choice",
      description: "Authentic beauty and skincare products for men and women.",
      url: "https://cosmeticsmarts.com/",
    },
    {
      image: fusionive,
      title: "Fusionive",
      description:
        "Innovative fashion and lifestyle trends, redefining modern style.",
      url: "https://www.instagram.com/fusionive/",
    },
  ]);

  return (
    <div className="relative">
      {/* Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed w-full z-50 bg-white  shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5F01D3] to-[#FDD100]">
              Clicky Solutions
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="font-semibold text-gray-700 hover:text-[#5F01D3]"
              >
                Home
              </a>
              <a
                href="#services"
                className="font-semibold text-gray-700 hover:text-[#5F01D3]"
              >
                Services
              </a>
              <a
                href="#ourProjects"
                className="font-semibold text-gray-700 hover:text-[#5F01D3]"
              >
                Our Projects
              </a>
              <a
                href="#contactForm"
                className="font-semibold text-gray-700 hover:text-[#5F01D3]"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
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
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#5F01D3] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </motion.button> */}
          </motion.div>
          <a href="#services">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10"
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>
          </a>
        </div>
      </section>

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

      {/* Projects Section */}
      <section id="ourProjects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our Projects
            </h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInWhenVisible key={index}>
                <a href={project.url} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-md mt-2"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mt-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </motion.div>
                </a>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

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
                <li className="hover:text-[#5F01D3] transition-colors">Home</li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Services
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Our Projects
                </li>
                <li className="hover:text-[#5F01D3] transition-colors">
                  Contact us
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#FDD100]">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@clickysolutions.com</li>
                <li>+92 307 1112852</li>
                <li>Office no. 202 Anum State Block-B</li>
                <li>Shahre-e-Faisal Karachi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Clicky Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <WhatsappBtn />
    </div>
  );
}

export default App;
