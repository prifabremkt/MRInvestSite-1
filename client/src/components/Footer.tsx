export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://i.imgur.com/YLrPJJW.png" 
              alt="MRInvest Logo" 
              className="h-8 w-auto mb-6 brightness-0 invert"
              data-testid="logo-footer"
            />
            <p className="text-gray-300 leading-relaxed" data-testid="text-footer-description">
              Conectamos investidores brasileiros a oportunidades exclusivas no mercado imobiliário americano.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-title">
              Contato
            </h3>
            <div className="space-y-2 text-gray-300">
              <p data-testid="text-footer-phone">📞 +55 (11) 99999-9999</p>
              <p data-testid="text-footer-email">✉️ contato@mrinvest.com.br</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-social-title">
              Redes Sociais
            </h3>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-primary transition-colors" data-testid="link-linkedin">
                LinkedIn
              </a>
              <a href="#" className="block hover:text-primary transition-colors" data-testid="link-instagram">
                Instagram
              </a>
              <a href="#" className="block hover:text-primary transition-colors" data-testid="link-youtube">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p data-testid="text-footer-copyright">
            © 2024 MRInvest. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}