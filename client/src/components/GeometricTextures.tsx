import { motion } from "framer-motion";

export default function GeometricTextures() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid hexagonal complexo */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagonal-grid" patternUnits="userSpaceOnUse" width="120" height="104">
              {/* Hexágonos principais */}
              <path d="M30,2 L90,2 L120,52 L90,102 L30,102 L0,52 Z" 
                fill="none" 
                stroke="hsl(220 100% 60%)" 
                strokeWidth="0.3" 
                opacity="0.08"/>
              <path d="M90,2 L150,2 L180,52 L150,102 L90,102 L60,52 Z" 
                fill="none" 
                stroke="hsl(280 60% 45%)" 
                strokeWidth="0.2" 
                opacity="0.06"/>
              {/* Hexágonos menores internos */}
              <path d="M45,27 L75,27 L90,52 L75,77 L45,77 L30,52 Z" 
                fill="hsl(240 80% 50% / 0.02)" 
                stroke="hsl(240 80% 50%)" 
                strokeWidth="0.15" 
                opacity="0.05"/>
            </pattern>
            
            {/* Grid triangular */}
            <pattern id="triangular-grid" patternUnits="userSpaceOnUse" width="80" height="69.28">
              <path d="M40,0 L80,69.28 L0,69.28 Z" 
                fill="none" 
                stroke="hsl(355 85% 55%)" 
                strokeWidth="0.2" 
                opacity="0.04"/>
              <path d="M0,34.64 L40,0 L40,69.28 Z" 
                fill="hsl(355 85% 55% / 0.01)" 
                stroke="hsl(355 85% 55%)" 
                strokeWidth="0.1" 
                opacity="0.03"/>
            </pattern>

            {/* Padrão de círculos concêntricos */}
            <pattern id="concentric-circles" patternUnits="userSpaceOnUse" width="160" height="160">
              <circle cx="80" cy="80" r="70" 
                fill="none" 
                stroke="hsl(200 100% 60%)" 
                strokeWidth="0.3" 
                opacity="0.05"/>
              <circle cx="80" cy="80" r="50" 
                fill="none" 
                stroke="hsl(280 70% 50%)" 
                strokeWidth="0.2" 
                opacity="0.04"/>
              <circle cx="80" cy="80" r="30" 
                fill="hsl(220 90% 55% / 0.02)" 
                stroke="hsl(220 90% 55%)" 
                strokeWidth="0.15" 
                opacity="0.03"/>
              <circle cx="80" cy="80" r="15" 
                fill="none" 
                stroke="hsl(260 80% 60%)" 
                strokeWidth="0.1" 
                opacity="0.06"/>
            </pattern>
          </defs>

          {/* Aplicação dos padrões com transformações */}
          <rect width="100%" height="100%" fill="url(#hexagonal-grid)" transform="rotate(30)" opacity="0.4"/>
          <rect width="100%" height="100%" fill="url(#triangular-grid)" transform="rotate(15)" opacity="0.3"/>
          <rect width="100%" height="100%" fill="url(#concentric-circles)" transform="scale(0.8)" opacity="0.2"/>
        </svg>
      </div>

      {/* Elementos geométricos animados distribuídos */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[8%] left-[15%] w-12 h-12"
      >
        <svg viewBox="0 0 50 50" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M25,2 L48,14 L48,36 L25,48 L2,36 L2,14 Z" 
            fill="none" 
            stroke="hsl(220 100% 65%)" 
            strokeWidth="0.5" 
            opacity="0.12"/>
          <path d="M25,10 L40,18 L40,32 L25,40 L10,32 L10,18 Z" 
            fill="hsl(220 100% 65% / 0.03)" 
            stroke="hsl(220 100% 65%)" 
            strokeWidth="0.3" 
            opacity="0.08"/>
        </svg>
      </motion.div>

      <motion.div 
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[12%] w-10 h-10"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Triângulo com detalhes internos */}
          <path d="M20,2 L38,34 L2,34 Z" 
            fill="none" 
            stroke="hsl(280 70% 50%)" 
            strokeWidth="0.4" 
            opacity="0.15"/>
          <path d="M20,10 L30,26 L10,26 Z" 
            fill="hsl(280 70% 50% / 0.04)" 
            stroke="hsl(280 70% 50%)" 
            strokeWidth="0.2" 
            opacity="0.10"/>
          <circle cx="20" cy="20" r="3" 
            fill="hsl(280 70% 50%)" 
            opacity="0.08"/>
        </svg>
      </motion.div>

      <div className="absolute top-[45%] left-[8%] w-8 h-8">
        <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Losango com grid interno */}
          <path d="M16,2 L30,16 L16,30 L2,16 Z" 
            fill="none" 
            stroke="hsl(355 85% 55%)" 
            strokeWidth="0.3" 
            opacity="0.12"/>
          <path d="M16,8 L24,16 L16,24 L8,16 Z" 
            fill="hsl(355 85% 55% / 0.02)" 
            stroke="hsl(355 85% 55%)" 
            strokeWidth="0.2" 
            opacity="0.08"/>
          <line x1="2" y1="16" x2="30" y2="16" 
            stroke="hsl(355 85% 55%)" 
            strokeWidth="0.1" 
            opacity="0.06"/>
          <line x1="16" y1="2" x2="16" y2="30" 
            stroke="hsl(355 85% 55%)" 
            strokeWidth="0.1" 
            opacity="0.06"/>
        </svg>
      </div>

      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.06, 0.15, 0.06]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[35%] right-[20%] w-14 h-14"
      >
        <svg viewBox="0 0 56 56" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Octógono com elementos internos */}
          <path d="M16.97,2 L39.03,2 L54,16.97 L54,39.03 L39.03,54 L16.97,54 L2,39.03 L2,16.97 Z" 
            fill="none" 
            stroke="hsl(240 90% 60%)" 
            strokeWidth="0.4" 
            opacity="0.12"/>
          <path d="M20,10 L36,10 L46,20 L46,36 L36,46 L20,46 L10,36 L10,20 Z" 
            fill="hsl(240 90% 60% / 0.02)" 
            stroke="hsl(240 90% 60%)" 
            strokeWidth="0.25" 
            opacity="0.08"/>
          <circle cx="28" cy="28" r="8" 
            fill="none" 
            stroke="hsl(240 90% 60%)" 
            strokeWidth="0.15" 
            opacity="0.10"/>
        </svg>
      </motion.div>

      <div className="absolute bottom-[15%] left-[25%] w-9 h-9">
        <svg viewBox="0 0 36 36" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Estrela de 6 pontas */}
          <path d="M18,2 L22,14 L34,14 L25,22 L29,34 L18,26 L7,34 L11,22 L2,14 L14,14 Z" 
            fill="hsl(260 80% 55% / 0.03)" 
            stroke="hsl(260 80% 55%)" 
            strokeWidth="0.3" 
            opacity="0.10"/>
          <circle cx="18" cy="18" r="4" 
            fill="none" 
            stroke="hsl(260 80% 55%)" 
            strokeWidth="0.2" 
            opacity="0.12"/>
        </svg>
      </div>

      <motion.div 
        animate={{ 
          rotate: [0, -360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[70%] left-[60%] w-6 h-6"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Cruz com detalhes */}
          <path d="M8,2 L16,2 L16,8 L22,8 L22,16 L16,16 L16,22 L8,22 L8,16 L2,16 L2,8 L8,8 Z" 
            fill="hsl(200 90% 60% / 0.04)" 
            stroke="hsl(200 90% 60%)" 
            strokeWidth="0.25" 
            opacity="0.12"/>
          <rect x="10" y="10" width="4" height="4" 
            fill="hsl(200 90% 60%)" 
            opacity="0.08"/>
        </svg>
      </motion.div>

      <div className="absolute top-[55%] right-[8%] w-7 h-7">
        <svg viewBox="0 0 28 28" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Pentágono */}
          <path d="M14,2 L26,10 L21,24 L7,24 L2,10 Z" 
            fill="none" 
            stroke="hsl(300 70% 50%)" 
            strokeWidth="0.3" 
            opacity="0.11"/>
          <path d="M14,8 L20,12 L17.5,20 L10.5,20 L8,12 Z" 
            fill="hsl(300 70% 50% / 0.02)" 
            stroke="hsl(300 70% 50%)" 
            strokeWidth="0.2" 
            opacity="0.08"/>
        </svg>
      </div>
    </div>
  );
}