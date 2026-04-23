import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { 
  Users, CalendarCheck, Clock, CreditCard, MessageSquare, PieChart,
  CheckCircle2, ArrowLeft, ArrowRight
} from "lucide-react";

const featuresData: Record<string, any> = {
  "student-management": {
    icon: Users, color: "text-brand-teal", bg: "bg-brand-teal/10",
    title: "Student Information Management",
    headline: "Every Student, Every Detail — All in One Place",
    description: "KIDUART's Student Information System gives administrators and teachers complete visibility into every student's academic journey, health records, and extracurricular activities.",
    capabilities: ["Digital enrollment & re-enrollment", "Customizable student profiles", "Medical records management", "Document upload & storage", "Alumni tracking", "Custom tags & groups"],
    howItWorks: [
      {step: 1, title: "Enroll Students", desc: "Admins or parents complete digital enrollment forms with all required documents."},
      {step: 2, title: "Build Profiles", desc: "System automatically creates comprehensive student profiles from enrollment data."},
      {step: 3, title: "Access Anywhere", desc: "Authorized staff access student information from any device, anytime."},
      {step: 4, title: "Track Progress", desc: "Link academic, attendance, and activity data to each student's central profile."}
    ],
    whoItHelps: [
      {role: "Administrator", benefit: "Complete visibility into the entire student body"},
      {role: "Teacher", benefit: "Quick access to student history and notes"},
      {role: "Parent", benefit: "View and update child's information"},
      {role: "Student", benefit: "Access own profile and academic records"}
    ]
  },
  "attendance": {
    icon: CalendarCheck, color: "text-brand-orange", bg: "bg-brand-orange/10",
    title: "Attendance Tracking",
    headline: "Automate Attendance. Engage Parents. Save Hours Daily.",
    description: "Replace manual roll calls with smart digital attendance that notifies parents instantly, generates compliance reports, and integrates with biometric hardware.",
    capabilities: ["One-click mobile attendance", "Subject-wise tracking", "Biometric/RFID integration", "Automated parent SMS/email alerts", "Leave request management", "Monthly compliance reports"],
    howItWorks: [
      {step: 1, title: "Mark Attendance", desc: "Teachers tap once on mobile or use biometric readers at classroom doors."},
      {step: 2, title: "Instant Alerts", desc: "Parents receive SMS/email immediately when their child is marked absent."},
      {step: 3, title: "Leave Requests", desc: "Parents submit leave requests online; teachers approve or decline."},
      {step: 4, title: "Reports Generated", desc: "Daily, weekly, and monthly attendance reports generated automatically."}
    ],
    whoItHelps: [
      {role: "Teacher", benefit: "Mark full class attendance in under 30 seconds"},
      {role: "Administrator", benefit: "Real-time attendance dashboard across all classes"},
      {role: "Parent", benefit: "Instant notifications and leave submission"},
      {role: "Student", benefit: "View own attendance record and request leaves"}
    ]
  },
  "timetable": {
    icon: Clock, color: "text-brand-navy", bg: "bg-brand-navy/10",
    title: "Timetable Management",
    headline: "Conflict-Free Schedules Generated in Minutes, Not Days.",
    description: "Our intelligent scheduling engine factors in teacher availability, room capacity, subject hours, and student groups to create optimal, conflict-free timetables automatically.",
    capabilities: ["AI-powered schedule generation", "Teacher availability management", "Room/lab booking", "Substitute teacher management", "Exam scheduling", "Calendar integration"],
    howItWorks: [
      {step: 1, title: "Input Parameters", desc: "Define subjects, teacher loads, room capacities, and constraints."},
      {step: 2, title: "AI Generates", desc: "The scheduling engine creates conflict-free timetables automatically."},
      {step: 3, title: "Review & Adjust", desc: "Admins review and manually fine-tune if needed."},
      {step: 4, title: "Publish", desc: "Teachers and students see their schedules instantly on their dashboards."}
    ],
    whoItHelps: [
      {role: "Administrator", benefit: "Generate complex schedules in minutes"},
      {role: "Teacher", benefit: "View personal timetable, manage substitutions"},
      {role: "Student", benefit: "Access class schedule on mobile"},
      {role: "Parent", benefit: "See child's daily schedule"}
    ]
  },
  "fee-management": {
    icon: CreditCard, color: "text-brand-yellow", bg: "bg-brand-yellow/20",
    title: "Fee Management",
    headline: "Automate Fee Collection. Eliminate Revenue Leakage.",
    description: "From invoice generation to payment collection and defaulter tracking — KIDUART's fee module handles the entire billing lifecycle with minimal manual intervention.",
    capabilities: ["Automated invoice generation", "Online payment gateway", "Fee structure templates", "Defaulter tracking & reminders", "Scholarship/concession management", "Financial analytics"],
    howItWorks: [
      {step: 1, title: "Set Fee Structure", desc: "Define fee components, due dates, and applicable student groups."},
      {step: 2, title: "Auto Invoice", desc: "System generates and sends invoices automatically on schedule."},
      {step: 3, title: "Online Payment", desc: "Parents pay via card, bank transfer, or UPI through the parent portal."},
      {step: 4, title: "Track & Report", desc: "Real-time collection dashboard with automated follow-ups for outstanding fees."}
    ],
    whoItHelps: [
      {role: "Administrator", benefit: "Complete fee oversight and collection analytics"},
      {role: "Finance Team", benefit: "Automated invoicing and payment reconciliation"},
      {role: "Parent", benefit: "Easy online payments, digital receipts"},
      {role: "Student", benefit: "View fee dues and payment history"}
    ]
  },
  "communication": {
    icon: MessageSquare, color: "text-brand-teal", bg: "bg-brand-teal/10",
    title: "Communication Tools",
    headline: "Keep Everyone Connected — Admins, Teachers & Parents.",
    description: "Integrated messaging, announcements, and notifications keep your entire school community informed and engaged in real time.",
    capabilities: ["School-wide announcements", "Direct teacher-parent messaging", "SMS and email notifications", "Event and holiday alerts", "Notice board management", "Emergency broadcast"],
    howItWorks: [
      {step: 1, title: "Send Message", desc: "Staff compose messages targeting specific groups (class, grade, all parents)."},
      {step: 2, title: "Multi-Channel Delivery", desc: "System sends via in-app, email, and SMS based on user preferences."},
      {step: 3, title: "Parents Respond", desc: "Parents reply through the parent app; conversations are logged."},
      {step: 4, title: "Track Engagement", desc: "Admins see read receipts and communication analytics."}
    ],
    whoItHelps: [
      {role: "Administrator", benefit: "School-wide communications and emergency broadcasts"},
      {role: "Teacher", benefit: "Direct messaging with parents about student progress"},
      {role: "Parent", benefit: "Stay informed with real-time notifications"},
      {role: "Student", benefit: "Receive assignment reminders and school updates"}
    ]
  },
  "reports": {
    icon: PieChart, color: "text-brand-bronze", bg: "bg-brand-bronze/10",
    title: "Reports & Analytics",
    headline: "Data-Driven Decisions Start With The Right Reports.",
    description: "Generate comprehensive academic, financial, and operational reports with one click. Schedule automated reports or build custom dashboards for any stakeholder.",
    capabilities: ["Student report cards", "Class performance analytics", "Financial summaries", "Attendance compliance reports", "Custom report builder", "Scheduled automated delivery"],
    howItWorks: [
      {step: 1, title: "Choose Report", desc: "Select from 50+ pre-built templates or create custom reports."},
      {step: 2, title: "Set Parameters", desc: "Filter by date range, class, subject, or student group."},
      {step: 3, title: "Generate Instantly", desc: "Reports render in seconds with charts and data tables."},
      {step: 4, title: "Share or Schedule", desc: "Download, email, or schedule recurring delivery to stakeholders."}
    ],
    whoItHelps: [
      {role: "Administrator", benefit: "Real-time operational dashboards"},
      {role: "Teacher", benefit: "Class performance insights and report cards"},
      {role: "Parent", benefit: "Detailed child progress reports"},
      {role: "Finance", benefit: "Fee collection and financial summaries"}
    ]
  }
};

export default function FeatureDetail() {
  const { slug } = useParams();
  const data = slug ? featuresData[slug] : null;

  if (!data) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-6">Feature Not Found</h1>
        <p className="text-xl text-brand-navy/70 mb-8">The feature you are looking for doesn't exist.</p>
        <Link href="/features" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Features
        </Link>
      </PageTransition>
    );
  }

  const Icon = data.icon;
  const otherSlugs = Object.keys(featuresData).filter(s => s !== slug).slice(0, 3);

  return (
    <PageTransition className="pt-20 pb-0 tooo">
      {/* HERO */}
      <section className="bg-brand-navy relative overflow-hidden min-h-screen flex items-center py-20 lg:py-32" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.15 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["GraduationCap", "BookOpen", "Star"]} count={6} heroMode={true} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb first */}
          <nav className="flex items-center gap-2 text-sm mb-6 opacity-70">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline">Features</Link>
            <span>/</span>
            <span>{data.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div className={`w-16 h-16 rounded-2xl ${data.bg} flex items-center justify-center mb-8 border border-white/10`}>
                <Icon className={`w-8 h-8 ${data.color}`} />
              </div>
              <h2 className={`text-sm font-bold ${data.color} mb-3 uppercase tracking-widest`}>{data.title}</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {data.headline}
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(252,246,211,0.8)' }}>
                {data.description}
              </p>
              <Link href="/demo" className="px-8 py-4 rounded-full bg-white text-brand-navy font-bold text-lg hover:bg-brand-beige transition-colors inline-flex items-center gap-2">
                See it in action <ArrowRight className="w-5 h-5" />
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.2} className="relative hidden lg:block">
               {/* Abstract placeholder for product UI */}
               <div className="aspect-square bg-gradient-to-tr from-white/5 to-transparent rounded-full border border-white/10 flex items-center justify-center">
                 <Icon className="w-32 h-32 text-white/20" />
               </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Key Capabilities</h2>
            <p className="text-lg text-brand-navy/70">Everything you need to master {data.title.toLowerCase()}.</p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.capabilities.map((cap: string, i: number) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="bg-brand-beige/20 rounded-2xl p-6 flex items-center gap-4 border border-brand-navy/5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <CheckCircle2 className={`w-6 h-6 ${data.color}`} />
                  </div>
                  <span className="font-bold text-brand-navy">{cap}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-brand-beige/30 border-y border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy">How It Works</h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.howItWorks.map((step: any, idx: number) => (
              <SectionReveal key={idx} delay={idx * 0.1} className="relative">
                <div className={`w-12 h-12 rounded-xl ${data.bg} ${data.color} font-bold text-xl flex items-center justify-center mb-6`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-brand-navy/70 leading-relaxed">{step.desc}</p>
                {idx < data.howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-16 right-0 h-px bg-brand-navy/10"></div>
                )}
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT HELPS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy">Who Benefits?</h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whoItHelps.map((role: any, idx: number) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-lg shadow-brand-navy/5 border border-brand-navy/10 h-full">
                  <h3 className="text-xl font-bold text-brand-navy mb-4 pb-4 border-b border-brand-navy/10">{role.role}</h3>
                  <p className="text-brand-navy/70">{role.benefit}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED FEATURES */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="mb-12">
            <h2 className="text-2xl font-bold">Explore More Features</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {otherSlugs.map((s, i) => {
              const f = featuresData[s];
              const FIcon = f.icon;
              return (
                <SectionReveal key={s} delay={i * 0.1}>
                  <Link href={`/features/${s}`} className="block bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors h-full group">
                    <FIcon className={`w-8 h-8 ${f.color} mb-4`} />
                    <h3 className="text-lg font-bold mb-2 group-hover:text-brand-teal transition-colors">{f.title}</h3>
                    <p className="text-sm line-clamp-2" style={{ color: 'rgba(252,246,211,0.6)' }}>{f.description}</p>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
