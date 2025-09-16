import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";
import luxuryProperty from "@assets/generated_images/Luxury_US_real_estate_a2a4eb62.png";
import residentialComplex from "@assets/generated_images/Premium_residential_complex_6830eebd.png";
import commercialBuilding from "@assets/generated_images/Commercial_office_building_446d487c.png";

const projects = [
  {
    image: luxuryProperty,
    title: "Luxury Residential Tower",
    subtitle: "Miami",
    location: "Miami, FL",
    roi: "24% ao ano",
    type: "Residencial de Alto Padrão",
    investment: "A partir de $250k"
  },
  {
    image: residentialComplex,
    title: "Premium Apartment Complex",
    subtitle: "Orlando", 
    location: "Orlando, FL", 
    roi: "22% ao ano",
    type: "Complexo Residencial",
    investment: "A partir de $180k"
  },
  {
    image: commercialBuilding,
    title: "Corporate Office Building",
    subtitle: "Tampa",
    location: "Tampa, FL",
    roi: "26% ao ano", 
    type: "Comercial Premium",
    investment: "A partir de $400k"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-destructive mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-8" data-testid="text-projects-title">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto" data-testid="text-projects-subtitle">
            Descubra oportunidades exclusivas de investimento imobiliário cuidadosamente selecionadas nos Estados Unidos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border/30 bg-card/50 backdrop-blur-sm hover-elevate transition-all duration-300 group cursor-pointer" data-testid={`card-project-${index}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-project-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-primary to-destructive text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg" data-testid={`text-project-roi-${index}`}>
                      {project.roi}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span data-testid={`text-project-location-${index}`}>{project.subtitle}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/60 font-medium" data-testid={`text-project-type-${index}`}>
                        {project.type}
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">Alto ROI</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border/30">
                      <span className="text-sm font-semibold text-foreground">
                        {project.investment}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-destructive text-white"
            data-testid="button-view-all-projects"
          >
            Ver todas as oportunidades
          </Button>
        </motion.div>
      </div>
    </section>
  );
}