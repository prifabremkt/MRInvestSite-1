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
          className="max-w-5xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl hover-elevate transition-all duration-300">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="col-span-3">
                  <img 
                    src="https://i.imgur.com/Nbk5NGu.jpeg" 
                    alt="Michel Pires e William Martinelli - Fundadores da MRInvest" 
                    className="w-full aspect-[4/3] object-cover object-top rounded-xl shadow-lg"
                    data-testid="img-founders"
                  />
                </div>
                <div className="col-span-2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-founders-title">
                    Nossos Fundadores
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2" data-testid="text-michel-name">
                        Michel Pires
                      </h4>
                      <p className="text-foreground/70 leading-relaxed" data-testid="text-michel-description">
                        Executivo com histórico comprovado no desenvolvimento de projetos imobiliários na Flórida, da aquisição à entrega.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2" data-testid="text-william-name">
                        William Martinelli
                      </h4>
                      <p className="text-foreground/70 leading-relaxed" data-testid="text-william-description">
                        Especialista em estrutura, captação e automação, com experiência em startups e consultoria de crescimento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Nosso Propósito */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <Card className="bg-gradient-to-br from-blue-900/15 via-slate-800/12 to-indigo-950/18 border border-blue-800/30 shadow-xl backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-8" data-testid="text-purpose-title">
                Nosso Propósito
              </h3>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed" data-testid="text-purpose-description-1">
                  Juntos, unimos décadas de experiência prática em real estate, estruturação jurídica, tecnologia e estratégia de negócios para oferecer ao investidor brasileiro um caminho claro, estruturado e seguro para construir patrimônio nos Estados Unidos.
                </p>
                
                <p className="text-xl text-foreground font-medium leading-relaxed" data-testid="text-purpose-description-2">
                  Guiar brasileiros na realização de sonhos e na conquista de renda em dólar com investimentos reais, consultoria migratória, educação e geração de renda operacional.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}