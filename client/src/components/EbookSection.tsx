import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle } from "lucide-react";

export default function EbookSection() {
  return (
    <section className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-destructive mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-8" data-testid="text-ebook-title">
            Baixe nosso guia exclusivo de investimentos nos EUA
          </h2>
          <p className="text-xl text-foreground/60 mb-12 leading-relaxed max-w-3xl mx-auto" data-testid="text-ebook-subtitle">
            Descubra como proteger e multiplicar seu patrimônio em dólar
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border/30 rounded-xl p-8 mb-8 max-w-2xl mx-auto hover-elevate transition-all duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <img 
                src="https://i.imgur.com/5pAW239.png" 
                alt="Guia de Investimentos nos EUA" 
                className="w-full h-full object-contain bg-transparent"
                data-testid="img-ebook-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="text-ebook-content-title">
              Guia Estratégico de Investimentos Imobiliários nos EUA
            </h3>
            <ul className="text-foreground/70 text-left space-y-3 max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Análise de mercados regionais</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Estruturação legal e tributária</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Estratégias de proteção patrimonial</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Cases de sucesso reais</span>
              </li>
            </ul>
          </motion.div>
          
          <a href="https://wa.me/14074709867" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-destructive text-white"
              data-testid="button-download-ebook"
            >
              Baixar Ebook Gratuitamente
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}