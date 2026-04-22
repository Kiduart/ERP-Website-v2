import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Link } from "wouter";
import { 
  LayoutDashboard, BookOpen, Users, DollarSign, 
  GraduationCap, Heart, Calculator, TrendingUp, 
  ShieldCheck, Building2, ArrowRight
} from "lucide-react";

export default function Platform() {
  const dashboards = [
    {
      title: "Admin Dashboard",
      icon: LayoutDashboard,
      capabilities: ["Student enrollment mgmt", "Staff oversight", "Campus analytics", "Document management"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10"
    },
    {
      title: "Teacher Dashboard",
      icon: BookOpen,
      capabilities: ["Class attendance", "Gradebook", "Lesson planning", "Student communication"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      title: "HR Dashboard",
      icon: Users,
      capabilities: ["Staff profiles", "Leave management", "Payroll processing", "Performance reviews"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10"
    },
    {
      title: "Finance Dashboard",
      icon: DollarSign,
      capabilities: ["Fee collection", "Expense tracking", "Budget reports", "Payment gateway"],
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/20"
    },
    {
      title: "Student Dashboard",
      icon: GraduationCap,
      capabilities: ["My grades", "Attendance record", "Assignments", "Timetable"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10"
    },
    {
      title: "Parent Dashboard",
      icon: Heart,
      capabilities: ["Child's progress", "Fee payments", "Teacher messages", "Notifications"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      title: "Accounting Dashboard",
      icon: Calculator,
      capabilities: ["Income/expense ledger", "Invoice management", "Tax reports", "Audit trail"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10"
    },
    {
      title: "Director Dashboard",
      icon: TrendingUp,
      capabilities: ["School-wide analytics", "KPI monitoring", "Strategic insights", "Executive reports"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10"
    },
    {
      title: "System Admin Panel",
      icon: ShieldCheck,
      capabilities: ["User roles & permissions", "System config", "Integration settings", "Security logs"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      title: "School Management Panel",
      icon: Building2,
      capabilities: ["Multi-campus control", "Policy management", "Academic calendar", "Compliance"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10"
    }
  ];

  return (
    <PageTransition className="pt-24 pb-0">
      <section className="bg-brand-navy py-20 lg:py-32 relative overflow-hidden min-h-screen flex items-center" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["LayoutDashboard", "Users", "BarChart2"]} count={6} heroMode={true} />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              One Platform. Every Role. Every Dashboard.
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(252,246,211,0.8)' }}>
              Explore the full range of KIDUART ERP dashboards built for every stakeholder in your school.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["BookOpen", "Calculator", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboards.map((dash, idx) => (
              <SectionReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-brand-navy/5 border border-brand-navy/5 flex flex-col h-full hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${dash.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <dash.icon className={`w-7 h-7 ${dash.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">{dash.title}</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {dash.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-navy/80">
                        <div className="w-5 h-5 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-teal text-xs mt-0.5 flex-shrink-0">✓</div>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/features" className="inline-flex items-center text-brand-teal font-bold hover:text-brand-navy transition-colors group/link mt-auto">
                    Explore {dash.title} <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-beige/20 border-t border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Want to see it live?</h2>
            <p className="text-lg text-brand-navy/70 mb-8">
              Get a personalized walkthrough of the dashboards that matter most to your institution.
            </p>
            <Link href="/demo" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal shadow-xl hover:shadow-brand-teal/25 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2">
              Request Demo
            </Link>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
