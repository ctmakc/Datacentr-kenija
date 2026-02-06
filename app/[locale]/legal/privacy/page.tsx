import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Privacy Policy | Kenya AI Compute",
    description: "How Kenya AI Compute collects, uses, and protects your personal information",
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lastUpdated = "February 1, 2025";

  return (
    <div className="container py-12 md:py-20 max-w-4xl">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href={`/${locale}`} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground">Privacy Policy</span>
      </nav>

      <div className="mb-12">
        <Badge className="mb-4">Legal</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            Kenya AI Compute ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>
        </CardContent>
      </Card>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Name and contact information (email, phone, address)</li>
            <li>Account credentials</li>
            <li>Payment and billing information</li>
            <li>Company and business information</li>
            <li>Identity verification documents (for KYC compliance)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Usage data and analytics</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use collected information for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Providing and maintaining our services</li>
            <li>Processing transactions and sending related information</li>
            <li>Communicating with you about updates, offers, and support</li>
            <li>Improving and personalizing user experience</li>
            <li>Compliance with legal obligations</li>
            <li>Fraud prevention and security</li>
            <li>Analytics and business intelligence</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Service Providers:</strong> Third parties that help us operate our business</li>
            <li><strong>Partners:</strong> With your consent, for joint offerings</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
            <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information, including encryption, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When no longer needed, we securely delete or anonymize your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
            <li><strong>Erasure:</strong> Request deletion of your data</li>
            <li><strong>Restriction:</strong> Limit how we use your data</li>
            <li><strong>Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing activities</li>
            <li><strong>Withdraw Consent:</strong> Where processing is based on consent</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            To exercise these rights, contact us at privacy@kenyaaicompute.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information may be transferred to and processed in countries other than Kenya. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and adequacy decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our Services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our Services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions or concerns about this Privacy Policy or our data practices:
          </p>
          <div className="mt-4 p-4 rounded-lg bg-muted">
            <p className="font-medium">Data Protection Officer</p>
            <p className="text-muted-foreground">Kenya AI Compute Ltd.</p>
            <p className="text-muted-foreground">Email: privacy@kenyaaicompute.com</p>
            <p className="text-muted-foreground">Address: Nairobi, Kenya</p>
          </div>
        </section>
      </div>

      <div className="mt-12 flex gap-4">
        <Link href={`/${locale}/legal/terms`} className="text-primary hover:underline">
          ← Terms of Service
        </Link>
        <Link href={`/${locale}/legal/cookies`} className="text-primary hover:underline">
          Cookie Policy →
        </Link>
      </div>
    </div>
  );
}
