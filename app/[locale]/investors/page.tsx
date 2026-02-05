"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  DollarSign,
  BarChart3,
  FileText,
  Calendar,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface InvestorsPageProps {
  params: { locale: string };
}

export default function InvestorsPage({ params: { locale } }: InvestorsPageProps) {
  const t = useTranslations("investors");

  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "35-50% EBITDA Margins",
      description: "Vertically integrated model with energy cost advantage",
    },
    {
      icon: DollarSign,
      title: "3-5x Target Returns",
      description: "5-7 year investment horizon with multiple exit options",
    },
    {
      icon: Shield,
      title: "Infrastructure Asset",
      description: "Tangible asset with long-term value appreciation",
    },
    {
      icon: BarChart3,
      title: "DePIN Diversification",
      description: "Multiple revenue streams from decentralized networks",
    },
  ];

  const keyMetrics = [
    { label: "Total CAPEX", value: "$20-25M" },
    { label: "Phase 1 Investment", value: "$6-8M" },
    { label: "Target IRR", value: "25-35%" },
    { label: "Payback Period", value: "5-7 years" },
    { label: "EBITDA Margin", value: "35-50%" },
    { label: "Energy Cost", value: "$0.04/kWh" },
  ];

  const revenueProjections = [
    { year: "Year 1", revenue: "$2-3M", phase: "Phase 1" },
    { year: "Year 2", revenue: "$5-8M", phase: "Phase 1-2" },
    { year: "Year 3", revenue: "$8-12M", phase: "Phase 2" },
    { year: "Year 4", revenue: "$10-15M", phase: "Phase 2-3" },
    { year: "Year 5", revenue: "$12-18M", phase: "Phase 3" },
  ];

  const investmentThesis = [
    t("overview.aiSupercycle"),
    t("overview.energyArbitrage"),
    t("overview.africaTransformation"),
    t("overview.depinEffects"),
  ];

  const sections = [
    {
      title: t("opportunity.title"),
      description: "Market analysis, competitive advantages, and timing",
      href: `/${locale}/investors/opportunity`,
      icon: TrendingUp,
    },
    {
      title: t("financials.title"),
      description: "CAPEX, OPEX, revenue projections, and scenarios",
      href: `/${locale}/investors/financials`,
      icon: BarChart3,
    },
    {
      title: t("structure.title"),
      description: "Legal structure, equity distribution, and governance",
      href: `/${locale}/investors/structure`,
      icon: FileText,
    },
    {
      title: t("risks.title"),
      description: "Risk assessment and mitigation strategies",
      href: `/${locale}/investors/risks`,
      icon: Shield,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="secondary" className="mb-4">
              Investment Opportunity
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("overview.title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Infrastructure investment in AI compute with 35-50% EBITDA margins,
              powered by energy arbitrage and DePIN network effects.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={`/${locale}/investors/contact`}>
                  <FileText className="mr-2 h-4 w-4" />
                  {t("overview.requestDeck")}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/investors/financials#calculator`}>
                  ROI Calculator
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {investmentHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">{t("overview.thesis")}</h2>
              <p className="mt-4 text-muted-foreground">
                Our investment opportunity is built on four converging megatrends that create
                a unique window for infrastructure investment in AI compute.
              </p>
              <div className="mt-8 space-y-4">
                {investmentThesis.map((thesis, index) => (
                  <motion.div
                    key={thesis}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">{thesis}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href={`/${locale}/investors/opportunity`}>
                    Read Full Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Key Investment Metrics</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{t("financials.revenue.title")}</h2>
            <p className="mt-2 text-muted-foreground">Base case scenario with 70% utilization</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {revenueProjections.map((proj, index) => (
              <motion.div
                key={proj.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardHeader className="pb-2">
                    <CardDescription>{proj.year}</CardDescription>
                    <CardTitle className="text-2xl text-primary">{proj.revenue}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">{proj.phase}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href={`/${locale}/investors/financials#scenarios`}>
                View Scenario Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Detailed Information</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={section.href}>
                  <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <section.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="mt-4 flex items-center justify-between">
                        {section.title}
                        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Learn More?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Request our full investor presentation and financial model.
              Schedule a call with our investor relations team.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href={`/${locale}/investors/contact`}>
                  {t("overview.requestDeck")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href={`/${locale}/investors/contact`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  {t("contact.schedule")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
