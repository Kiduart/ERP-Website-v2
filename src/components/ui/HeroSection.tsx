import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";

export type HeroSectionProps = {
  title: string;
  subtitle?: string;
  image: string;
  layout: "center" | "split";
  children?: ReactNode;
  childrenLeft?: ReactNode;
  childrenRight?: ReactNode;
  showBlobs?: boolean;
  showFloatingIcons?: boolean;
  floatingIcons?: string[];
  floatingIconsCount?: number;
  className?: string;
};

export function HeroSection({
  title,
  subtitle,
  image,
  layout,
  children,
  childrenLeft,
  childrenRight,
  showBlobs = true,
  showFloatingIcons = true,
  floatingIcons = ["LayoutDashboard", "Users", "BarChart2"],
  floatingIconsCount = 6,
  className,
}: HeroSectionProps) {
  const isSplit = layout === "split";

  return (
    <section
      className={cn(
        "bg-brand-navy relative overflow-hidden flex items-center py-20 lg:py-32 min-h-screen",
        className,
      )}
      style={{ color: "#fcf6d3" }}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-navy opacity-80" />
      <div className="absolute inset-0 z-20 pointer-events-none">
        {showBlobs && (
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
              { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 },
            ]}
          />
        )}
        {showFloatingIcons && (
          <FloatingIcons icons={floatingIcons} count={floatingIconsCount} heroMode={true} />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className={cn(isSplit ? "grid items-center gap-12 lg:grid-cols-2" : "")}>
          <SectionReveal className={cn(isSplit ? "text-left" : "text-center")}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn("text-xl", isSplit ? "max-w-3xl" : "max-w-3xl mx-auto")}
                style={{ color: "rgba(252,246,211,0.8)" }}
              >
                {subtitle}
              </p>
            )}
            {children ?? childrenLeft}
          </SectionReveal>

          {isSplit && childrenRight && <SectionReveal delay={0.1}>{childrenRight}</SectionReveal>}
        </div>
      </div>
    </section>
  );
}
