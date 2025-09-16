import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, MapPin, DollarSign, MonitorCheck } from "lucide-react";

const features = [
  {
    icon: MonitorCheck,
    title: "Processo 100% Digital",
    description: "Facilita o fechamento de negócios de forma online e remota, com toda a segurança necessária com acompanhamento da obra."
  },
  {
    icon: Clock,
    title: "Prazo de realização",
    description: "Entregamos empreendimentos com rapidez, garantindo o cumprimento dos prazos estabelecidos."
  },
  {
    icon: Users,
    title: "Foco no investidor",
    description: "Somos uma incorporadora focada em trazer alta lucratividade em projetos diferenciados."
  },
  {
    icon: MapPin,
    title: "Localização estratégica",
    description: "Empreendimentos próximos a regiões estratégicas, metrôs e pontos importantes, garantindo valorização e alta liquidez."
  },
  {
    icon: DollarSign,
    title: "Rentabilidade excepcional",
    description: "Nossa taxa média histórica é de 2,4% ao mês. * A taxa histórica não garante ganhos futuros"
  },
  {
    icon: CheckCircle,
    title: "Segurança Jurídica",
    description: "Estruturas legais robustas e conformes com a legislação americana, garantindo total segurança ao investidor."
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
          className="text-left mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-why-choose-title">
            Alguns dos benefícios que
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-testid="text-why-choose-subtitle">
            você tem com a MRInvest:
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-destructive mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-destructive rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}