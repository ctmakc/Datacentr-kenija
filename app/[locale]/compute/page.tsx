"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  HardDrive,
  Network,
  Server,
  Zap,
  Shield,
  Globe,
  Calculator,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComputePageProps {
  params: { locale: string };
}

export default function ComputePage({ params: { locale } }: ComputePageProps) {
  const t = useTranslations("compute");

  const gpuOptions = [
    { name: "NVIDIA H100 80GB", price: "$1.50/hr", availability: "Available", type: "Training" },
    { name: "NVIDIA A100 80GB", price: "$1.20/hr", availability: "Available", type: "Training" },
    { name: "NVIDIA A100 40GB", price: "$0.90/hr", availability: "Available", type: "Training" },
    { name: "NVIDIA L40S", price: "$0.70/hr", availability: "Available", type: "Inference" },
    { name: "NVIDIA T4", price: "$0.35/hr", availability: "Available", type: "Inference" },
    { name: "AMD MI250X", price: "$1.00/hr", availability: "Coming Soon", type: "Training" },
  ];

  const cpuOptions = [
    { name: "Standard", specs: "4 vCPU, 16GB RAM", price: "$0.08/hr", use: "General workloads" },
    { name: "Compute-Optimized", specs: "8 vCPU, 16GB RAM", price: "$0.12/hr", use: "CPU-intensive tasks" },
    { name: "Memory-Optimized", specs: "4 vCPU, 32GB RAM", price: "$0.14/hr", use: "Large datasets" },
    { name: "Bare Metal", specs: "64 core, 512GB RAM", price: "$2.50/hr", use: "Maximum performance" },
  ];

  const storageOptions = [
    { name: "NVMe SSD", price: "$0.15/GB/mo", iops: "100K+", use: "High performance" },
    { name: "SSD", price: "$0.10/GB/mo", iops: "16K", use: "Balanced" },
    { name: "Object Storage", price: "$0.03/GB/mo", iops: "N/A", use: "Large datasets" },
  ];

  const depinNetworks = [
    { name: "Render Network", type: "GPU Rendering", status: "Integrated" },
    { name: "Akash Network", type: "Cloud Computing", status: "Integrated" },
    { name: "io.net", type: "GPU Compute", status: "Integrated" },
    { name: "Gensyn", type: "ML Training", status: "Coming Soon" },
    { name: "Bittensor", type: "AI Network", status: "Coming Soon" },
  ];

  const advantages = [
    { icon: Zap, title: t("overview.cost"), description: "$0.04/kWh energy cost translates to 40% lower compute prices" },
    { icon: Globe, title: t("overview.location"), description: "Strategic position with low latency to Europe, Middle East, and Asia" },
    { icon: Shield, title: "Enterprise Security", description: "ISO 27001 and SOC 2 compliance roadmap" },
    { icon: Network, title: t("overview.flexible"), description: "On-demand, reserved, and spot instance options" },
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
              40% Below Market Rates
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("overview.title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("overview.subtitle")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={`/${locale}/compute/pricing`}>
                  <Calculator className="mr-2 h-4 w-4" />
                  Pricing Calculator
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/contact`}>
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-3"
              >
                <item.icon className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compute Options Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="gpu" className="w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold">Compute Resources</h2>
              <TabsList className="mt-6">
                <TabsTrigger value="gpu" className="gap-2">
                  <Server className="h-4 w-4" />
                  GPU Compute
                </TabsTrigger>
                <TabsTrigger value="cpu" className="gap-2">
                  <Cpu className="h-4 w-4" />
                  CPU Compute
                </TabsTrigger>
                <TabsTrigger value="storage" className="gap-2">
                  <HardDrive className="h-4 w-4" />
                  Storage
                </TabsTrigger>
                <TabsTrigger value="depin" className="gap-2">
                  <Network className="h-4 w-4" />
                  DePIN
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="gpu" className="mt-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {gpuOptions.map((gpu) => (
                  <Card key={gpu.name} className="relative">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant={gpu.type === "Training" ? "default" : "secondary"}>
                          {gpu.type}
                        </Badge>
                        <Badge variant={gpu.availability === "Available" ? "outline" : "secondary"}>
                          {gpu.availability}
                        </Badge>
                      </div>
                      <CardTitle className="mt-2">{gpu.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">{gpu.price}</div>
                      <p className="text-sm text-muted-foreground">On-demand pricing</p>
                      <div className="mt-4 text-sm">
                        <p>Reserved 1mo: <span className="text-primary">20% off</span></p>
                        <p>Reserved 6mo: <span className="text-primary">35% off</span></p>
                        <p>Reserved 1yr: <span className="text-primary">50% off</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href={`/${locale}/compute/gpu`}>
                    View All GPU Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="cpu" className="mt-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {cpuOptions.map((cpu) => (
                  <Card key={cpu.name}>
                    <CardHeader>
                      <CardTitle>{cpu.name}</CardTitle>
                      <CardDescription>{cpu.specs}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{cpu.price}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{cpu.use}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href={`/${locale}/compute/cpu`}>
                    View All CPU Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="mt-8">
              <div className="grid gap-4 md:grid-cols-3">
                {storageOptions.map((storage) => (
                  <Card key={storage.name}>
                    <CardHeader>
                      <CardTitle>{storage.name}</CardTitle>
                      <CardDescription>IOPS: {storage.iops}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{storage.price}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{storage.use}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href={`/${locale}/compute/storage`}>
                    View Storage Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="depin" className="mt-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {depinNetworks.map((network) => (
                  <Card key={network.name}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant={network.status === "Integrated" ? "default" : "secondary"}>
                          {network.status}
                        </Badge>
                      </div>
                      <CardTitle className="mt-2">{network.name}</CardTitle>
                      <CardDescription>{network.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/${locale}/compute/depin/${network.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href={`/${locale}/compute/depin`}>
                    Explore DePIN Integration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                <Building2 className="mr-1 h-3 w-3" />
                Enterprise Solutions
              </Badge>
              <h2 className="text-3xl font-bold">{t("enterprise.title")}</h2>
              <p className="mt-4 text-muted-foreground">
                Custom infrastructure solutions for large-scale AI deployments with dedicated support,
                custom SLAs, and hybrid cloud integration.
              </p>
              <div className="mt-6 space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t("enterprise.privateCloud.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t("enterprise.privateCloud.dedicated")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t("enterprise.hybridCloud.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t("enterprise.hybridCloud.integration")}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t("enterprise.managed.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t("enterprise.managed.mlops")}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground">
                <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
                <p className="mt-4 text-primary-foreground/90">
                  Our team can design a tailored infrastructure solution for your specific requirements.
                </p>
                <Button size="lg" variant="secondary" className="mt-6" asChild>
                  <Link href={`/${locale}/contact`}>
                    Contact Enterprise Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">See How We Compare</h2>
            <p className="mt-4 text-muted-foreground">
              Compare our pricing and features with major cloud providers
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={`/${locale}/compute/pricing`}>
                  View Pricing Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/compute/pricing#comparison`}>
                  Cloud Provider Comparison
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
