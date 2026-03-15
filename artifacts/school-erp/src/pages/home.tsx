import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { 
  Users, Calendar, Clock, CreditCard, MessageSquare, PieChart, 
  ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Bell, Activity
} from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    bounce: 0,
    duration: 2000
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  const display = useTransform(spring, (current) => {
    if (value >= 1000000) {
      return (current / 1000000).toFixed(0) + "M" + suffix;
    }
    if (value >= 10000) {
      return (current / 1000).toFixed(0) + "k" + suffix;
    }
    if (Number.isInteger(value)) {
      return Math.floor(current).toString() + suffix;
    }
    return current.toFixed(1) + suffix;
  });

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Home() {
  return (
    <PageTransition className="pt-24 pb-0">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden min-h-screen flex items-center">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 500, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 600, position: "bottom-right", opacity: 0.35 },
          { color: "#f77f00", size: 400, position: "center-right", opacity: 0.30 }
        ]} />
        <FloatingIcons 
          icons={["GraduationCap", "BookOpen", "Star", "Brain", "Lightbulb", "Award"]} 
          count={6} 
          heroMode={true} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm mb-6 border border-brand-teal/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                </span>
                KIDUART ERP 2.0 is now live
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold text-brand-navy mb-6"
              >
                Transform Your School with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange">AI-Powered</span> ERP
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="text-lg text-brand-navy/70 mb-8 leading-relaxed"
              >
                Streamline operations, boost student success, and engage parents with the most intuitive school management platform built for modern education.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/demo" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal shadow-xl hover:shadow-brand-teal/25 transition-all duration-300 hover:-translate-y-1 text-center">
                  Request Demo
                </Link>
                <Link href="/features" className="px-8 py-4 rounded-full bg-white border border-brand-navy/10 text-brand-navy font-bold text-lg hover:bg-brand-beige transition-all duration-300 flex items-center justify-center gap-2 group">
                  Explore Features <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-brand-orange/20 blur-3xl rounded-[3rem] -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800" 
                alt="Students in classroom" 
                className="w-full h-auto drop-shadow-2xl rounded-2xl border border-white/50 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-white border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Calculator", "BarChart2"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-navy/5 text-center">
            {[
              { label: "Schools Worldwide", value: 500, suffix: "+" },
              { label: "Students Managed", value: 10000, suffix: "+" },
              { label: "Records Processed", value: 1000000, suffix: "+" },
              { label: "Platform Uptime", value: 99.9, suffix: "%" },
            ].map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="text-3xl lg:text-4xl font-extrabold text-brand-navy mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-brand-navy/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-brand-beige/30 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 400, position: "top-right", opacity: 0.15 },
          { color: "#003049", size: 400, position: "bottom-left", opacity: 0.12 }
        ]} />
        <FloatingIcons 
          icons={["Users", "Calendar", "Clock", "CreditCard", "MessageSquare", "PieChart"]} 
          count={5} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Everything you need to run a modern school</h2>
            <p className="text-lg text-brand-navy/70">A complete ecosystem of tools designed to reduce admin workload and focus on what matters: education.</p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { slug: "student-management", icon: Users, title: "Student Info", desc: "Centralized database for student profiles, medical records, and academic history.", color: "text-brand-teal", bg: "bg-brand-teal/10" },
              { slug: "attendance", icon: Calendar, title: "Attendance", desc: "Automated tracking with instant parent notifications for absences.", color: "text-brand-orange", bg: "bg-brand-orange/10" },
              { slug: "timetable", icon: Clock, title: "Timetable", desc: "Conflict-free schedule generation for classes, teachers, and resources.", color: "text-brand-navy", bg: "bg-brand-navy/10" },
              { slug: "fee-management", icon: CreditCard, title: "Fee Management", desc: "Automated invoicing, online payments, and comprehensive financial reports.", color: "text-brand-yellow", bg: "bg-brand-yellow/20" },
              { slug: "communication", icon: MessageSquare, title: "Communication", desc: "Built-in messaging system connecting admins, teachers, and parents.", color: "text-brand-teal", bg: "bg-brand-teal/10" },
              { slug: "reports", icon: PieChart, title: "Reports", desc: "Customizable academic and operational reports generated in seconds.", color: "text-brand-bronze", bg: "bg-brand-bronze/10" },
            ].map((feature, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <Link href={`/features/${feature.slug}`} className="block bg-white rounded-2xl p-8 shadow-lg shadow-brand-navy/5 border border-brand-navy/5 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 group h-full cursor-pointer">
                  <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">{feature.title}</h3>
                  <p className="text-brand-navy/70 leading-relaxed">{feature.desc}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI INNOVATION */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.15 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.15 }
        ]} />
        <FloatingIcons 
          icons={["Brain", "Atom", "Lightbulb"]} 
          count={4} 
        />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           {/* Abstract shapes */}
           <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-teal rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-brand-orange rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-yellow font-semibold text-sm mb-6 border border-white/20">
              Future-Ready Education
            </div>
            <h2 className="text-4xl font-bold mb-4">Powered by Artificial Intelligence</h2>
            <p className="text-lg" style={{ color: 'rgba(252,246,211,0.7)' }}>KIDUART ERP uses advanced machine learning to provide actionable insights and automate repetitive tasks.</p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "Predictive Analytics", desc: "Identify students who might need extra help before their grades drop." },
              { icon: Activity, title: "Automated Reports", desc: "AI generates personalized performance narratives for every student." },
              { icon: Bell, title: "Smart Notifications", desc: "System learns routine and alerts staff only for anomalies and exceptions." },
              { icon: PieChart, title: "Performance Insights", desc: "Deep dive into class-wide trends to optimize teaching strategies." }
            ].map((item, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p style={{ color: 'rgba(252,246,211,0.7)' }}>{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#0c716b", size: 400, position: "top-left", opacity: 0.15 },
          { color: "#fcbf49", size: 400, position: "bottom-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Heart", "Star", "Users"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Loved by Educators</h2>
          </SectionReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "avatar-1.png", name: "Sarah Jenkins", role: "Principal, Oakridge Academy", quote: "Since switching to KIDUART ERP, our administrative workload has dropped by 40%. The parents love the communication app." },
              { img: "avatar-2.png", name: "David Chen", role: "IT Director, Metro Schools", quote: "The implementation was seamless. The API integrations with our existing LMS made it the perfect choice." },
              { img: "avatar-1.png", name: "Elena Rodriguez", role: "Head of Admin", quote: "Fee collection used to be a nightmare. Now it's automated, transparent, and our cash flow has improved significantly." }
            ].map((t, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} className="bg-brand-beige/20 p-8 rounded-2xl relative">
                <div className="text-brand-orange text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
                <p className="text-brand-navy/80 italic mb-8 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={`${import.meta.env.BASE_URL}images/${t.img}`} alt={t.name} className="w-12 h-12 rounded-full bg-brand-navy/10 object-cover" />
                  <div>
                    <div className="font-bold text-brand-navy">{t.name}</div>
                    <div className="text-sm text-brand-teal">{t.role}</div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY TRUST */}
      <section className="py-16 border-t border-brand-navy/5 bg-brand-beige/30 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["ShieldCheck", "Lock", "Eye"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Bank-Grade Security</h3>
              <p className="text-brand-navy/70">Your school's data is protected by enterprise-level encryption and complies with global privacy standards.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, text: "ISO 27001 Certified" },
                { icon: CheckCircle2, text: "GDPR Compliant" },
                { icon: ShieldCheck, text: "256-bit Encryption" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-brand-navy/10 shadow-sm">
                  <badge.icon className="w-5 h-5 text-brand-teal" />
                  <span className="font-medium text-brand-navy text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
