"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Quote, Star, Building2, Server, Network, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote: "Kenya AI Compute has transformed how we approach GPU infrastructure in Africa. The combination of renewable energy and strategic location makes it a game-changer for our rendering operations.",
    author: "Michael Chen",
    title: "CTO",
    company: "Render Network",
    category: "depin",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 2,
    quote: "As an early investor, I've been impressed by the team's execution. Phase 1 is already operational and generating returns ahead of projections. The African AI compute market is just getting started.",
    author: "Sarah Williams",
    title: "Managing Partner",
    company: "Digital Frontier Capital",
    category: "investor",
    rating: 5,
    avatar: "SW",
  },
  {
    id: 3,
    quote: "We moved 30% of our training workloads to Kenya AI Compute and saw a 40% reduction in costs compared to traditional cloud providers. The low latency to European markets is a huge bonus.",
    author: "Dr. James Okonkwo",
    title: "Head of AI",
    company: "AfriTech ML",
    category: "compute",
    rating: 5,
    avatar: "JO",
  },
  {
    id: 4,
    quote: "The sustainability angle is what sold us. Our ESG commitments require carbon-neutral compute, and Kenya's geothermal-powered grid delivers exactly that. Plus, the pricing is extremely competitive.",
    author: "Emma Lindqvist",
    title: "Sustainability Director",
    company: "Nordic AI Labs",
    category: "compute",
    rating: 5,
    avatar: "EL",
  },
  {
    id: 5,
    quote: "Partnering with Kenya AI Compute opened up the entire East African market for our GPU cloud services. Their infrastructure and local expertise made expansion seamless.",
    author: "David Mwangi",
    title: "CEO",
    company: "CloudAfrica",
    category: "partner",
    rating: 5,
    avatar: "DM",
  },
  {
    id: 6,
    quote: "The decentralized compute infrastructure here is perfect for our network. Low energy costs, reliable power, and a team that truly understands DePIN economics.",
    author: "Alex Rivera",
    title: "Network Lead",
    company: "io.net",
    category: "depin",
    rating: 5,
    avatar: "AR",
  },
  {
    id: 7,
    quote: "From due diligence to deployment, the Kenya AI Compute team has been exceptional. Clear communication, transparent operations, and a solid business model. This is infrastructure investing done right.",
    author: "Zhang Wei",
    title: "Investment Director",
    company: "Beijing Capital Partners",
    category: "investor",
    rating: 5,
    avatar: "ZW",
  },
  {
    id: 8,
    quote: "We needed reliable GPU capacity for our AI training pipelines without the volatility of spot pricing. Kenya AI Compute's reserved capacity model gives us predictable costs and guaranteed availability.",
    author: "Priya Sharma",
    title: "VP Engineering",
    company: "Inference Labs",
    category: "compute",
    rating: 5,
    avatar: "PS",
  },
];

const caseStudies = [
  {
    title: "Render Network: 500 GPU Cluster Deployment",
    description: "How we helped Render Network establish their African presence with a dedicated GPU cluster for distributed rendering workloads.",
    metrics: [
      { label: "GPUs Deployed", value: "500+" },
      { label: "Uptime", value: "99.97%" },
      { label: "Cost Savings", value: "35%" },
    ],
    category: "depin",
  },
  {
    title: "AfriTech ML: Training Infrastructure Migration",
    description: "A leading African AI startup moved their entire training infrastructure to our facility, achieving significant cost reductions.",
    metrics: [
      { label: "Workloads Migrated", value: "100%" },
      { label: "Latency Reduction", value: "60%" },
      { label: "Monthly Savings", value: "$50K+" },
    ],
    category: "compute",
  },
  {
    title: "Digital Frontier Capital: Series A Investment",
    description: "Strategic investment partnership that accelerated our Phase 2 expansion and opened doors to institutional capital.",
    metrics: [
      { label: "Investment", value: "$5M" },
      { label: "Timeline", value: "Phase 2" },
      { label: "Target ROI", value: "25%+" },
    ],
    category: "investor",
  },
];

const categoryIcons = {
  investor: TrendingUp,
  compute: Server,
  depin: Network,
  partner: Building2,
};

const categoryLabels = {
  investor: "Investor",
  compute: "Compute Client",
  depin: "DePIN Network",
  partner: "Partner",
};

export default function TestimonialsPage() {
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
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Trusted by Industry Leaders
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              See what investors, AI companies, and DePIN networks say about partnering with Kenya AI Compute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { value: "50+", label: "Active Clients" },
              { value: "99.97%", label: "Average Uptime" },
              { value: "$10M+", label: "Capital Deployed" },
              { value: "5", label: "DePIN Networks" },
            ].map((stat, index) => (
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold">What Our Clients Say</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Real feedback from real partners
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => {
              const Icon = categoryIcons[testimonial.category as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Icon className="h-3 w-3" />
                          {categoryLabels[testimonial.category as keyof typeof categoryLabels]}
                        </Badge>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      <Quote className="mb-2 h-6 w-6 text-primary/30" />
                      <p className="flex-1 text-muted-foreground">{testimonial.quote}</p>

                      <div className="mt-6 flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.title}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold">Case Studies</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Detailed success stories from our partners
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Badge className="mb-4">
                      {categoryLabels[study.category as keyof typeof categoryLabels]}
                    </Badge>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="mt-2 text-muted-foreground">{study.description}</p>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-lg font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Ready to Join Our Success Stories?</h2>
            <p className="mt-2 text-muted-foreground">
              Whether you&apos;re an investor, AI company, or DePIN network, we&apos;re ready to help you succeed.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link href={`/${locale}/contact`}>Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/${locale}/investors/calculator`}>Calculate Your ROI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
