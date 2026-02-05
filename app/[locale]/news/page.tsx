import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "News & Updates | Kenya AI Compute",
    description: "Latest news, announcements, and updates from Kenya AI Compute",
  };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const featuredNews = {
    title: "Kenya AI Compute Announces Strategic Partnership for Phase 1 Development",
    excerpt: "We're excited to announce a major partnership that will accelerate our Phase 1 datacenter development in Kenya, bringing world-class AI infrastructure to East Africa.",
    date: "January 15, 2025",
    category: "Partnership",
    readTime: "5 min read",
  };

  const newsItems = [
    {
      title: "Q4 2024 Development Update",
      excerpt: "Progress report on site preparation, equipment procurement, and team expansion.",
      date: "December 20, 2024",
      category: "Update",
      readTime: "3 min read",
    },
    {
      title: "Why Kenya is the Future of AI Infrastructure",
      excerpt: "Exploring the unique advantages that make Kenya ideal for AI compute infrastructure.",
      date: "December 5, 2024",
      category: "Insights",
      readTime: "7 min read",
    },
    {
      title: "DePIN Integration Strategy Revealed",
      excerpt: "Our approach to integrating with leading decentralized compute networks.",
      date: "November 18, 2024",
      category: "Technology",
      readTime: "4 min read",
    },
    {
      title: "Seed Funding Round Successfully Closed",
      excerpt: "Announcing the successful completion of our seed funding round with strategic investors.",
      date: "October 30, 2024",
      category: "Funding",
      readTime: "3 min read",
    },
    {
      title: "Team Expansion: Key Hires Announced",
      excerpt: "Welcoming new leadership team members with deep expertise in data centers and AI.",
      date: "October 15, 2024",
      category: "Team",
      readTime: "4 min read",
    },
    {
      title: "Site Selection Complete: Naivasha, Kenya",
      excerpt: "Announcing our selected location with access to geothermal power and excellent connectivity.",
      date: "September 28, 2024",
      category: "Milestone",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Partnership", "Update", "Insights", "Technology", "Funding", "Team", "Milestone"];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">News</span>
      </nav>

      <div className="mb-12 text-center">
        <Badge className="mb-4">News & Updates</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Latest News</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest developments, announcements, and insights from Kenya AI Compute.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured Article */}
      <Card className="mb-12 overflow-hidden border-primary/20">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-12 flex items-center justify-center">
            <div className="text-center">
              <Badge className="mb-4">{featuredNews.category}</Badge>
              <p className="text-6xl font-bold text-primary/20">Featured</p>
            </div>
          </div>
          <CardContent className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {featuredNews.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredNews.readTime}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{featuredNews.title}</h2>
            <p className="text-muted-foreground mb-6">{featuredNews.excerpt}</p>
            <Link
              href={`/${locale}/news/partnership-announcement`}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Read Full Article <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </div>
      </Card>

      {/* News Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {newsItems.map((item) => (
          <Card key={item.title} className="group hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">{item.category}</Badge>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.readTime}
                </span>
                <Link
                  href={`/${locale}/news`}
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  Read more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get the latest news and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border bg-background px-4 py-2"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground hover:bg-primary/90">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
