import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Todo: remove mock functionality - replace with real blog data
const insights = [
  {
    title: "Guia Completo: Como Investir em Imóveis nos EUA sendo Brasileiro",
    summary: "Tudo que você precisa saber sobre impostos, documentação e estratégias para investir com segurança no mercado americano.",
    readTime: "8 min de leitura"
  },
  {
    title: "Mercado Imobiliário Americano: Tendências e Oportunidades 2024",
    summary: "Análise exclusiva dos melhores mercados regionais e projeções para os próximos anos no real estate americano.",
    readTime: "6 min de leitura"
  },
  {
    title: "Proteção Patrimonial: Por que Diversificar Internacionalmente",
    summary: "Como proteger seu patrimônio contra instabilidades econômicas através de investimentos imobiliários internacionais.",
    readTime: "5 min de leitura"
  }
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-6" data-testid="text-insights-title">
            Insights Exclusivos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-insights-subtitle">
            Conhecimento estratégico para maximizar seus investimentos imobiliários
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer group" data-testid={`card-insight-${index}`}>
                <CardContent className="p-6">
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-lg mb-6 flex items-center justify-center group-hover:from-primary/20 group-hover:to-destructive/20 transition-all duration-300">
                    <span className="text-3xl">📈</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2" data-testid={`text-insight-title-${index}`}>
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3" data-testid={`text-insight-summary-${index}`}>
                    {insight.summary}
                  </p>
                  <span className="text-xs text-primary font-medium" data-testid={`text-insight-readtime-${index}`}>
                    {insight.readTime}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid="button-read-articles"
          >
            Ler artigos estratégicos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}