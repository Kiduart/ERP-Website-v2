import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { PhoneCall, Mail, LifeBuoy, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition className="pt-24 pb-0">
      {/* Hero */}
      <section className="bg-brand-beige/50 py-20 min-h-[50vh] flex items-center relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["MessageSquare", "Mail"]} count={6} heroMode={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <SectionReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">We're Here to Help</h1>
            <p className="text-xl text-brand-navy/70 max-w-2xl mx-auto">Whether you're looking for a demo, need technical support, or have a general inquiry, our team is ready to assist.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["PhoneCall", "MapPin"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info & Locations */}
            <div className="lg:col-span-1 space-y-12">
              <SectionReveal>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Sales</h4>
                      <p className="text-brand-navy/70 text-sm mb-1">+1 (555) 123-4567</p>
                      <a href="mailto:sales@eduerp.com" className="text-brand-teal font-medium text-sm hover:underline">sales@eduerp.com</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <LifeBuoy className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Support</h4>
                      <p className="text-brand-navy/70 text-sm mb-1">Available 24/7 for Enterprise</p>
                      <a href="mailto:support@eduerp.com" className="text-brand-teal font-medium text-sm hover:underline">support@eduerp.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-navy/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">General Inquiries</h4>
                      <a href="mailto:hello@eduerp.com" className="text-brand-teal font-medium text-sm hover:underline">hello@eduerp.com</a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Global Offices</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> New York (HQ)</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">120 Broadway, Suite 300<br/>New York, NY 10271</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> London</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">100 Bishopsgate<br/>London, EC2N 4AG</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> Singapore</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">Marina Bay Financial Centre<br/>8 Marina Blvd, 018981</p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionReveal delay={0.3} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-navy/10 border border-brand-navy/5">
                <h2 className="text-3xl font-bold text-brand-navy mb-8">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Full Name</label>
                      <input type="text" className="w-full bg-brand-beige/20 border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Email Address</label>
                      <input type="email" className="w-full bg-brand-beige/20 border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="john@school.edu" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">How can we help?</label>
                    <select className="w-full bg-brand-beige/20 border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all appearance-none">
                      <option>I want to schedule a demo</option>
                      <option>I need technical support</option>
                      <option>Partnership inquiry</option>
                      <option>Billing question</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Message</label>
                    <textarea rows={5} className="w-full bg-brand-beige/20 border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none" placeholder="Tell us more about what you need..."></textarea>
                  </div>

                  <button type="button" className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal shadow-xl hover:shadow-brand-teal/25 transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}