"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Zap,
  Layers,
  Globe,
  Thermometer,
  Cable,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProjectPageProps {
  params: { locale: string };
}

export default function ProjectPage({ params: { locale } }: ProjectPageProps) {
  const t = useTranslations("project");

  const keyFacts = [
    { label: "Total Investment", value: "$20-25M" },
    { label: "Phase 2 Capacity", value: "1 MW" },
    { label: "Energy Cost", value: "$0.04/kWh" },
    { label: "Target PUE", value: "1.3-1.5" },
    { label: "Payback Period", value: "5-7 years" },
    { label: "Target EBITDA", value: "35-50%" },
  ];

  const sections = [
    {
      icon: MapPin,
      title: "Location",
      description: t("location.kenya.title"),
      href: `/${locale}/project/location`,
      items: [
        t("location.kenya.stability"),
        t("location.kenya.techHub"),
        t("location.kenya.connectivity"),
        t("location.kenya.government"),
      ],
    },
    {
      icon: Zap,
      title: t("energy.title"),
      description: "Own power generation at $0.04/kWh",
      href: `/${locale}/project/energy`,
      items: [
        t("energy.generation.type"),
        t("energy.generation.redundancy"),
        t("energy.efficiency.pue"),
        t("energy.sustainability.title"),
      ],
    },
    {
      icon: Layers,
      title: t("phases.title"),
      description: "Phased development from 300kW to 3MW",
      href: `/${locale}/project/phases`,
      items: [
        "Phase 1: 300kW (2025)",
        "Phase 2: 1MW (2026)",
        "Phase 3: 3MW (2028+)",
        "Modular expansion model",
      ],
    },
  ];

  const phases = [
    {
      title: t("phases.phase1.title"),
      capacity: t("phases.phase1.capacity"),
      timeline: t("phases.phase1.timeline"),
      capex: t("phases.phase1.capex"),
      status: "Planning",
      progress: 25,
      details: [
        t("phases.phase1.config"),
        t("phases.phase1.mix"),
        t("phases.phase1.tier"),
        t("phases.phase1.revenue"),
      ],
    },
    {
      title: t("phases.phase2.title"),
      capacity: t("phases.phase2.capacity"),
      timeline: t("phases.phase2.timeline"),
      capex: t("phases.phase2.capex"),
      status: "Planned",
      progress: 0,
      details: [
        t("phases.phase2.config"),
        t("phases.phase2.mix"),
        t("phases.phase2.tier"),
        t("phases.phase2.revenue"),
      ],
    },
    {
      title: t("phases.phase3.title"),
      capacity: t("phases.phase3.capacity"),
      timeline: t("phases.phase3.timeline"),
      capex: t("phases.phase3.capex"),
      status: "Vision",
      progress: 0,
      details: [t("phases.phase3.description")],
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Energy Cost Advantage",
      description: "60-70% lower energy costs compared to grid-powered datacenters",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Low latency connectivity to Europe, Middle East, and Asia via submarine cables",
    },
    {
      icon: Thermometer,
      title: "Climate Benefits",
      description: "Moderate temperatures enable free cooling and lower PUE",
    },
    {
      icon: Cable,
      title: "Fiber Connectivity",
      description: "Multiple submarine cables provide redundant international bandwidth",
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
              AI Infrastructure Project
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("overview.summary")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {keyFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary">{fact.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">{t("overview.advantages")}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <advantage.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="mt-4">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <section.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="mt-4">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="link"
                      className="mt-4 p-0 group-hover:translate-x-1 transition-transform"
                      asChild
                    >
                      <Link href={section.href}>
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">{t("phases.title")}</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Phased development approach minimizes risk and enables continuous learning
          </p>

          <div className="mt-10 space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle>{phase.title}</CardTitle>
                          <Badge
                            variant={
                              phase.status === "Planning"
                                ? "default"
                                : phase.status === "Planned"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {phase.status}
                          </Badge>
                        </div>
                        <CardDescription className="mt-1">
                          {phase.capacity} | {phase.timeline} | {phase.capex}
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/${locale}/project/phases/${phase.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Details
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={phase.progress} className="mb-4" />
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {phase.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Want to Learn More?</h2>
            <p className="mt-4 text-muted-foreground">
              Explore our detailed project documentation or contact us for more information
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={`/${locale}/investors`}>
                  Investment Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/datacenter`}>
                  Datacenter Specs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
