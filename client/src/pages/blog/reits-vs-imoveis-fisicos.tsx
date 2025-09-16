import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, TrendingUp, Building, PieChart, DollarSign, Shield, Zap, BarChart } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function REITsVsImoveisFisicos() {
  useEffect(() => {
    document.title = "REITs ou Imóveis Físicos: Qual o Melhor para Brasileiros? - MR Invest";
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Comparativo completo entre REITs e imóveis físicos nos EUA. Descubra vantagens, desvantagens e qual estratégia oferece melhor retorno para investidores brasileiros.');
    
    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'REITs ou Imóveis Físicos: Qual o Melhor para Brasileiros?');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Análise detalhada entre fundos imobiliários e propriedades físicas nos EUA, com exemplos práticos e orientações para investidores brasileiros.');
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
        className="py-16 bg-gradient-to-b from-orange-500/5 to-background"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="outline" className="gap-2" data-testid="badge-category">
                <PieChart className="w-3 h-3" />
                Comparativo
              </Badge>
              <Badge variant="outline" className="gap-2" data-testid="badge-date">
                <Calendar className="w-3 h-3" />
                2025
              </Badge>
              <Badge variant="outline" className="gap-2" data-testid="badge-reading-time">
                <Clock className="w-3 h-3" />
                10 min de leitura
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6 leading-tight" data-testid="text-article-title">
              REITs ou imóveis físicos: qual o melhor para brasileiros?
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-article-subtitle">
              Nos últimos anos, aumentou o interesse de brasileiros que buscam investir em imóveis nos EUA. Mas qual estratégia oferece melhores resultados?
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
                  Esse movimento acontece pela busca de segurança jurídica, diversificação patrimonial, geração de renda em dólar e valorização no longo prazo. Mas, ao iniciar essa jornada, muitos se deparam com uma dúvida: é melhor comprar imóveis físicos diretamente ou investir em REITs (Real Estate Investment Trusts)?
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Neste artigo, vamos comparar as duas opções, mostrar prós e contras de cada uma e destacar como a compra de imóveis físicos, com apoio especializado, pode oferecer mais controle, valorização e benefícios duradouros para o investidor brasileiro.
                </p>
              </div>

              {/* What are REITs */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-what-reits">
                  <PieChart className="w-8 h-8 text-primary" />
                  O que são REITs?
                </h2>
                
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Os REITs (Real Estate Investment Trusts) são fundos imobiliários americanos que funcionam de forma parecida com os FIIs no Brasil. Eles reúnem capital de vários investidores para comprar, financiar ou administrar empreendimentos imobiliários que geram renda.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">Tipos de REITs mais comuns</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-primary/5">
                    <CardContent className="p-6">
                      <Building className="w-8 h-8 text-primary mb-4" />
                      <h4 className="text-lg font-semibold text-foreground mb-3">Equity REITs</h4>
                      <p className="text-muted-foreground">Possuem imóveis e ganham receita com aluguéis.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-destructive/5">
                    <CardContent className="p-6">
                      <DollarSign className="w-8 h-8 text-destructive mb-4" />
                      <h4 className="text-lg font-semibold text-foreground mb-3">Mortgage REITs</h4>
                      <p className="text-muted-foreground">Investem em financiamentos imobiliários e hipotecas.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-500/5">
                    <CardContent className="p-6">
                      <TrendingUp className="w-8 h-8 text-orange-500 mb-4" />
                      <h4 className="text-lg font-semibold text-foreground mb-3">Hybrid REITs</h4>
                      <p className="text-muted-foreground">Combinação dos dois modelos.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-6 bg-primary/5 rounded-lg">
                  <p className="text-muted-foreground">
                    Os REITs são negociados em bolsa e permitem que qualquer investidor compre cotas com valores relativamente baixos, tendo acesso a grandes portfólios imobiliários.
                  </p>
                </div>
              </section>

              {/* How physical real estate works */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-physical-real-estate">
                  <Building className="w-8 h-8 text-primary" />
                  Como funciona a compra de imóveis físicos nos EUA?
                </h2>
                
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Já a compra de imóveis físicos consiste em adquirir diretamente um bem nos Estados Unidos, seja para aluguel de longo prazo, temporada ou valorização patrimonial. O processo pode ser feito no nome pessoal ou via empresa (geralmente uma LLC), o que garante proteção patrimonial e vantagens fiscais.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O investidor estrangeiro tem liberdade para escolher localização, tipo de imóvel e estratégia — e ainda pode financiar parte do valor, mesmo morando no Brasil.
                  </p>
                </div>
              </section>

              {/* Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-comparison">
                  <BarChart className="w-8 h-8 text-primary" />
                  Comparando REITs e imóveis físicos
                </h2>
                
                <div className="space-y-8">
                  {/* Ease of entry */}
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <Zap className="w-6 h-6 text-primary" />
                        1. Facilidade de entrada
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">REITs</h4>
                          <p className="text-muted-foreground">É possível começar com poucos dólares, comprando cotas em corretoras internacionais.</p>
                        </div>
                        <div className="bg-destructive/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">Imóveis físicos</h4>
                          <p className="text-muted-foreground">Exige capital inicial maior, já que mesmo financiado, o banco solicita entrada de 25% a 40% do valor.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Control */}
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <Shield className="w-6 h-6 text-primary" />
                        2. Controle sobre o investimento
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">REITs</h4>
                          <p className="text-muted-foreground">O investidor não tem voz sobre quais imóveis compõem o portfólio do fundo.</p>
                        </div>
                        <div className="bg-destructive/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">Imóveis físicos</h4>
                          <p className="text-muted-foreground">Você escolhe onde, quando e como investir, podendo definir estratégias personalizadas de valorização e aluguel.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Profitability */}
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <DollarSign className="w-6 h-6 text-primary" />
                        3. Rentabilidade
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">REITs</h4>
                          <p className="text-muted-foreground">O retorno é baseado em dividendos distribuídos pelos fundos, geralmente entre 3% e 6% ao ano.</p>
                        </div>
                        <div className="bg-destructive/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">Imóveis físicos</h4>
                          <p className="text-muted-foreground">Podem gerar retornos líquidos de 6% a 10% ao ano em aluguel, além de valorização patrimonial que pode superar 30% em 5 anos.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Liquidity */}
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <Zap className="w-6 h-6 text-primary" />
                        4. Liquidez
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">REITs</h4>
                          <p className="text-muted-foreground">Alta liquidez — vender cotas é simples, bastando acessar a corretora.</p>
                        </div>
                        <div className="bg-destructive/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">Imóveis físicos</h4>
                          <p className="text-muted-foreground">Menor liquidez, já que vender um imóvel exige tempo e processo de negociação.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Wealth growth */}
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        5. Crescimento patrimonial
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">REITs</h4>
                          <p className="text-muted-foreground">O patrimônio cresce conforme valorização das cotas, mas sem controle direto.</p>
                        </div>
                        <div className="bg-destructive/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">Imóveis físicos</h4>
                          <p className="text-muted-foreground">O investidor tem ativo próprio, que pode ser usado como garantia, transmitido a herdeiros e até alavancado em novos financiamentos.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Practical examples */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-section-practical-examples">
                  Exemplo prático de REITs x Imóvel físico
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* REIT scenario */}
                  <Card className="bg-primary/5">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Cenário 1: Investimento em REIT</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Valor investido:</span>
                          <span className="font-semibold text-foreground">USD 100.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dividendo médio anual:</span>
                          <span className="font-semibold text-primary">5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Renda anual:</span>
                          <span className="font-semibold text-primary">USD 5.000</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-muted-foreground">Renda mensal:</span>
                          <span className="font-bold text-foreground">USD 416</span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                        <p className="text-muted-foreground text-sm">
                          O valor da cota pode subir ou cair conforme o mercado, sem controle direto do investidor.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Physical real estate scenario */}
                  <Card className="bg-destructive/5">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Cenário 2: Compra de imóvel físico</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Casa em Orlando:</span>
                          <span className="font-semibold text-foreground">USD 250.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Entrada (40%):</span>
                          <span className="font-semibold text-foreground">USD 100.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Aluguel mensal:</span>
                          <span className="font-semibold text-primary">USD 1.800</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Despesas mensais:</span>
                          <span className="font-semibold text-destructive">USD 600</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-muted-foreground">Lucro líquido mensal:</span>
                          <span className="font-bold text-foreground">USD 1.200</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lucro anual:</span>
                          <span className="font-bold text-primary">USD 14.400</span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-destructive/10 rounded-lg">
                        <p className="text-muted-foreground text-sm">
                          Valorização média esperada em 5 anos: 30% (cerca de USD 75.000 de ganho de capital)
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-destructive/10 rounded-lg">
                  <p className="text-lg text-foreground font-semibold text-center">
                    <strong>Resultado:</strong> Imóvel físico gera renda maior e patrimônio sólido que tende a valorizar ao longo do tempo.
                  </p>
                </div>
              </section>

              {/* Advantages of physical real estate */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" data-testid="text-section-advantages">
                  <Building className="w-8 h-8 text-primary" />
                  Vantagens de imóveis físicos para brasileiros
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <Shield className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Controle total</h3>
                      <p className="text-muted-foreground">Você decide onde investir, como alugar e quando vender.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <TrendingUp className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Valorização real</h3>
                      <p className="text-muted-foreground">Diferente de cotas em bolsa, o imóvel é um bem tangível.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <DollarSign className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Alavancagem via financiamento</h3>
                      <p className="text-muted-foreground">Usar crédito americano permite multiplicar o retorno.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <Shield className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Proteção contra volatilidade</h3>
                      <p className="text-muted-foreground">Imóveis têm menor oscilação do que ativos de bolsa.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Where to invest */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-where-invest">
                  Onde investir em imóveis nos EUA?
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Os estados mais atrativos para brasileiros em 2025 são:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-primary/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Texas</h4>
                      <p className="text-muted-foreground">Dallas, Houston, Austin: Forte crescimento populacional e de empregos.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-destructive/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Flórida</h4>
                      <p className="text-muted-foreground">Orlando, Miami, Tampa: Grande demanda turística e migração de aposentados.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-500/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Geórgia</h4>
                      <p className="text-muted-foreground">Atlanta: Centro logístico e de negócios com imóveis ainda acessíveis.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-500/5">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-2">Carolina do Norte</h4>
                      <p className="text-muted-foreground">Charlotte, Raleigh: Mercado de tecnologia em expansão.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-6 bg-primary/5 rounded-lg">
                  <p className="text-muted-foreground">
                    Essas regiões combinam valorização patrimonial e excelente rentabilidade de aluguel.
                  </p>
                </div>
              </section>

              {/* How our company helps */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-our-help">
                  Como nossa empresa ajuda no processo
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <TrendingUp className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Consultoria especializada</h3>
                      <p className="text-muted-foreground">Avaliamos o perfil do investidor e sugerimos os melhores mercados e imóveis.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <Shield className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Estrutura legal completa</h3>
                      <p className="text-muted-foreground">Cuidamos da abertura de LLC, contratos, registros e questões tributárias.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <DollarSign className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Apoio financeiro</h3>
                      <p className="text-muted-foreground">Ajudamos em câmbio, financiamento nos EUA e planejamento fiscal internacional.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <Building className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">Gestão do imóvel</h3>
                      <p className="text-muted-foreground">Oferecemos administração remota completa: seleção de inquilinos, cobrança, manutenção e relatórios transparentes.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12 bg-gradient-to-r from-primary/5 to-destructive/5 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-conclusion">
                  Conclusão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Tanto REITs quanto imóveis físicos são caminhos legítimos para investir em imóveis nos EUA. REITs oferecem praticidade e liquidez, mas limitam o controle e o crescimento patrimonial.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Já os imóveis físicos, quando adquiridos com apoio especializado, permitem maior rentabilidade, segurança e valorização de longo prazo.
                </p>
                <p className="text-lg text-foreground font-semibold">
                  Se o seu objetivo é construir um patrimônio sólido nos Estados Unidos, gerar renda em dólar e ter mais autonomia sobre o investimento, a compra de imóveis físicos é a melhor escolha.
                </p>
              </section>

              {/* CTA */}
              <section className="text-center bg-primary/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pronto para investir em imóveis físicos nos EUA?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Quer saber como dar o próximo passo e investir em imóveis nos EUA com segurança, mesmo morando no Brasil? Nossa empresa acompanha você em todas as etapas — da escolha do imóvel à gestão completa.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-destructive text-white" data-testid="button-cta-contact">
                  Fale conosco e descubra como transformar esse projeto em realidade
                </Button>
              </section>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}