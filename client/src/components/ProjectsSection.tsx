import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import luxuryProperty from "@assets/generated_images/Luxury_US_real_estate_a2a4eb62.png";
import residentialComplex from "@assets/generated_images/Premium_residential_complex_6830eebd.png";
import commercialBuilding from "@assets/generated_images/Commercial_office_building_446d487c.png";

const projects = [
  {
    image: luxuryProperty,
    title: "Luxury Residential Tower - Miami",
    location: "Miami, FL",
    roi: "24% ao ano",
    type: "Residencial de Alto Padrão"
  },
  {
    image: residentialComplex,
    title: "Premium Apartment Complex",
    location: "Orlando, FL", 
    roi: "22% ao ano",
    type: "Complexo Residencial"
  },
  {
    image: commercialBuilding,
    title: "Corporate Office Building",
    location: "Tampa, FL",
    roi: "26% ao ano", 
    type: "Comercial Premium"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-6" data-testid="text-projects-title">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            Descubra oportunidades exclusivas de investimento imobiliário nos Estados Unidos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover-elevate transition-all duration-300 group" data-testid={`card-project-${index}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-project-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-destructive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-md font-medium" data-testid={`text-project-roi-${index}`}>
                      {project.roi}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2" data-testid={`text-project-location-${index}`}>
                    📍 {project.location}
                  </p>
                  <p className="text-muted-foreground text-sm" data-testid={`text-project-type-${index}`}>
                    {project.type}
                  </p>
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
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-view-all-projects"
          >
            Ver todas as oportunidades
          </Button>
        </motion.div>
      </div>
    </section>
  );
}