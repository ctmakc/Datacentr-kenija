import { PricingCalculator } from "@/components/calculators/PricingCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Server, Zap, Shield, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: "Compute Pricing | Kenya AI Compute",
    description: "Transparent, competitive pricing for GPU and CPU compute resources",
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const advantages = [
    { icon: Zap, title: "Low Energy Costs", description: "$0.04/kWh enables 40-60% lower pricing" },
    { icon: Shield, title: "Enterprise SLA", description: "99.9% uptime guarantee" },
    { icon: Clock, title: "Flexible Terms", description: "Hourly to annual commitments" },
    { icon: Server, title: "Dedicated Resources", description: "No noisy neighbors" },
  ];

  const tiers = [
    { name: "Starter", description: "For testing and development", discount: "0%", commitment: "Hourly" },
    { name: "Growth", description: "For growing workloads", discount: "15%", commitment: "Monthly" },
    { name: "Scale", description: "For production workloads", discount: "25%", commitment: "Quarterly" },
    { name: "Enterprise", description: "For large deployments", discount: "40%", commitment: "Annual" },
  ];

  const included = [
    "High-speed network connectivity",
    "24/7 technical support",
    "Remote management access",
    "Basic monitoring & alerts",
    "99.9% uptime SLA",
    "Regular hardware maintenance",
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/compute`} className="hover:text-foreground">Compute</Link>
        <span>/</span>
        <span className="text-foreground">Pricing</span>
      </nav>

      <div className="mb-12 text-center">
        <Badge className="mb-4">Pricing</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Competitive rates powered by Africa's low energy costs. 
          Calculate your savings compared to major cloud providers.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {advantages.map((item) => (
          <Card key={item.title}>
            <CardContent className="p-6">
              <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Pricing Calculator</h2>
        <PricingCalculator locale={locale} />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Commitment Tiers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <Card key={tier.name} className={index === 3 ? "border-primary" : ""}>
              <CardContent className="p-6">
                {index === 3 && <Badge className="mb-2">Best Value</Badge>}
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="font-semibold text-primary">{tier.discount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Commitment</span>
                    <span className="font-medium">{tier.commitment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Ready to get started with cost-effective AI compute?
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href={`/${locale}/compute`} className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted">
            View All Options
          </Link>
          <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
