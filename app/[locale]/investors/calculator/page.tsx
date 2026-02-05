import { ROICalculator } from "@/components/calculators/ROICalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Shield, Clock, BarChart3, DollarSign } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: "Investment Calculator | Kenya AI Compute",
    description: "Model your investment returns with our interactive ROI calculator",
  };
}

export default async function InvestorCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const investmentHighlights = [
    { icon: TrendingUp, label: "Target IRR", value: "25-35%", description: "Based on base case projections" },
    { icon: Clock, label: "Payback Period", value: "3-4 years", description: "Return of initial investment" },
    { icon: BarChart3, label: "MOIC Target", value: "3-4x", description: "Multiple on invested capital" },
    { icon: DollarSign, label: "Min Investment", value: "$100K", description: "Qualified investors" },
  ];

  const assumptions = [
    { label: "Total CAPEX", value: "$22.5M" },
    { label: "Phase 1 Capacity", value: "1 MW" },
    { label: "Power Cost", value: "$0.04/kWh" },
    { label: "EBITDA Margin", value: "42%" },
    { label: "Utilization Target", value: "70%" },
    { label: "Revenue Growth", value: "25% YoY" },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/investors`} className="hover:text-foreground">Investors</Link>
        <span>/</span>
        <span className="text-foreground">ROI Calculator</span>
      </nav>

      <div className="mb-12 text-center">
        <Badge className="mb-4">Investment Analysis</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          ROI Calculator
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Model your potential returns based on investment amount, scenario, 
          and exit timing. Adjust parameters to see how different assumptions 
          affect your projected returns.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {investmentHighlights.map((item) => (
          <Card key={item.label}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <p className="text-2xl font-bold mb-1">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <ROICalculator locale={locale} />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Model Assumptions
            </h2>
            <div className="space-y-3">
              {assumptions.map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Important Disclaimers
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Projections are for illustrative purposes only</li>
              <li>• Past performance does not guarantee future results</li>
              <li>• Investment involves risk including loss of principal</li>
              <li>• Actual returns may vary based on market conditions</li>
              <li>• This is not investment advice or an offer to sell securities</li>
              <li>• Qualified investors should review full offering materials</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 bg-primary/5 mb-12">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Investing?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a call with our investor relations team to discuss the opportunity
            in detail and receive our full investment materials.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href={`/${locale}/investors`} className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted">
              Investment Overview
            </Link>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Schedule a Call
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
