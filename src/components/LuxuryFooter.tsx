import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const LuxuryFooter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="footerPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerPattern)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="font-playfair text-3xl font-bold text-luxury-gold mb-6">
                Luxora Properties
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Creating extraordinary luxury living experiences in Dubai's most prestigious locations. 
                Your trusted partner in premium real estate investments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-luxury-gold/10 rounded-full">
                    <Phone className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">+971 4 XXX XXXX</div>
                    <div className="text-white/60 text-sm">24/7 Customer Support</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-luxury-gold/10 rounded-full">
                    <Mail className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">info@luxora.ae</div>
                    <div className="text-white/60 text-sm">General Inquiries</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-luxury-gold/10 rounded-full">
                    <MapPin className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">Business Bay, Dubai</div>
                    <div className="text-white/60 text-sm">United Arab Emirates</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-6">
                Properties
              </h4>
              <ul className="space-y-3">
                {['Luxury Apartments', 'Premium Villas', 'Exclusive Penthouses', 'Waterfront Properties', 'Commercial Spaces', 'Investment Opportunities'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors duration-300 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {['Property Management', 'Investment Consultation', 'Legal Services', 'Mortgage Assistance', 'After-Sales Support', 'Market Analysis'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors duration-300 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="font-semibold text-luxury-gold mb-4">Follow Us</h5>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-luxury-gold/10 rounded-full hover:bg-luxury-gold hover:text-primary transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-luxury-gold group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="font-playfair text-2xl font-bold text-luxury-gold mb-2">
                  Stay Updated
                </h4>
                <p className="text-white/80">
                  Get the latest luxury property updates and exclusive investment opportunities
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-all duration-300 placeholder:text-white/60 text-white"
                />
                <button className="btn-luxury whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-white/60 text-sm">
              <div>
                © 2024 Luxora Properties. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;