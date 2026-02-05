import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Rocket, Target, Users, Zap, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: "Our Story | Kenya AI Compute",
    description: "The journey of building Africa's AI compute infrastructure",
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const timeline = [
    { year: "2023", title: "The Vision", icon: Lightbulb, description: "The idea was born from a simple observation: while the world's demand for AI compute was exploding, Africa remained underserved." },
    { year: "Early 2024", title: "Building the Team", icon: Users, description: "We assembled a world-class team with deep expertise in data center infrastructure, AI/ML systems, energy, and African markets." },
    { year: "Mid 2024", title: "Feasibility & Planning", icon: Target, description: "Conducted extensive feasibility studies, evaluated multiple sites across Kenya, and developed detailed engineering and financial plans." },
    { year: "Late 2024", title: "Seed Funding", icon: TrendingUp, description: "Successfully closed our seed funding round with strategic investors from Asia, Europe, and Africa." },
    { year: "2025", title: "Development Phase", icon: Rocket, description: "Entering our active development phase with construction set to begin." },
    { year: "2026", title: "Launch & Scale", icon: Zap, description: "Target launch of our 1MW Phase 1 facility, with immediate plans to scale to 5MW." },
  ];

  const whyKenya = [
    { title: "Renewable Energy", description: "Kenya generates over 90% of its electricity from renewable sources, primarily geothermal." },
    { title: "Strategic Location", description: "Positioned at the crossroads of Africa, Middle East, and Asia with low-latency routes." },
    { title: "Business Environment", description: "Pro-business government policies, special economic zones, and a track record of hosting major tech investments." },
    { title: "Growing Talent", description: "Strong engineering universities, growing tech ecosystem, and a young, educated workforce." },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/about`} className="hover:text-foreground">About</Link>
        <span>/</span>
        <span className="text-foreground">Our Story</span>
      </nav>

      <div className="mb-16 text-center">
        <Badge className="mb-4">Our Story</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">From Vision to Reality</h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to transform Africa into a global hub for AI compute.
        </p>
      </div>

      <Card className="mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-8 md:p-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
            "The future of AI shouldn't be limited by geography."
          </blockquote>
          <p className="mt-6 text-muted-foreground">— Founding Team</p>
        </CardContent>
      </Card>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative md:pl-20">
                <div className="absolute left-6 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background hidden md:block" />
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary">{item.year}</Badge>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-4">Why Kenya?</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Kenya offers a unique combination of advantages for AI infrastructure.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {whyKenya.map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Key Achievements</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$22.5M</div>
              <p className="text-muted-foreground">Project CAPEX</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1 MW</div>
              <p className="text-muted-foreground">Phase 1 Capacity</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Strategic Partners</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-16 border-secondary/20 bg-secondary/5">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="hidden md:block rounded-full bg-secondary/10 p-4">
              <Globe className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
              <p className="text-muted-foreground leading-relaxed">
                As we move from planning to execution, we're focused on delivering
                our Phase 1 facility on time and on budget. Our long-term vision includes
                multiple facilities across East Africa, serving as the compute backbone
                for Africa's AI future.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Be Part of Our Story</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're an investor, partner, or customer, we'd love to explore how we can work together.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href={`/${locale}/about/team`} className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted">
            Meet Our Team
          </Link>
          <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
