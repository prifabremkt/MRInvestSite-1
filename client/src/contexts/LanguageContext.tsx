import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage, default to Portuguese
    const saved = localStorage.getItem('mrinvest-language') as Language;
    return saved && ['pt', 'en'].includes(saved) ? saved : 'pt';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('mrinvest-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translations object
const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.how-it-works': 'Como Funciona',
    'nav.insights': 'Insights',
    'nav.contact': 'Falar com especialista',

    // Hero Section
    'hero.tagline': 'Seu Hub de Investimentos nos EUA',
    'hero.typing.usa': 'nos Estados Unidos',
    'hero.typing.mrinvest': 'com a MR Invest',
    'hero.main-headline': 'Invista',
    'hero.subheadline': 'Proteja seu patrimônio. Multiplique sua renda.',
    'hero.description': 'A MRInvest conecta você, investidor brasileiro, a empreendimentos imobiliários exclusivos nos EUA — com estratégia, segurança jurídica e resultados reais.',
    'hero.cta': 'Descobrir oportunidades',

    // About Section
    'about.title': 'Sobre a MRInvest',
    'about.intro': 'A MRInvest conecta você, investidor brasileiro, a empreendimentos imobiliários exclusivos nos EUA — com estratégia, segurança jurídica e resultados reais.',
    'about.mission': 'Nossa missão é democratizar o acesso aos melhores investimentos imobiliários internacionais, oferecendo proteção patrimonial e rentabilidade premium para nossos clientes.',
    'about.founders.title': 'Nossos Fundadores',
    'about.founders.description': 'Michel Pires e William Martinelli, profissionais com ampla experiência no mercado imobiliário americano e brasileiro, fundaram a MRInvest para facilitar o acesso de investidores brasileiros ao mercado americano.',
    'about.mission.title': 'Nossa Missão',
    'about.mission.description': 'Guiar brasileiros na realização de sonhos e na conquista de renda em dólar com investimentos reais, consultoria migratória, educação e geração de renda operacional.',

    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Descubra oportunidades exclusivas de investimento imobiliário cuidadosamente selecionadas nos Estados Unidos',
    'projects.roi-annual': 'ROI Anual',
    'projects.deadline': 'Prazo',
    'projects.progress': 'Progresso da Captação',
    'projects.min-investment': 'Investimento Mínimo',
    'projects.available': 'Disponível',
    'projects.last-spots': 'Últimas Vagas',
    'projects.days': 'dias',
    'projects.view-details': 'Ver detalhes',
    'projects.view-all': 'Ver todos os projetos',

    // Footer
    'footer.description': 'A MRInvest conecta você, investidor brasileiro, a empreendimentos imobiliários exclusivos nos EUA – com estratégia, segurança jurídica e resultados reais.',
    'footer.company': 'Empresa',
    'footer.about-us': 'Sobre Nós',
    'footer.our-team': 'Nossa Equipe',
    'footer.careers': 'Carreiras',
    'footer.press': 'Imprensa',
    'footer.investments': 'Investimentos',
    'footer.featured-projects': 'Projetos em Destaque',
    'footer.how-to-invest': 'Como Investir',
    'footer.success-stories': 'Cases de Sucesso',
    'footer.market-analysis': 'Análise de Mercado',
    'footer.support': 'Suporte',
    'footer.help-center': 'Central de Ajuda',
    'footer.contact': 'Contato',
    'footer.documentation': 'Documentação',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.cookies': 'Política de Cookies',
    'footer.contact-info': 'Informações de Contato',
    'footer.phone': '+55 (11) 99999-9999',
    'footer.email': 'contato@mrinvest.com.br',
    'footer.address': 'São Paulo, Brasil',
    'footer.rights': '© 2025 MRInvest. Todos os direitos reservados.',

    // Insights Section
    'insights.title': 'Insights Exclusivos',
    'insights.subtitle': 'Conhecimento estratégico para maximizar seus investimentos imobiliários',
    'insights.read-time': 'min de leitura',
    'insights.read-articles': 'Ler artigos',

    // Why Choose Section
    'why-choose.title': 'Por que escolher a MRInvest?',
    'why-choose.subtitle': 'Oferecemos uma experiência completa e personalizada para seus investimentos nos EUA',

    // How It Works Section
    'how-it-works.title': 'Como Funciona',
    'how-it-works.subtitle': 'Um processo simples e transparente para seu investimento',

    // Ebook Section
    'ebook.title': 'Guia Completo de Investimentos',
    'ebook.subtitle': 'Baixe nosso e-book gratuito',
    'ebook.cta': 'Baixar agora',

    // Credibility Section
    'credibility.title': 'Nossa Credibilidade',

    // Final CTA Section
    'final-cta.title': 'Pronto para começar?',
    'final-cta.subtitle': 'Fale com nossos especialistas',
    'final-cta.cta': 'Agendar consulta',

    // Language Selector
    'language.portuguese': 'Português',
    'language.english': 'English',

    // Blog Navigation
    'blog.back-home': 'Voltar ao início',
    'blog.read-time': 'min de leitura',

    // About Section - Founders Details
    'about.michel.name': 'Michel Pires',
    'about.michel.description': 'Executivo com histórico comprovado no desenvolvimento de projetos imobiliários na Flórida, da aquisição à entrega.',
    'about.william.name': 'William Martinelli',
    'about.william.description': 'Especialista em estrutura, captação e automação, com experiência em startups e consultoria de crescimento.',
    'about.purpose.title': 'Nosso Propósito',
    'about.purpose.description1': 'Juntos, unimos décadas de experiência prática em real estate, estruturação jurídica, tecnologia e estratégia de negócios para oferecer ao investidor brasileiro um caminho claro, estruturado e seguro para construir patrimônio nos Estados Unidos.',
    'about.purpose.description2': 'Guiar brasileiros na realização de sonhos e na conquista de renda em dólar com investimentos reais, consultoria migratória, educação e geração de renda operacional.',

    // Projects Section - Specific Labels
    'projects.download-presentation': 'Baixar apresentação',
    'projects.view-all-opportunities': 'Ver todas as oportunidades',
    'projects.tag.available': 'Disponível',
    'projects.tag.last-spots': 'Últimas Vagas',

    // Footer - Additional Labels
    'footer.tagline': 'Real Estate. Real Results.',
    'footer.company.title': 'Empresa',
    'footer.company.about': 'Sobre Nós',
    'footer.company.team': 'Nossa Equipe',
    'footer.company.careers': 'Carreiras',
    'footer.company.press': 'Imprensa',
    'footer.investments.title': 'Investimentos',
    'footer.investments.how-it-works': 'Como Funciona',
    'footer.investments.projects': 'Projetos',
    'footer.investments.calculator': 'Calculadora',
    'footer.investments.faq': 'FAQ',
    'footer.resources.title': 'Recursos',
    'footer.resources.help-center': 'Central de Ajuda',
    'footer.resources.blog': 'Blog',
    'footer.resources.webinars': 'Webinars',
    'footer.resources.downloads': 'Downloads',
    'footer.legal.title': 'Legal',
    'footer.legal.terms': 'Termos de Uso',
    'footer.legal.privacy': 'Política de Privacidade',
    'footer.legal.regulations': 'Regulamentações',
    'footer.legal.compliance': 'Compliance',
    'footer.copyright': '© 2025 MR Invest. Todos os direitos reservados.',
    'footer.investments-usa': 'Investimentos nos EUA',
    'footer.legal-structure': 'Estrutura Jurídica Internacional',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.how-it-works': 'How It Works',
    'nav.insights': 'Insights',
    'nav.contact': 'Talk to a specialist',

    // Hero Section
    'hero.tagline': 'Your US Investment Hub',
    'hero.typing.usa': 'in the United States',
    'hero.typing.mrinvest': 'with MR Invest',
    'hero.main-headline': 'Invest',
    'hero.subheadline': 'Protect your wealth. Multiply your income.',
    'hero.description': 'MRInvest connects you, Brazilian investor, to exclusive real estate ventures in the USA — with strategy, legal security and real results.',
    'hero.cta': 'Discover opportunities',

    // About Section
    'about.title': 'About MRInvest',
    'about.intro': 'MRInvest connects you, Brazilian investor, to exclusive real estate ventures in the USA — with strategy, legal security and real results.',
    'about.mission': 'Our mission is to democratize access to the best international real estate investments, offering asset protection and premium profitability for our clients.',
    'about.founders.title': 'Our Founders',
    'about.founders.description': 'Michel Pires and William Martinelli, professionals with extensive experience in the American and Brazilian real estate markets, founded MRInvest to facilitate Brazilian investors\' access to the American market.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Guide Brazilians in achieving dreams and earning dollar income through real investments, immigration consulting, education and operational income generation.',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Discover exclusive real estate investment opportunities carefully selected in the United States',
    'projects.roi-annual': 'Annual ROI',
    'projects.deadline': 'Timeline',
    'projects.progress': 'Funding Progress',
    'projects.min-investment': 'Minimum Investment',
    'projects.available': 'Available',
    'projects.last-spots': 'Last Spots',
    'projects.days': 'days',
    'projects.view-details': 'View details',
    'projects.view-all': 'View all projects',

    // Footer
    'footer.description': 'MRInvest connects you, Brazilian investor, to exclusive real estate ventures in the USA – with strategy, legal security and real results.',
    'footer.company': 'Company',
    'footer.about-us': 'About Us',
    'footer.our-team': 'Our Team',
    'footer.careers': 'Careers',
    'footer.press': 'Press',
    'footer.investments': 'Investments',
    'footer.featured-projects': 'Featured Projects',
    'footer.how-to-invest': 'How to Invest',
    'footer.success-stories': 'Success Stories',
    'footer.market-analysis': 'Market Analysis',
    'footer.support': 'Support',
    'footer.help-center': 'Help Center',
    'footer.contact': 'Contact',
    'footer.documentation': 'Documentation',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Policy',
    'footer.contact-info': 'Contact Information',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'contact@mrinvest.us',
    'footer.address': 'Miami, USA',
    'footer.rights': '© 2025 MRInvest. All rights reserved.',

    // Insights Section
    'insights.title': 'Exclusive Insights',
    'insights.subtitle': 'Strategic knowledge to maximize your real estate investments',
    'insights.read-time': 'min read',
    'insights.read-articles': 'Read articles',

    // Why Choose Section
    'why-choose.title': 'Why choose MRInvest?',
    'why-choose.subtitle': 'We offer a complete and personalized experience for your investments in the USA',

    // How It Works Section
    'how-it-works.title': 'How It Works',
    'how-it-works.subtitle': 'A simple and transparent process for your investment',

    // Ebook Section
    'ebook.title': 'Complete Investment Guide',
    'ebook.subtitle': 'Download our free e-book',
    'ebook.cta': 'Download now',

    // Credibility Section
    'credibility.title': 'Our Credibility',

    // Final CTA Section
    'final-cta.title': 'Ready to start?',
    'final-cta.subtitle': 'Talk to our specialists',
    'final-cta.cta': 'Schedule consultation',

    // Language Selector
    'language.portuguese': 'Português',
    'language.english': 'English',

    // Blog Navigation
    'blog.back-home': 'Back to home',
    'blog.read-time': 'min read',

    // About Section - Founders Details
    'about.michel.name': 'Michel Pires',
    'about.michel.description': 'Executive with a proven track record in developing real estate projects in Florida, from acquisition to delivery.',
    'about.william.name': 'William Martinelli',
    'about.william.description': 'Specialist in structure, fundraising and automation, with experience in startups and growth consulting.',
    'about.purpose.title': 'Our Purpose',
    'about.purpose.description1': 'Together, we combine decades of practical experience in real estate, legal structuring, technology and business strategy to offer Brazilian investors a clear, structured and safe path to build wealth in the United States.',
    'about.purpose.description2': 'Guide Brazilians in achieving dreams and earning dollar income through real investments, immigration consulting, education and operational income generation.',

    // Projects Section - Specific Labels
    'projects.download-presentation': 'Download presentation',
    'projects.view-all-opportunities': 'View all opportunities',
    'projects.tag.available': 'Available',
    'projects.tag.last-spots': 'Last Spots',

    // Footer - Additional Labels
    'footer.tagline': 'Real Estate. Real Results.',
    'footer.company.title': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.team': 'Our Team',
    'footer.company.careers': 'Careers',
    'footer.company.press': 'Press',
    'footer.investments.title': 'Investments',
    'footer.investments.how-it-works': 'How It Works',
    'footer.investments.projects': 'Projects',
    'footer.investments.calculator': 'Calculator',
    'footer.investments.faq': 'FAQ',
    'footer.resources.title': 'Resources',
    'footer.resources.help-center': 'Help Center',
    'footer.resources.blog': 'Blog',
    'footer.resources.webinars': 'Webinars',
    'footer.resources.downloads': 'Downloads',
    'footer.legal.title': 'Legal',
    'footer.legal.terms': 'Terms of Use',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.regulations': 'Regulations',
    'footer.legal.compliance': 'Compliance',
    'footer.copyright': '© 2025 MR Invest. All rights reserved.',
    'footer.investments-usa': 'USA Investments',
    'footer.legal-structure': 'International Legal Structure',
  },
};