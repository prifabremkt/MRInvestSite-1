import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-6" data-testid="text-about-title">
            Sobre a MRInvest
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6" data-testid="text-about-content">
            <p>
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
          className="max-w-2xl mx-auto"
        >
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <img 
                  src="https://i.imgur.com/Nbk5NGu.jpeg" 
                  alt="Sócios MRInvest" 
                  className="w-48 h-48 object-cover rounded-lg mb-6 shadow-md"
                  data-testid="img-founders"
                />
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-founders-title">
                  Nossos Fundadores
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-founders-description">
                  Com mais de 15 anos de experiência combinada no mercado imobiliário internacional, 
                  nossos sócios construíram a MRInvest para oferecer acesso exclusivo às melhores 
                  oportunidades de investimento nos Estados Unidos.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}