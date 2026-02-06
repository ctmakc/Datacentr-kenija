"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { HelpCircle, MessageCircle, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const faqCategories = [
  {
    id: "investors",
    title: "For Investors",
    icon: "💰",
    questions: [
      {
        q: "What is the minimum investment amount?",
        a: "The minimum investment starts at $50,000 for individual investors. Institutional investors can discuss custom arrangements with our investor relations team.",
      },
      {
        q: "What is the expected ROI?",
        a: "Based on our projections, investors can expect 18-25% annual returns depending on the investment tier and market conditions. Our ROI calculator provides detailed projections based on your investment amount.",
      },
      {
        q: "How is the investment structured?",
        a: "Investments are structured as equity stakes in the datacenter project. Token-based investments are also available through our DePIN partnership program.",
      },
      {
        q: "What are the risk factors?",
        a: "Key risks include market volatility in AI compute demand, energy price fluctuations, and regulatory changes. We mitigate these through long-term power purchase agreements and diversified client base.",
      },
      {
        q: "When can I expect returns?",
        a: "Phase 1 (1MW) is operational, generating revenue immediately. Full ROI timeline depends on investment tier, typically 3-5 years for complete capital recovery.",
      },
    ],
  },
  {
    id: "compute",
    title: "Compute Services",
    icon: "🖥️",
    questions: [
      {
        q: "What GPU models are available?",
        a: "We offer NVIDIA H100, A100, and L40S GPUs for AI/ML workloads. CPU compute includes AMD EPYC and Intel Xeon processors for general-purpose computing.",
      },
      {
        q: "How is pricing structured?",
        a: "Pricing is based on hourly compute usage. We offer significant discounts for reserved capacity (monthly/yearly commitments). Use our pricing calculator for detailed estimates.",
      },
      {
        q: "What is the uptime guarantee?",
        a: "We guarantee 99.95% uptime SLA with financial credits for any downtime exceeding this threshold. Our infrastructure includes N+1 redundancy for all critical systems.",
      },
      {
        q: "Can I run my own software stack?",
        a: "Yes, we provide bare-metal and virtualized options. You have full control over your compute environment with root access and custom OS support.",
      },
      {
        q: "How do I connect to the datacenter?",
        a: "We offer multiple connectivity options: direct fiber links, VPN tunnels, and partnerships with major cloud providers for hybrid deployments.",
      },
    ],
  },
  {
    id: "depin",
    title: "DePIN Networks",
    icon: "🌐",
    questions: [
      {
        q: "Which DePIN networks are supported?",
        a: "We support Render Network, Akash Network, io.net, Gensyn, Bittensor, and Flux. New network integrations are added regularly based on demand.",
      },
      {
        q: "How do I contribute compute to DePIN?",
        a: "Contact our partnerships team to discuss hosting arrangements. We handle all infrastructure management while you maintain control of your network nodes.",
      },
      {
        q: "What are the hosting terms?",
        a: "We offer flexible hosting arrangements including revenue sharing, fixed monthly fees, or hybrid models. Terms depend on compute requirements and commitment length.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "Minimum commitments vary by network but typically start at 6 months. Longer commitments receive preferential rates and priority support.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical & Infrastructure",
    icon: "⚡",
    questions: [
      {
        q: "What is the Power Usage Effectiveness (PUE)?",
        a: "Our target PUE is 1.3-1.4, achieved through free cooling optimization leveraging Nairobi's favorable climate and efficient power distribution systems.",
      },
      {
        q: "Is the datacenter using renewable energy?",
        a: "Yes, Kenya's grid is 90%+ renewable (primarily geothermal and hydro). We also have on-site solar capacity and are exploring direct geothermal power agreements.",
      },
      {
        q: "What security measures are in place?",
        a: "24/7 physical security, biometric access control, CCTV monitoring, and cybersecurity measures including DDoS protection and encrypted communications.",
      },
      {
        q: "What is the total planned capacity?",
        a: "Phase 1: 1MW (operational), Phase 2: 5MW (2025), Phase 3: 10MW (2026). Total planned capacity is 16MW+ with room for expansion.",
      },
    ],
  },
  {
    id: "partnership",
    title: "Partnerships",
    icon: "🤝",
    questions: [
      {
        q: "How can I become a partner?",
        a: "We welcome technology partners, local business partners, and energy partners. Contact our partnerships team to discuss collaboration opportunities.",
      },
      {
        q: "Do you offer franchise opportunities?",
        a: "Yes, we have a franchise program for expanding to other African locations. Franchisees benefit from our technology stack, operational expertise, and network effects.",
      },
      {
        q: "What support do partners receive?",
        a: "Partners receive technical training, marketing support, access to our partner portal, and dedicated account management.",
      },
    ],
  },
];

export default function FAQPage() {
  const params = useParams();
  const locale = params.locale as string;

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
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Find answers to common questions about investing, compute services,
              DePIN networks, and partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-muted"
              >
                <span>{category.icon}</span>
                <span>{category.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <Badge variant="secondary">{category.questions.length} questions</Badge>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-2xl font-bold">Still Have Questions?</h2>
            <p className="mt-2 text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link href={`/${locale}/contact`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:support@kenyaaicompute.com">
                  support@kenyaaicompute.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
