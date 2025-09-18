import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';
import heroImage from '@/assets/luxury-dubai-hero.jpg';

const LuxuryHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Luxury Dubai Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold leading-tight">
                Luxury Homes
                <span className="block text-gradient-gold">Starting From</span>
                <span className="block text-4xl lg:text-6xl">AED 2.5 Mn*</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 max-w-lg leading-relaxed"
            >
              Discover Dubai's most exclusive properties in prestigious locations. 
              Where luxury meets lifestyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-luxury">
                Explore Properties
              </button>
              <button className="btn-luxury-outline">
                Schedule Viewing
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span>+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span>info@luxora.ae</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Form (Half Overlay) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:translate-y-32"
          >
            <div className="card-luxury p-8 lg:p-10 max-w-md ml-auto">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-primary mb-2">
                Book A Site Visit
              </h3>
              <p className="text-muted-foreground mb-8">
                Get exclusive access to luxury properties
              </p>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input-luxury"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input-luxury"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-luxury"
                  />
                </div>
                
                <div>
                  <select className="select-luxury">
                    <option>Select Property Type</option>
                    <option>Luxury Apartment</option>
                    <option>Premium Villa</option>
                    <option>Exclusive Penthouse</option>
                    <option>Townhouse</option>
                  </select>
                </div>
                
                <div>
                  <select className="select-luxury">
                    <option>Budget Range</option>
                    <option>AED 2.5M - 5M</option>
                    <option>AED 5M - 10M</option>
                    <option>AED 10M - 20M</option>
                    <option>AED 20M+</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" id="consent" className="rounded" />
                  <label htmlFor="consent">
                    I agree to receive communications from Luxora Properties
                  </label>
                </div>

                <button type="submit" className="btn-luxury-dark w-full">
                  SUBMIT
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/80">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LuxuryHero;