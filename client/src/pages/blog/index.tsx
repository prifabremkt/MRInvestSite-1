import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Globe, PieChart, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import usStatesImage from "@assets/generated_images/US_states_real_estate_map_d375a698.png";
import brazilUsaImage from "@assets/generated_images/Brazil_USA_investment_connection_6548bcae.png";
import reitsVsPropertiesImage from "@assets/generated_images/REITs_vs_physical_properties_71fa553b.png";

const articles = [
  {
    title: "Quais os melhores estados dos EUA para investir em imóveis em 2025?",
    summary: "Análise completa dos estados mais promissores para investimento imobiliário, considerando rentabilidade, segurança jurídica e valorização patrimonial.",
    readTime: "8 min de leitura",
    link: "/blog/melhores-estados-usa-2025",
    icon: MapPin,
    date: "15 de Janeiro, 2025",
    image: usStatesImage
  },
  {
    title: "Como investir em imóveis nos EUA morando no Brasil?",
    summary: "Guia completo sobre estrutura legal, financiamento, câmbio e gestão remota para brasileiros que desejam investir no mercado americano.",
    readTime: "12 min de leitura",
    link: "/blog/como-investir-imoveis-usa-brasil",
    icon: Globe,
    date: "10 de Janeiro, 2025",
    image: brazilUsaImage
  },
  {
    title: "REITs ou imóveis físicos: qual o melhor para brasileiros?",
    summary: "Comparativo detalhado entre fundos imobiliários e propriedades físicas, mostrando vantagens, desvantagens e exemplos práticos de cada estratégia.",
    readTime: "10 min de leitura",
    link: "/blog/reits-vs-imoveis-fisicos",
    icon: PieChart,
    date: "5 de Janeiro, 2025",
    image: reitsVsPropertiesImage
  }
];

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Artigos Estratégicos - Investimentos Imobiliários nos EUA | MR Invest";
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Leia nossos artigos estratégicos sobre investimentos imobiliários nos EUA. Análises dos melhores estados, guias para brasileiros e comparações de estratégias de investimento.');
    
    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Artigos Estratégicos - Investimentos Imobiliários nos EUA');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Conhecimento estratégico para maximizar seus investimentos imobiliários nos Estados Unidos com análises detalhadas e guias práticos.');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-destructive mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6" data-testid="text-blog-title">
            Artigos Estratégicos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-subtitle">
            Conhecimento estratégico para maximizar seus investimentos imobiliários nos EUA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={article.link}>
                  <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer group" data-testid={`card-article-${index}`}>
                    {/* Cover Image */}
                    <div className="relative">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        data-testid={`img-article-${index}`}
                      />
                      <div className="absolute top-4 right-4">
                        <span className="text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full" data-testid={`text-article-date-${index}`}>
                          {article.date}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 leading-relaxed" data-testid={`text-article-title-${index}`}>
                        {article.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3" data-testid={`text-article-summary-${index}`}>
                        {article.summary}
                      </p>

                      {/* Read Time */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary font-medium" data-testid={`text-article-readtime-${index}`}>
                          {article.readTime}
                        </span>
                        <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary transition-colors">
                          Ler artigo →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-destructive/10 border border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6" data-testid="text-cta-title">
                Pronto para começar a investir?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto" data-testid="text-cta-description">
                Se você está interessado em investir em imóveis nos EUA com segurança e rentabilidade, nossa equipe pode te ajudar em cada etapa do processo.
              </p>
              <Link href="/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-destructive text-white" data-testid="button-cta-contact">
                  Falar com especialista
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}