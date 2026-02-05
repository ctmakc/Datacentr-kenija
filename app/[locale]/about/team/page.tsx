import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail, Users, Award, Globe, GraduationCap } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: "Our Team | Kenya AI Compute",
    description: "Meet the leadership team building Africa's AI infrastructure",
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const leadership = [
    {
      name: "James Mwangi",
      role: "Chief Executive Officer",
      bio: "20+ years in technology infrastructure. Former VP at major cloud provider.",
      expertise: ["Infrastructure", "Strategy", "Fundraising"],
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Engineering. Expert in data center design and AI systems.",
      expertise: ["AI/ML", "Data Centers", "Architecture"],
    },
    {
      name: "Michael Okonkwo",
      role: "Chief Operating Officer",
      bio: "15+ years in operations management across Africa.",
      expertise: ["Operations", "Supply Chain", "Projects"],
    },
    {
      name: "Li Wei",
      role: "Chief Financial Officer",
      bio: "Former investment banker specializing in infrastructure and energy.",
      expertise: ["Finance", "Investment", "M&A"],
    },
    {
      name: "Grace Wanjiku",
      role: "VP, Government Relations",
      bio: "Former government advisor with extensive network across East Africa.",
      expertise: ["Policy", "Regulation", "Partnerships"],
    },
    {
      name: "David Kimani",
      role: "VP, Engineering",
      bio: "Deep expertise in power systems and cooling technologies.",
      expertise: ["Engineering", "Power", "Cooling"],
    },
  ];

  const advisors = [
    { name: "Prof. John Ochieng", role: "Technical Advisor", affiliation: "University of Nairobi", focus: "AI Research" },
    { name: "Elizabeth Muthoni", role: "Energy Advisor", affiliation: "Former Kenya Power", focus: "Power Infrastructure" },
    { name: "Richard Wang", role: "Investment Advisor", affiliation: "Asia Infrastructure Fund", focus: "China Market" },
    { name: "Dr. Amara Osei", role: "Sustainability Advisor", affiliation: "African Development Bank", focus: "ESG Strategy" },
  ];

  const stats = [
    { label: "Combined Experience", value: "100+ Years", icon: Award },
    { label: "Countries Worked In", value: "25+", icon: Globe },
    { label: "Team Size", value: "30+", icon: Users },
    { label: "Advanced Degrees", value: "10+", icon: GraduationCap },
  ];

  return (
    <div className="container py-12 md:py-20">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/about`} className="hover:text-foreground">About</Link>
        <span>/</span>
        <span className="text-foreground">Team</span>
      </nav>

      <div className="mb-16 text-center">
        <Badge className="mb-4">Our Team</Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Leadership</h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          A world-class team combining deep expertise in technology infrastructure,
          AI/ML, finance, and African markets.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Executive Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="rounded-lg p-2 hover:bg-muted transition-colors">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="rounded-lg p-2 hover:bg-muted transition-colors">
                    <Twitter className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="rounded-lg p-2 hover:bg-muted transition-colors">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Advisory Board</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <Card key={advisor.name}>
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-secondary">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold">{advisor.name}</h3>
                <p className="text-sm text-primary mb-1">{advisor.role}</p>
                <p className="text-xs text-muted-foreground mb-2">{advisor.affiliation}</p>
                <Badge variant="outline" className="text-xs">{advisor.focus}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're building something transformative and looking for exceptional people
            who share our vision.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href={`/${locale}/about/story`} className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted">
              Our Story
            </Link>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Contact Us
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
