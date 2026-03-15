import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollRestoration } from "@/components/common/ScrollRestoration";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { ChatbotWidget } from "@/components/common/ChatbotWidget";
import { CursorEffect } from "@/components/animations/CursorEffect";

// Pages
import Home from "@/pages/home";
import Features from "@/pages/features";
import Solutions from "@/pages/solutions";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import RequestDemo from "@/pages/demo";
import NotFound from "@/pages/not-found";

import Integrations from "@/pages/integrations";
import Security from "@/pages/security";
import Blog from "@/pages/blog";
import HelpCenter from "@/pages/help";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import CustomerStories from "@/pages/stories";
import StubPage from "@/pages/stub";

import Login from "@/pages/login";
import Platform from "@/pages/platform";
import KiduOrbit from "@/pages/kiduorbit";
import FAQ from "@/pages/faq";
import ApiDocs from "@/pages/integrations/api-docs";
import FeatureDetail from "@/pages/features/[slug]";
import SolutionDetail from "@/pages/solutions/[slug]";
import IntegrationGuide from "@/pages/integrations/[slug]";
import BlogPost from "@/pages/blog/[slug]";
import HelpArticle from "@/pages/help-center/[slug]";
import CustomerStoryDetail from "@/pages/customer-stories/[slug]";
import LeaderProfile from "@/pages/about/team/[slug]";

const queryClient = new QueryClient();

function Router() {
  return (
    <main className="flex-grow relative z-10">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/features/:slug" component={FeatureDetail} />
        
        <Route path="/solutions" component={Solutions} />
        <Route path="/solutions/:slug" component={SolutionDetail} />

        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/about/team/:slug" component={LeaderProfile} />

        <Route path="/demo" component={RequestDemo} />
        
        <Route path="/integrations" component={Integrations} />
        <Route path="/integrations/api-docs" component={ApiDocs} />
        <Route path="/integrations/:slug" component={IntegrationGuide} />

        <Route path="/security" component={Security} />
        
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />

        <Route path="/help" component={HelpCenter} />
        <Route path="/help-center/:slug" component={HelpArticle} />

        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        
        <Route path="/stories" component={CustomerStories} />
        <Route path="/customer-stories/:slug" component={CustomerStoryDetail} />

        <Route path="/login" component={Login} />
        <Route path="/platform" component={Platform} />
        <Route path="/kiduorbit" component={KiduOrbit} />
        <Route path="/faq" component={FAQ} />
        
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollRestoration />
          <CursorEffect />
          <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <Router />
            <Footer />
            <ScrollToTopButton />
            <ChatbotWidget />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
