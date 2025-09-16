import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, TrendingUp, Shield, DollarSign, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function MelhoresEstadosUSA2025() {
  useEffect(() => {
    document.title = "Melhores Estados dos EUA para Investir em Imóveis em 2025 - MR Invest";
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Descubra os melhores estados dos EUA para investir em imóveis em 2025. Análise completa de Texas, Flórida, Geórgia e Carolina do Norte com dicas de rentabilidade e valorização.');
    
    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Melhores Estados dos EUA para Investir em Imóveis em 2025');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Guia completo dos estados mais promissores para investimento imobiliário nos EUA com análise de rentabilidade e potencial de valorização.');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-b from-primary/5 to-background"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="outline" className="gap-2" data-testid="badge-category">
                <TrendingUp className="w-3 h-3" />
                Investimentos
              </Badge>
              <Badge variant="outline" className="gap-2" data-testid="badge-date">
                <Calendar className="w-3 h-3" />
                2025
              </Badge>
              <Badge variant="outline" className="gap-2" data-testid="badge-reading-time">
                <Clock className="w-3 h-3" />
                8 min de leitura
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6 leading-tight" data-testid="text-article-title">
              Quais os melhores estados dos EUA para investir em imóveis em 2025?
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-article-subtitle">
              Investir nos EUA continua sendo uma estratégia atraente para brasileiros que buscam segurança, valorização patrimonial e bom retorno de aluguel.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Mas nem todos os estados oferecem as mesmas oportunidades: enquanto uns brilham por taxas de valorização e estabilidade, outros guiam pelo potencial de renda passiva, impostos baixos ou custos operacionais suaves. Neste artigo vamos explorar quais são os melhores estados dos EUA para investir em imóveis nos EUA em 2025.
                </p>
              </div>

              {/* Why choosing the right state matters */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-why-matters">
                  <Shield className="w-8 h-8 text-primary" />
                  Por que escolher o estado certo importa
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Segurança jurídica e estabilidade</h3>
                      <p className="text-muted-foreground">
                        Ao investir em imóveis nos EUA, você precisa de certeza sobre leis de propriedade, direitos de inquilinos, regime tributário e proteções contra litígios.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Rentabilidade vs. custos</h3>
                      <p className="text-muted-foreground">
                        Rendimento de aluguel é só parte da equação. Custos com manutenção, seguro, impostos locais, vacância e taxas de gestão podem corroer boa parte do retorno.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Valorização de longo prazo</h3>
                      <p className="text-muted-foreground">
                        Além da renda mensal, valorização é o que garante ganhos robustos a longo prazo. Fatores como crescimento populacional e demanda por moradia influenciam muito no valor futuro.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Selection criteria */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-criteria">
                  Critérios que usamos para selecionar os melhores estados
                </h2>
                
                <div className="bg-primary/5 rounded-lg p-6 mb-8">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      Crescimento Demográfico & Mercado de Trabalho
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                      Acessibilidade de financiamento para investidores estrangeiros
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5" />
                      Tributação estadual e local sobre propriedade e renda de aluguel
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5" />
                      Segurança (crimes, desastres naturais)
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      Potencial de valorização de médio e longo prazo
                    </li>
                  </ul>
                </div>
              </section>

              {/* Top states */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-top-states">
                  <MapPin className="w-8 h-8 text-primary" />
                  Estados que se destacam para 2025
                </h2>
                
                <div className="space-y-8">
                  {/* Texas */}
                  <Card className="bg-primary/5">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Texas</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Pontos fortes</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Nenhum imposto estadual sobre renda pessoal</li>
                            <li>• Crescimento demográfico forte, migração interna</li>
                            <li>• Mercado de aluguel sólido, custos de vida razoáveis</li>
                            <li>• Infraestrutura em expansão</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Aspectos a observar</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Algumas regiões têm altos impostos sobre propriedade</li>
                            <li>• Regulamentações podem variar entre condados</li>
                            <li>• Clima extremo (calor, tempestades)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Florida */}
                  <Card className="bg-destructive/5">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Flórida</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Pontos fortes</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Forte turismo e migração de aposentados</li>
                            <li>• Sem imposto de renda estadual</li>
                            <li>• Variações interessantes de preço entre regiões</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Aspectos a observar</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Riscos de furacões e seguro mais caro</li>
                            <li>• Mercado muito competitivo</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Georgia */}
                  <Card className="bg-orange-500/5">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Geórgia</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Pontos fortes</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Atlanta com crescimento econômico forte</li>
                            <li>• Preços de entrada ainda acessíveis</li>
                            <li>• Boa qualidade de vida</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Aspectos a observar</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Infraestrutura menos desenvolvida em subúrbios</li>
                            <li>• Cuidado com manutenção em climas úmidos</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Practical examples */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-examples">
                  Exemplos práticos de oportunidades
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Exemplo 1: Houston, Texas</h3>
                      <p className="text-muted-foreground mb-4">
                        Imagine um investidor brasileiro comprando uma casa de 3 quartos num subúrbio de Houston. O aluguel mensal pode cobrir a hipoteca, impostos e seguro, e ainda sobrar uma boa margem.
                      </p>
                      <p className="text-muted-foreground">
                        Em cinco anos, a valorização deve subir conforme a urbanização avança, novos empreendimentos comerciais aparecem e oferta de terrenos diminui.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-destructive/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Exemplo 2: Orlando, Flórida</h3>
                      <p className="text-muted-foreground mb-4">
                        Orlando não é só turismo: muitos profissionais que trabalham para parques temáticos, hotéis e setores de logística moram na cidade ou em municípios próximos.
                      </p>
                      <p className="text-muted-foreground">
                        Comprar imóveis para aluguel de longo prazo ou para temporada pode trazer retorno duplo: receita de aluguel + valorização por infraestrutura turística.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* How our company helps */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-our-help">
                  Como nossa empresa potencializa essas oportunidades
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Avaliação local especializada</h4>
                        <p className="text-muted-foreground">Parceiros que conhecem de perto as leis de zoneamento, impostos locais, histórico de valorização e riscos climáticos.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Estrutura jurídica sólida</h4>
                        <p className="text-muted-foreground">Cuidamos de toda a parte legal: constituição de LLC, registro, contratos de aluguel, seguro, questões fiscais internacionais.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Financiamento e câmbio</h4>
                        <p className="text-muted-foreground">Ajudamos a obter financiamento nos EUA, estruturamos compra à vista e gerenciamos o câmbio.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Gestão remota</h4>
                        <p className="text-muted-foreground">Parceiros para administração de imóveis, vistoria, manutenção, cobrança — tudo com transparência via relatórios e dashboards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12 bg-gradient-to-r from-primary/5 to-destructive/5 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-conclusion">
                  Conclusão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Para quem deseja investir em imóveis nos EUA em 2025, estados como Texas, Flórida, Geórgia, Carolina do Norte e Arizona se destacam como os mais promissores, oferecendo combinação de rentabilidade, segurança jurídica e valorização.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Escolher o estado certo reduz riscos e maximiza retornos. Se quiser, posso te mostrar cidades específicas dentro desses estados que têm os maiores potenciais para investimento em 2025.
                </p>
              </section>

              {/* CTA */}
              <section className="text-center bg-primary/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pronto para investir nos EUA?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Se você está pensando em investir em imóveis nos EUA e quer fazer isso com segurança e rentabilidade, nossa empresa pode te ajudar em cada etapa — desde a seleção do imóvel até a gestão completa.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-destructive text-white" data-testid="button-cta-contact">
                  Entre em contato para consultoria personalizada
                </Button>
              </section>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}