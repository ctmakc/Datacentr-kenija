import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, Users, Zap, Globe, Heart, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Careers | Kenya AI Compute",
    description: "Join our team and help build Africa's AI infrastructure future",
  };
}

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const values = [
    { icon: Zap, title: "Innovation First", description: "We push boundaries and embrace cutting-edge technology" },
    { icon: Globe, title: "Global Impact", description: "Building infrastructure that serves the world" },
    { icon: Users, title: "Team Excellence", description: "Diverse perspectives driving exceptional results" },
    { icon: Heart, title: "Community Focus", description: "Creating opportunities for local talent and partners" },
  ];

  const benefits = [
    "Competitive salary and equity participation",
    "Remote-first with flexible working hours",
    "Health insurance and wellness programs",
    "Professional development budget",
    "Annual team retreats",
    "Latest equipment and tools",
  ];

  const openings = [
    {
      title: "Senior Data Center Engineer",
      department: "Operations",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Design and manage our state-of-the-art GPU compute facility.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain infrastructure automation and monitoring systems.",
    },
    {
      title: "Business Development Manager - China",
      department: "Business",
      location: "Remote / China",
      type: "Full-time",
      description: "Drive partnerships and customer acquisition in the Chinese market.",
    },
    {
      title: "Electrical Engineer",
      department: "Operations",
      location: "Naivasha, Kenya",
      type: "Full-time",
      description: "Oversee power systems including solar and battery integration.",
    },
    {
      title: "DePIN Integration Specialist",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage integrations with Render, Akash, io.net and other networks.",
    },
    {
      title: "Financial Analyst",
      department: "Finance",
      location: "Remote",
      type: "Full-time",
      description: "Support financial modeling, investor relations, and reporting.",
    },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">Careers</span>
      </nav>

      {/* Header */}
      <div className="mb-16 text-center">
        <Badge className="mb-4">Join Our Team</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Build the Future of AI Infrastructure
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Join a passionate team working to bring world-class AI compute infrastructure to Africa.
          We're looking for talented individuals who want to make a global impact.
        </p>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title}>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <Card className="mb-16 border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
              <p className="text-muted-foreground mb-6">
                We offer competitive compensation and a supportive environment where you can do your best work.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg border bg-background p-6">
                <div className="text-3xl font-bold text-primary mb-1">30+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <div className="text-3xl font-bold text-primary mb-1">8</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <div className="text-3xl font-bold text-primary mb-1">60%</div>
                <p className="text-sm text-muted-foreground">Remote Team</p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <div className="text-3xl font-bold text-primary mb-1">$22.5M</div>
                <p className="text-sm text-muted-foreground">Project Size</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Open Positions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Open Positions</h2>
        <div className="space-y-4">
          {openings.map((job) => (
            <Card key={job.title} className="group hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <Badge variant="secondary">{job.department}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-medium hover:bg-muted transition-colors shrink-0"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card className="border-secondary/20 bg-secondary/5">
        <CardContent className="p-8 text-center">
          <GraduationCap className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always looking for talented people. Send us your resume and tell us how you can contribute.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-medium text-secondary-foreground hover:bg-secondary/90"
          >
            Send Open Application <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
