"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Building2, Server, Handshake, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactPageProps {
  params: { locale: string };
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  const t = useTranslations("forms");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "info@kenyaaicompute.com",
      href: "mailto:info@kenyaaicompute.com",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Nairobi, Kenya",
      href: null,
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+254 XXX XXX XXX",
      href: "tel:+254000000000",
    },
  ];

  const inquiryTypes = [
    {
      icon: Building2,
      title: "Investors",
      description: "Investment opportunities and financial information",
      email: "investors@kenyaaicompute.com",
    },
    {
      icon: Server,
      title: "Compute Sales",
      description: "GPU/CPU compute and pricing inquiries",
      email: "sales@kenyaaicompute.com",
    },
    {
      icon: Handshake,
      title: "Partnerships",
      description: "Local, technical, and energy partnerships",
      email: "partners@kenyaaicompute.com",
    },
    {
      icon: Newspaper,
      title: "Media",
      description: "Press inquiries and media requests",
      email: "media@kenyaaicompute.com",
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions about our AI compute infrastructure project?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{method.title}</h3>
                  {method.href ? (
                    <a href={method.href} className="text-sm text-muted-foreground hover:text-primary">
                      {method.description}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold">Send us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-lg border bg-card p-8 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{t("sent")}</h3>
                  <p className="mt-2 text-muted-foreground">
                    We'll respond to your inquiry within 24-48 hours.
                  </p>
                  <Button className="mt-4" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("name")} *</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("email")} *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("company")}</Label>
                      <Input id="company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("phone")}</Label>
                      <Input id="phone" type="tel" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investor">Investor Relations</SelectItem>
                        <SelectItem value="compute">Compute Services</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media/Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("message")} *</Label>
                    <Textarea id="message" rows={5} required />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? t("sending") : t("submit")}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Inquiry Types */}
            <div>
              <h2 className="text-2xl font-bold">Department Contacts</h2>
              <p className="mt-2 text-muted-foreground">
                Reach out directly to the relevant team for faster response.
              </p>

              <div className="mt-8 space-y-4">
                {inquiryTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <type.icon className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                        <a
                          href={`mailto:${type.email}`}
                          className="mt-2 block text-sm font-medium text-primary hover:underline"
                        >
                          {type.email}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>East Africa Time (EAT, UTC+3)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
