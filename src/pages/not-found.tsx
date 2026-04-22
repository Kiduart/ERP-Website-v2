import { Link } from "wouter";
import { PageTransition } from "@/components/ui/PageTransition";

export default function NotFound() {
  return (
    <PageTransition className="min-h-screen flex items-center justify-center bg-brand-beige/20 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-brand-navy/10">404</h1>
        <h2 className="text-3xl font-bold text-brand-navy mt-4 mb-4">Page Not Found</h2>
        <p className="text-brand-navy/70 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="inline-flex px-6 py-3 rounded-full bg-brand-navy text-white font-medium hover:bg-brand-teal transition-colors">
          Return to Home
        </Link>
      </div>
    </PageTransition>
  );
}
