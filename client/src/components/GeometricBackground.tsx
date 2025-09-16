export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Linhas diagonais em baixa opacidade */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0,100 L100,0" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.08"/>
              <path d="M0,0 L100,100" stroke="hsl(var(--destructive))" strokeWidth="0.5" opacity="0.06"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)"/>
        </svg>
      </div>

      {/* Shapes circulares com gradiente azul/vermelho desfocado */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-bl from-destructive/12 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-primary/10 via-destructive/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-gradient-to-br from-destructive/15 to-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-gradient-to-tl from-primary/8 to-destructive/12 rounded-full blur-3xl"></div>

      {/* Divisores de seção angulados em SVG */}
      <div className="absolute top-1/4 left-0 right-0 h-px">
        <svg className="w-full h-20" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,40 L200,10 L400,50 L600,20 L800,45 L1000,15 L1200,40" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1" 
            opacity="0.1"
          />
        </svg>
      </div>
      
      <div className="absolute top-2/3 left-0 right-0 h-px">
        <svg className="w-full h-20" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,20 L300,50 L500,10 L700,45 L900,25 L1200,40" 
            fill="none" 
            stroke="hsl(var(--destructive))" 
            strokeWidth="1" 
            opacity="0.08"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-0 right-0 h-px">
        <svg className="w-full h-20" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,30 L150,60 L350,20 L550,50 L750,10 L950,40 L1200,25" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1" 
            opacity="0.06"
          />
        </svg>
      </div>

      {/* Elementos geométricos angulares adicionais */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="300" height="200" className="opacity-5">
          <polygon 
            points="50,10 150,30 250,50 200,120 100,140 0,80" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
          />
          <polygon 
            points="80,40 180,20 280,60 230,130 130,150 30,90" 
            fill="none" 
            stroke="hsl(var(--destructive))" 
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Pequenos pontos decorativos espalhados */}
      <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-primary/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-destructive/15 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/25 rounded-full"></div>
      <div className="absolute bottom-[20%] right-[20%] w-1 h-1 bg-destructive/20 rounded-full"></div>
      <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-primary/15 rounded-full"></div>
    </div>
  );
}