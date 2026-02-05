"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, MapPin, Box, Network, TrendingUp, Server, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface HomePageProps {
  params: { locale: string };
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage({ params: { locale } }: HomePageProps) {
  const t = useTranslations("home");

  const metrics = [
    { value: t("metrics.capacity.value"), label: t("metrics.capacity.label"), icon: Server },
    { value: t("metrics.energy.value"), label: t("metrics.energy.label"), icon: Zap },
    { value: t("metrics.uptime.value"), label: t("metrics.uptime.label"), icon: Clock },
    { value: t("metrics.savings.value"), label: t("metrics.savings.label"), icon: TrendingUp },
  ];

  const valueProps = [
    {
      key: "investors",
      title: t("valueProps.investors.title"),
      description: t("valueProps.investors.description"),
      cta: t("valueProps.investors.cta"),
      href: `/${locale}/investors`,
      icon: TrendingUp,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      key: "aiCompanies",
      title: t("valueProps.aiCompanies.title"),
      description: t("valueProps.aiCompanies.description"),
      cta: t("valueProps.aiCompanies.cta"),
      href: `/${locale}/compute`,
      icon: Server,
      gradient: "from-green-500 to-teal-500",
    },
    {
      key: "depin",
      title: t("valueProps.depin.title"),
      description: t("valueProps.depin.description"),
      cta: t("valueProps.depin.cta"),
      href: `/${locale}/compute/depin`,
      icon: Network,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      key: "partners",
      title: t("valueProps.partners.title"),
      description: t("valueProps.partners.description"),
      cta: t("valueProps.partners.cta"),
      href: `/${locale}/partners`,
      icon: Box,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: t("overview.features.energy.title"),
      description: t("overview.features.energy.description"),
    },
    {
      icon: MapPin,
      title: t("overview.features.location.title"),
      description: t("overview.features.location.description"),
    },
    {
      icon: Box,
      title: t("overview.features.modular.title"),
      description: t("overview.features.modular.description"),
    },
    {
      icon: Network,
      title: t("overview.features.depin.title"),
      description: t("overview.features.depin.description"),
    },
  ];

  const phases = [
    { title: t("phases.phase1.title"), capacity: t("phases.phase1.capacity"), timeline: t("phases.phase1.timeline"), progress: 100 },
    { title: t("phases.phase2.title"), capacity: t("phases.phase2.capacity"), timeline: t("phases.phase2.timeline"), progress: 30 },
    { title: t("phases.phase3.title"), capacity: t("phases.phase3.capacity"), timeline: t("phases.phase3.timeline"), progress: 0 },
  ];

  const networks = [
    "Render Network",
    "Akash Network",
    "io.net",
    "Gensyn",
    "Bittensor",
    "Flux",
  ];

  const dashboardMetrics = [
    { label: t("dashboard.capacity"), value: 78, suffix: "%" },
    { label: t("dashboard.uptime"), value: 99.97, suffix: "%" },
    { label: t("dashboard.pue"), value: 1.35, suffix: "" },
    { label: t("dashboard.carbon"), value: 245, suffix: " tons" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                <Leaf className="mr-1 h-3 w-3" />
                Green AI Infrastructure
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-muted-foreground sm:text-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
                >
                  <metric.icon className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-2 text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" asChild>
                <Link href={`/${locale}/investors`}>
                  {t("hero.cta.investors")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/compute`}>
                  {t("hero.cta.compute")}
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href={`/${locale}/compute/depin`}>
                  {t("hero.cta.network")}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className={`mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${prop.gradient}`}>
                      <prop.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle>{prop.title}</CardTitle>
                    <CardDescription>{prop.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="group-hover:translate-x-1 transition-transform p-0" asChild>
                      <Link href={prop.href}>
                        {prop.cta}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">{t("overview.title")}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("overview.description")}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Phases Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-6">{t("phases.title")}</h3>
              <div className="space-y-6">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg border bg-card p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{phase.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {phase.capacity} • {phase.timeline}
                        </p>
                      </div>
                      <Badge variant={phase.progress === 100 ? "default" : phase.progress > 0 ? "secondary" : "outline"}>
                        {phase.progress === 100 ? "Complete" : phase.progress > 0 ? "In Progress" : "Planned"}
                      </Badge>
                    </div>
                    <Progress value={phase.progress} className="mt-3" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">{t("dashboard.title")}</h2>
          <p className="mt-2 text-center text-muted-foreground">Real-time infrastructure metrics (simulated)</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>{metric.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {metric.value}{metric.suffix}
                    </div>
                    <Progress value={typeof metric.value === 'number' && metric.suffix === '%' ? metric.value : 75} className="mt-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{t("networks.title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("networks.subtitle")}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {networks.map((network, index) => (
              <motion.div
                key={network}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex h-16 w-40 items-center justify-center rounded-lg border bg-card px-4 font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {network}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href={`/${locale}/partners/network`}>
                {t("networks.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Power Your AI Future?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Whether you're an investor, AI company, or DePIN network, we have the infrastructure to accelerate your growth.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href={`/${locale}/contact`}>
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href={`/${locale}/resources`}>
                  Download Materials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
