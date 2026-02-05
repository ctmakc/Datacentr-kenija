import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Video, BookOpen, BarChart3, Shield, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Resources | Kenya AI Compute",
    description: "Documentation, whitepapers, and educational resources about AI infrastructure",
  };
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const featuredResources = [
    {
      title: "Investment Deck",
      description: "Comprehensive overview of our investment opportunity, market analysis, and financial projections.",
      type: "PDF",
      icon: BarChart3,
      badge: "Investors",
    },
    {
      title: "Technical Whitepaper",
      description: "Deep dive into our datacenter architecture, cooling systems, and infrastructure design.",
      type: "PDF",
      icon: FileText,
      badge: "Technical",
    },
    {
      title: "DePIN Integration Guide",
      description: "How to participate in decentralized compute networks through our infrastructure.",
      type: "PDF",
      icon: BookOpen,
      badge: "DePIN",
    },
  ];

  const documents = [
    { title: "Company Overview", type: "PDF", size: "2.4 MB", category: "General" },
    { title: "Financial Model Summary", type: "XLSX", size: "1.8 MB", category: "Investors" },
    { title: "Technical Specifications", type: "PDF", size: "4.2 MB", category: "Technical" },
    { title: "ESG & Sustainability Report", type: "PDF", size: "3.1 MB", category: "General" },
    { title: "GPU Pricing Guide", type: "PDF", size: "890 KB", category: "Customers" },
    { title: "Partner Program Overview", type: "PDF", size: "1.5 MB", category: "Partners" },
    { title: "Security & Compliance", type: "PDF", size: "2.8 MB", category: "Technical" },
    { title: "API Documentation", type: "Link", size: "-", category: "Technical" },
  ];

  const videos = [
    { title: "Company Introduction", duration: "5:30", thumbnail: "intro" },
    { title: "Datacenter Virtual Tour", duration: "8:45", thumbnail: "tour" },
    { title: "DePIN Explained", duration: "6:20", thumbnail: "depin" },
  ];

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "Our minimum investment is $100,000 for qualified investors. Contact us for more details on investment tranches and terms.",
    },
    {
      question: "How does DePIN integration work?",
      answer: "We deploy and manage GPU nodes on your behalf across multiple DePIN networks. You earn rewards from network participation without operational complexity.",
    },
    {
      question: "What is the expected timeline?",
      answer: "Phase 1 construction begins Q2 2025 with operations starting Q1 2026. Full 1MW capacity expected by mid-2026.",
    },
    {
      question: "What renewable energy sources do you use?",
      answer: "Our facility uses Kenya's geothermal grid power (90%+ renewable) supplemented by on-site solar with battery storage.",
    },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">Resources</span>
      </nav>

      {/* Header */}
      <div className="mb-12 text-center">
        <Badge className="mb-4">Resources</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Documentation & Resources
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Access our documentation, whitepapers, and educational materials to learn more about Kenya AI Compute.
        </p>
      </div>

      {/* Featured Resources */}
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {featuredResources.map((resource) => (
          <Card key={resource.title} className="group hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary">{resource.badge}</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
              <button className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <Download className="h-4 w-4" />
                Download {resource.type}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents Table */}
      <Card className="mb-16">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-6">All Documents</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium">Document</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Size</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {documents.map((doc) => (
                  <tr key={doc.title} className="hover:bg-muted/50">
                    <td className="py-4 font-medium">{doc.title}</td>
                    <td className="py-4">
                      <Badge variant="outline">{doc.category}</Badge>
                    </td>
                    <td className="py-4 text-muted-foreground">{doc.type}</td>
                    <td className="py-4 text-muted-foreground">{doc.size}</td>
                    <td className="py-4">
                      <button className="text-primary hover:underline flex items-center gap-1">
                        {doc.type === "Link" ? (
                          <>View <ExternalLink className="h-3 w-3" /></>
                        ) : (
                          <>Download <Download className="h-3 w-3" /></>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Videos */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Video Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.title} className="group cursor-pointer hover:border-primary/50 transition-colors overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <Badge className="absolute bottom-2 right-2">{video.duration}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{video.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8 text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Need Access to Confidential Materials?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Some documents require registration or NDA. Contact us to request access to detailed financial models and technical specifications.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href={`/${locale}/portal/register`}
              className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium hover:bg-muted transition-colors"
            >
              Register for Access
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
