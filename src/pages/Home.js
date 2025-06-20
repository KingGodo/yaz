import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { 
  ChevronDown, 
  Menu as MenuIcon, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Calendar,
  User,
  Clock,
  Search
} from 'lucide-react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import TeamSection from './components/TeamMembers';
import BlogSection from './components/BlogSection';
import CallToAction from './components/CallTo Action';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const stats = [
    { value: "15,000+", label: "Youth Reached" },
    { value: "85%", label: "Program Effectiveness" },
    { value: "200+", label: "Schools Partnered" },
    { value: "40%", label: "Reduction in Substance Use" }
  ];



  return (
    <div className="font-sans text-black bg-white">
      <Navigation/>
      <main>
      <Hero/>
      <About/>
      <Programs/>

        {/* Statistics Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Significant progress in combating substance abuse since 2022.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  variants={fadeInUp}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <p className="text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      <Testimonials/>

      <TeamSection/>

      <BlogSection/>

      <Contact/>

      <CallToAction/>
      
      </main>

      <footer className="bg-black text-white py-8 px-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Youth Aware Zimbabwe</h3>
              <p className="text-gray-400 mb-4">
                Empowering youth to make informed decisions about substance use.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-white">Our Programs</a></li>
                <li><a href="#resources" className="text-gray-400 hover:text-white">Resources</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li><a href="#volunteer" className="text-gray-400 hover:text-white">Volunteer</a></li>
                <li><a href="#donate" className="text-gray-400 hover:text-white">Donate</a></li>
                <li><a href="#partner" className="text-gray-400 hover:text-white">Partner With Us</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-white">Upcoming Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 text-red-600" />
                  <span className="text-gray-400">Harare, Zimbabwe</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-red-600" />
                  <span className="text-gray-400">+263 778 513 990</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-red-600" />
                  <span className="text-gray-400">info@youthawarezim.org</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Youth Aware Zimbabwe. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              <a href="#terms" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;