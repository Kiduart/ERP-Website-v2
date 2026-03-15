import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Target, Lightbulb, Trophy } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <PageTransition className="pt-24 pb-0">
      {/* Hero */}
      <section className="bg-brand-navy py-20 text-center relative overflow-hidden min-h-screen flex items-center" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["Users", "BookOpen", "GraduationCap"]} count={6} heroMode={true} />
        <div className="absolute inset-0 bg-brand-teal/20 blur-3xl opacity-50 w-full h-full mix-blend-color-dodge"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
          <SectionReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Transforming Education Through Technology</h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(252,246,211,0.8)' }}>We believe that when schools are run efficiently, educators have more time to inspire the next generation.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Lightbulb", "Brain"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <SectionReveal className="bg-brand-beige/30 p-10 rounded-3xl border border-brand-navy/5">
              <Target className="w-12 h-12 text-brand-orange mb-6" />
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Mission</h2>
              <p className="text-lg text-brand-navy/70 leading-relaxed">To democratize access to enterprise-grade technology for educational institutions of all sizes, eliminating administrative friction and empowering educators to focus on student success.</p>
            </SectionReveal>
            <SectionReveal delay={0.2} className="bg-brand-teal/10 p-10 rounded-3xl border border-brand-teal/20">
              <Lightbulb className="w-12 h-12 text-brand-teal mb-6" />
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Vision</h2>
              <p className="text-lg text-brand-navy/70 leading-relaxed">A world where data-driven insights and automated workflows are standard in every classroom, closing the gap between administration, parents, and students.</p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-brand-beige/20 border-y border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Meet the Leadership</h2>
            <p className="text-brand-navy/70 mt-2 text-lg">Passionate technologists and former educators.</p>
          </SectionReveal>
          
          <div className="grid sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {[
              { name: "Rajesh Kumar", role: "Chief Executive Officer & Co-founder", img: "avatar-1.png", slug: "rajesh-kumar" },
              { name: "Dr. Priya Nair", role: "Chief Technology Officer & Co-founder", img: "avatar-2.png", slug: "priya-nair" }
            ].map((leader, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <Link href={`/about/team/${leader.slug}`} className="block text-center cursor-pointer group">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 bg-brand-navy/5 group-hover:shadow-brand-teal/40 group-hover:scale-105 transition-all duration-300">
                    <img src={`${import.meta.env.BASE_URL}images/${leader.img}`} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">{leader.name}</h3>
                  <p className="text-brand-teal font-medium mt-1">{leader.role}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionReveal>
            <Trophy className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brand-navy mb-12">Recognized for Excellence</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="h-12 px-6 bg-brand-navy/5 rounded font-bold text-brand-navy flex items-center">EdTech Breakthrough 2026</div>
               <div className="h-12 px-6 bg-brand-navy/5 rounded font-bold text-brand-navy flex items-center">Best SaaS for Education</div>
               <div className="h-12 px-6 bg-brand-navy/5 rounded font-bold text-brand-navy flex items-center">ISO 27001 Certified</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Join our growing community" subtitle="Experience why hundreds of schools choose KIDUART." />
    </PageTransition>
  );
}
