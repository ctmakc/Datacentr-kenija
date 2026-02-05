"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Server, Cpu, Activity, DollarSign, Clock, BarChart3,
  Bell, Settings, LogOut, ChevronRight, Plus, Power,
  Building2, Gauge, HardDrive, Network, CreditCard, FileText
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CustomerDashboard() {
  const params = useParams();
  const locale = params.locale as string;
  const [activeTab, setActiveTab] = useState("overview");

  const accountInfo = {
    company: "AI Research Labs",
    plan: "Enterprise",
    balance: 2450.00,
    usage: 1847.50,
  };

  const activeInstances = [
    { id: "gpu-001", type: "NVIDIA H100", status: "running", uptime: "5d 12h", cost: "$45.60/hr", utilization: 87 },
    { id: "gpu-002", type: "NVIDIA A100", status: "running", uptime: "3d 8h", cost: "$32.40/hr", utilization: 92 },
    { id: "gpu-003", type: "NVIDIA A100", status: "stopped", uptime: "-", cost: "-", utilization: 0 },
    { id: "cpu-001", type: "AMD EPYC 64C", status: "running", uptime: "12d 4h", cost: "$8.50/hr", utilization: 45 },
  ];

  const usageHistory = [
    { date: "Feb 5", compute: 890, storage: 45, network: 12 },
    { date: "Feb 4", compute: 920, storage: 45, network: 15 },
    { date: "Feb 3", compute: 780, storage: 44, network: 11 },
    { date: "Feb 2", compute: 850, storage: 44, network: 13 },
    { date: "Feb 1", compute: 910, storage: 43, network: 14 },
  ];

  const invoices = [
    { id: "INV-2025-001", date: "Jan 2025", amount: 4520.00, status: "paid" },
    { id: "INV-2024-012", date: "Dec 2024", amount: 3890.00, status: "paid" },
    { id: "INV-2024-011", date: "Nov 2024", amount: 4100.00, status: "paid" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "instances", label: "Instances", icon: Server },
    { id: "billing", label: "Billing", icon: CreditCard },
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
            <Badge variant="outline">Customer Portal</Badge>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-muted rounded-lg">
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                <span className="text-sm font-medium text-green-600">AI</span>
              </div>
              <span className="text-sm font-medium hidden sm:block">{accountInfo.company}</span>
            </div>
            <Link href={`/${locale}/portal/login`} className="p-2 hover:bg-muted rounded-lg">
              <LogOut className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Welcome */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Compute Dashboard</h1>
            <p className="text-muted-foreground">Manage your GPU/CPU instances and monitor usage.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4" /> New Instance
          </button>
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
            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Active Instances</span>
                    <Server className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">of 4 total</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Current Usage</span>
                    <Activity className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="text-2xl font-bold">${accountInfo.usage.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">this billing period</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Account Balance</span>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold">${accountInfo.balance.toFixed(2)}</p>
                  <p className="text-xs text-green-500">Credit available</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Avg. Utilization</span>
                    <Gauge className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold">74%</p>
                  <p className="text-xs text-muted-foreground">across all GPUs</p>
                </CardContent>
              </Card>
            </div>

            {/* Active Instances */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active Instances</CardTitle>
                    <CardDescription>Your running compute resources</CardDescription>
                  </div>
                  <button className="text-sm text-primary hover:underline">View All</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-sm">
                        <th className="pb-3 font-medium">Instance</th>
                        <th className="pb-3 font-medium">Type</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Uptime</th>
                        <th className="pb-3 font-medium">Utilization</th>
                        <th className="pb-3 font-medium">Cost</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {activeInstances.map((instance) => (
                        <tr key={instance.id} className="text-sm">
                          <td className="py-4 font-mono">{instance.id}</td>
                          <td className="py-4">{instance.type}</td>
                          <td className="py-4">
                            <Badge variant={instance.status === "running" ? "default" : "secondary"} className={instance.status === "running" ? "bg-green-500" : ""}>
                              {instance.status}
                            </Badge>
                          </td>
                          <td className="py-4">{instance.uptime}</td>
                          <td className="py-4">
                            {instance.utilization > 0 && (
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                                  <div className={`h-full ${instance.utilization > 80 ? "bg-green-500" : instance.utilization > 50 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${instance.utilization}%` }} />
                                </div>
                                <span>{instance.utilization}%</span>
                              </div>
                            )}
                          </td>
                          <td className="py-4">{instance.cost}</td>
                          <td className="py-4">
                            <button className="p-1 hover:bg-muted rounded">
                              <Power className={`h-4 w-4 ${instance.status === "running" ? "text-red-500" : "text-green-500"}`} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Usage Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Usage This Week</CardTitle>
                <CardDescription>Compute, storage, and network usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usageHistory.map((day) => (
                    <div key={day.date} className="flex items-center gap-4">
                      <span className="w-16 text-sm text-muted-foreground">{day.date}</span>
                      <div className="flex-1 flex gap-1">
                        <div className="h-6 bg-primary rounded" style={{ width: `${day.compute / 10}%` }} title={`Compute: $${day.compute}`} />
                        <div className="h-6 bg-secondary rounded" style={{ width: `${day.storage}%` }} title={`Storage: $${day.storage}`} />
                        <div className="h-6 bg-muted-foreground rounded" style={{ width: `${day.network * 2}%` }} title={`Network: $${day.network}`} />
                      </div>
                      <span className="w-20 text-sm font-medium text-right">${(day.compute + day.storage + day.network).toFixed(0)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-primary" />
                    <span className="text-muted-foreground">Compute</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-secondary" />
                    <span className="text-muted-foreground">Storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-muted-foreground" />
                    <span className="text-muted-foreground">Network</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "instances" && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Instances</CardTitle>
                  <CardDescription>Manage your compute resources</CardDescription>
                </div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  <Plus className="h-4 w-4" /> Create Instance
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeInstances.map((instance) => (
                  <div key={instance.id} className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${instance.status === "running" ? "bg-green-500/10" : "bg-muted"}`}>
                          <Cpu className={`h-5 w-5 ${instance.status === "running" ? "text-green-500" : "text-muted-foreground"}`} />
                        </div>
                        <div>
                          <p className="font-mono font-medium">{instance.id}</p>
                          <p className="text-sm text-muted-foreground">{instance.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={instance.status === "running" ? "default" : "secondary"} className={instance.status === "running" ? "bg-green-500" : ""}>
                          {instance.status}
                        </Badge>
                        <button className="p-2 hover:bg-muted rounded-lg">
                          <Settings className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    {instance.status === "running" && (
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Uptime</p>
                          <p className="font-medium">{instance.uptime}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Utilization</p>
                          <p className="font-medium">{instance.utilization}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Cost</p>
                          <p className="font-medium">{instance.cost}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "billing" && (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
                  <p className="text-3xl font-bold text-green-500">${accountInfo.balance.toFixed(2)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">This Month Usage</p>
                  <p className="text-3xl font-bold">${accountInfo.usage.toFixed(2)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Plan</p>
                  <p className="text-3xl font-bold">{accountInfo.plan}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted">
                      <div className="flex items-center gap-4">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{invoice.id}</p>
                          <p className="text-sm text-muted-foreground">{invoice.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">${invoice.amount.toFixed(2)}</span>
                        <Badge variant="secondary" className="bg-green-500/10 text-green-600">{invoice.status}</Badge>
                        <button className="text-primary hover:underline text-sm">Download</button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "settings" && (
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your customer account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-muted-foreground">Company</label>
                  <p className="font-medium">{accountInfo.company}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Plan</label>
                  <p className="font-medium">{accountInfo.plan}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Primary Contact</label>
                  <p className="font-medium">admin@airesearchlabs.com</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Payment Method</label>
                  <p className="font-medium">Visa ending in 4242</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
