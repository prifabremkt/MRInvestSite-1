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
              className="text-center group"
              data-testid={`metric-${index}`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mb-8 mx-auto w-fit"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-destructive to-primary rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:shadow-primary/25 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                  <metric.icon className="w-10 h-10 text-white relative z-10" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent leading-tight" data-testid={`text-metric-value-${index}`}>
                  {metric.value}
                </div>
                <div className="text-muted-foreground font-semibold text-lg tracking-wide uppercase" data-testid={`text-metric-label-${index}`}>
                  {metric.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-card/80 via-card/90 to-card/80 backdrop-blur-xl rounded-3xl p-10 border border-primary/10 shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-primary to-destructive rounded-full flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-destructive"></div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed" data-testid="text-credibility-statement">
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