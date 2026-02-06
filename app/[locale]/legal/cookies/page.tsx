import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Cookie Policy | Kenya AI Compute",
    description: "How Kenya AI Compute uses cookies and similar tracking technologies",
  };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lastUpdated = "February 1, 2025";

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for the website to function properly. Cannot be disabled.",
      examples: ["Session management", "Security tokens", "Load balancing"],
      retention: "Session / 24 hours",
    },
    {
      name: "Functional Cookies",
      description: "Enable personalized features and remember your preferences.",
      examples: ["Language preference", "Theme settings", "Login status"],
      retention: "1 year",
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      examples: ["Page views", "Traffic sources", "User behavior"],
      retention: "2 years",
    },
    {
      name: "Marketing Cookies",
      description: "Used to track visitors across websites for advertising purposes.",
      examples: ["Ad targeting", "Campaign tracking", "Retargeting"],
      retention: "90 days",
    },
  ];

  return (
    <div className="container py-12 md:py-20 max-w-4xl">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">Cookie Policy</span>
      </nav>

      <div className="mb-12">
        <Badge className="mb-4">Legal</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            This Cookie Policy explains how Kenya AI Compute uses cookies and similar tracking technologies when you visit our website and use our services.
          </p>
        </CardContent>
      </Card>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
          <div className="space-y-6">
            {cookieTypes.map((cookie) => (
              <Card key={cookie.name}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{cookie.name}</h3>
                  <p className="text-muted-foreground mb-4">{cookie.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">Examples:</p>
                      <ul className="text-muted-foreground space-y-1">
                        {cookie.examples.map((ex) => (
                          <li key={ex}>• {ex}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Retention:</p>
                      <p className="text-muted-foreground">{cookie.retention}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may use third-party services that place cookies on your device:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
            <li><strong>Stripe:</strong> Payment processing and fraud prevention</li>
            <li><strong>Intercom:</strong> Customer support and communication</li>
            <li><strong>LinkedIn/Twitter:</strong> Social media integration and sharing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can control and manage cookies in several ways:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Browser Settings</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most browsers allow you to manage cookie preferences. You can set your browser to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Block all cookies</li>
            <li>Accept only first-party cookies</li>
            <li>Delete cookies when you close the browser</li>
            <li>Notify you when a cookie is being set</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Consent Tool</h3>
          <p className="text-muted-foreground leading-relaxed">
            When you first visit our website, you'll see a cookie consent banner. You can customize your preferences at any time by clicking "Cookie Settings" in the footer.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Opt-Out Links</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Opt-out browser add-on</a></li>
            <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org" className="text-primary hover:underline">Consumer opt-out</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you choose to disable cookies, some features of our website may not function properly. Essential features like login, security, and checkout may be affected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about our use of cookies:
          </p>
          <div className="mt-4 p-4 rounded-lg bg-muted">
            <p className="font-medium">Kenya AI Compute Ltd.</p>
            <p className="text-muted-foreground">Email: privacy@kenyaaicompute.com</p>
          </div>
        </section>
      </div>

      <div className="mt-12 flex gap-4">
        <Link href={`/${locale}/legal/privacy`} className="text-primary hover:underline">
          ← Privacy Policy
        </Link>
        <Link href={`/${locale}/legal/terms`} className="text-primary hover:underline">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
