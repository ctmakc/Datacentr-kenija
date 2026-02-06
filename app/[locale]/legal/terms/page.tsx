import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Terms of Service | Kenya AI Compute",
    description: "Terms and conditions for using Kenya AI Compute services",
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lastUpdated = "February 1, 2025";

  return (
    <div className="container py-12 md:py-20 max-w-4xl">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/${locale}/legal/terms`} className="hover:text-foreground">Legal</Link>
        <span>/</span>
        <span className="text-foreground">Terms of Service</span>
      </nav>

      <div className="mb-12">
        <Badge className="mb-4">Legal</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            Please read these Terms of Service carefully before using Kenya AI Compute services. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </CardContent>
      </Card>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using Kenya AI Compute's services, website, and platform (collectively, the "Services"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Kenya AI Compute provides:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>GPU and CPU compute infrastructure services</li>
            <li>Datacenter colocation and hosting</li>
            <li>DePIN network integration services</li>
            <li>Investment and partnership opportunities</li>
            <li>Related software, tools, and APIs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To access certain features of our Services, you must register for an account. You agree to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and account</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You agree not to use our Services to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Transmit malware, viruses, or harmful code</li>
            <li>Engage in cryptocurrency mining without authorization</li>
            <li>Conduct illegal activities or support terrorism</li>
            <li>Interfere with or disrupt our infrastructure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            For paid Services, you agree to pay all fees according to the pricing and payment terms presented to you. All payments are non-refundable unless otherwise specified. We reserve the right to change our pricing with 30 days notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content, features, and functionality of our Services are owned by Kenya AI Compute and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of any content you upload or create using our Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Service Level Agreement</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strive to maintain 99.9% uptime for our compute services. Specific SLA terms, including remedies for downtime, are outlined in individual service agreements. Force majeure events are excluded from SLA calculations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by law, Kenya AI Compute shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to indemnify and hold harmless Kenya AI Compute and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may terminate or suspend your access to our Services immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use the Services will cease immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Nairobi, Kenya.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through our Services. Continued use after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about these Terms, please contact us at:
          </p>
          <div className="mt-4 p-4 rounded-lg bg-muted">
            <p className="font-medium">Kenya AI Compute Ltd.</p>
            <p className="text-muted-foreground">Email: legal@kenyaaicompute.com</p>
            <p className="text-muted-foreground">Address: Nairobi, Kenya</p>
          </div>
        </section>
      </div>

      <div className="mt-12 flex gap-4">
        <Link href={`/${locale}/legal/privacy`} className="text-primary hover:underline">
          Privacy Policy →
        </Link>
        <Link href={`/${locale}/legal/cookies`} className="text-primary hover:underline">
          Cookie Policy →
        </Link>
      </div>
    </div>
  );
}
