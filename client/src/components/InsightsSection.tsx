import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, Globe, PieChart } from "lucide-react";
import { Link } from "wouter";
import usStatesImage from "@assets/generated_images/US_states_real_estate_map_d375a698.png";
import brazilUsaImage from "@assets/generated_images/Brazil_USA_investment_connection_6548bcae.png";
import reitsVsPropertiesImage from "@assets/generated_images/REITs_vs_physical_properties_71fa553b.png";

const insights = [
  {
    title: "Quais os melhores estados dos EUA para investir em imóveis em 2025?",
    summary: "Análise completa dos estados mais promissores para investimento imobiliário, considerando rentabilidade, segurança jurídica e valorização patrimonial.",
    readTime: "8 min de leitura",
    link: "/blog/melhores-estados-usa-2025",
    icon: MapPin,
    image: usStatesImage
  },
  {
    title: "Como investir em imóveis nos EUA morando no Brasil?",
    summary: "Guia completo sobre estrutura legal, financiamento, câmbio e gestão remota para brasileiros que desejam investir no mercado americano.",
    readTime: "12 min de leitura",
    link: "/blog/como-investir-imoveis-usa-brasil",
    icon: Globe,
    image: brazilUsaImage
  },
  {
    title: "REITs ou imóveis físicos: qual o melhor para brasileiros?",
    summary: "Comparativo detalhado entre fundos imobiliários e propriedades físicas, mostrando vantagens, desvantagens e exemplos práticos de cada estratégia.",
    readTime: "10 min de leitura",
    link: "/blog/reits-vs-imoveis-fisicos",
    icon: PieChart,
    image: reitsVsPropertiesImage
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
                    {/* Cover Image */}
                    <div className="relative">
                      <img 
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        data-testid={`img-insight-${index}`}
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
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