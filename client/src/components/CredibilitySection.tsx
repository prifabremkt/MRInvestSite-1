import { motion } from "framer-motion";

const metrics = [
  {
    value: "R$ 50 milhões",
    label: "já investidos",
    icon: "💰"
  },
  {
    value: "150+",
    label: "investidores ativos", 
    icon: "👥"
  },
  {
    value: "22% ao ano",
    label: "rentabilidade média",
    icon: "📈"
  }
];

export default function CredibilitySection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-12" data-testid="text-credibility-title">
            Números que Comprovam Nossos Resultados
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`metric-${index}`}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid={`text-metric-value-${index}`}>
                  {metric.value}
                </div>
                <div className="text-muted-foreground font-medium" data-testid={`text-metric-label-${index}`}>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-destructive/10 rounded-xl p-8 max-w-3xl mx-auto"
          >
            <p className="text-xl font-semibold text-foreground" data-testid="text-credibility-statement">
              👉 MRInvest não vende promessas. Entregamos resultados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}