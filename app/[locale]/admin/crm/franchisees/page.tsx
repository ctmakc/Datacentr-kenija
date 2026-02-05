"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Plus, Search, Filter, MoreVertical, Mail, Phone,
  MapPin, Calendar, Edit, Trash2, Eye, Download, X
} from "lucide-react";

interface Franchisee {
  id: string;
  name: string;
  email: string;
  phone: string;
  region: string;
  status: "active" | "pending" | "suspended";
  joinDate: string;
  revenue: number;
  downline: number;
}

export default function FranchiseesPage() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const franchisees: Franchisee[] = [
    { id: "F001", name: "John Smith", email: "john@example.com", phone: "+254 712 345 678", region: "Nairobi", status: "active", joinDate: "2024-10-15", revenue: 45000, downline: 23 },
    { id: "F002", name: "Sarah Chen", email: "sarah@example.com", phone: "+254 723 456 789", region: "Mombasa", status: "pending", joinDate: "2025-01-20", revenue: 0, downline: 0 },
    { id: "F003", name: "Mike Johnson", email: "mike@example.com", phone: "+254 734 567 890", region: "Kisumu", status: "active", joinDate: "2024-11-05", revenue: 32000, downline: 15 },
    { id: "F004", name: "Lisa Wang", email: "lisa@example.com", phone: "+254 745 678 901", region: "Nakuru", status: "active", joinDate: "2024-09-22", revenue: 58000, downline: 31 },
    { id: "F005", name: "David Ochieng", email: "david@example.com", phone: "+254 756 789 012", region: "Eldoret", status: "suspended", joinDate: "2024-08-10", revenue: 12000, downline: 8 },
  ];

  const stats = [
    { label: "Total Franchisees", value: franchisees.length },
    { label: "Active", value: franchisees.filter(f => f.status === "active").length },
    { label: "Pending", value: franchisees.filter(f => f.status === "pending").length },
    { label: "Total Revenue", value: `$${franchisees.reduce((a, b) => a + b.revenue, 0).toLocaleString()}` },
  ];

  const filteredFranchisees = franchisees.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
                         f.email.toLowerCase().includes(search.toLowerCase()) ||
                         f.region.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || f.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-1 w-full sm:w-auto">
          <div className="relative flex-1 sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search franchisees..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-3 py-2 rounded-lg border bg-background text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-muted">
            <Download className="h-4 w-4" /> Export
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" /> Add Franchisee
          </button>
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">Franchisee</th>
                  <th className="text-left p-4 font-medium">Region</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Join Date</th>
                  <th className="text-left p-4 font-medium">Revenue</th>
                  <th className="text-left p-4 font-medium">Downline</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredFranchisees.map((franchisee) => (
                  <tr key={franchisee.id} className="hover:bg-muted/30">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {franchisee.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{franchisee.name}</p>
                          <p className="text-sm text-muted-foreground">{franchisee.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {franchisee.region}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant={
                        franchisee.status === "active" ? "default" :
                        franchisee.status === "pending" ? "secondary" : "destructive"
                      }>
                        {franchisee.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{franchisee.joinDate}</td>
                    <td className="p-4 font-medium">${franchisee.revenue.toLocaleString()}</td>
                    <td className="p-4 text-sm">{franchisee.downline} members</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-muted rounded-lg">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded-lg">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded-lg text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Add New Franchisee</CardTitle>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-muted rounded-lg">
                <X className="h-4 w-4" />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input placeholder="Smith" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input placeholder="+254 7XX XXX XXX" />
              </div>
              <div className="space-y-2">
                <Label>Region</Label>
                <select className="w-full px-3 py-2 rounded-lg border bg-background">
                  <option>Nairobi</option>
                  <option>Mombasa</option>
                  <option>Kisumu</option>
                  <option>Nakuru</option>
                  <option>Eldoret</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Sponsor ID (optional)</Label>
                <Input placeholder="F001" />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-muted"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  Add Franchisee
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
