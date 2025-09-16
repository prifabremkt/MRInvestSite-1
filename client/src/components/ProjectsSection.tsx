import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import luxuryProperty from "@assets/generated_images/Luxury_US_real_estate_a2a4eb62.png";
import residentialComplex from "@assets/generated_images/Premium_residential_complex_6830eebd.png";
import commercialBuilding from "@assets/generated_images/Commercial_office_building_446d487c.png";

const projects = [
  {
    image: luxuryProperty,
    title: "Miami Waterfront",
    location: "Miami, FL - EUA",
    roiAnual: "22%",
    prazo: "30 dias",
    progressoCaptacao: 85,
    investimentoMinimo: "USD 100.000",
    tag: "Disponível",
    tagColor: "bg-green-600"
  },
  {
    image: residentialComplex,
    title: "Manhattan Premium",
    location: "Nova York, NY - EUA", 
    roiAnual: "18%",
    prazo: "45 dias",
    progressoCaptacao: 62,
    investimentoMinimo: "USD 150.000",
    tag: "Disponível",
    tagColor: "bg-green-600"
  },
  {
    image: commercialBuilding,
    title: "Los Angeles Hills",
    location: "Los Angeles, CA - EUA",
    roiAnual: "20%",
    prazo: "15 dias",
    progressoCaptacao: 94,
    investimentoMinimo: "USD 120.000",
    tag: "Últimas Vagas",
    tagColor: "bg-red-600"
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
              <Card className="bg-gray-900 border border-gray-700 hover-elevate transition-all duration-300 group cursor-pointer overflow-hidden" data-testid={`card-project-${index}`}>
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    data-testid={`img-project-${index}`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`${project.tagColor} text-white px-2 py-1 rounded text-xs font-medium`}>
                      {project.tag}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4 text-white bg-gray-900">
                  <h3 className="text-lg font-bold mb-2" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-gray-300 text-sm mb-4">
                    <MapPin className="w-3 h-3" />
                    <span data-testid={`text-project-location-${index}`}>{project.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-400 mb-1">ROI Anual</div>
                      <div className="text-white font-semibold text-lg" data-testid={`text-project-roi-${index}`}>
                        {project.roiAnual}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Prazo</div>
                      <div className="text-white font-semibold" data-testid={`text-project-prazo-${index}`}>
                        {project.prazo}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progresso da Captação</span>
                      <span className="text-white font-semibold">{project.progressoCaptacao}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progressoCaptacao}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mb-4 pb-4 border-b border-gray-700">
                    <div className="text-gray-400 text-sm">Investimento mínimo:</div>
                    <div className="text-white font-semibold" data-testid={`text-project-investment-${index}`}>
                      {project.investimentoMinimo}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                    data-testid={`button-project-${index}`}
                  >
                    Baixar apresentação
                  </Button>
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