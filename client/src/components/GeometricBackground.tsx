export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Linhas diagonais em baixa opacidade */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="200" height="200">
              <path d="M0,200 L200,0" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.03"/>
              <path d="M0,0 L200,200" stroke="hsl(var(--destructive))" strokeWidth="0.3" opacity="0.02"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)"/>
        </svg>
      </div>

      {/* Shapes circulares com gradiente azul/vermelho desfocado mais sutis */}
      <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-32 w-96 h-96 bg-gradient-to-bl from-destructive/6 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-tr from-primary/5 via-destructive/4 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-br from-destructive/7 to-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-64 right-16 w-80 h-80 bg-gradient-to-tl from-primary/4 to-destructive/6 rounded-full blur-3xl"></div>

      {/* Divisores de seção angulados em SVG mais sutis */}
      <div className="absolute top-[20%] left-0 right-0 h-px">
        <svg className="w-full h-12" viewBox="0 0 1200 48" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,24 L300,8 L600,32 L900,12 L1200,24" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="0.5" 
            opacity="0.08"
          />
        </svg>
      </div>
      
      <div className="absolute top-[60%] left-0 right-0 h-px">
        <svg className="w-full h-12" viewBox="0 0 1200 48" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,12 L400,30 L800,8 L1200,24" 
            fill="none" 
            stroke="hsl(var(--destructive))" 
            strokeWidth="0.5" 
            opacity="0.06"
          />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-0 right-0 h-px">
        <svg className="w-full h-12" viewBox="0 0 1200 48" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,20 L200,36 L500,12 L800,28 L1200,16" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="0.5" 
            opacity="0.05"
          />
        </svg>
      </div>

      {/* Pequenos pontos decorativos espalhados mais sutis */}
      <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-primary/15 rounded-full"></div>
      <div className="absolute top-[40%] right-[30%] w-1 h-1 bg-destructive/12 rounded-full"></div>
      <div className="absolute bottom-[35%] left-[40%] w-1 h-1 bg-primary/18 rounded-full"></div>
      <div className="absolute bottom-[15%] right-[25%] w-1 h-1 bg-destructive/15 rounded-full"></div>
      <div className="absolute top-[70%] left-[70%] w-1 h-1 bg-primary/12 rounded-full"></div>
      <div className="absolute top-[25%] right-[60%] w-1 h-1 bg-destructive/10 rounded-full"></div>
      <div className="absolute bottom-[55%] left-[15%] w-1 h-1 bg-primary/14 rounded-full"></div>
      <div className="absolute bottom-[75%] right-[45%] w-1 h-1 bg-destructive/16 rounded-full"></div>
    </div>
  );
}