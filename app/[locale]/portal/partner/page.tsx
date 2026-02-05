"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Handshake, FileText, MessageSquare, Calendar, Users,
  Bell, Settings, LogOut, ChevronRight, CheckCircle2,
  Building2, Clock, Target, ExternalLink
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PartnerDashboard() {
  const params = useParams();
  const locale = params.locale as string;
  const [activeTab, setActiveTab] = useState("overview");

  const partnerInfo = {
    company: "TechPower Energy Ltd",
    type: "Energy Partner",
    status: "Active",
    since: "September 2024",
  };

  const activeProjects = [
    { name: "Solar Installation Phase 1", status: "in-progress", progress: 65, deadline: "Mar 2025" },
    { name: "Battery Storage System", status: "planning", progress: 20, deadline: "Q2 2025" },
    { name: "Grid Connection Agreement", status: "completed", progress: 100, deadline: "Completed" },
  ];

  const upcomingMeetings = [
    { title: "Weekly Progress Review", date: "Feb 6, 2025", time: "10:00 AM", type: "recurring" },
    { title: "Technical Specification Review", date: "Feb 12, 2025", time: "2:00 PM", type: "one-time" },
    { title: "Q1 Planning Session", date: "Feb 20, 2025", time: "9:00 AM", type: "one-time" },
  ];

  const documents = [
    { name: "Partnership Agreement", date: "Sep 2024", status: "signed" },
    { name: "Technical Requirements v2", date: "Jan 2025", status: "review" },
    { name: "Project Timeline", date: "Dec 2024", status: "signed" },
    { name: "Compliance Checklist", date: "Jan 2025", status: "pending" },
  ];

  const messages = [
    { from: "Project Manager", subject: "Equipment delivery update", time: "2 hours ago", unread: true },
    { from: "Technical Team", subject: "Specification approval needed", time: "Yesterday", unread: true },
    { from: "Finance", subject: "Q4 invoice processed", time: "3 days ago", unread: false },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Target },
    { id: "projects", label: "Projects", icon: Handshake },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "messages", label: "Messages", icon: MessageSquare },
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
            <Badge variant="secondary">Partner Portal</Badge>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-muted rounded-lg">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </button>
            <button className="relative p-2 hover:bg-muted rounded-lg">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary rounded-full text-xs text-primary-foreground flex items-center justify-center">2</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-sm font-medium">TP</span>
              </div>
              <span className="text-sm font-medium hidden sm:block">{partnerInfo.company}</span>
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
            <h1 className="text-2xl font-bold mb-2">Partner Dashboard</h1>
            <p className="text-muted-foreground">Manage your partnership with Kenya AI Compute.</p>
          </div>
          <div className="text-right">
            <Badge className="mb-1">{partnerInfo.type}</Badge>
            <p className="text-sm text-muted-foreground">Partner since {partnerInfo.since}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-background hover:bg-muted"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
              {tab.id === "messages" && <span className="h-5 w-5 bg-primary rounded-full text-xs text-primary-foreground flex items-center justify-center">2</span>}
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
                    <span className="text-sm text-muted-foreground">Active Projects</span>
                    <Handshake className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold">3</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Pending Documents</span>
                    <FileText className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="text-2xl font-bold">2</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Upcoming Meetings</span>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold">3</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Unread Messages</span>
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">2</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Projects */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription>Current partnership initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeProjects.map((project) => (
                      <div key={project.name} className="p-4 rounded-lg border">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{project.name}</h4>
                          <Badge variant={
                            project.status === "completed" ? "secondary" :
                            project.status === "in-progress" ? "default" : "outline"
                          }>
                            {project.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div
                              className={`h-full ${project.status === "completed" ? "bg-green-500" : "bg-primary"}`}
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Deadline</span>
                            <span>{project.deadline}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Meetings */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Meetings</CardTitle>
                  <CardDescription>Scheduled calls and reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingMeetings.map((meeting) => (
                      <div key={meeting.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
                        <div className="mt-1 p-2 rounded-lg bg-primary/10">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{meeting.title}</p>
                          <p className="text-xs text-muted-foreground">{meeting.date} at {meeting.time}</p>
                        </div>
                        {meeting.type === "recurring" && (
                          <Badge variant="outline" className="text-xs">Recurring</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 text-sm text-primary hover:underline flex items-center justify-center gap-1">
                    View Calendar <ChevronRight className="h-3 w-3" />
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Messages */}
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Messages</CardTitle>
                  <button className="text-sm text-primary hover:underline">View All</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-lg ${msg.unread ? "bg-primary/5 border border-primary/20" : "hover:bg-muted"}`}>
                      <div className={`h-2 w-2 rounded-full ${msg.unread ? "bg-primary" : "bg-transparent"}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{msg.from}</span>
                          {msg.unread && <Badge className="text-xs">New</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{msg.subject}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "projects" && (
          <Card>
            <CardHeader>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>Complete list of partnership projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.name} className="p-6 rounded-lg border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">Deadline: {project.deadline}</p>
                      </div>
                      <Badge variant={project.status === "completed" ? "secondary" : project.status === "in-progress" ? "default" : "outline"}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-muted overflow-hidden">
                        <div className={`h-full ${project.status === "completed" ? "bg-green-500" : "bg-primary"}`} style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "documents" && (
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Partnership agreements and project documents</CardDescription>
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
                      <Badge variant={doc.status === "signed" ? "secondary" : doc.status === "review" ? "default" : "outline"}>
                        {doc.status}
                      </Badge>
                      <button className="text-primary hover:underline text-sm">View</button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "messages" && (
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Communication with Kenya AI Compute team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[...messages, ...messages].map((msg, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-lg border ${msg.unread ? "bg-primary/5 border-primary/20" : ""}`}>
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{msg.from}</span>
                        {msg.unread && <Badge className="text-xs">New</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{msg.subject}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "settings" && (
          <Card>
            <CardHeader>
              <CardTitle>Partner Settings</CardTitle>
              <CardDescription>Manage your partner account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Company Information</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-muted-foreground">Company Name</label>
                    <p className="font-medium">{partnerInfo.company}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Partner Type</label>
                    <p className="font-medium">{partnerInfo.type}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium">Primary Contact</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-muted-foreground">Name</label>
                    <p className="font-medium">Sarah Johnson</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <p className="font-medium">sarah@techpower.com</p>
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
