import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import luxuryApartment from '@/assets/luxury-apartment.jpg';

const WelcomeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-white">
      {/* Continuing Form Overlay Effect */}
      <div className="absolute top-0 right-0 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2">
          <div></div>
          <div className="relative">
            <div className="absolute -top-32 right-0 w-full max-w-md">
              <div className="card-luxury h-32"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-luxury-gold font-semibold text-lg mb-4"
              >
                A LEGACY BUILT ON TRUST
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                WELCOME TO LUXORA PROPERTIES, DUBAI
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="luxury-divider mb-8"
              ></motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                Our vision is to create extraordinary urban spaces that enhance the 
                quality of life and become treasured landmarks in the magnificent tapestry of DUBAI, an ambitious 
                city fueled by energy and opportunity.
              </p>
              
              <p>
                With over two decades of excellence in luxury real estate, we have crafted 
                some of Dubai's most prestigious residential and commercial developments. 
                Our commitment to innovation, quality, and customer satisfaction has made 
                us a trusted name in the region's real estate landscape.
              </p>
              
              <p>
                From iconic waterfront towers to exclusive villa communities, every 
                Luxora property reflects our dedication to architectural brilliance and 
                lifestyle enhancement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-luxury">
                Our Portfolio
              </button>
              <button className="btn-luxury-outline">
                Company Story
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={luxuryApartment}
                alt="Luxury apartment interior with Dubai skyline view" 
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="card-luxury p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Premium Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">25k+</div>
                      <div className="text-sm text-muted-foreground">Happy Residents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">20+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;