import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock, Rocket, Building2, Server, Globe, Zap } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title: "Roadmap | Kenya AI Compute",
    description: "Our development roadmap and milestones for building Africa's AI infrastructure",
  };
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      period: "Q1 2024 - Q4 2024",
      status: "completed",
      milestones: [
        { title: "Company formation and team assembly", status: "completed" },
        { title: "Feasibility study and business planning", status: "completed" },
        { title: "Site selection and due diligence", status: "completed" },
        { title: "Initial investor outreach", status: "completed" },
        { title: "Strategic partnerships signed", status: "completed" },
      ],
    },
    {
      phase: "Phase 2",
      title: "Development",
      period: "Q1 2025 - Q2 2025",
      status: "in-progress",
      milestones: [
        { title: "Seed funding closed", status: "completed" },
        { title: "Land acquisition and permits", status: "completed" },
        { title: "Power infrastructure contracts", status: "in-progress" },
        { title: "Equipment procurement initiated", status: "in-progress" },
        { title: "Construction groundbreaking", status: "pending" },
      ],
    },
    {
      phase: "Phase 3",
      title: "Construction",
      period: "Q3 2025 - Q4 2025",
      status: "pending",
      milestones: [
        { title: "Civil works completion", status: "pending" },
        { title: "Power plant deployment", status: "pending" },
        { title: "Cooling system installation", status: "pending" },
        { title: "Network infrastructure", status: "pending" },
        { title: "Initial hardware installation", status: "pending" },
      ],
    },
    {
      phase: "Phase 4",
      title: "Launch",
      period: "Q1 2026 - Q2 2026",
      status: "pending",
      milestones: [
        { title: "Facility commissioning and testing", status: "pending" },
        { title: "First customer onboarding", status: "pending" },
        { title: "DePIN network integrations live", status: "pending" },
        { title: "1MW capacity operational", status: "pending" },
        { title: "24/7 operations established", status: "pending" },
      ],
    },
    {
      phase: "Phase 5",
      title: "Scale",
      period: "Q3 2026 - 2027",
      status: "pending",
      milestones: [
        { title: "Expansion to 2MW capacity", status: "pending" },
        { title: "Additional GPU deployments", status: "pending" },
        { title: "Enterprise customer growth", status: "pending" },
        { title: "Regional market expansion", status: "pending" },
        { title: "Series A funding", status: "pending" },
      ],
    },
    {
      phase: "Phase 6",
      title: "Expansion",
      period: "2028+",
      status: "pending",
      milestones: [
        { title: "Scale to 5MW+ capacity", status: "pending" },
        { title: "Second facility planning", status: "pending" },
        { title: "Pan-African expansion", status: "pending" },
        { title: "Advanced AI services", status: "pending" },
        { title: "IPO preparation", status: "pending" },
      ],
    },
  ];

  const keyMetrics = [
    { label: "Phase 1 Capacity", value: "1 MW", icon: Zap },
    { label: "Target 2027", value: "5 MW", icon: Server },
    { label: "GPU Count (Phase 1)", value: "500+", icon: Building2 },
    { label: "Markets Served", value: "Global", icon: Globe },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-amber-500">In Progress</Badge>;
      default:
        return <Badge variant="outline">Planned</Badge>;
    }
  };

  return (
    <div className="container py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href={`/${locale}/about`} className="hover:text-foreground">
          About
        </Link>
        <span>/</span>
        <span className="text-foreground">Roadmap</span>
      </nav>

      {/* Header */}
      <div className="mb-16 text-center">
        <Badge className="mb-4">Development Timeline</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Project Roadmap
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Our phased approach to building Africa's premier AI compute infrastructure,
          from foundation to continental scale.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {keyMetrics.map((metric) => (
          <Card key={metric.label}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Overview */}
      <Card className="mb-16">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Phase 1: Foundation</span>
              <span className="font-medium text-green-500">100%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: "100%" }} />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span>Phase 2: Development</span>
              <span className="font-medium text-amber-500">60%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: "60%" }} />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span>Phase 3-6: Future Phases</span>
              <span className="font-medium text-muted-foreground">Planned</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-muted-foreground/30" style={{ width: "10%" }} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Roadmap */}
      <div className="space-y-8 mb-16">
        {phases.map((phase) => (
          <Card
            key={phase.phase}
            className={
              phase.status === "in-progress"
                ? "border-amber-500/50 bg-amber-500/5"
                : phase.status === "completed"
                ? "border-green-500/50 bg-green-500/5"
                : ""
            }
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold">{phase.phase}: {phase.title}</h2>
                    {getStatusBadge(phase.status)}
                  </div>
                  <p className="text-muted-foreground">{phase.period}</p>
                </div>
                {phase.status === "in-progress" && (
                  <div className="flex items-center gap-2 text-amber-500">
                    <Rocket className="h-5 w-5" />
                    <span className="font-medium">Currently Active</span>
                  </div>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {phase.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    {getStatusIcon(milestone.status)}
                    <span
                      className={
                        milestone.status === "completed"
                          ? "text-muted-foreground line-through"
                          : ""
                      }
                    >
                      {milestone.title}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Next Milestones */}
      <Card className="mb-16 border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <h2 className="text-xl font-bold text-center mb-6">Upcoming Key Milestones</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Q2 2025</div>
              <p className="font-medium">Construction Begins</p>
              <p className="text-sm text-muted-foreground">Ground breaking ceremony</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Q4 2025</div>
              <p className="font-medium">Facility Complete</p>
              <p className="text-sm text-muted-foreground">Building ready for equipment</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Q1 2026</div>
              <p className="font-medium">First Customers Live</p>
              <p className="text-sm text-muted-foreground">Commercial operations begin</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Follow our progress and be the first to know about major milestones.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href={`/${locale}/about/story`}
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            Read Our Story
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
