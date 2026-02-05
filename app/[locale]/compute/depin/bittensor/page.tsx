import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Boxes, Zap, CheckCircle2, ArrowRight, Clock, Coins } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Bittensor | Kenya AI Compute",
    description: "Join Bittensor decentralized AI network",
  };
}

export default async function BittensorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const specs = [
    { label: "Network Type", value: "Decentralized AI" },
    { label: "Est. Monthly Revenue", value: "$1,500-3,000/node" },
    { label: "Network Token", value: "TAO" },
    { label: "Status", value: "Planned" },
  ];

  const subnets = [
    { name: "Text Generation", description: "LLM inference and fine-tuning" },
    { name: "Image Generation", description: "Stable Diffusion and similar models" },
    { name: "Data Scraping", description: "Web data collection and processing" },
    { name: "Storage", description: "Decentralized file storage" },
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
        <span className="text-foreground">Bittensor</span>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <Boxes className="h-8 w-8 text-white" />
          </div>
          <div>
            <Badge variant="outline" className="mb-2">Planned</Badge>
            <h1 className="text-4xl font-bold">Bittensor</h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Bittensor is a decentralized network for AI models. Miners provide compute and intelligence to various subnets, earning TAO tokens for valuable contributions.
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
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Coins className="h-6 w-6" />
          Popular Subnets
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subnets.map((subnet) => (
            <Card key={subnet.name}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{subnet.name}</h3>
                <p className="text-sm text-muted-foreground">{subnet.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-muted bg-muted/20">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-muted-foreground shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Integration Planned</h2>
              <p className="text-muted-foreground mb-4">
                Bittensor integration is on our roadmap. Register to stay updated on our progress.
              </p>
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium hover:bg-muted">
                Register Interest <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
