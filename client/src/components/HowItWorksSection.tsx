import { motion } from "framer-motion";
import { User, Search, FileText, Building } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Análise de Perfil",
    description: "Avaliamos seu perfil de investidor e objetivos financeiros para personalizar as oportunidades."
  },
  {
    icon: Search,
    title: "Seleção de Projetos", 
    description: "Apresentamos projetos cuidadosamente selecionados que se alinham com seu perfil e metas."
  },
  {
    icon: FileText,
    title: "Estruturação Legal",
    description: "Cuidamos de toda a documentação e estruturação legal para garantir segurança jurídica total."
  },
  {
    icon: Building,
    title: "Aquisição e Gestão",
    description: "Executamos a aquisição e gerenciamos seu investimento para maximizar retornos."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-6" data-testid="text-how-it-works-title">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-it-works-subtitle">
            Um processo simples e seguro para seu investimento internacional
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              data-testid={`step-${index}`}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center relative">
                  <step.icon className="w-10 h-10 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}