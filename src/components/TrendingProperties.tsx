import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Bed, Bath, Car, ArrowRight } from 'lucide-react';
import luxuryVilla from '@/assets/luxury-villa.jpg';
import luxuryPenthouse from '@/assets/luxury-penthouse.jpg';
import luxuryApartment from '@/assets/luxury-apartment.jpg';

const properties = [
  {
    id: 1,
    name: "Oceanview Villa",
    location: "Palm Jumeirah",
    price: "AED 15.5M",
    image: luxuryVilla,
    beds: 6,
    baths: 7,
    parking: 4,
    area: "8,500 sq ft",
    badge: "LUXURY VILLA"
  },
  {
    id: 2,
    name: "Skyline Penthouse",
    location: "Downtown Dubai",
    price: "AED 25.8M",
    image: luxuryPenthouse,
    beds: 4,
    baths: 5,
    parking: 3,
    area: "6,200 sq ft",
    badge: "EXCLUSIVE PENTHOUSE"
  },
  {
    id: 3,
    name: "Marina Residence",
    location: "Dubai Marina",
    price: "AED 8.2M",
    image: luxuryApartment,
    beds: 3,
    baths: 4,
    parking: 2,
    area: "3,800 sq ft",
    badge: "PREMIUM APARTMENT"
  },
  {
    id: 4,
    name: "Creek Harbour Tower",
    location: "Dubai Creek",
    price: "AED 12.3M",
    image: luxuryVilla,
    beds: 4,
    baths: 5,
    parking: 2,
    area: "4,500 sq ft",
    badge: "WATERFRONT"
  },
  {
    id: 5,
    name: "Emirates Hills Villa",
    location: "Emirates Hills",
    price: "AED 22.7M",
    image: luxuryPenthouse,
    beds: 7,
    baths: 8,
    parking: 6,
    area: "12,000 sq ft",
    badge: "ULTRA LUXURY"
  },
  {
    id: 6,
    name: "Business Bay Heights",
    location: "Business Bay",
    price: "AED 6.8M",
    image: luxuryApartment,
    beds: 2,
    baths: 3,
    parking: 1,
    area: "2,400 sq ft",
    badge: "MODERN LIVING"
  }
];

const TrendingProperties = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold font-semibold text-lg mb-4">
            FEATURED COLLECTION
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            TRENDING LUXORA PROPERTIES
          </h2>
          <div className="luxury-divider mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of the most sought-after luxury properties 
            in Dubai's most prestigious neighborhoods.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="property-card"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-luxury-gold text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {property.badge}
                  </span>
                </div>
                
                {/* Price */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 text-primary px-3 py-1 rounded-full text-sm font-bold">
                    {property.price}
                  </span>
                </div>
                
                {/* View Details Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-luxury-gold text-primary p-3 rounded-full hover:bg-luxury-gold-light transition-colors duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                    {property.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-luxury-gold" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bed className="w-4 h-4 text-luxury-gold" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bath className="w-4 h-4 text-luxury-gold" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Car className="w-4 h-4 text-luxury-gold" />
                    <span>{property.parking} Parking</span>
                  </div>
                </div>

                {/* Area & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">
                    {property.area}
                  </span>
                  <button className="text-luxury-gold hover:text-luxury-gold-dark font-semibold text-sm transition-colors duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-luxury">
            View All Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingProperties;