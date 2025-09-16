import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">MR</span>
              </div>
              <span className="text-primary font-bold text-xl" data-testid="logo-footer">MRInvest</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6" data-testid="text-footer-description">
              <span className="font-semibold">Real Estate. Real Results.</span><br />
              A MRInvest conecta você, investidor brasileiro, a empreendimentos imobiliários exclusivos nos EUA – com estratégia, segurança jurídica e resultados reais.
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
              Empresa
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-sobre">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-equipe">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-carreiras">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-imprensa">Imprensa</a></li>
            </ul>
          </div>
          
          {/* Investimentos */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="text-footer-investimentos-title">
              Investimentos
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-como-funciona">Como Funciona</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-projetos">Projetos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-calculadora">Calculadora</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-faq">FAQ</a></li>
            </ul>
          </div>
          
          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="text-footer-recursos-title">
              Recursos
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-central-ajuda">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-blog">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-webinars">Webinars</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-downloads">Downloads</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="text-footer-legal-title">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-termos">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-privacidade">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-regulamentacoes">Regulamentações</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-compliance">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        {/* Linha divisória e Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p data-testid="text-footer-copyright">
              © 2025 MR Invest. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <span>Investimentos nos EUA</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span>Estrutura Jurídica Internacional</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}