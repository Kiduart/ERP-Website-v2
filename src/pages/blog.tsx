import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { EditorialMusicHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Blog() {
  const categories = ["All", "Education Technology", "School Management", "AI in Education", "Student Success"];
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = [
    {
      title: "The Future of AI in Education: What Schools Need to Know in 2026",
      excerpt: "Artificial intelligence is no longer a future concept for education - it's happening now, reshaping how schools operate, how teachers teach, and how students learn.",
      category: "AI in Education",
      date: "March 5, 2026",
      color: "from-brand-teal/20 to-brand-navy/20",
      badgeColor: "bg-brand-teal text-white",
      slug: "ai-in-education-2026",
    },
    {
      title: "5 Proven Benefits of Implementing a School ERP System",
      excerpt: "Schools that implement a modern ERP system see measurable improvements in efficiency, parent satisfaction, and student outcomes within the first 90 days.",
      category: "School Management",
      date: "February 20, 2026",
      color: "from-brand-orange/20 to-brand-yellow/20",
      badgeColor: "bg-brand-orange text-white",
      slug: "school-erp-benefits",
    },
    {
      title: "The Complete Guide to Digital Transformation for Schools",
      excerpt: "Digital transformation in education isn't just about buying new software - it's a cultural shift that requires strategy, leadership, and the right technology foundation.",
      category: "Education Technology",
      date: "February 10, 2026",
      color: "from-brand-navy/20 to-brand-teal/20",
      badgeColor: "bg-brand-navy text-white",
      slug: "digital-transformation-schools",
    },
    {
      title: "Revolutionizing Parent-Teacher Communication with Technology",
      excerpt: "The gap between parents and schools has historically been one of education's biggest challenges. Modern communication platforms are finally bridging it.",
      category: "School Management",
      date: "January 28, 2026",
      color: "from-brand-yellow/20 to-brand-orange/20",
      badgeColor: "bg-brand-yellow text-brand-navy",
      slug: "parent-teacher-communication",
    },
    {
      title: "Student Data Management Best Practices for Modern Schools",
      excerpt: "How schools collect, store, and use student data has enormous implications for privacy, compliance, and ultimately student outcomes.",
      category: "Student Success",
      date: "January 15, 2026",
      color: "from-brand-teal/20 to-brand-orange/20",
      badgeColor: "bg-brand-teal text-white",
      slug: "student-data-management",
    },
    {
      title: "How KIDUORBIT's Predictive Analytics Is Saving Students From Failure",
      excerpt: "Early intervention is the most powerful tool in education. KIDUORBIT's AI identifies at-risk students weeks before traditional methods - and schools are seeing dramatic results.",
      category: "AI in Education",
      date: "March 10, 2026",
      color: "from-brand-navy/20 to-brand-yellow/20",
      badgeColor: "bg-brand-navy text-white",
      slug: "kiduorbit-predictive-analytics",
    },
  ];

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <PageTransition className="pt-20 pb-0">
      <EditorialMusicHero
        eyebrow="Blog and insights"
        title="Insights for Modern Education"
        subtitle="Expert advice, industry trends, and best practices for running a successful educational institution."
        image="https://plus.unsplash.com/premium_photo-1661963097356-23ddd3ef08de?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        actions={null}
      />

      <section className="section-space-tight relative overflow-hidden bg-white">
        <BackgroundBlobs blobs={[{ color: "hsl(var(--blob-yellow))", size: 300, position: "center-left", opacity: 0.15 }]} />
        <FloatingIcons icons={["Star", "Award"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-navy text-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/40 to-brand-orange/20 mix-blend-overlay" />
              <div className="relative z-10 grid items-center gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
                <div className="max-w-2xl">
                  <span className="mb-6 inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-sm font-bold text-brand-navy">Featured article</span>
                  <h2 className="text-[clamp(2rem,1.25rem+2vw,3.7rem)] font-bold leading-[1.02] text-white">The Future of AI in Education: What Schools Need to Know in 2026</h2>
                  <p className="mt-5 text-[clamp(1rem,0.95rem+0.3vw,1.125rem)] leading-8 text-white/80">
                    Artificial intelligence is no longer a future concept for education - it's happening now, reshaping how schools operate, how teachers teach, and how students learn.
                  </p>
                  <Link href="/blog/ai-in-education-2026" className="mt-8 inline-flex items-center gap-2 font-bold text-brand-yellow transition-colors hover:text-white">
                    Read Full Article <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:block">
                  <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_top,hsl(var(--blob-yellow))/0.18,transparent_55%),linear-gradient(135deg,hsl(var(--brand-teal))/0.92,hsl(var(--brand-navy)))] p-8">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">2026 outlook</div>
                    <div className="mt-8 space-y-4">
                      {["Automation in admin workflows", "Predictive insights for student success", "Smarter parent communication"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-medium text-white/85">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-white">
        <BackgroundBlobs blobs={[{ color: "hsl(var(--blob-teal))", size: 300, position: "center-right", opacity: 0.15 }]} />
        <FloatingIcons icons={["BookOpen", "MessageSquare"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto mb-10 max-w-3xl text-center">
            <div className="section-kicker">Education blog library</div>
            <h2 className="section-title mt-6 text-brand-navy">Browse insights by topic, not just by publish date</h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              Filter articles by school management, AI in education, student success, and digital transformation.
            </p>
          </SectionReveal>

          <SectionReveal className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === cat ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/10" : "bg-brand-beige/50 text-brand-navy hover:bg-brand-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </SectionReveal>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <SectionReveal key={post.slug} delay={idx * 0.1} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-lg shadow-brand-navy/5 transition-transform hover:-translate-y-1">
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden bg-gradient-to-br">
                    <img
                      src={
                        [
                          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
                          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
                          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
                          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
                          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
                          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
                        ][idx % 6]
                      }
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.color} mix-blend-multiply`} />
                    <div className={`relative left-4 top-4 inline-flex rounded-full px-3 py-1 text-xs font-bold shadow-sm ${post.badgeColor}`}>
                      {post.category}
                    </div>
                  </Link>

                  <div className="flex flex-grow flex-col p-6 sm:p-7">
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-brand-navy/50">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="mb-3 text-[clamp(1.2rem,1.08rem+0.5vw,1.5rem)] font-bold text-brand-navy transition-colors group-hover:text-brand-teal">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="section-copy mb-6 flex-grow text-brand-navy/70">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 font-bold text-brand-teal transition-colors hover:text-brand-navy">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-bold text-brand-navy">No articles found</h3>
              <p className="mt-3 text-brand-navy/70">Check back later for more content in this category.</p>
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="mt-16 text-center">
              <button className="rounded-full bg-brand-beige px-8 py-4 font-bold text-brand-navy shadow-md transition-all hover:bg-brand-navy hover:text-white">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
