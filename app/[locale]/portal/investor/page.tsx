"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3, DollarSign, TrendingUp, FileText, Calendar,
  Download, Bell, Settings, LogOut, ChevronRight, Clock,
  Building2, Users, Zap, ArrowUpRight, ArrowDownRight
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function InvestorDashboard() {
  const params = useParams();
  const locale = params.locale as string;
  const [activeTab, setActiveTab] = useState("overview");

  const investmentSummary = {
    totalInvested: 500000,
    currentValue: 612500,
    equityStake: 2.22,
    returnPercent: 22.5,
  };

  const recentUpdates = [
    { title: "Q4 2024 Investor Report Available", date: "Jan 15, 2025", type: "report" },
    { title: "Construction Phase Begins Q2 2025", date: "Jan 10, 2025", type: "milestone" },
    { title: "New Equipment Partnership Signed", date: "Dec 28, 2024", type: "news" },
  ];

  const documents = [
    { name: "Investment Agreement", date: "Oct 2024", type: "Legal" },
    { name: "Q4 2024 Investor Report", date: "Jan 2025", type: "Report" },
    { name: "Financial Model v2.1", date: "Dec 2024", type: "Financial" },
    { name: "Technical Specifications", date: "Nov 2024", type: "Technical" },
  ];

  const milestones = [
    { name: "Seed Funding Closed", status: "completed", date: "Oct 2024" },
    { name: "Site Acquisition", status: "completed", date: "Nov 2024" },
    { name: "Permits Approved", status: "in-progress", date: "Q1 2025" },
    { name: "Construction Start", status: "pending", date: "Q2 2025" },
    { name: "Equipment Installation", status: "pending", date: "Q4 2025" },
    { name: "Operations Launch", status: "pending", date: "Q1 2026" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "updates", label: "Updates", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold">Kenya AI Compute</span>
            </Link>
            <Badge>Investor Portal</Badge>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-muted rounded-lg">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
              <span className="text-sm font-medium hidden sm:block">John Doe</span>
            </div>
            <Link href={`/${locale}/portal/login`} className="p-2 hover:bg-muted rounded-lg">
              <LogOut className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's an overview of your investment in Kenya AI Compute.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <>
            {/* Investment Summary */}
            <div className="grid gap-4 md:grid-cols-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Total Invested</span>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold">${investmentSummary.totalInvested.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Current Value</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold">${investmentSummary.currentValue.toLocaleString()}</p>
                  <p className="text-sm text-green-500 flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3" />
                    +{investmentSummary.returnPercent}%
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Equity Stake</span>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold">{investmentSummary.equityStake}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Project Status</span>
                    <Zap className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="text-2xl font-bold">Phase 2</p>
                  <p className="text-sm text-muted-foreground">Development</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Milestones */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Project Milestones</CardTitle>
                  <CardDescription>Track development progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={milestone.name} className="flex items-center gap-4">
                        <div className={`h-3 w-3 rounded-full ${
                          milestone.status === "completed" ? "bg-green-500" :
                          milestone.status === "in-progress" ? "bg-amber-500" : "bg-muted"
                        }`} />
                        <div className="flex-1">
                          <p className={`font-medium ${milestone.status === "completed" ? "text-muted-foreground line-through" : ""}`}>
                            {milestone.name}
                          </p>
                        </div>
                        <Badge variant={
                          milestone.status === "completed" ? "secondary" :
                          milestone.status === "in-progress" ? "default" : "outline"
                        }>
                          {milestone.date}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Updates */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                  <CardDescription>Latest news and reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUpdates.map((update) => (
                      <div key={update.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
                        <div className={`mt-1 h-2 w-2 rounded-full ${
                          update.type === "report" ? "bg-blue-500" :
                          update.type === "milestone" ? "bg-green-500" : "bg-amber-500"
                        }`} />
                        <div>
                          <p className="font-medium text-sm">{update.title}</p>
                          <p className="text-xs text-muted-foreground">{update.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 text-sm text-primary hover:underline flex items-center justify-center gap-1">
                    View All Updates <ChevronRight className="h-3 w-3" />
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* ROI Calculator Link */}
            <Card className="mt-6 border-primary/20 bg-primary/5">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Model Your Returns</h3>
                  <p className="text-sm text-muted-foreground">Use our interactive calculator to project your investment returns.</p>
                </div>
                <Link
                  href={`/${locale}/investors/calculator`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  ROI Calculator <ChevronRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "documents" && (
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Access your investment documents and reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted">
                    <div className="flex items-center gap-4">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{doc.type}</Badge>
                      <button className="p-2 hover:bg-background rounded-lg">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "updates" && (
          <Card>
            <CardHeader>
              <CardTitle>Updates & Notifications</CardTitle>
              <CardDescription>Stay informed about project developments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...recentUpdates, ...recentUpdates].map((update, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className={`mt-1 p-2 rounded-lg ${
                      update.type === "report" ? "bg-blue-500/10" :
                      update.type === "milestone" ? "bg-green-500/10" : "bg-amber-500/10"
                    }`}>
                      {update.type === "report" ? <FileText className="h-4 w-4 text-blue-500" /> :
                       update.type === "milestone" ? <Calendar className="h-4 w-4 text-green-500" /> :
                       <Bell className="h-4 w-4 text-amber-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{update.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{update.date}</p>
                    </div>
                    <Badge variant="outline">{update.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "settings" && (
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your investor account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Notification Preferences</h3>
                <div className="space-y-3">
                  {["Email updates for new reports", "SMS alerts for milestones", "Weekly digest"].map((pref) => (
                    <label key={pref} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-muted-foreground" />
                      <span className="text-sm">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium">Contact Information</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <p className="font-medium">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Phone</label>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
