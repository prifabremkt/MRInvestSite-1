import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-card flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-foreground mb-6">
            <ReactTyped
              strings={["MRInvest – Real Estate. Real Results."]}
              typeSpeed={80}
              showCursor={true}
              cursorChar="|"
              data-testid="text-hero-headline"
            />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            Invista nos Estados Unidos. Proteja seu patrimônio. Multiplique sua renda.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-destructive text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="button-cta-hero"
            >
              Quero acesso às oportunidades
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}