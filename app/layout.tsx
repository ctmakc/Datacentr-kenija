import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenya AI Compute - Powering Africa's AI Future",
  description:
    "Enterprise-grade AI compute infrastructure in Kenya with integrated power generation. GPU/CPU compute, DePIN integration, 40% cost advantage.",
  keywords: [
    "AI compute",
    "GPU datacenter",
    "Kenya",
    "Africa",
    "DePIN",
    "cloud computing",
    "AI infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
