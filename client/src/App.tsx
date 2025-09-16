import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import MelhoresEstadosUSA2025 from "@/pages/blog/melhores-estados-usa-2025";
import ComoInvestirImoveisUSABrasil from "@/pages/blog/como-investir-imoveis-usa-brasil";
import REITsVsImoveisFisicos from "@/pages/blog/reits-vs-imoveis-fisicos";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog/melhores-estados-usa-2025" component={MelhoresEstadosUSA2025} />
      <Route path="/blog/como-investir-imoveis-usa-brasil" component={ComoInvestirImoveisUSABrasil} />
      <Route path="/blog/reits-vs-imoveis-fisicos" component={REITsVsImoveisFisicos} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
