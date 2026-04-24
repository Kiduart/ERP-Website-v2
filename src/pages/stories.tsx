import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { TeamPanelsHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Search, MapPin, TrendingUp, ArrowRight, FolderSearch } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function CustomerStories() {
  const filters = ["All", "K-12", "Higher Secondary", "School District", "Private School", "Religious Institution", "International School"];
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);

  const toggleFilter = (filter: string) => {
    if (filter === "All") {
      setActiveFilters(["All"]);
      return;
    }
    
    let newFilters = activeFilters.filter(f => f !== "All");
    if (newFilters.includes(filter)) {
      newFilters = newFilters.filter(f => f !== filter);
      if (newFilters.length === 0) newFilters = ["All"];
    } else {
      newFilters.push(filter);
    }
    setActiveFilters(newFilters);
  };

  const stories = [
    {
      slug: "delhi-public-school",
      initial: "D",
      name: "Delhi Public School",
      location: "New Delhi, India",
      type: "K-12",
      title: "How Delhi Public School eliminated paper trails and saved 500 hours a month.",
      summary: "Managing 2,400+ students across 3 campuses with fragmented systems led to frequent data errors, slow fee collection, and overwhelmed administrative staff.",
      stat: "92% fee collection rate (up from 68%)",
      color: "from-brand-teal to-brand-navy"
    },
    {
      slug: "greenfield-academy",
      initial: "G",
      name: "Greenfield Academy",
      location: "Mumbai, India",
      type: "Private School",
      title: "Building a modern premium school from day one.",
      summary: "A newly established premium school needed a modern ERP from day one. Manual systems were already causing issues in the first year with just 400 students.",
      stat: "100% digital enrollment process",
      color: "from-brand-orange to-brand-yellow"
    },
    {
      slug: "sunrise-international",
      initial: "S",
      name: "Sunrise International School",
      location: "Bangalore, India",
      type: "International School",
      title: "Customizing ERP for complex IB requirements and global families.",
      summary: "As an IB school, Sunrise needed a flexible system that could handle their unique grading scale, multi-language communication, and complex fee structures.",
      stat: "Multi-currency billing for 40+ nationalities",
      color: "from-brand-navy to-brand-teal"
    },
    {
      slug: "metro-schools-district",
      initial: "M",
      name: "Metro Schools District",
      location: "Chennai, India",
      type: "School District",
      title: "Unifying 12 campuses under a single management dashboard.",
      summary: "Overseeing 12 schools with completely inconsistent data practices made district-level reporting impossible. Compliance reports took 3 weeks to compile manually.",
      stat: "Compliance reports in 2 hours (previously 3 weeks)",
      color: "from-brand-teal to-brand-orange"
    },
    {
      slug: "st-mary-school",
      initial: "S",
      name: "St. Mary's School",
      location: "Pune, India",
      type: "Religious Institution",
      title: "Modernizing a 60-year-old institution without losing its culture.",
      summary: "A 60-year-old institution with deeply entrenched paper-based processes needed to modernize without losing institutional culture or disrupting longtime staff.",
      stat: "Paper usage reduced by 85%",
      color: "from-brand-yellow to-brand-orange"
    },
    {
      slug: "brighton-college",
      initial: "B",
      name: "Brighton College",
      location: "Hyderabad, India",
      type: "Higher Secondary",
      title: "Using AI analytics to improve board exam results dramatically.",
      summary: "A competitive higher secondary school needed better analytics to improve board exam results and reduce the gap between teacher expectations and student performance.",
      stat: "Board exam pass rate improved from 78% to 94%",
      color: "from-brand-navy to-brand-orange"
    }
  ];

  const filteredStories = stories.filter(story => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      story.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase());
      
    // Category filter
    const matchesFilter = activeFilters.includes("All") || activeFilters.includes(story.type);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <PageTransition className="pt-20 pb-0 tooo">
      <TeamPanelsHero
        eyebrow="Customer stories"
        title="Customer Success Stories"
        subtitle="See how educational institutions around the world are using KIDUART to transform their operations and improve outcomes."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
        actions={(
          <Link href="/demo" className="rounded-full bg-brand-navy px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-teal">
            Get Started For Free
          </Link>
        )}
      />

      <section className="py-16 bg-brand-beige/20 min-h-[50vh] relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#003049", size: 300, position: "center-right", opacity: 0.12 }
        ]} />
        <FloatingIcons icons={["Users", "Building2", "BookOpen"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionReveal className="mb-10 max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-brand-navy/40" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by school name, location, or challenge..." 
                className="w-full bg-white rounded-full py-4 pl-12 pr-6 text-brand-navy shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-teal/50 transition-shadow"
              />
            </div>
          </SectionReveal>

          {/* Filters */}
          <SectionReveal className="flex flex-wrap gap-2 justify-center mb-16">
            {filters.map((f) => {
              const isActive = activeFilters.includes(f);
              return (
                <button 
                  key={f} 
                  onClick={() => toggleFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                    isActive 
                      ? 'bg-brand-teal text-white border-brand-teal shadow-md' 
                      : 'bg-white text-brand-navy border-brand-navy/10 hover:border-brand-teal/50'
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </SectionReveal>

          {/* Grid */}
          {filteredStories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, idx) => (
                <SectionReveal key={story.slug} delay={idx * 0.1} className="bg-white rounded-2xl shadow-lg shadow-brand-navy/5 border border-brand-navy/5 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform group">
                  <Link href={`/customer-stories/${story.slug}`} className="block">
                    <div className={`h-32 bg-gradient-to-r ${story.color} flex items-center px-6 relative`}>
                      <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl font-black text-brand-navy absolute -bottom-8 border-4 border-white group-hover:scale-110 transition-transform">
                        {story.initial}
                      </div>
                    </div>
                  </Link>
                  
                  <div className="pt-12 p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Link href={`/customer-stories/${story.slug}`}>
                          <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-teal transition-colors">{story.name}</h3>
                        </Link>
                        <div className="flex items-center gap-1 text-xs text-brand-navy/60 mt-1">
                          <MapPin className="w-3 h-3" /> {story.location}
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-brand-beige px-2 py-1 rounded text-brand-navy text-center ml-2">{story.type}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-brand-navy mb-3 leading-snug">{story.title}</h4>
                    <p className="text-brand-navy/70 text-sm mb-6 flex-grow">{story.summary}</p>
                    
                    <div className="bg-brand-teal/5 border border-brand-teal/10 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 text-brand-teal font-bold text-sm">
                        <TrendingUp className="w-4 h-4" /> Impact
                      </div>
                      <div className="font-medium text-brand-navy mt-1">{story.stat}</div>
                    </div>
                    
                    <Link href={`/customer-stories/${story.slug}`} className="w-full py-3 rounded-xl border-2 border-brand-navy/10 font-bold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors flex justify-center items-center gap-2">
                      Read Story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <SectionReveal className="text-center py-20">
              <FolderSearch className="w-16 h-16 text-brand-navy/20 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-navy mb-2">No stories found</h3>
              <p className="text-brand-navy/60">Try adjusting your search query or removing filters.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveFilters(["All"]); }}
                className="mt-6 px-6 py-2 bg-brand-beige text-brand-navy font-bold rounded-full hover:bg-brand-navy hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </SectionReveal>
          )}

          {filteredStories.length > 0 && (
            <div className="mt-16 text-center">
              <button className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-teal transition-all shadow-lg hover:shadow-brand-teal/25">
                Load More Stories
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection title="Become our next success story" subtitle="Join hundreds of schools saving time and improving education outcomes." />
    </PageTransition>
  );
}
