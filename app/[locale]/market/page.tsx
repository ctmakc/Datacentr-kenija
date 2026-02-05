import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Cpu, DollarSign, BarChart3, Target, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Market Overview | Kenya AI Compute",
    description: "AI compute market analysis and Kenya's positioning in the global infrastructure landscape",
  };
}

export default async function MarketPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const marketStats = [
    { label: "Global AI Compute Market", value: "$65B", growth: "+35% YoY", icon: Globe },
    { label: "GPU Shortage Gap", value: "40%", growth: "Unmet demand", icon: Cpu },
    { label: "Africa Data Center Growth", value: "+25%", growth: "Annual CAGR", icon: TrendingUp },
    { label: "Kenya Power Cost", value: "$0.04", growth: "/kWh avg", icon: Zap },
  ];

  const marketDrivers = [
    {
      title: "Exploding AI Demand",
      description: "ChatGPT, generative AI, and enterprise ML deployments are driving unprecedented demand for GPU compute. The market is projected to grow 10x by 2030.",
      stat: "10x",
      statLabel: "Growth by 2030",
    },
    {
      title: "Global GPU Shortage",
      description: "Major cloud providers have 6-12 month waitlists for H100 GPUs. Alternative compute sources are desperately needed to meet market demand.",
      stat: "6-12mo",
      statLabel: "Cloud GPU Waitlists",
    },
    {
      title: "DePIN Revolution",
      description: "Decentralized physical infrastructure networks are reshaping how compute is provisioned and consumed, creating new revenue opportunities.",
      stat: "$50B+",
      statLabel: "DePIN Market by 2028",
    },
    {
      title: "Sustainability Requirements",
      description: "ESG mandates are pushing enterprises toward green compute. Kenya's 90%+ renewable grid provides a competitive advantage.",
      stat: "90%+",
      statLabel: "Renewable Energy",
    },
  ];

  const kenyaAdvantages = [
    { title: "Renewable Energy", description: "90%+ renewable grid (geothermal, hydro, wind)", icon: Zap },
    { title: "Low Power Costs", description: "$0.04/kWh vs $0.10-0.15 in developed markets", icon: DollarSign },
    { title: "Strategic Location", description: "Gateway to Africa, Middle East, and Asia", icon: Globe },
    { title: "Growing Tech Hub", description: "Silicon Savannah with strong talent pipeline", icon: Users },
    { title: "Government Support", description: "Tech-friendly policies and SEZ incentives", icon: Target },
    { title: "Connectivity", description: "Multiple submarine cables (SEACOM, TEAMS, EASSy)", icon: BarChart3 },
  ];

  const competitors = [
    { region: "US/Europe Cloud", power: "$0.10-0.15/kWh", availability: "6-12mo wait", latency: "200ms+ to Africa" },
    { region: "Asia Datacenters", power: "$0.08-0.12/kWh", availability: "3-6mo wait", latency: "150ms+ to Africa" },
    { region: "Kenya AI Compute", power: "$0.04/kWh", availability: "Immediate", latency: "<50ms Africa" },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">Market</span>
      </nav>

      {/* Header */}
      <div className="mb-16 text-center">
        <Badge className="mb-4">Market Analysis</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          The AI Compute Opportunity
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Understanding why Kenya is uniquely positioned to capture a share of the rapidly growing global AI infrastructure market.
        </p>
      </div>

      {/* Market Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {marketStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="h-5 w-5 text-primary" />
                <Badge variant="secondary">{stat.growth}</Badge>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Drivers */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Market Drivers</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {marketDrivers.map((driver) => (
            <Card key={driver.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{driver.title}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{driver.stat}</p>
                    <p className="text-xs text-muted-foreground">{driver.statLabel}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{driver.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Kenya Advantages */}
      <Card className="mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Kenya?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kenyaAdvantages.map((advantage) => (
              <div key={advantage.title} className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                  <advantage.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Comparison */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Competitive Positioning</h2>
        <Card>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-4 font-medium">Region</th>
                    <th className="pb-4 font-medium">Power Cost</th>
                    <th className="pb-4 font-medium">GPU Availability</th>
                    <th className="pb-4 font-medium">Latency to Africa</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {competitors.map((comp) => (
                    <tr key={comp.region} className={comp.region.includes("Kenya") ? "bg-primary/5" : ""}>
                      <td className="py-4 font-medium">{comp.region}</td>
                      <td className="py-4">{comp.power}</td>
                      <td className="py-4">{comp.availability}</td>
                      <td className="py-4">{comp.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Target Markets */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Target Customer Segments</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <Badge className="mb-4">Primary</Badge>
              <h3 className="text-lg font-semibold mb-2">AI/ML Companies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Startups and enterprises needing GPU compute for training and inference workloads.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Model training & fine-tuning</li>
                <li>• Inference API hosting</li>
                <li>• Research compute</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-4">Secondary</Badge>
              <h3 className="text-lg font-semibold mb-2">DePIN Networks</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Decentralized networks seeking reliable, low-cost compute providers.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Render Network</li>
                <li>• Akash Network</li>
                <li>• io.net, Gensyn</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Badge variant="outline" className="mb-4">Tertiary</Badge>
              <h3 className="text-lg font-semibold mb-2">African Enterprises</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Regional businesses adopting AI for operations and customer engagement.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Financial services</li>
                <li>• Telecommunications</li>
                <li>• Healthcare & agriculture</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Capture This Opportunity</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join us in building Africa's AI infrastructure and benefit from the explosive growth in AI compute demand.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href={`/${locale}/investors`} className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium hover:bg-muted">
              Investment Opportunity
            </Link>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
