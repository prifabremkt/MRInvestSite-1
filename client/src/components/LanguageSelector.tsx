import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function BrazilFlag() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#009639"/>
      <polygon points="12,2 22,8 12,14 2,8" fill="#FFDF00"/>
      <circle cx="12" cy="8" r="3.5" fill="#002776"/>
      <path d="M10 6.5 Q12 7.5 14 6.5 Q12 9.5 10 8.5" fill="#FFDF00"/>
    </svg>
  );
}

function USAFlag() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="16" fill="#B22234"/>
      <rect y="1" width="24" height="1" fill="white"/>
      <rect y="3" width="24" height="1" fill="white"/>
      <rect y="5" width="24" height="1" fill="white"/>
      <rect y="7" width="24" height="1" fill="white"/>
      <rect y="9" width="24" height="1" fill="white"/>
      <rect y="11" width="24" height="1" fill="white"/>
      <rect y="13" width="24" height="1" fill="white"/>
      <rect y="15" width="24" height="1" fill="white"/>
      <rect width="10" height="8" fill="#3C3B6E"/>
    </svg>
  );
}

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="flex flex-col gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('pt')}
          className={`
            w-12 h-12 rounded-full shadow-lg border-2 flex items-center justify-center
            transition-all duration-200 hover-elevate
            ${language === 'pt' 
              ? 'border-primary bg-white' 
              : 'border-white/20 bg-white/90 backdrop-blur-sm'
            }
          `}
          title={t('language.portuguese')}
          data-testid="button-language-pt"
        >
          <BrazilFlag />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('en')}
          className={`
            w-12 h-12 rounded-full shadow-lg border-2 flex items-center justify-center
            transition-all duration-200 hover-elevate
            ${language === 'en' 
              ? 'border-primary bg-white' 
              : 'border-white/20 bg-white/90 backdrop-blur-sm'
            }
          `}
          title={t('language.english')}
          data-testid="button-language-en"
        >
          <USAFlag />
        </motion.button>
      </div>
    </div>
  );
}