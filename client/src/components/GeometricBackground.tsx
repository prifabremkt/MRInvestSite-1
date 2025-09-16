import { motion } from "framer-motion";

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradientes de fundo azul→preto sofisticados */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-950/15 to-black/10" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 via-slate-800/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-slate-900/15 via-blue-950/8 to-transparent" />
      </div>

      {/* Linhas diagonais geométricas em transparência aprimorada */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines-premium" patternUnits="userSpaceOnUse" width="150" height="150">
              <path d="M0,150 L150,0" stroke="hsl(220 100% 60%)" strokeWidth="0.4" opacity="0.08"/>
              <path d="M0,75 L75,0" stroke="hsl(220 100% 60%)" strokeWidth="0.2" opacity="0.06"/>
              <path d="M75,150 L150,75" stroke="hsl(220 100% 60%)" strokeWidth="0.2" opacity="0.06"/>
              <path d="M0,0 L150,150" stroke="hsl(355 85% 55%)" strokeWidth="0.3" opacity="0.05"/>
              <path d="M75,0 L150,75" stroke="hsl(280 60% 40%)" strokeWidth="0.25" opacity="0.04"/>
            </pattern>
            <pattern id="grid-lines" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0,0 L0,100" stroke="hsl(220 100% 70%)" strokeWidth="0.2" opacity="0.03"/>
              <path d="M0,0 L100,0" stroke="hsl(220 100% 70%)" strokeWidth="0.2" opacity="0.03"/>
              <path d="M50,0 L50,100" stroke="hsl(280 60% 50%)" strokeWidth="0.1" opacity="0.02"/>
              <path d="M0,50 L100,50" stroke="hsl(280 60% 50%)" strokeWidth="0.1" opacity="0.02"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines-premium)"/>
          <rect width="100%" height="100%" fill="url(#grid-lines)" transform="rotate(15 50 50)" opacity="0.4"/>
        </svg>
      </div>

      {/* Shapes abstratos/fluidos com blur suave em tons azul escuro e vermelho vinho */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-20 left-16 w-96 h-96 bg-gradient-to-br from-blue-900/12 via-slate-800/8 to-transparent rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 4, delay: 0.5, ease: "easeOut" }}
        className="absolute top-1/3 right-20 w-[32rem] h-80 bg-gradient-to-bl from-red-900/10 via-rose-800/7 to-transparent rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-950/8 via-indigo-900/6 to-transparent rounded-full blur-3xl"
      />
      <div className="absolute top-2/3 right-1/3 w-72 h-96 bg-gradient-to-br from-red-950/9 via-rose-900/6 to-blue-950/4 rounded-[40%] blur-3xl transform rotate-45"></div>
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-32 right-24 w-96 h-72 bg-gradient-to-tl from-blue-800/6 via-slate-700/5 to-red-900/7 rounded-[30%] blur-3xl"
      />
      <div className="absolute top-1/2 left-1/12 w-64 h-96 bg-gradient-to-r from-indigo-950/8 via-blue-900/6 to-transparent rounded-[50%] blur-3xl transform -rotate-12"></div>

      {/* Divisores angulados/ondulados sofisticados com efeito degradê */}
      <div className="absolute top-[18%] left-0 right-0 h-16">
        <svg className="w-full h-full" viewBox="0 0 1200 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(220 100% 60%)" stopOpacity="0.15" />
              <stop offset="50%" stopColor="hsl(280 70% 50%)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(355 85% 55%)" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path 
            d="M0,32 Q300,8 600,40 T1200,28 L1200,64 L0,64 Z" 
            fill="url(#grad1)" 
            opacity="0.3"
          />
          <path 
            d="M0,32 Q300,8 600,40 T1200,28" 
            fill="none" 
            stroke="url(#grad1)" 
            strokeWidth="1" 
            opacity="0.6"
          />
        </svg>
      </div>
      
      <div className="absolute top-[65%] left-0 right-0 h-20">
        <svg className="w-full h-full" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(355 85% 55%)" stopOpacity="0.12" />
              <stop offset="30%" stopColor="hsl(240 100% 40%)" stopOpacity="0.20" />
              <stop offset="70%" stopColor="hsl(280 60% 45%)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="hsl(220 100% 60%)" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <path 
            d="M0,20 L200,45 Q500,8 800,35 L1200,25 L1200,80 L0,80 Z" 
            fill="url(#grad2)" 
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="absolute bottom-[15%] left-0 right-0 h-24">
        <svg className="w-full h-full" viewBox="0 0 1200 96" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(240 100% 50%)" stopOpacity="0.18" />
              <stop offset="25%" stopColor="hsl(280 70% 45%)" stopOpacity="0.22" />
              <stop offset="75%" stopColor="hsl(220 90% 55%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(200 80% 60%)" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path 
            d="M0,48 Q150,20 400,55 Q600,8 850,42 Q1050,60 1200,35 L1200,96 L0,96 Z" 
            fill="url(#grad3)" 
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Elementos geométricos minimalistas - hexágonos e pontos decorativos */}
      <div className="absolute top-[12%] left-[20%] w-8 h-8">
        <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 8.5L22 15.5L12 22L2 15.5L2 8.5L12 2Z" 
            fill="none" 
            stroke="hsl(220 100% 60%)" 
            strokeWidth="0.5" 
            opacity="0.15"/>
        </svg>
      </div>
      
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[35%] right-[25%] w-6 h-6"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 8.5L22 15.5L12 22L2 15.5L2 8.5L12 2Z" 
            fill="hsl(280 60% 40% / 0.08)" 
            stroke="hsl(280 60% 40%)" 
            strokeWidth="0.3" 
            opacity="0.12"/>
        </svg>
      </motion.div>
      
      <div className="absolute bottom-[30%] left-[35%] w-10 h-10">
        <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 8.5L22 15.5L12 22L2 15.5L2 8.5L12 2Z" 
            fill="none" 
            stroke="hsl(355 85% 55%)" 
            strokeWidth="0.4" 
            opacity="0.18"/>
        </svg>
      </div>
      
      {/* Pontos decorativos aprimorados */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[22%] left-[60%] w-2 h-2 bg-blue-400/20 rounded-full"
      />
      <div className="absolute top-[45%] right-[40%] w-1.5 h-1.5 bg-rose-400/15 rounded-full"></div>
      <motion.div 
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[40%] left-[15%] w-1.5 h-1.5 bg-indigo-400/18 rounded-full"
      />
      <div className="absolute bottom-[60%] right-[15%] w-2 h-2 bg-purple-400/12 rounded-full"></div>
      <div className="absolute top-[80%] left-[75%] w-1 h-1 bg-blue-300/15 rounded-full"></div>
      <div className="absolute top-[28%] right-[55%] w-1.5 h-1.5 bg-rose-300/10 rounded-full"></div>
      <div className="absolute bottom-[70%] left-[8%] w-1 h-1 bg-indigo-300/14 rounded-full"></div>
      <motion.div 
        animate={{ opacity: [0.08, 0.25, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[85%] right-[35%] w-2 h-2 bg-purple-300/16 rounded-full"
      />
    </div>
  );
}