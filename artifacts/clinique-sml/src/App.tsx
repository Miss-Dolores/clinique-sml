import { Switch, Route, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import APropos from '@/pages/APropos';
import Services from '@/pages/Services';
import Medecins from '@/pages/Medecins';
import RendezVous from '@/pages/RendezVous';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/apropos" component={APropos} />
          <Route path="/services" component={Services} />
          <Route path="/medecins" component={Medecins} />
          <Route path="/rendez-vous" component={RendezVous} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <h1 className="font-['Space_Grotesk'] font-bold text-5xl text-[#0057B7] mb-3">404</h1>
                <p className="font-['Poppins'] text-[#3D3D3D] mb-6">Cette page n'existe pas.</p>
                <a href="/" className="px-5 py-2.5 bg-[#0057B7] text-white text-sm font-medium rounded-xl hover:bg-[#003E8A] transition-colors font-['Poppins']">
                  Retour à l'accueil
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
