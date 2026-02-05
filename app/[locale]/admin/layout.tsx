"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import {
  LayoutDashboard, Users, FileText, Coins, Network,
  Settings, Bell, LogOut, Menu, X, ChevronDown,
  Building2, Bot, FolderOpen, BarChart3, Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [crmExpanded, setCrmExpanded] = useState(true);

  const navigation = [
    { name: "Dashboard", href: `/${locale}/admin`, icon: LayoutDashboard },
    {
      name: "CRM",
      icon: Users,
      children: [
        { name: "Franchisees", href: `/${locale}/admin/crm/franchisees` },
        { name: "Tokens & Investors", href: `/${locale}/admin/crm/tokens` },
        { name: "MLM Structure", href: `/${locale}/admin/crm/mlm` },
      ],
    },
    { name: "Content", href: `/${locale}/admin/content`, icon: FileText, badge: "AI" },
    { name: "Users", href: `/${locale}/admin/users`, icon: Users },
    { name: "Settings", href: `/${locale}/admin/settings`, icon: Settings },
  ];

  const isActive = (href: string) => pathname === href;
  const isCrmActive = pathname.includes("/admin/crm");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <header className="lg:hidden border-b bg-background sticky top-0 z-50">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Admin</span>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-muted rounded-lg">
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed lg:static inset-y-0 left-0 z-40 w-64 bg-background border-r transition-transform lg:translate-x-0`}>
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="h-16 flex items-center gap-3 px-4 border-b">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold">Kenya AI Compute</p>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setCrmExpanded(!crmExpanded)}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isCrmActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          {item.name}
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${crmExpanded ? "rotate-180" : ""}`} />
                      </button>
                      {crmExpanded && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                isActive(child.href)
                                  ? "bg-primary text-primary-foreground"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                      {item.badge && (
                        <Badge className="ml-auto text-xs bg-gradient-to-r from-purple-500 to-pink-500">
                          <Sparkles className="h-3 w-3 mr-1" />
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* User */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">AD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Admin User</p>
                  <p className="text-xs text-muted-foreground">Super Admin</p>
                </div>
                <Link href={`/${locale}/portal/login`} className="p-2 hover:bg-muted rounded-lg">
                  <LogOut className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Top Bar */}
          <header className="h-16 border-b bg-background sticky top-0 z-30 hidden lg:flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold">
                {pathname.includes("/crm/franchisees") && "Franchisees"}
                {pathname.includes("/crm/tokens") && "Tokens & Investors"}
                {pathname.includes("/crm/mlm") && "MLM Structure"}
                {pathname.includes("/content") && "Content Manager"}
                {pathname.includes("/users") && "Users"}
                {pathname === `/${locale}/admin` && "Dashboard"}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-muted rounded-lg">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              </button>
              <Link href={`/${locale}`} className="text-sm text-muted-foreground hover:text-foreground">
                View Site →
              </Link>
            </div>
          </header>

          <div className="p-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
