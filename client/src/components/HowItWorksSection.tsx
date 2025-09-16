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
    <section id="como-funciona" className="py-32 bg-gradient-to-b from-slate-900/95 via-gray-900/90 to-black relative overflow-hidden">
      {/* Glassmorphism background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/8 via-purple-800/5 to-red-900/6"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/6 to-purple-600/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-red-600/5 to-blue-700/6 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
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
              <Card className="h-full bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 hover-elevate transition-all duration-500 shadow-2xl hover:bg-gray-800/70 hover:border-gray-600/60 hover:shadow-blue-500/10 relative">
                {/* Glassmorphism overlay com clip para cantos arredondados */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/3 rounded-lg pointer-events-none"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary via-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-20 shadow-lg border border-white/20 backdrop-blur-sm">
                      {index + 1}
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-gray-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-gray-600/40 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                      <step.icon className="w-10 h-10 text-primary drop-shadow-lg" />
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
      </div>
    </section>
  );
}