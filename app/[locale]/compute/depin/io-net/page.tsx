import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Zap, Globe, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "io.net | Kenya AI Compute",
    description: "Join io.net decentralized AI compute network",
  };
}

export default async function IoNetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const specs = [
    { label: "Network Focus", value: "AI/ML Compute" },
    { label: "Est. Monthly Revenue", value: "$1,000-2,000/GPU" },
    { label: "Network Token", value: "IO" },
    { label: "Status", value: "Coming Soon" },
  ];

  const features = [
    "Decentralized GPU clusters for AI training",
    "ML inference at scale",
    "Ray and PyTorch integration",
    "Enterprise-grade security",
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
        <span className="text-foreground">io.net</span>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <Network className="h-8 w-8 text-white" />
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">Coming Soon</Badge>
            <h1 className="text-4xl font-bold">io.net</h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          io.net aggregates underutilized GPU resources to create the world's largest decentralized AI compute network. Optimized for machine learning workloads at scale.
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

      <Card className="mb-12">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-secondary/20 bg-secondary/5">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-secondary shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Integration Coming Soon</h2>
              <p className="text-muted-foreground mb-4">
                We're working on integrating io.net into our infrastructure. Register your interest to be notified when we launch.
              </p>
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-medium text-secondary-foreground hover:bg-secondary/90">
                Register Interest <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
