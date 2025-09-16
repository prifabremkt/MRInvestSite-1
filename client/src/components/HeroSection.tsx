import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import luxuryProperty from "@assets/generated_images/Luxury_US_real_estate_a2a4eb62.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={luxuryProperty}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark wash overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-poppins text-white mb-8 leading-tight tracking-tight"
            data-testid="text-hero-headline"
          >
            MRInvest
            <span className="block text-4xl md:text-6xl font-normal text-white/90 mt-2">
              Real Estate. Real Results.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            data-testid="text-hero-subheadline"
          >
            Invista nos Estados Unidos. Proteja seu patrimônio. Multiplique sua renda.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-destructive text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              data-testid="button-cta-hero"
            >
              Quero acesso às oportunidades
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              data-testid="button-secondary-hero"
            >
              Saiba mais
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}