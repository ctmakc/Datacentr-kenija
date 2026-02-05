import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Zap, Globe, DollarSign, Shield, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Akash Network | Kenya AI Compute",
    description: "Join the decentralized cloud marketplace with Akash Network",
  };
}

export default async function AkashNetworkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const specs = [
    { label: "Network Type", value: "Decentralized Cloud" },
    { label: "Est. Monthly Revenue", value: "$600-1,200/node" },
    { label: "Network Token", value: "AKT" },
    { label: "Provider Status", value: "Active" },
  ];

  const features = [
    { title: "GPU Compute", description: "Provide GPU resources for AI/ML workloads" },
    { title: "CPU Compute", description: "General purpose compute for various applications" },
    { title: "Storage", description: "Persistent storage for deployed applications" },
    { title: "IP Leasing", description: "Dedicated IP addresses for deployments" },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/compute`} className="hover:text-foreground">Compute</Link>
        <span>/</span>
        <Link href={`/${locale}/compute/depin`} className="hover:text-foreground">DePIN</Link>
        <span>/</span>
        <span className="text-foreground">Akash Network</span>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
            <Cloud className="h-8 w-8 text-white" />
          </div>
          <div>
            <Badge className="mb-2">Active Network</Badge>
            <h1 className="text-4xl font-bold">Akash Network</h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Akash Network is an open-source, decentralized cloud computing marketplace. Become a provider and earn AKT tokens by offering compute resources to developers worldwide.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {specs.map((spec) => (
          <Card key={spec.label}>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
              <p className="text-xl font-bold">{spec.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Provider Capabilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mb-12">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Why Akash on Kenya AI Compute?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Low Power Costs</h3>
                <p className="text-sm text-muted-foreground">$0.04/kWh maximizes profitability</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Strategic Location</h3>
                <p className="text-sm text-muted-foreground">Low latency to Africa, EU, Asia</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Managed Operations</h3>
                <p className="text-sm text-muted-foreground">24/7 monitoring and maintenance</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Become an Akash Provider</h2>
              <p className="text-muted-foreground">Join the decentralized cloud revolution with managed infrastructure.</p>
            </div>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 shrink-0">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
