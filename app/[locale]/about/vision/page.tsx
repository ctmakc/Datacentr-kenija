import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Heart, Globe, Zap, Users, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title: "Our Vision | Kenya AI Compute",
    description: "Building the future of AI infrastructure in Africa",
  };
}

export default async function VisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pioneering cutting-edge AI infrastructure solutions tailored for emerging markets",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Creating jobs, transferring skills, and empowering local communities",
    },
    {
      icon: Shield,
      title: "Sustainability",
      description: "Committed to renewable energy and environmentally responsible operations",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with investors, customers, and communities",
    },
  ];

  const pillars = [
    {
      icon: Globe,
      title: "Global Access",
      description: "Democratizing AI compute access for developers and businesses worldwide",
      stats: "Serving 50+ countries",
    },
    {
      icon: Zap,
      title: "Energy Innovation",
      description: "Leveraging Africa's renewable energy potential for sustainable compute",
      stats: "$0.04/kWh power cost",
    },
    {
      icon: TrendingUp,
      title: "Economic Growth",
      description: "Contributing to Kenya's digital economy and tech ecosystem",
      stats: "100+ direct jobs",
    },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/about`} className="hover:text-foreground">About</Link>
        <span>/</span>
        <span className="text-foreground">Vision</span>
      </nav>

      <div className="mb-16 text-center">
        <Badge className="mb-4">Our Vision</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Building Africa's AI Future
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          We envision a world where geographical location doesn't limit access to
          cutting-edge AI infrastructure. Kenya is our launchpad for transforming
          how the world thinks about emerging market compute.
        </p>
      </div>

      <Card className="mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-8 md:p-12">
          <div className="flex items-start gap-6">
            <div className="hidden md:block rounded-full bg-primary/10 p-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To establish Kenya as a global hub for AI compute infrastructure by building
                world-class data centers that leverage Africa's strategic advantages—abundant
                renewable energy, growing talent pool, and favorable timezone for global markets.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Strategic Pillars</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 rounded-full bg-primary/10 p-4 w-fit">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground mb-4">{pillar.description}</p>
                <Badge variant="secondary">{pillar.stats}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title}>
              <CardContent className="p-6">
                <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Be part of the transformation. Whether as an investor, partner, or customer,
          there's a role for you in Africa's AI future.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href={`/${locale}/about/team`}
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            Meet Our Team
          </Link>
          <Link
            href={`/${locale}/investors`}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Investment Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
}
