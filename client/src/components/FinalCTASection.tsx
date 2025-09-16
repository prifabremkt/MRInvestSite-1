import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";

export default function FinalCTASection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      amount: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would normally send the data to your backend
      console.log('Form data:', data);
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-final-cta-title">
            Pronto para investir no seu <span className="text-primary">futuro</span>?
          </h2>
          <p className="text-lg text-white/70 mb-2" data-testid="text-final-cta-subtitle">
            <span className="text-primary font-semibold">O próximo movimento é seu.</span>
          </p>
          <p className="text-white/60" data-testid="text-final-cta-description">
            Junte-se a investidores que já transformaram seus ativos em patrimônio sólido nos EUA.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6" data-testid="text-form-title">
                  Solicite sua Apresentação <span className="text-primary">Exclusiva</span>
                </h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-gray-400">Nome Completo</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome" 
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-gray-400">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="seu@email.com" 
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-gray-400">Telefone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(11) 99999-9999" 
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                                data-testid="input-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-gray-400">Valor a Investir</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="USD 100.000" 
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                                data-testid="input-amount"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-gray-400">Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Conte-nos sobre seus objetivos de investimento nos EUA"
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 min-h-[100px]"
                              data-testid="textarea-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit"
                      className="w-full py-3 text-lg font-semibold"
                      variant="default"
                      disabled={form.formState.isSubmitting}
                      data-testid="button-submit-form"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {form.formState.isSubmitting ? "Enviando..." : "Receber Apresentação Exclusiva"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4" data-testid="text-contact-title">
                Informações de Contato
              </h3>
              <p className="text-primary font-semibold mb-2">Renda em dólar + Segurança jurídica + Blindagem patrimonial</p>
              <p className="text-white/70 mb-8">Nossa equipe está pronta para estruturar seu investimento nos EUA.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-white/70">william@mrinvest.us | michel@mrinvest.us</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefone</p>
                  <p className="text-white/70">+1 407 470 9867</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4" data-testid="contact-location">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium">Localização</p>
                  <p className="text-white/70">Winter Garden, Florida, EUA</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="text-white font-semibold">Horário de Atendimento</h4>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between">
                    <span>Segunda à Sexta:</span>
                    <span>9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>9h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}