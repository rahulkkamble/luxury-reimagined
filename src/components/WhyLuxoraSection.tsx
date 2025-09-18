import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, Award, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    number: "75+",
    label: "PROJECTS",
    subtitle: "Delivered across Dubai with exceptional quality standards"
  },
  {
    icon: Users,
    number: "50,000+",
    label: "RESIDENTS",
    subtitle: "Trust Luxora for their luxury lifestyle needs"
  },
  {
    icon: Award,
    number: "25+",
    label: "AWARDS",
    subtitle: "Recognition for excellence in real estate development"
  },
  {
    icon: MapPin,
    number: "12+",
    label: "LOCATIONS",
    subtitle: "Premium developments across Dubai's best areas"
  }
];

const WhyLuxoraSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-transparent"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-semibold text-lg mb-4">
            TRUSTED EXCELLENCE
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            WHY LUXORA?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light rounded-full mx-auto mb-8"></div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            For over two decades, Luxora Properties has been synonymous with luxury, 
            innovation, and exceptional customer service in Dubai's real estate market.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-6 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <div className="font-playfair text-4xl lg:text-5xl font-bold text-luxury-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-3">
                  {stat.label}
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            From iconic waterfront developments to exclusive villa communities, 
            Luxora Properties has consistently delivered projects that redefine luxury living. 
            Our commitment to architectural excellence, innovative design, and customer satisfaction 
            has made us the preferred choice for discerning buyers and investors worldwide.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-3">
                Quality Craftsmanship
              </h4>
              <p className="text-white/80 text-sm">
                Every detail meticulously planned and executed to the highest standards
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-3">
                Customer-Centric Approach
              </h4>
              <p className="text-white/80 text-sm">
                Dedicated support from initial inquiry to post-handover services
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-3">
                Innovation & Design
              </h4>
              <p className="text-white/80 text-sm">
                Pioneering architectural concepts that set new benchmarks
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLuxoraSection;