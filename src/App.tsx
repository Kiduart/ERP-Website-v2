import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollRestoration } from "@/components/common/ScrollRestoration";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { ChatbotWidget } from "@/components/common/ChatbotWidget";
import { CursorEffect } from "@/components/animations/CursorEffect";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollRestoration />
        <CursorEffect />
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
          <ScrollToTopButton />
          <ChatbotWidget />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default AppShell;
