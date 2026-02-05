"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users, DollarSign, FileText, TrendingUp, ArrowUpRight,
  ArrowDownRight, Activity, Coins, Network, Eye, Bot
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AdminDashboard() {
  const params = useParams();
  const locale = params.locale as string;

  const stats = [
    { label: "Total Franchisees", value: "47", change: "+5", trend: "up", icon: Users },
    { label: "Token Holders", value: "1,284", change: "+127", trend: "up", icon: Coins },
    { label: "MLM Network Size", value: "3,842", change: "+312", trend: "up", icon: Network },
    { label: "Monthly Revenue", value: "$284K", change: "+18%", trend: "up", icon: DollarSign },
  ];

  const recentFranchisees = [
    { name: "John Smith", region: "Nairobi", status: "active", joined: "2 days ago" },
    { name: "Sarah Chen", region: "Mombasa", status: "pending", joined: "5 days ago" },
    { name: "Mike Johnson", region: "Kisumu", status: "active", joined: "1 week ago" },
  ];

  const contentStats = [
    { label: "Published Articles", value: 45 },
    { label: "AI Generated", value: 28 },
    { label: "Pending Review", value: 7 },
    { label: "Scheduled", value: 12 },
  ];

  const recentActivity = [
    { action: "New franchisee registered", user: "John Smith", time: "2 hours ago" },
    { action: "AI content generated", user: "System", time: "4 hours ago" },
    { action: "Token purchase", user: "Wei Zhang", time: "6 hours ago" },
    { action: "MLM level upgrade", user: "Sarah Chen", time: "1 day ago" },
    { action: "Content published", user: "Admin", time: "1 day ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className={`text-sm flex items-center gap-1 mt-1 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Franchisees */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Franchisees</CardTitle>
              <CardDescription>Latest franchise applications</CardDescription>
            </div>
            <Link href={`/${locale}/admin/crm/franchisees`} className="text-sm text-primary hover:underline">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFranchisees.map((franchisee) => (
                <div key={franchisee.name} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">{franchisee.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="font-medium">{franchisee.name}</p>
                      <p className="text-sm text-muted-foreground">{franchisee.region}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={franchisee.status === "active" ? "default" : "secondary"}>
                      {franchisee.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{franchisee.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content & AI Stats */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Content Generator
              </CardTitle>
              <CardDescription>Automated content creation status</CardDescription>
            </div>
            <Link href={`/${locale}/admin/content`} className="text-sm text-primary hover:underline">
              Open
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {contentStats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg border border-dashed">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Gemini AI Integration</p>
                  <p className="text-sm text-muted-foreground">Auto-generate news, articles & social posts</p>
                </div>
                <Badge className="bg-green-500">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>MLM Network Overview</CardTitle>
            <CardDescription>Multi-level marketing structure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Level 1 (Direct)</span>
                <span className="font-semibold">847 members</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Level 2</span>
                <span className="font-semibold">1,542 members</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Level 3</span>
                <span className="font-semibold">982 members</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Level 4+</span>
                <span className="font-semibold">471 members</span>
              </div>
              <Link
                href={`/${locale}/admin/crm/mlm`}
                className="block text-center text-sm text-primary hover:underline"
              >
                View Full Structure →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href={`/${locale}/admin/crm/franchisees`} className="p-4 rounded-lg border hover:bg-muted transition-colors">
              <Users className="h-6 w-6 text-primary mb-2" />
              <p className="font-medium">Add Franchisee</p>
              <p className="text-sm text-muted-foreground">Register new franchise</p>
            </Link>
            <Link href={`/${locale}/admin/content`} className="p-4 rounded-lg border hover:bg-muted transition-colors">
              <Bot className="h-6 w-6 text-purple-500 mb-2" />
              <p className="font-medium">Generate Content</p>
              <p className="text-sm text-muted-foreground">AI-powered creation</p>
            </Link>
            <Link href={`/${locale}/admin/crm/tokens`} className="p-4 rounded-lg border hover:bg-muted transition-colors">
              <Coins className="h-6 w-6 text-amber-500 mb-2" />
              <p className="font-medium">Token Management</p>
              <p className="text-sm text-muted-foreground">Manage token sales</p>
            </Link>
            <Link href={`/${locale}/admin/crm/mlm`} className="p-4 rounded-lg border hover:bg-muted transition-colors">
              <Network className="h-6 w-6 text-green-500 mb-2" />
              <p className="font-medium">MLM Reports</p>
              <p className="text-sm text-muted-foreground">Network analytics</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
