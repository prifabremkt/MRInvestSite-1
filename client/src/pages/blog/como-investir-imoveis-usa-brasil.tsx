import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Globe, Shield, DollarSign, MapPin, FileText, BarChart } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function ComoInvestirImoveisUSABrasil() {
  useEffect(() => {
    document.title = "Como Investir em Imóveis nos EUA Morando no Brasil - Guia Completo - MR Invest";
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Guia completo para brasileiros investirem em imóveis nos EUA. Saiba sobre estrutura legal, financiamento, câmbio e gestão remota com segurança e rentabilidade.');
    
    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Como Investir em Imóveis nos EUA Morando no Brasil - Guia Completo');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Tudo sobre estrutura legal, financiamento, câmbio e gestão remota para brasileiros que desejam investir no mercado imobiliário americano.');
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
        className="py-16 bg-gradient-to-b from-destructive/5 to-background"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="outline" className="gap-2" data-testid="badge-category">
                <Globe className="w-3 h-3" />
                Guia Completo
              </Badge>
              <Badge variant="outline" className="gap-2" data-testid="badge-date">
                <Calendar className="w-3 h-3" />
                2025
              </Badge>
              <Badge variant="outline" className="gap-2" data-testid="badge-reading-time">
                <Clock className="w-3 h-3" />
                12 min de leitura
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6 leading-tight" data-testid="text-article-title">
              Como investir em imóveis nos EUA morando no Brasil?
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-article-subtitle">
              Cada vez mais brasileiros buscam diversificação internacional e segurança patrimonial através de investimentos imobiliários nos Estados Unidos.
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
                  Neste guia completo, você vai entender desde os aspectos legais até a gestão do imóvel, e verá como nossa empresa ajuda investidores brasileiros a superar barreiras jurídicas, financeiras e operacionais de forma prática.
                </p>
              </div>

              {/* Why invest in US real estate */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-why-invest">
                  <Shield className="w-8 h-8 text-primary" />
                  Por que investir em imóveis nos EUA?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <Shield className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Segurança jurídica</h3>
                      <p className="text-muted-foreground">
                        Os Estados Unidos têm um sistema jurídico sólido e transparente, que protege tanto proprietários quanto inquilinos, oferecendo maior previsibilidade nos retornos.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <DollarSign className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Renda em dólar</h3>
                      <p className="text-muted-foreground">
                        Receber aluguel em dólar permite ao investidor brasileiro blindar parte do seu patrimônio contra variações cambiais e inflação local.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <BarChart className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Valorização patrimonial</h3>
                      <p className="text-muted-foreground">
                        Cidades americanas com forte crescimento populacional e econômico oferecem oportunidades de valorização que podem superar a média do mercado brasileiro.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Barriers for Brazilian investors */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-barriers">
                  Quais são as barreiras para o investidor brasileiro?
                </h2>
                
                <div className="bg-destructive/5 rounded-lg p-6 mb-8">
                  <p className="text-muted-foreground mb-4">
                    Embora atraente, investir em imóveis nos EUA pode parecer desafiador no início. Entre os principais obstáculos estão:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-destructive mt-0.5" />
                      <span><strong>Questões jurídicas:</strong> Estrutura societária (como LLC), contratos e registros de propriedade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-destructive mt-0.5" />
                      <span><strong>Aspectos financeiros:</strong> Financiamento, câmbio e impostos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-destructive mt-0.5" />
                      <span><strong>Gestão remota:</strong> Acompanhamento do imóvel, manutenção e cobrança de aluguéis</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-foreground font-semibold">
                      💡 A boa notícia é que todos esses pontos podem ser solucionados com apoio especializado.
                    </p>
                  </div>
                </div>
              </section>

              {/* Legal structure */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-legal">
                  <FileText className="w-8 h-8 text-primary" />
                  Estrutura legal: como comprar imóvel nos EUA
                </h2>
                
                <div className="space-y-6">
                  <Card className="bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Preciso ter visto ou cidadania americana?</h3>
                      <p className="text-lg text-muted-foreground">
                        <strong>Não.</strong> Brasileiros podem comprar imóveis nos EUA sem precisar de visto especial ou green card.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-destructive/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Comprar no nome pessoal ou via empresa (LLC)?</h3>
                      <p className="text-muted-foreground mb-4">
                        A maioria dos investidores estrangeiros opta por abrir uma LLC (Limited Liability Company) para adquirir o imóvel.
                      </p>
                      <div className="bg-primary/5 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Benefícios da LLC:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Proteção patrimonial (blindagem jurídica)</li>
                          <li>• Facilidade para dividir cotas entre herdeiros</li>
                          <li>• Vantagens fiscais em determinados cenários</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-500/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Documentos necessários</h3>
                      <p className="text-muted-foreground">
                        Geralmente, basta apresentar passaporte válido e comprovante de endereço no Brasil. Nossa equipe cuida de toda a parte burocrática para que o processo seja ágil e seguro.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Financing and currency */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-financing">
                  <DollarSign className="w-8 h-8 text-primary" />
                  Financiamento e câmbio: como estruturar o pagamento
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Posso financiar imóvel nos EUA sendo estrangeiro?</h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        <strong>Sim.</strong> Muitos bancos americanos oferecem financiamento para estrangeiros, geralmente exigindo entrada de 25% a 40% do valor do imóvel.
                      </p>
                      
                      <h4 className="font-semibold text-foreground mb-3">Alternativas de pagamento:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-primary/5 rounded-lg p-4">
                          <h5 className="font-semibold text-foreground mb-2">Compra à vista</h5>
                          <p className="text-muted-foreground">Mais rápida, mas exige planejamento de câmbio</p>
                        </div>
                        <div className="bg-destructive/5 rounded-lg p-4">
                          <h5 className="font-semibold text-foreground mb-2">Compra financiada</h5>
                          <p className="text-muted-foreground">Permite alavancagem e preserva capital para outros investimentos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-50 dark:bg-orange-900/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Tributação e câmbio</h3>
                      <p className="text-muted-foreground mb-4">
                        É importante estruturar bem a conversão de reais para dólares e considerar:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• IOF em operações de câmbio</li>
                        <li>• Tributação sobre renda de aluguel nos EUA (que pode ser compensada no Brasil via acordo de bitributação)</li>
                      </ul>
                      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                        <p className="text-foreground">
                          Auxiliamos com parceiros especializados em câmbio e contabilidade internacional para evitar surpresas fiscais.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Remote management */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-management">
                  <Globe className="w-8 h-8 text-primary" />
                  Gestão remota: como cuidar do imóvel morando no Brasil
                </h2>
                
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Esse é o ponto que mais preocupa investidores. Afinal, como administrar um imóvel a milhares de quilômetros de distância?
                  </p>
                </div>

                <Card className="bg-gradient-to-r from-primary/5 to-destructive/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Gestão profissional de imóveis</h3>
                    <p className="text-muted-foreground mb-6">
                      Oferecemos soluções completas de administração, incluindo:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-primary mt-1" />
                          <span className="text-muted-foreground">Seleção e verificação de inquilinos</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-primary mt-1" />
                          <span className="text-muted-foreground">Cobrança e repasse de aluguéis</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-primary mt-1" />
                          <span className="text-muted-foreground">Manutenção preventiva e corretiva</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <BarChart className="w-5 h-5 text-primary mt-1" />
                          <span className="text-muted-foreground">Relatórios periódicos com fotos e dados financeiros</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-foreground font-semibold">
                        Assim, o investidor acompanha tudo de forma online, com total transparência.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Where to invest */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-where">
                  <MapPin className="w-8 h-8 text-primary" />
                  Onde investir em imóveis nos EUA?
                </h2>
                
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Não basta escolher qualquer cidade. É essencial analisar:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                    <li>• Crescimento populacional</li>
                    <li>• Mercado de trabalho local</li>
                    <li>• Custos de impostos e seguros</li>
                    <li>• Demanda por aluguel</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">Exemplos de mercados atrativos em 2025</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-primary/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Texas</h4>
                      <p className="text-muted-foreground">Houston, Dallas, Austin: Grande crescimento demográfico, economia forte e bons aluguéis.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-destructive/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Flórida</h4>
                      <p className="text-muted-foreground">Orlando, Miami, Tampa: Forte turismo e migração de aposentados.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-500/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Geórgia</h4>
                      <p className="text-muted-foreground">Atlanta: Polo logístico e de negócios, preços acessíveis.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-500/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Carolina do Norte</h4>
                      <p className="text-muted-foreground">Charlotte, Raleigh: Centros de tecnologia e universidades.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Step by step */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-section-steps">
                  Passo a passo para investir em imóveis nos EUA morando no Brasil
                </h2>
                
                <div className="space-y-4">
                  {[
                    "Definir objetivo: Renda de aluguel, valorização ou ambos",
                    "Escolher o estado e cidade: Avaliar oportunidades conforme perfil de risco",
                    "Abrir estrutura legal (LLC): Para proteção e eficiência fiscal",
                    "Selecionar imóvel: Com análise de rentabilidade e valorização",
                    "Definir forma de pagamento: À vista ou financiado",
                    "Concluir a compra com suporte jurídico: Registro em cartório americano",
                    "Delegar a gestão do imóvel: Para garantir tranquilidade na operação"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Practical example */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-example">
                  Exemplo prático de um investidor brasileiro
                </h2>
                
                <Card className="bg-gradient-to-r from-primary/10 to-destructive/10">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      João - Empresário de São Paulo
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Decidiu investir em imóveis nos EUA comprando uma casa em Orlando para aluguel de longo prazo.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Valor do imóvel:</span>
                          <span className="font-semibold text-foreground">USD 250.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Entrada (35%):</span>
                          <span className="font-semibold text-foreground">USD 87.500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Financiamento:</span>
                          <span className="font-semibold text-foreground">65%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Aluguel mensal:</span>
                          <span className="font-semibold text-primary">USD 1.800</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Despesas:</span>
                          <span className="font-semibold text-destructive">USD 600</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-muted-foreground">Lucro líquido:</span>
                          <span className="font-bold text-foreground">USD 1.200/mês</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-foreground">
                        <strong>Resultado:</strong> João recebe renda líquida de USD 1.200/mês (cerca de R$ 6.000), além da valorização do imóvel. E tudo isso sendo administrado remotamente por nossa equipe, sem dor de cabeça.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Our advantages */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-advantages">
                  Vantagens de contar com apoio especializado
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <FileText className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Assessoria jurídica completa</h3>
                      <p className="text-muted-foreground">Desde a constituição da LLC até o fechamento da compra.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <DollarSign className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Parcerias financeiras</h3>
                      <p className="text-muted-foreground">Apoio em câmbio e financiamento.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <Globe className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Gestão profissional</h3>
                      <p className="text-muted-foreground">Administração e manutenção do imóvel.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <BarChart className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Transparência total</h3>
                      <p className="text-muted-foreground">Relatórios online e acompanhamento remoto.</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <p className="text-lg text-foreground font-semibold text-center">
                    Com isso, o investidor brasileiro consegue transformar a distância em apenas um detalhe.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12 bg-gradient-to-r from-primary/5 to-destructive/5 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-conclusion">
                  Conclusão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Investir em imóveis nos EUA morando no Brasil é totalmente viável, desde que o processo seja bem estruturado. Os desafios existem — questões legais, financeiras e operacionais — mas podem ser superados com apoio especializado.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Em 2025, os EUA continuam sendo um dos mercados mais sólidos e atraentes do mundo, oferecendo aos brasileiros a chance de diversificar patrimônio, gerar renda em dólar e proteger capital.
                </p>
              </section>

              {/* CTA */}
              <section className="text-center bg-primary/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pronto para dar o próximo passo?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Se você quer investir em imóveis nos EUA com segurança, nossa empresa está pronta para ajudar em cada detalhe: da escolha do imóvel à gestão remota completa.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-destructive text-white" data-testid="button-cta-contact">
                  Entre em contato e transforme esse plano em realidade
                </Button>
              </section>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}