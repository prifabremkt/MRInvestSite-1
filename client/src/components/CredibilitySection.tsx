import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, ArrowRight } from "lucide-react";

const metrics = [
  {
    value: "R$ 50 milhões",
    label: "já investidos",
    icon: DollarSign
  },
  {
    value: "150+",
    label: "investidores ativos", 
    icon: Users
  },
  {
    value: "22% ao ano",
    label: "rentabilidade média",
    icon: TrendingUp
  }
];

export default function CredibilitySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/5 to-destructive/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-destructive mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent mb-6" data-testid="text-credibility-title">
              Números que Comprovam
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
              Nossos Resultados
            </h3>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="text-center group relative"
              data-testid={`metric-${index}`}
            >
              {/* Gradient border wrapper */}
              <div className="p-[1px] bg-gradient-to-br from-primary/30 to-destructive/30 rounded-2xl">
                <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-6 mx-auto w-fit"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary via-destructive to-primary rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                      <metric.icon className="w-6 h-6 text-white relative z-10" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent leading-tight" data-testid={`text-metric-value-${index}`}>
                      {metric.value}
                    </div>
                    <div className="text-muted-foreground font-medium text-sm tracking-wide uppercase" data-testid={`text-metric-label-${index}`}>
                      {metric.label}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-card/80 via-card/90 to-card/80 backdrop-blur-xl rounded-2xl p-8 border border-primary/20 relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-r from-primary to-destructive rounded-full flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.div>
              <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-destructive"></div>
            </div>
            <p className="text-lg md:text-xl font-bold text-center leading-relaxed" data-testid="text-credibility-statement">
              <span className="bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">MRInvest</span>
              <span className="text-foreground"> não vende promessas.</span>
              <br />
              <span className="text-foreground">Entregamos </span>
              <span className="bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">resultados</span>
              <span className="text-foreground">.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}