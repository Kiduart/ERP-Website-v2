import { Link } from "wouter";
import { SectionReveal } from "./PageTransition";
import { ArrowRight } from "lucide-react";

export function CtaSection({ title = "Ready to Transform Your School?", subtitle = "Join over 500+ forward-thinking schools that have upgraded their management experience." }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy" />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-yellow text-brand-navy font-bold text-lg hover:bg-white shadow-xl hover:shadow-brand-yellow/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
