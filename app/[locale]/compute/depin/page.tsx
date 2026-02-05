import { getTranslations } from "next-intl/server";
import { DePINEstimator } from "@/components/calculators/DePINEstimator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Coins, Globe, Zap, Shield, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compute" });

  return {
    title: `DePIN Integration | Kenya AI Compute`,
    description: "Join leading decentralized compute networks with enterprise-grade infrastructure in Kenya",
  };
}

export default async function DePINPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const networks = [
    {
      name: "Render Network",
      description: "Decentralized GPU rendering for 3D content and AI",
      logo: "/images/depin/render.svg",
      status: "Active",
      apy: "25-40%",
    },
    {
      name: "Akash Network",
      description: "Open-source cloud computing marketplace",
      logo: "/images/depin/akash.svg",
      status: "Active",
      apy: "20-35%",
    },
    {
      name: "io.net",
      description: "Decentralized AI compute network",
      logo: "/images/depin/ionet.svg",
      status: "Coming Soon",
      apy: "30-50%",
    },
    {
      name: "Gensyn",
      description: "Decentralized machine learning training",
      logo: "/images/depin/gensyn.svg",
      status: "Coming Soon",
      apy: "35-55%",
    },
    {
      name: "Bittensor",
      description: "Decentralized AI network",
      logo: "/images/depin/bittensor.svg",
      status: "Planned",
      apy: "40-60%",
    },
  ];

  const benefits = [
    {
      icon: Coins,
      title: "Dual Revenue Streams",
      description: "Earn from both compute services and token rewards",
    },
    {
      icon: Globe,
      title: "Network Diversity",
      description: "Access multiple DePIN networks for risk distribution",
    },
    {
      icon: Zap,
      title: "Low Energy Costs",
      description: "Maximize profitability with $0.04/kWh power",
    },
    {
      icon: Shield,
      title: "Enterprise Hardware",
      description: "Top-tier GPUs optimized for each network",
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Real-time dashboards and earnings tracking",
    },
    {
      icon: Network,
      title: "Managed Services",
      description: "Full node operation and maintenance included",
    },
  ];

  return (
    <div className="container py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href={`/${locale}/compute`} className="hover:text-foreground">
          Compute
        </Link>
        <span>/</span>
        <span className="text-foreground">DePIN Integration</span>
      </nav>

      {/* Header */}
      <div className="mb-12 text-center">
        <Badge className="mb-4">Decentralized Infrastructure</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          DePIN Network Integration
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Participate in the decentralized compute revolution. Our infrastructure supports
          leading DePIN networks, enabling you to earn rewards while contributing to
          distributed AI infrastructure.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <CardContent className="p-6">
              <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Supported Networks */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Supported Networks</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {networks.map((network) => (
            <Card key={network.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                    <Network className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <Badge
                    variant={
                      network.status === "Active"
                        ? "default"
                        : network.status === "Coming Soon"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {network.status}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{network.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {network.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Est. APY</span>
                  <span className="font-semibold text-primary">{network.apy}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Earnings Estimator */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Earnings Estimator</h2>
        <DePINEstimator locale={locale} />
      </div>

      {/* How It Works */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Networks</h3>
              <p className="text-sm text-muted-foreground">
                Select which DePIN networks you want to participate in
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <h3 className="font-semibold mb-2">Deploy Hardware</h3>
              <p className="text-sm text-muted-foreground">
                We configure and deploy optimized hardware for your selection
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <h3 className="font-semibold mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Start earning compute fees and token rewards automatically
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                4
              </div>
              <h3 className="font-semibold mb-2">Track & Optimize</h3>
              <p className="text-sm text-muted-foreground">
                Monitor performance and optimize your allocation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Ready to participate in decentralized compute?
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href={`/${locale}/compute`}
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            View All Compute Options
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start DePIN Integration
          </Link>
        </div>
      </div>
    </div>
  );
}
