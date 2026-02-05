"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const footerLinks = {
    company: [
      { name: tNav("about"), href: `/${locale}/about` },
      { name: tNav("project"), href: `/${locale}/project` },
      { name: tNav("datacenter"), href: `/${locale}/datacenter` },
      { name: tNav("careers"), href: `/${locale}/careers` },
    ],
    resources: [
      { name: tNav("compute"), href: `/${locale}/compute` },
      { name: tNav("investors"), href: `/${locale}/investors` },
      { name: tNav("partners"), href: `/${locale}/partners` },
      { name: tNav("news"), href: `/${locale}/news` },
    ],
    legal: [
      { name: t("privacy"), href: `/${locale}/privacy` },
      { name: t("terms"), href: `/${locale}/terms` },
      { name: t("cookies"), href: `/${locale}/cookies` },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand and description */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-semibold">Kenya AI Compute</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {t("description")}
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@kenyaaicompute.com" className="hover:text-primary">
                  info@kenyaaicompute.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold">{t("company")}</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold">{t("resources")}</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold">{t("newsletter.title")}</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("newsletter.description")}
            </p>
            <form className="mt-4 flex flex-col gap-2">
              <Input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="bg-background"
              />
              <Button type="submit" size="sm">
                {t("newsletter.subscribe")}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kenya AI Compute. {t("copyright")}
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
