import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Calendar, ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Blog() {
  const categories = ["All", "Education Technology", "School Management", "AI in Education", "Student Success"];
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = [
    {
      title: "The Future of AI in Education: What Schools Need to Know in 2026",
      excerpt: "Artificial intelligence is no longer a future concept for education — it's happening now, reshaping how schools operate, how teachers teach, and how students learn.",
      category: "AI in Education",
      date: "March 5, 2026",
      color: "from-brand-teal/20 to-brand-navy/20",
      badgeColor: "bg-brand-teal text-white",
      slug: "ai-in-education-2026"
    },
    {
      title: "5 Proven Benefits of Implementing a School ERP System",
      excerpt: "Schools that implement a modern ERP system see measurable improvements in efficiency, parent satisfaction, and student outcomes within the first 90 days.",
      category: "School Management",
      date: "February 20, 2026",
      color: "from-brand-orange/20 to-brand-yellow/20",
      badgeColor: "bg-brand-orange text-white",
      slug: "school-erp-benefits"
    },
    {
      title: "The Complete Guide to Digital Transformation for Schools",
      excerpt: "Digital transformation in education isn't just about buying new software — it's a cultural shift that requires strategy, leadership, and the right technology foundation.",
      category: "Education Technology",
      date: "February 10, 2026",
      color: "from-brand-navy/20 to-brand-teal/20",
      badgeColor: "bg-brand-navy text-white",
      slug: "digital-transformation-schools"
    },
    {
      title: "Revolutionizing Parent-Teacher Communication with Technology",
      excerpt: "The gap between parents and schools has historically been one of education's biggest challenges. Modern communication platforms are finally bridging it.",
      category: "School Management",
      date: "January 28, 2026",
      color: "from-brand-yellow/20 to-brand-orange/20",
      badgeColor: "bg-brand-yellow text-brand-navy",
      slug: "parent-teacher-communication"
    },
    {
      title: "Student Data Management Best Practices for Modern Schools",
      excerpt: "How schools collect, store, and use student data has enormous implications for privacy, compliance, and ultimately student outcomes.",
      category: "Student Success",
      date: "January 15, 2026",
      color: "from-brand-teal/20 to-brand-orange/20",
      badgeColor: "bg-brand-teal text-white",
      slug: "student-data-management"
    },
    {
      title: "How KIDUORBIT's Predictive Analytics Is Saving Students From Failure",
      excerpt: "Early intervention is the most powerful tool in education. KIDUORBIT's AI identifies at-risk students weeks before traditional methods — and schools are seeing dramatic results.",
      category: "AI in Education",
      date: "March 10, 2026",
      color: "from-brand-navy/20 to-brand-yellow/20",
      badgeColor: "bg-brand-navy text-white",
      slug: "kiduorbit-predictive-analytics"
    }
  ];

  const filteredPosts = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <PageTransition className="pt-24 pb-0">
      {/* Hero */}
      <section className="bg-brand-beige/50 relative overflow-hidden min-h-screen flex items-center py-20 lg:py-32">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["BookOpen", "MessageSquare", "Star"]} count={6} heroMode={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <SectionReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">Insights for Modern Education</h1>
            <p className="text-xl text-brand-navy/70 max-w-2xl mx-auto">Expert advice, industry trends, and best practices for running a successful educational institution.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Star", "Award"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-brand-navy text-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/40 to-brand-orange/20 mix-blend-overlay"></div>
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16 relative z-10">
                <div>
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow text-brand-navy font-bold text-sm mb-6">Featured</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">The Future of AI in Education: What Schools Need to Know in 2026</h2>
                  <p className="text-lg text-white/80 mb-8">Artificial intelligence is no longer a future concept for education — it's happening now, reshaping how schools operate, how teachers teach, and how students learn.</p>
                  <Link href="/blog/ai-in-education-2026" className="inline-flex items-center gap-2 font-bold text-brand-yellow hover:text-white transition-colors">
                    Read Full Article <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["BookOpen", "MessageSquare"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat ? 'bg-brand-navy text-white' : 'bg-brand-beige/50 text-brand-navy hover:bg-brand-beige'
                }`}
              >
                {cat}
              </button>
            ))}
          </SectionReveal>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <SectionReveal key={post.slug} delay={idx * 0.1} className="bg-white rounded-2xl shadow-lg shadow-brand-navy/5 border border-brand-navy/5 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform">
                  <Link href={`/blog/${post.slug}`} className="block h-48 bg-gradient-to-br relative overflow-hidden">
                    <img 
                      src={[
                        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
                        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
                        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
                        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
                        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
                        'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
                      ][idx % 6]} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.color} mix-blend-multiply`} />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${post.badgeColor} relative z-10`}>
                      {post.category}
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm font-medium text-brand-navy/50 mb-3">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-brand-navy/70 text-sm mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-bold text-brand-teal mt-auto hover:text-brand-navy transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">No articles found</h3>
              <p className="text-brand-navy/70">Check back later for more content in this category.</p>
            </div>
          )}
          
          {filteredPosts.length > 0 && (
            <div className="mt-16 text-center">
              <button className="px-8 py-4 rounded-full bg-brand-beige text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-all shadow-md">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "top-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "bottom-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Mail", "Star"]} count={4} />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <SectionReveal>
            <Mail className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(252,246,211,0.7)' }}>Get the latest insights, resources, and product updates delivered straight to your inbox every month.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="First Name" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-4 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-teal" style={{ color: '#fcf6d3' }} />
              <input type="email" placeholder="Email Address" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-4 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-teal" required style={{ color: '#fcf6d3' }} />
              <button type="submit" className="px-8 py-4 rounded-xl bg-brand-teal text-white font-bold hover:bg-white hover:text-brand-teal transition-all">
                Subscribe
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
