export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Linhas diagonais em baixa opacidade */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="120" height="120">
              <path d="M0,120 L120,0" stroke="#1e90ff" strokeWidth="0.8" opacity="0.2"/>
              <path d="M0,0 L120,120" stroke="#ff4444" strokeWidth="0.8" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)"/>
        </svg>
      </div>

      {/* Shapes circulares com gradiente azul/vermelho desfocado */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-bl from-red-500/18 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-400/15 via-red-400/12 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-gradient-to-br from-red-500/20 to-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-gradient-to-tl from-blue-400/12 to-red-400/18 rounded-full blur-3xl"></div>

      {/* Divisores de seção angulados em SVG */}
      <div className="absolute top-1/4 left-0 right-0 h-px">
        <svg className="w-full h-20" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,40 L200,10 L400,50 L600,20 L800,45 L1000,15 L1200,40" 
            fill="none" 
            stroke="#1e90ff" 
            strokeWidth="2" 
            opacity="0.3"
          />
        </svg>
      </div>
      
      <div className="absolute top-2/3 left-0 right-0 h-px">
        <svg className="w-full h-20" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,20 L300,50 L500,10 L700,45 L900,25 L1200,40" 
            fill="none" 
            stroke="#ff4444" 
            strokeWidth="2" 
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-0 right-0 h-px">
        <svg className="w-full h-20" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,30 L150,60 L350,20 L550,50 L750,10 L950,40 L1200,25" 
            fill="none" 
            stroke="#1e90ff" 
            strokeWidth="2" 
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Elementos geométricos angulares adicionais */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="300" height="200" className="opacity-20">
          <polygon 
            points="50,10 150,30 250,50 200,120 100,140 0,80" 
            fill="none" 
            stroke="#1e90ff" 
            strokeWidth="1.5"
          />
          <polygon 
            points="80,40 180,20 280,60 230,130 130,150 30,90" 
            fill="none" 
            stroke="#ff4444" 
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Pequenos pontos decorativos espalhados */}
      <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-blue-400/30 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-red-400/25 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-500/35 rounded-full"></div>
      <div className="absolute bottom-[20%] right-[20%] w-2 h-2 bg-red-500/30 rounded-full"></div>
      <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-blue-400/25 rounded-full"></div>
    </div>
  );
}