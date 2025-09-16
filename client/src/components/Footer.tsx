import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.imgur.com/YLrPJJW.png" 
                alt="MRInvest Logo" 
                className="h-7 w-auto brightness-0 invert"
                data-testid="logo-footer"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6" data-testid="text-footer-description">
              <span className="font-semibold">{t('footer.tagline')}</span><br />
              {t('footer.description')}
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-primary transition-colors" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-primary transition-colors" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-primary transition-colors" data-testid="link-linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-primary transition-colors" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="text-footer-empresa-title">
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-sobre">{t('footer.company.about')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-equipe">{t('footer.company.team')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-carreiras">{t('footer.company.careers')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-imprensa">{t('footer.company.press')}</a></li>
            </ul>
          </div>
          
          {/* Investimentos */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="text-footer-investimentos-title">
              {t('footer.investments.title')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-como-funciona">{t('footer.investments.how-it-works')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-projetos">{t('footer.investments.projects')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-calculadora">{t('footer.investments.calculator')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-faq">{t('footer.investments.faq')}</a></li>
            </ul>
          </div>
          
          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="text-footer-recursos-title">
              {t('footer.resources.title')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-central-ajuda">{t('footer.resources.help-center')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-blog">{t('footer.resources.blog')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-webinars">{t('footer.resources.webinars')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-downloads">{t('footer.resources.downloads')}</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="text-footer-legal-title">
              {t('footer.legal.title')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-termos">{t('footer.legal.terms')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-privacidade">{t('footer.legal.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-regulamentacoes">{t('footer.legal.regulations')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-compliance">{t('footer.legal.compliance')}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Linha divisória e Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p data-testid="text-footer-copyright">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <span>{t('footer.investments-usa')}</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span>{t('footer.legal-structure')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}