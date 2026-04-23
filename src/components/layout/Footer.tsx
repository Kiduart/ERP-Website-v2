import { Link } from "wouter";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-beige pt-10 pb-8 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_24px_60px_rgba(0,48,73,0.18)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Subscribe to stay updated with KIDUART ERP product improvements and school innovation insights.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Get the latest education tech news.
            </p>
          </div>

          <form
            className="mt-8 flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-white/10 p-2 sm:flex-row sm:items-center sm:rounded-full sm:pl-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 bg-transparent px-4 text-base text-white placeholder:text-white/55 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-brand-navy transition-transform hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.95fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <img src="/logo.png" alt="KIDUART" className="h-20 w-auto" />
            </Link>
            <p className="mt-6 text-sm leading-7 text-brand-navy/70">
              Transforming modern education through intelligent, intuitive, and powerful technology.
            </p>

            <div className="mt-6 space-y-3 text-sm text-brand-navy/75">
              <a href="tel:+15551234567" className="flex items-center gap-3 transition-colors hover:text-brand-teal">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:support@kiduart.com" className="flex items-center gap-3 transition-colors hover:text-brand-teal">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span>support@kiduart.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-teal" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Careers</Link></li>
              <li><Link href="/stories" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Customer Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Features</Link></li>
              <li><Link href="/integrations" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Integrations</Link></li>
              <li><Link href="/pricing" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Pricing</Link></li>
              <li><Link href="/security" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Blog & Insights</Link></li>
              <li><Link href="/help" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Help Center</Link></li>
              <li><Link href="/contact" className="text-sm text-brand-navy/75 transition-colors hover:text-brand-teal">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-navy/10 pt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-navy/60">
            <Link href="#" className="transition-colors hover:text-brand-navy">Privacy Statement</Link>
            <Link href="#" className="transition-colors hover:text-brand-navy">Terms of Use</Link>
            <Link href="#" className="transition-colors hover:text-brand-navy">Cookie Preferences</Link>
            <Link href="#" className="transition-colors hover:text-brand-navy">Accessibility</Link>
            <span>&copy; {new Date().getFullYear()} KIDUART Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
