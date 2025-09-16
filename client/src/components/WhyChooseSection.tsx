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
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-6" data-testid="text-why-choose-title">
            Por que escolher a MRInvest?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}