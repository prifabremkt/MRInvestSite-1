import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, Globe, PieChart } from "lucide-react";
import { Link } from "wouter";

const insights = [
  {
    title: "Quais os melhores estados dos EUA para investir em imóveis em 2025?",
    summary: "Análise completa dos estados mais promissores para investimento imobiliário, considerando rentabilidade, segurança jurídica e valorização patrimonial.",
    readTime: "8 min de leitura",
    link: "/blog/melhores-estados-usa-2025",
    icon: MapPin
  },
  {
    title: "Como investir em imóveis nos EUA morando no Brasil?",
    summary: "Guia completo sobre estrutura legal, financiamento, câmbio e gestão remota para brasileiros que desejam investir no mercado americano.",
    readTime: "12 min de leitura",
    link: "/blog/como-investir-imoveis-usa-brasil",
    icon: Globe
  },
  {
    title: "REITs ou imóveis físicos: qual o melhor para brasileiros?",
    summary: "Comparativo detalhado entre fundos imobiliários e propriedades físicas, mostrando vantagens, desvantagens e exemplos práticos de cada estratégia.",
    readTime: "10 min de leitura",
    link: "/blog/reits-vs-imoveis-fisicos",
    icon: PieChart
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
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={insight.link}>
                  <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer group" data-testid={`card-insight-${index}`}>
                    <CardContent className="p-6">
                      <div className="h-32 bg-gradient-to-br from-primary/10 to-destructive/10 rounded-lg mb-6 flex items-center justify-center group-hover:from-primary/20 group-hover:to-destructive/20 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
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
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary"
              data-testid="button-read-articles"
            >
              Ler artigos estratégicos
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}