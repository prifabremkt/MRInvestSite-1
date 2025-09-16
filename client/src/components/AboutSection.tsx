import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-destructive mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-8" data-testid="text-about-title">
            Sobre a MRInvest
          </h2>
          <div className="max-w-4xl mx-auto text-xl text-foreground/70 leading-relaxed space-y-8" data-testid="text-about-content">
            <p className="text-2xl font-medium">
              A MRInvest conecta você, investidor brasileiro, a empreendimentos imobiliários exclusivos nos EUA — com estratégia, segurança jurídica e resultados reais.
            </p>
            <p>
              Nossa missão é democratizar o acesso aos melhores investimentos imobiliários internacionais, oferecendo proteção patrimonial e rentabilidade premium para nossos clientes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl hover-elevate transition-all duration-300">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://i.imgur.com/Nbk5NGu.jpeg" 
                    alt="Sócios MRInvest" 
                    className="w-full aspect-square object-cover rounded-xl shadow-lg"
                    data-testid="img-founders"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-founders-title">
                    Nossos Fundadores
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg mb-6" data-testid="text-founders-description">
                    Com mais de 15 anos de experiência combinada no mercado imobiliário internacional, 
                    nossos sócios construíram a MRInvest para oferecer acesso exclusivo às melhores 
                    oportunidades de investimento nos Estados Unidos.
                  </p>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-foreground/60 font-medium">Especialistas em Real Estate Internacional</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}