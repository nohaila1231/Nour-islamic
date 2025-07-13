import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Prayer from "./pages/Prayer";
import Ramadan from "./pages/Ramadan";
import Makkah from "./pages/Makkah";
import Quran from "./pages/Quran";
import Hajj from "./pages/Hajj";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/ramadan" element={<Ramadan />} />
          <Route path="/makkah" element={<Makkah />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/hajj" element={<Hajj />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
