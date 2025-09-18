import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Shield, Globe, Award, Building, Users, Zap, Crown } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "High Return Rates",
    description: "Exceptional investment returns with Dubai's booming real estate market growth and appreciation."
  },
  {
    icon: Shield,
    title: "Prime Real Estate",
    description: "Secure investments in Dubai's most sought-after locations with guaranteed quality and luxury."
  },
  {
    icon: Globe,
    title: "No Personal Income Tax",
    description: "Enjoy tax-free living and investment gains in one of the world's most business-friendly economies."
  },
  {
    icon: Award,
    title: "High Accessibility",
    description: "World-class connectivity with top airlines, making Dubai a global hub for business and leisure."
  },
  {
    icon: Building,
    title: "World-Class Amenities",
    description: "Premium lifestyle facilities, from luxury shopping to world-renowned dining and entertainment."
  },
  {
    icon: Users,
    title: "Exceptional Safety",
    description: "One of the world's safest cities with advanced security systems and low crime rates."
  },
  {
    icon: Zap,
    title: "Strategic Positioning",
    description: "Gateway between East and West, offering unparalleled opportunities for global business."
  },
  {
    icon: Crown,
    title: "UAE Golden Visa",
    description: "Long-term residency options for property investors, providing stability and peace of mind."
  }
];

const WhyInvestSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-semibold text-lg mb-4">
            INVESTMENT ADVANTAGES
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            WHY INVEST IN DUBAI?
          </h2>
          <div className="luxury-divider mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Dubai offers unparalleled opportunities for luxury real estate investment, 
            combining world-class infrastructure with exceptional returns and lifestyle benefits.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-luxury rounded-2xl p-12 text-white">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make Dubai Your Home?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied investors who have made Dubai their luxury lifestyle destination. 
              Start your journey with Luxora Properties today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury">
                Investment Guide
              </button>
              <button className="btn-luxury-outline">
                Speak to Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvestSection;