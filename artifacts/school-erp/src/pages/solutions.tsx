import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Link } from "wouter";
import { BookOpen, Presentation, Building2, Users, Building, ArrowRight } from "lucide-react";

export default function Solutions() {
  const roles = [
    {
      title: "For School Administrators",
      slug: "administrators",
      icon: Building2,
      problem: "Drowning in paperwork, scattered data across spreadsheets, and struggling to maintain compliance and oversight.",
      solution: "A unified dashboard providing real-time visibility into attendance, finances, and academics. Automate report generation and streamline admissions.",
      color: "bg-brand-navy text-white",
      iconColor: "text-brand-yellow"
    },
    {
      title: "For Teachers",
      slug: "teachers",
      icon: Presentation,
      problem: "Spending hours on administrative tasks like attendance and grading instead of lesson planning and teaching.",
      solution: "One-click attendance, intuitive gradebooks, and bulk messaging tools. Reclaim up to 10 hours a week for actual teaching.",
      color: "bg-white text-brand-navy border border-brand-navy/10",
      iconColor: "text-brand-teal"
    },
    {
      title: "For Parents",
      slug: "parents",
      icon: Users,
      problem: "Feeling disconnected from their child's daily progress and missing important school communications.",
      solution: "A dedicated parent portal app offering instant access to grades, attendance alerts, fee payments, and direct teacher messaging.",
      color: "bg-brand-teal text-white",
      iconColor: "text-brand-beige"
    },
    {
      title: "For Students",
      slug: "students",
      icon: BookOpen,
      problem: "Unsure of assignments, missing timetable changes, and lacking visibility into their own performance metrics.",
      solution: "A student dashboard for checking schedules, downloading resources, submitting assignments, and tracking personal academic growth.",
      color: "bg-brand-beige text-brand-navy",
      iconColor: "text-brand-orange"
    },
    {
      title: "For School Districts",
      slug: "school-districts",
      icon: Building,
      problem: "Inability to compare performance across multiple campuses or manage resources efficiently at a macro level.",
      solution: "Multi-branch management capabilities. Aggregate data across all schools for district-wide analytics, standardized reporting, and unified policy deployment.",
      color: "bg-white text-brand-navy border border-brand-navy/10",
      iconColor: "text-brand-navy"
    }
  ];

  return (
    <PageTransition className="pt-24 pb-0">
      <section className="bg-brand-beige/50 relative overflow-hidden min-h-screen flex items-center py-20 lg:py-32">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["Users", "BookOpen", "GraduationCap"]} count={6} heroMode={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <SectionReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">Solutions for Every Role in Education</h1>
            <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto">KIDUART ERP is designed to empower every stakeholder. When everyone has the right tools, the entire institution thrives.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {roles.map((role, idx) => (
              <SectionReveal 
                key={idx} 
                delay={idx * 0.1} 
                className={`p-8 rounded-3xl shadow-lg ${role.color} ${idx === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                style={role.color.includes('bg-brand-navy') && role.color.includes('text-white') ? { color: '#fcf6d3' } : {}}
              >
                <div className="flex items-center gap-4 mb-8">
                  <role.icon className={`w-10 h-10 ${role.iconColor}`} />
                  <h2 className="text-2xl font-bold">{role.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-70">The Challenge</h4>
                    <p className="text-lg opacity-90 leading-relaxed">{role.problem}</p>
                  </div>
                  <div className="w-full h-px bg-current opacity-20"></div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-70">The KIDUART ERP Solution</h4>
                    <p className="text-lg font-medium leading-relaxed mb-6">{role.solution}</p>
                    <Link href={`/solutions/${role.slug}`} className="inline-flex items-center font-bold hover:opacity-80 transition-opacity group">
                      Explore {role.title} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
