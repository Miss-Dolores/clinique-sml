import { Switch, Route, Router as WouterRouter, useLocation } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickAccess from '@/components/QuickAccess';
import PageTransition from '@/components/PageTransition';
import Home from '@/components/section/Home';
import APropos from '@/components/section/APropos';
import Services from '@/components/section/Services';
import Specialites from '@/components/section/Specialites';
import RendezVous from '@/components/section/RendezVous';
import Contact from '@/components/section/Contact';

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-14" aria-hidden="true" />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Switch key={location}>
            <Route path="/">
              <PageTransition><Home /></PageTransition>
            </Route>
            <Route path="/apropos">
              <PageTransition><APropos /></PageTransition>
            </Route>
            <Route path="/services">
              <PageTransition><Services /></PageTransition>
            </Route>
            <Route path="/specialites">
              <PageTransition><Specialites /></PageTransition>
            </Route>
            <Route path="/rendez-vous">
              <PageTransition><RendezVous /></PageTransition>
            </Route>
            <Route path="/contact">
              <PageTransition><Contact /></PageTransition>
            </Route>
            <Route>
              <PageTransition>
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="text-center">
                    <h1 className="font-['Space_Grotesk'] font-bold text-5xl text-[#0057B7] mb-3">404</h1>
                    <p className="font-['Poppins'] text-[#3D3D3D] mb-6">Cette page n'existe pas.</p>
                    <a href="/" className="px-4 py-2 bg-[#0057B7] text-white text-sm font-medium rounded-xl hover:bg-[#003E8A] transition-colors font-['Poppins']">
                      Retour à l'accueil
                    </a>
                  </div>
                </div>
              </PageTransition>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
      <QuickAccess />
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
