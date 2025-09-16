import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ebookCover from "@assets/image_1758047665556.png";

export default function EbookSection() {
  return (
    <section className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative md:justify-self-end order-2 md:order-1"
          >
            <div className="relative max-w-lg mx-auto">
              <img 
                src={ebookCover} 
                alt="Guia de Investimentos nos EUA" 
                className="w-full h-auto object-contain bg-transparent mix-blend-screen dark:mix-blend-screen brightness-110 contrast-105"
                data-testid="img-ebook-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-xl blur-2xl -z-10 opacity-30" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-destructive mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6 leading-tight" data-testid="text-ebook-title">
              Baixe nosso guia exclusivo de investimentos nos EUA
            </h2>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed" data-testid="text-ebook-subtitle">
              Descubra como proteger e multiplicar seu patrimônio em dólar
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="text-ebook-content-title">
                Guia Estratégico de Investimentos Imobiliários nos EUA
              </h3>
              <ul className="text-foreground/70 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Análise de mercados regionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Estruturação legal e tributária</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Estratégias de proteção patrimonial</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cases de sucesso reais</span>
                </li>
              </ul>
            </div>
            
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
      </div>
    </section>
  );
}