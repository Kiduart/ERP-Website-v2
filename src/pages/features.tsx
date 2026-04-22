import { useState } from "react";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Link } from "wouter";
import { 
  Users, CalendarCheck, GraduationCap, MessageCircle, 
  Clock, BrainCircuit, ShieldAlert, Blocks, ArrowRight
} from "lucide-react";

export default function Features() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Student Management", "Attendance", "Finance", "Communication", "AI & Automation", "Security"];

  const advancedFeatures = [
    { slug: "communication", category: "Communication", icon: MessageCircle, title: "Parent App", desc: "Dedicated mobile app for parents to view grades, pay fees, and chat with teachers." },
    { slug: "timetable", category: "Attendance", icon: Clock, title: "Auto-Timetable", desc: "Algorithm generates conflict-free schedules based on teacher availability." },
    { slug: "reports", category: "AI & Automation", icon: BrainCircuit, title: "AI Assistant", desc: "Chatbot for quick queries, report generation, and data lookup." },
    { slug: "student-management", category: "Student Management", icon: Blocks, title: "LMS Integration", desc: "Syncs with Canvas, Moodle, and Google Classroom seamlessly." },
    { slug: "student-management", category: "Security", icon: ShieldAlert, title: "Role-Based Access", desc: "Granular permissions ensure staff only see what they need to see." },
    { slug: "fee-management", category: "Finance", icon: Users, title: "HR & Payroll", desc: "Manage staff attendance, leave, and process payroll automatically." }
  ];

  const filteredFeatures = activeCategory === "All" 
    ? advancedFeatures 
    : advancedFeatures.filter(f => f.category === activeCategory);

  return (
    <PageTransition className="pt-24 pb-0">
      <section className="bg-brand-navy relative overflow-hidden min-h-screen flex items-center" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["GraduationCap", "BookOpen", "Star"]} count={6} heroMode={true} />
        <div className="absolute inset-0 bg-[url('https://pixabay.com/get/g1e68c95f748af125fb1854529379d85e6c79ab0a562c6b04b986ae8d9005c3e25ae923a9dcdc7255d3b13d1dc94cf8b0936d07fcfba3be1c78a4cb1a2ff147c5_1280.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full py-20 lg:py-32">
          <SectionReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Powerful Features Built for Modern Schools</h1>
            <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: 'rgba(252,246,211,0.7)' }}>A comprehensive suite of tools designed to centralize data, automate workflows, and improve communication across your entire institution.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Core Platform Capabilities</h2>
          </SectionReveal>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Student Management</h3>
                <p className="text-lg text-brand-navy/70 mb-6">Maintain comprehensive digital records for every student. Track academic progress, disciplinary history, medical information, and extracurricular activities all in one secure place.</p>
                <ul className="space-y-3">
                  {['Digital enrollment forms', 'Document management', 'Custom student tags & groups', 'Alumni tracking'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-navy font-medium">
                      <div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal text-sm">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
              <SectionReveal delay={0.2} className="bg-brand-beige rounded-3xl p-8 aspect-square flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
                 {/* Decorative UI element representing student profiles */}
                 <div className="w-full max-w-sm glass-panel p-6 rounded-2xl relative z-10 shadow-2xl shadow-brand-navy/10">
                    <div className="flex items-center gap-4 border-b border-brand-navy/10 pb-4 mb-4">
                      <div className="w-16 h-16 bg-brand-navy/10 rounded-full"></div>
                      <div>
                        <div className="h-4 w-32 bg-brand-navy/80 rounded mb-2"></div>
                        <div className="h-3 w-20 bg-brand-navy/40 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-full bg-brand-navy/10 rounded"></div>
                      <div className="h-3 w-4/5 bg-brand-navy/10 rounded"></div>
                      <div className="h-3 w-5/6 bg-brand-navy/10 rounded"></div>
                    </div>
                 </div>
              </SectionReveal>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <SectionReveal delay={0.2} className="order-2 md:order-1 bg-brand-teal/10 rounded-3xl p-8 aspect-square flex items-center justify-center">
                 <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl border border-brand-teal/20">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-5 w-24 bg-brand-navy/80 rounded"></div>
                      <div className="h-6 w-16 bg-brand-orange rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-4">
                      {[1,2,3,4,5].map(i => <div key={i} className="h-8 rounded bg-brand-navy/5"></div>)}
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {[1,2,3,4,5].map(i => <div key={i} className={`h-8 rounded ${i===3 ? 'bg-brand-orange/20' : 'bg-brand-teal/20'}`}></div>)}
                    </div>
                 </div>
              </SectionReveal>
              <SectionReveal className="order-1 md:order-2">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                  <CalendarCheck className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Smart Attendance</h3>
                <p className="text-lg text-brand-navy/70 mb-6">Eliminate manual roll calls. Teachers can mark attendance in seconds via mobile or web, triggering automated SMS/email alerts to parents for unexcused absences.</p>
                <ul className="space-y-3">
                  {['Biometric/RFID integration', 'Subject-wise attendance', 'Leave request portal', 'Monthly attendance reports'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-navy font-medium">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange text-sm">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="w-16 h-16 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-brand-yellow" />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Grade & Performance Tracking</h3>
                <p className="text-lg text-brand-navy/70 mb-6">A flexible gradebook that supports various grading scales (GPA, CCE, custom). Generate beautifully designed report cards with a single click.</p>
                <ul className="space-y-3">
                  {['Customizable assessment structures', 'Online exam support', 'Class ranking & percentiles', 'Graphical performance trends'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-navy font-medium">
                      <div className="w-6 h-6 rounded-full bg-brand-yellow/30 flex items-center justify-center text-brand-yellow text-sm">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
              <SectionReveal delay={0.2} className="bg-brand-navy rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden relative">
                {/* Graph mockup */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end px-8 pb-8 gap-4 opacity-80">
                  {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-brand-teal rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-24 bg-brand-beige/20 border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Advanced Capabilities</h2>
            <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">Beyond basic management, KIDUART ERP offers cutting-edge tools to elevate your institution.</p>
          </SectionReveal>

          {/* Filter Bar */}
          <SectionReveal className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-brand-navy text-white shadow-md" 
                    : "bg-white text-brand-navy/70 border border-brand-navy/10 hover:border-brand-navy/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feat, idx) => (
              <SectionReveal key={`${feat.title}-${idx}`} delay={idx * 0.05} className="bg-white p-8 rounded-2xl border border-brand-navy/5 shadow-sm flex flex-col hover:shadow-md transition-shadow h-full">
                <feat.icon className="w-10 h-10 text-brand-teal mb-6" />
                <h4 className="text-xl font-bold text-brand-navy mb-3">{feat.title}</h4>
                <p className="text-brand-navy/70 mb-6 flex-grow">{feat.desc}</p>
                <Link href={`/features/${feat.slug}`} className="inline-flex items-center text-brand-teal font-bold hover:text-brand-navy transition-colors group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Experience all features in action" subtitle="Schedule a personalized walkthrough of the platform." />
    </PageTransition>
  );
}
