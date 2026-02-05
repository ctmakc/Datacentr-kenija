"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  HardDrive,
  Network,
  Shield,
  Thermometer,
  Zap,
  Server,
  Settings,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DatacenterPageProps {
  params: { locale: string };
}

export default function DatacenterPage({ params: { locale } }: DatacenterPageProps) {
  const t = useTranslations("datacenter");

  const specs = [
    { label: "Phase 2 IT Load", value: "1 MW" },
    { label: "Target PUE", value: "1.3-1.5" },
    { label: "Tier Level", value: "II+" },
    { label: "Uptime Target", value: "99.9%" },
    { label: "Max Rack Density", value: "40 kW" },
    { label: "Network", value: "100G+" },
  ];

  const architectureSections = [
    {
      icon: Zap,
      title: t("architecture.power.title"),
      description: "Redundant power distribution with UPS and generator backup",
      items: [
        t("architecture.power.ups"),
        t("architecture.power.pdu"),
        t("architecture.power.generator"),
        t("architecture.power.bms"),
      ],
      href: `/${locale}/datacenter/architecture#power`,
    },
    {
      icon: Thermometer,
      title: t("architecture.cooling.title"),
      description: "Efficient cooling with free-air and liquid cooling options",
      items: [
        t("architecture.cooling.precision"),
        t("architecture.cooling.containment"),
        t("architecture.cooling.liquid"),
        t("architecture.cooling.freeCooling"),
      ],
      href: `/${locale}/datacenter/architecture#cooling`,
    },
    {
      icon: Network,
      title: t("architecture.network.title"),
      description: "High-speed networking with carrier-neutral connectivity",
      items: [
        t("architecture.network.spineLeaf"),
        t("architecture.network.carriers"),
        t("architecture.network.meetMe"),
        t("architecture.network.bandwidth"),
      ],
      href: `/${locale}/datacenter/architecture#network`,
    },
    {
      icon: Shield,
      title: t("architecture.security.title"),
      description: "Comprehensive physical and cyber security measures",
      items: [
        t("architecture.security.perimeter"),
        t("architecture.security.access"),
        t("architecture.security.cctv"),
        t("architecture.security.ddos"),
      ],
      href: `/${locale}/datacenter/architecture#security`,
    },
  ];

  const equipmentCategories = [
    {
      icon: Cpu,
      title: t("equipment.compute.title"),
      items: [
        { name: t("equipment.compute.nvidia"), spec: "A100/H100 GPUs" },
        { name: t("equipment.compute.amd"), spec: "MI250/MI300 GPUs" },
        { name: t("equipment.compute.epyc"), spec: "High-core CPUs" },
        { name: t("equipment.compute.xeon"), spec: "Enterprise CPUs" },
      ],
    },
    {
      icon: HardDrive,
      title: t("equipment.storage.title"),
      items: [
        { name: t("equipment.storage.nvme"), spec: "High IOPS" },
        { name: t("equipment.storage.hdd"), spec: "Bulk storage" },
        { name: t("equipment.storage.object"), spec: "S3-compatible" },
      ],
    },
    {
      icon: Network,
      title: t("equipment.networking.title"),
      items: [
        { name: t("equipment.networking.switches"), spec: "Enterprise grade" },
        { name: t("equipment.networking.speed"), spec: "Up to 400G" },
        { name: t("equipment.networking.sdn"), spec: "Flexible control" },
      ],
    },
  ];

  const operationsSections = [
    {
      icon: Server,
      title: t("operations.noc.title"),
      description: t("operations.noc.monitoring"),
      href: `/${locale}/datacenter/operations#noc`,
    },
    {
      icon: Settings,
      title: t("operations.maintenance.title"),
      description: t("operations.maintenance.preventive"),
      href: `/${locale}/datacenter/operations#maintenance`,
    },
    {
      icon: Shield,
      title: t("operations.dr.title"),
      description: t("operations.dr.bcp"),
      href: `/${locale}/datacenter/operations#dr`,
    },
  ];

  const tierFeatures = {
    "tier2": [
      "Single path for power and cooling",
      "Redundant capacity components",
      "99.741% uptime (22 hours/year)",
      "Suitable for Phase 1",
    ],
    "tier3": [
      "Multiple paths for power and cooling",
      "N+1 fault tolerant",
      "99.982% uptime (1.6 hours/year)",
      "Concurrent maintainability",
    ],
  };

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
              AI-Optimized Infrastructure
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("overview.philosophy")}. Modular, scalable, and designed for AI workloads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary">{spec.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">{t("architecture.title")}</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Purpose-built infrastructure for demanding AI workloads
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {architectureSections.map((section, index) => (
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
                        View Details
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

      {/* Tier Levels */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">{t("specifications.tier.title")}</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Progressive tier certification aligned with project phases
          </p>

          <Tabs defaultValue="tier2" className="mt-10">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="tier2">Tier II (Phase 1)</TabsTrigger>
                <TabsTrigger value="tier3">Tier III Elements (Phase 2)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tier2" className="mt-6">
              <Card className="mx-auto max-w-2xl">
                <CardHeader>
                  <CardTitle>{t("specifications.tier.baseline")}</CardTitle>
                  <CardDescription>Phase 1 target certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tierFeatures["tier2"].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tier3" className="mt-6">
              <Card className="mx-auto max-w-2xl">
                <CardHeader>
                  <CardTitle>{t("specifications.tier.elements")}</CardTitle>
                  <CardDescription>Phase 2 enhancement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tierFeatures["tier3"].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">{t("equipment.title")}</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Enterprise-grade hardware for AI and high-performance computing
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {equipmentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <category.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="mt-4">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div key={item.name} className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="text-muted-foreground">{item.spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href={`/${locale}/datacenter/equipment`}>
                View Full Equipment List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">{t("operations.title")}</h2>
          <p className="mt-2 text-center text-muted-foreground">
            24/7 professional operations and support
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {operationsSections.map((section, index) => (
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

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Interested in Our Infrastructure?</h2>
            <p className="mt-4 text-muted-foreground">
              Explore compute options or contact us for custom solutions
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={`/${locale}/compute`}>
                  Explore Compute Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/contact`}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
