"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, BookOpen, Handshake, Map, Globe, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AboutPageProps {
  params: { locale: string };
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  const t = useTranslations("about");

  const sections = [
    {
      title: t("vision.title"),
      description: t("vision.mission"),
      icon: Target,
      href: `/${locale}/about/vision`,
      color: "text-blue-500",
    },
    {
      title: t("team.title"),
      description: "Meet the leadership team and advisors driving the project forward.",
      icon: Users,
      href: `/${locale}/about/team`,
      color: "text-green-500",
    },
    {
      title: t("story.title"),
      description: t("story.genesisText"),
      icon: BookOpen,
      href: `/${locale}/about/story`,
      color: "text-purple-500",
    },
    {
      title: t("partners.title"),
      description: "Strategic, technology, and local partners building Africa's AI infrastructure.",
      icon: Handshake,
      href: `/${locale}/about/partners`,
      color: "text-orange-500",
    },
    {
      title: t("roadmap.title"),
      description: "Project development timeline from 2024 to 2028 and beyond.",
      icon: Map,
      href: `/${locale}/about/roadmap`,
      color: "text-cyan-500",
    },
  ];

  const stats = [
    { value: "$20-25M", label: "Total CAPEX" },
    { value: "1 MW", label: "Phase 2 Capacity" },
    { value: "5-7 years", label: "Target Payback" },
    { value: "3", label: "Development Phases" },
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("vision.mission")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <section.icon className={`h-8 w-8 ${section.color}`} />
                    <CardTitle className="mt-4">{section.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 group-hover:translate-x-1 transition-transform" asChild>
                      <Link href={section.href}>
                        Learn More
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

      {/* Why Africa Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">{t("vision.whyAfrica")}</h2>
              <p className="mt-4 text-muted-foreground">
                {t("vision.whyAfricaText")}
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-4">
                  <Globe className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Digital Transformation</h3>
                    <p className="text-sm text-muted-foreground">
                      Africa's rapidly growing digital economy creates unprecedented demand for local AI infrastructure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{t("vision.energyArbitrage")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("vision.energyArbitrageText")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{t("vision.sdg")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("vision.sdgText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">60-70%</div>
                    <div className="mt-2 text-sm text-muted-foreground">Cost Advantage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">{t("vision.longTerm")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("vision.longTermText")}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href={`/${locale}/about/vision`}>
                  Read Our Full Vision
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
