import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Globe, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Segurança Jurídica Internacional",
    description: "Estruturas legais robustas e conformes com a legislação americana e brasileira."
  },
  {
    icon: TrendingUp,
    title: "Proteção Patrimonial Completa", 
    description: "Diversificação internacional e proteção contra instabilidades econômicas locais."
  },
  {
    icon: Globe,
    title: "Rentabilidade Premium",
    description: "Projetos cuidadosamente selecionados com potencial de retorno superior ao mercado."
  },
  {
    icon: Settings,
    title: "Ecossistema 360º",
    description: "Suporte completo desde a análise até a gestão patrimonial internacional."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-destructive mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-8" data-testid="text-why-choose-title">
            Por que escolher a MRInvest?
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Quatro pilares fundamentais que nos tornam a escolha certa para seu investimento internacional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border/30 bg-card hover-elevate transition-all duration-300 group" data-testid={`card-feature-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-destructive rounded-xl flex items-center justify-center shadow-lg">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors" data-testid={`text-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed" data-testid={`text-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}