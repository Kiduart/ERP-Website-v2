import { Link } from "wouter";
import { GraduationCap, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-beige border-t border-brand-navy/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-brand-navy">KIDUART ERP</span>
            </Link>
            <p className="text-brand-navy/70 text-sm mb-6 leading-relaxed">
              Transforming modern education through intelligent, intuitive, and powerful technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Careers</Link></li>
              <li><Link href="/stories" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Customer Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Features</Link></li>
              <li><Link href="/integrations" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Integrations</Link></li>
              <li><Link href="/pricing" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/security" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Blog & Insights</Link></li>
              <li><Link href="/help" className="text-brand-navy/70 hover:text-brand-teal transition-colors text-sm">Help Center</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-brand-navy mb-6">Stay Updated</h4>
            <p className="text-brand-navy/70 text-sm mb-4">Get the latest education tech news.</p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white rounded-xl py-3 pl-4 pr-12 text-sm border-0 focus:ring-2 focus:ring-brand-teal shadow-sm placeholder:text-brand-navy/40"
              />
              <button type="submit" className="absolute right-2 w-8 h-8 rounded-lg bg-brand-navy text-white flex items-center justify-center hover:bg-brand-teal transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-6">
              <p className="text-sm font-medium text-brand-navy">Contact Us</p>
              <a href="mailto:support@kiduart.com" className="text-brand-teal hover:underline text-sm block mt-1">support@kiduart.com</a>
              <a href="tel:+15551234567" className="text-brand-navy/70 hover:text-brand-teal text-sm block mt-1">+1 (555) 123-4567</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-navy/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-navy/60">
            © {new Date().getFullYear()} KIDUART Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-navy/60">
            <Link href="#" className="hover:text-brand-navy">Privacy Statement</Link>
            <Link href="#" className="hover:text-brand-navy">Terms of Use</Link>
            <Link href="#" className="hover:text-brand-navy">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
