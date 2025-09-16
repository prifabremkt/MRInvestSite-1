import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function EbookSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6" data-testid="text-ebook-title">
            Baixe nosso guia exclusivo de investimentos nos EUA
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-ebook-subtitle">
            Descubra como proteger e multiplicar seu patrimônio em dólar
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8"
          >
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-4" data-testid="text-ebook-content-title">
              Guia Estratégico de Investimentos Imobiliários nos EUA
            </h3>
            <ul className="text-white/90 text-left space-y-2 max-w-md mx-auto">
              <li>✅ Análise de mercados regionais</li>
              <li>✅ Estruturação legal e tributária</li>
              <li>✅ Estratégias de proteção patrimonial</li>
              <li>✅ Cases de sucesso reais</li>
            </ul>
          </motion.div>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg"
            data-testid="button-download-ebook"
          >
            Baixar Ebook Gratuitamente
          </Button>
        </motion.div>
      </div>
    </section>
  );
}