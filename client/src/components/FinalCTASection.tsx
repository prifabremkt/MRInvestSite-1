import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary via-primary to-destructive">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6" data-testid="text-final-cta-title">
            Pronto para investir no seu futuro? O próximo movimento é seu.
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-final-cta-subtitle">
            Junte-se a investidores que já transformaram seus ativos em patrimônio sólido nos EUA.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl font-semibold shadow-xl"
              data-testid="button-final-cta"
            >
              Receber Apresentação Exclusiva
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}