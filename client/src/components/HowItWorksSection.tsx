import { motion } from "framer-motion";
import { User, Search, FileText, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: User,
    title: "Análise de Perfil",
    description: "Definimos seu objetivo e apetite de risco para investimentos nos EUA."
  },
  {
    icon: Search,
    title: "Seleção de Projetos", 
    description: "Recomendamos oportunidades alinhadas à sua estratégia de blindagem patrimonial."
  },
  {
    icon: FileText,
    title: "Estruturação Legal",
    description: "Cuidamos de toda a documentação para sua tranquilidade e segurança jurídica."
  },
  {
    icon: Building,
    title: "Aquisição e Gestão",
    description: "Você investe, nós administramos para maximizar retorno em dólar."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-how-it-works-title">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto" data-testid="text-how-it-works-subtitle">
            <span className="text-primary font-semibold">Transparência é a base.</span> Nosso processo é simples, direto e seguro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`step-${index}`}
            >
              <Card className="h-full bg-gray-900 border-gray-800 hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-4" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed" data-testid={`text-step-description-${index}`}>
                    {step.description}
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