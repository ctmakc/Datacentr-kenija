"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Wrench,
  Zap,
  Truck,
  Network,
  Settings,
  Building2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PartnersPageProps {
  params: { locale: string };
}

export default function PartnersPage({ params: { locale } }: PartnersPageProps) {
  const t = useTranslations("partners");

  const partnerTypes = [
    {
      icon: MapPin,
      title: t("kenya.title"),
      description: "Local implementation partner for construction, permits, and operations in Kenya.",
      benefits: [
        "Equity participation opportunity",
        "Revenue sharing model",
        "Long-term partnership",
        "Technology transfer",
      ],
      href: `/${locale}/partners/kenya`,
      status: "Seeking",
      priority: "High",
    },
    {
      icon: Wrench,
      title: t("technical.title"),
      description: "Datacenter design, engineering, and technical operations expertise.",
      benefits: [
        "Multiple engagement models",
        "Design-build opportunities",
        "O&M contracts",
        "Equity participation option",
      ],
      href: `/${locale}/partners/technical`,
      status: "Seeking",
      priority: "High",
    },
    {
      icon: Zap,
      title: t("energy.title"),
      description: "Power generation partnership and PPA opportunities.",
      benefits: [
        "Long-term offtake agreements",
        "Renewable energy development",
        "Grid integration projects",
        "Joint venture options",
      ],
      href: `/${locale}/partners/energy`,
      status: "Seeking",
      priority: "High",
    },
    {
      icon: Truck,
      title: t("suppliers.title"),
      description: "Server, networking, power, and cooling equipment suppliers.",
      benefits: [
        "Large procurement volumes",
        "Multi-phase project",
        "Long-term relationship",
        "Reference site opportunity",
      ],
      href: `/${locale}/partners/suppliers`,
      status: "Open",
      priority: "Medium",
    },
    {
      icon: Network,
      title: t("network.title"),
      description: "DePIN network integration and node hosting partnerships.",
      benefits: [
        "Geographic expansion",
        "Low-cost infrastructure",
        "Professional operations",
        "Green energy certification",
      ],
      href: `/${locale}/partners/network`,
      status: "Active",
      priority: "High",
    },
    {
      icon: Settings,
      title: t("operations.title"),
      description: "NOC services, maintenance, and operational support.",
      benefits: [
        "24/7 operations contract",
        "Regional hub opportunity",
        "Skills development",
        "Long-term engagement",
      ],
      href: `/${locale}/partners/operations`,
      status: "Future",
      priority: "Medium",
    },
  ];

  const partnerBenefits = [
    {
      title: "Equity Participation",
      description: "Strategic partners may participate in equity ownership",
    },
    {
      title: "Revenue Sharing",
      description: "Performance-based revenue sharing models available",
    },
    {
      title: "Technology Access",
      description: "Access to cutting-edge AI infrastructure technology",
    },
    {
      title: "Market Expansion",
      description: "Entry point into the African AI infrastructure market",
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
              Partnership Opportunities
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("overview.title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("overview.philosophy")}. Join us in building Africa's AI infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Partnership Opportunities</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Multiple ways to participate in Africa's AI infrastructure buildout
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <partner.icon className="h-8 w-8 text-primary" />
                      <div className="flex gap-2">
                        <Badge
                          variant={
                            partner.status === "Seeking"
                              ? "default"
                              : partner.status === "Active"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {partner.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            partner.priority === "High"
                              ? "border-primary text-primary"
                              : ""
                          }
                        >
                          {partner.priority} Priority
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="mt-4">{partner.title}</CardTitle>
                    <CardDescription>{partner.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm">
                      {partner.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="link"
                      className="mt-4 p-0 group-hover:translate-x-1 transition-transform"
                      asChild
                    >
                      <Link href={partner.href}>
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

      {/* Partner Ecosystem */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">{t("overview.ecosystem")}</h2>
              <p className="mt-4 text-muted-foreground">
                Our partner ecosystem brings together local expertise, technical knowledge,
                and strategic capabilities to build sustainable AI infrastructure in Kenya.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-4">
                  <Building2 className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Local Partners</h3>
                    <p className="text-sm text-muted-foreground">
                      On-ground implementation, regulatory navigation, and operational excellence
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Wrench className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Technical Partners</h3>
                    <p className="text-sm text-muted-foreground">
                      World-class datacenter design and engineering expertise
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Energy Partners</h3>
                    <p className="text-sm text-muted-foreground">
                      Sustainable power generation and grid integration
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Network className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Network Partners</h3>
                    <p className="text-sm text-muted-foreground">
                      DePIN networks seeking reliable, low-cost infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground">
                <h3 className="text-2xl font-bold">Become a Partner</h3>
                <p className="mt-4 text-primary-foreground/90">
                  Join us in building Africa's first AI-focused datacenter with integrated
                  power generation.
                </p>
                <Button size="lg" variant="secondary" className="mt-6" asChild>
                  <Link href={`/${locale}/contact`}>
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
