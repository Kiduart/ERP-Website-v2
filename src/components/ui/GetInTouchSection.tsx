import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function GetInTouchSection() {
  return (
    <section className="bg-brand-beige px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[2rem] border border-brand-navy/10 bg-brand-navy/75 px-6 py-8 text-brand-beige shadow-[0_20px_60px_rgba(0,48,73,0.08)] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
          <div className="flex items-center justify-between border-b border-brand-navy/10 pb-5 text-[15px] uppercase tracking-[0.58em] text-brand-beige/75">
            <span>Get Connected</span>
            <span>Get Connected</span>
            <span>KIDUART ERP</span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="rounded-[1.75rem]">
              <p className="max-w-xs text-xs font-medium uppercase tracking-[0.34em] text-[#d9c8b3]">
                School operations, admissions, and AI-led growth
              </p>
              <h2 className="mt-6 max-w-xl font-serif text-5xl uppercase leading-[0.92] tracking-[-0.04em] text-[#f5efe6] sm:text-6xl lg:text-7xl">
                Let&apos;s Get In Touch
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/72">
                Tell us what your institution needs and our team will help you shape the right ERP
                setup for admissions, academics, finance, communication, and AI-enabled workflows.
              </p>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/78">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#d6c1a8]" />
                  <span>+91 98769 87234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#d6c1a8]" />
                  <span>support@kiduart.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#d6c1a8]" />
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-navy/70 p-6 text-white shadow-[0_18px_50px_rgba(0,48,73,0.22)] backdrop-blur-xl sm:p-7">
              <form className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-white/48">Full Name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-3 w-full border-0 border-b border-white/14 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-white/48">Phone</span>
                    <input
                      type="tel"
                      placeholder="+91"
                      className="mt-3 w-full border-0 border-b border-white/14 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/48">Email</span>
                  <input
                    type="email"
                    placeholder="you@school.edu"
                    className="mt-3 w-full border-0 border-b border-white/14 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/48">Message</span>
                  <textarea
                    rows={4}
                    placeholder="Share your current school workflow challenges or goals."
                    className="mt-3 w-full resize-none border-0 border-b border-white/14 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/28 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                  />
                </label>

                <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-white/58">
                    Want a faster walkthrough?
                    <Link href="/demo" className="ml-2 text-[#f5efe6] transition-colors hover:text-[#d6c1a8]">
                      Request a demo
                    </Link>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/14 bg-white text-brand-navy transition-all duration-300 hover:translate-x-1 hover:bg-[#f2e7da]"
                    aria-label="Open contact page"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
