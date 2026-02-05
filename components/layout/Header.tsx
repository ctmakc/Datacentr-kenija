"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  locale: string;
}

const locales = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "ru", name: "Русский" },
];

export function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  const navigation = [
    {
      name: t("about"),
      href: `/${locale}/about`,
      children: [
        { name: "Vision", href: `/${locale}/about/vision` },
        { name: "Team", href: `/${locale}/about/team` },
        { name: "Story", href: `/${locale}/about/story` },
        { name: "Partners", href: `/${locale}/about/partners` },
        { name: "Roadmap", href: `/${locale}/about/roadmap` },
      ],
    },
    {
      name: t("project"),
      href: `/${locale}/project`,
      children: [
        { name: "Overview", href: `/${locale}/project/overview` },
        { name: "Location", href: `/${locale}/project/location` },
        { name: "Energy", href: `/${locale}/project/energy` },
        { name: "Phases", href: `/${locale}/project/phases` },
      ],
    },
    {
      name: t("datacenter"),
      href: `/${locale}/datacenter`,
      children: [
        { name: "Architecture", href: `/${locale}/datacenter/architecture` },
        { name: "Specifications", href: `/${locale}/datacenter/specifications` },
        { name: "Equipment", href: `/${locale}/datacenter/equipment` },
        { name: "Operations", href: `/${locale}/datacenter/operations` },
      ],
    },
    {
      name: t("compute"),
      href: `/${locale}/compute`,
      children: [
        { name: "GPU Compute", href: `/${locale}/compute/gpu` },
        { name: "CPU Compute", href: `/${locale}/compute/cpu` },
        { name: "Storage", href: `/${locale}/compute/storage` },
        { name: "DePIN", href: `/${locale}/compute/depin` },
        { name: "Pricing", href: `/${locale}/compute/pricing` },
      ],
    },
    {
      name: t("investors"),
      href: `/${locale}/investors`,
      children: [
        { name: "Opportunity", href: `/${locale}/investors/opportunity` },
        { name: "Financials", href: `/${locale}/investors/financials` },
        { name: "Structure", href: `/${locale}/investors/structure` },
        { name: "Risks", href: `/${locale}/investors/risks` },
      ],
    },
    {
      name: t("partners"),
      href: `/${locale}/partners`,
    },
    {
      name: t("contact"),
      href: `/${locale}/contact`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">K</span>
          </div>
          <span className="hidden font-semibold sm:inline-block">
            Kenya AI Compute
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="h-9">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-48 gap-1 p-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-2 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              Overview
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {child.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-x-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline-block uppercase">
                  {locale}
                </span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locales.map((loc) => (
                <DropdownMenuItem key={loc.code} asChild>
                  <Link href={switchLocale(loc.code)}>{loc.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Portal Login */}
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <Link href={`/${locale}/portal/login`}>{t("login")}</Link>
          </Button>

          {/* Get Started CTA */}
          <Button size="sm" asChild className="hidden sm:flex">
            <Link href={`/${locale}/contact`}>{t("getStarted")}</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t lg:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1 text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link href={`/${locale}/portal/login`}>{t("login")}</Link>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <Link href={`/${locale}/contact`}>{t("getStarted")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
