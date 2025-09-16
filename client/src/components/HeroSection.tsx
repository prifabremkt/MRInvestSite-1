import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import luxuryProperty from "@assets/generated_images/Luxury_US_real_estate_a2a4eb62.png";

function TypingEffect({ text, speed = 100, delay = 0 }: { text: string; speed?: number; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          // Start deleting after 2 seconds
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              if (currentIndex > 0) {
                currentIndex--;
                setDisplayText(text.slice(0, currentIndex));
              } else {
                clearInterval(deleteInterval);
                setTimeout(startTyping, 500); // Restart typing after 0.5s
              }
            }, speed / 2);
          }, 2000);
        }
      }, speed);
    };

    const initialDelay = setTimeout(startTyping, delay);
    return () => clearTimeout(initialDelay);
  }, [text, speed, delay]);

  return <span className="text-primary">{displayText}</span>;
}

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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/70" />
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
            className="text-4xl md:text-6xl font-bold font-poppins text-white mb-8 leading-tight"
            data-testid="text-hero-headline"
          >
            Invista{" "}
            <TypingEffect text="nos Estados Unidos" speed={150} delay={1000} />{" "}
            com a MR Invest
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed font-semibold"
            data-testid="text-hero-subheadline"
          >
            Proteja seu patrimônio. Multiplique sua renda.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            data-testid="text-hero-description"
          >
            A MRInvest conecta você, investidor brasileiro, a empreendimentos imobiliários exclusivos nos EUA — com estratégia, segurança jurídica e resultados reais.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-destructive text-white px-8 py-3 text-lg font-semibold"
              data-testid="button-cta-hero"
            >
              Descobrir oportunidades
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