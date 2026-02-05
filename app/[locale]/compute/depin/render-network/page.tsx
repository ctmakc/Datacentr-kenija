import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Globe, DollarSign, Shield, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Render Network | Kenya AI Compute",
    description: "Participate in Render Network with enterprise-grade GPU infrastructure",
  };
}

export default async function RenderNetworkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const specs = [
    { label: "Supported GPUs", value: "NVIDIA H100, A100, RTX 4090" },
    { label: "Est. Monthly Revenue", value: "$800-1,500/GPU" },
    { label: "Network Token", value: "RNDR" },
    { label: "Payout Frequency", value: "Weekly" },
  ];

  const requirements = [
    "NVIDIA GPU with 8GB+ VRAM",
    "Stable internet connection (100+ Mbps)",
    "24/7 uptime capability",
    "Linux or Windows OS",
  ];

  const useCases = [
    { title: "3D Rendering", description: "High-quality rendering for film, gaming, and architectural visualization" },
    { title: "AI/ML Training", description: "Deep learning model training and fine-tuning workloads" },
    { title: "Video Processing", description: "Transcoding, effects rendering, and post-production" },
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
        <span className="text-foreground">Render Network</span>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Cpu className="h-8 w-8 text-white" />
          </div>
          <div>
            <Badge className="mb-2">Active Network</Badge>
            <h1 className="text-4xl font-bold">Render Network</h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Render Network is a decentralized GPU rendering platform that connects creators needing rendering power with GPU providers. Join one of the leading DePIN networks with our managed infrastructure.
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

      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Node Requirements
            </h2>
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Revenue Potential
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">H100 GPU</span>
                <span className="font-bold text-green-500">$1,200-1,500/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">A100 GPU</span>
                <span className="font-bold text-green-500">$900-1,200/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">RTX 4090</span>
                <span className="font-bold text-green-500">$500-800/mo</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Start Earning with Render Network</h2>
              <p className="text-muted-foreground">Deploy your GPUs on Render Network with our managed infrastructure.</p>
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
