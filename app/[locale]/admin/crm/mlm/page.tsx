"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Network, Users, DollarSign, TrendingUp, Search,
  ChevronRight, ChevronDown, User, Award, Gift
} from "lucide-react";

interface MLMMember {
  id: string;
  name: string;
  level: number;
  sponsor: string | null;
  directReferrals: number;
  totalNetwork: number;
  monthlyEarnings: number;
  rank: string;
  children?: MLMMember[];
}

export default function MLMPage() {
  const [expandedNodes, setExpandedNodes] = useState<string[]>(["M001"]);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const mlmStats = {
    totalMembers: 3842,
    activeMembers: 3124,
    totalCommissions: 284500,
    avgNetworkSize: 8.2,
  };

  const ranks = [
    { name: "Bronze", members: 2100, minNetwork: 0, commission: "5%" },
    { name: "Silver", members: 1200, minNetwork: 10, commission: "7%" },
    { name: "Gold", members: 420, minNetwork: 50, commission: "10%" },
    { name: "Platinum", members: 98, minNetwork: 200, commission: "12%" },
    { name: "Diamond", members: 24, minNetwork: 500, commission: "15%" },
  ];

  const mlmTree: MLMMember[] = [
    {
      id: "M001",
      name: "Company (Root)",
      level: 0,
      sponsor: null,
      directReferrals: 15,
      totalNetwork: 3842,
      monthlyEarnings: 0,
      rank: "Root",
      children: [
        {
          id: "M002",
          name: "John Smith",
          level: 1,
          sponsor: "M001",
          directReferrals: 23,
          totalNetwork: 847,
          monthlyEarnings: 12500,
          rank: "Diamond",
          children: [
            { id: "M006", name: "Alice Brown", level: 2, sponsor: "M002", directReferrals: 12, totalNetwork: 156, monthlyEarnings: 3200, rank: "Gold" },
            { id: "M007", name: "Bob Wilson", level: 2, sponsor: "M002", directReferrals: 8, totalNetwork: 89, monthlyEarnings: 1800, rank: "Silver" },
          ],
        },
        {
          id: "M003",
          name: "Sarah Chen",
          level: 1,
          sponsor: "M001",
          directReferrals: 31,
          totalNetwork: 1542,
          monthlyEarnings: 18900,
          rank: "Diamond",
          children: [
            { id: "M008", name: "Wei Zhang", level: 2, sponsor: "M003", directReferrals: 18, totalNetwork: 245, monthlyEarnings: 4500, rank: "Platinum" },
            { id: "M009", name: "Lisa Wang", level: 2, sponsor: "M003", directReferrals: 15, totalNetwork: 198, monthlyEarnings: 3800, rank: "Gold" },
          ],
        },
        {
          id: "M004",
          name: "Mike Johnson",
          level: 1,
          sponsor: "M001",
          directReferrals: 15,
          totalNetwork: 982,
          monthlyEarnings: 9800,
          rank: "Platinum",
        },
        {
          id: "M005",
          name: "David Ochieng",
          level: 1,
          sponsor: "M001",
          directReferrals: 8,
          totalNetwork: 471,
          monthlyEarnings: 5200,
          rank: "Gold",
        },
      ],
    },
  ];

  const topEarners = [
    { name: "Sarah Chen", earnings: 18900, network: 1542, rank: "Diamond" },
    { name: "John Smith", earnings: 12500, network: 847, rank: "Diamond" },
    { name: "Mike Johnson", earnings: 9800, network: 982, rank: "Platinum" },
    { name: "David Ochieng", earnings: 5200, network: 471, rank: "Gold" },
    { name: "Wei Zhang", earnings: 4500, network: 245, rank: "Platinum" },
  ];

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );
  };

  const renderTreeNode = (node: MLMMember, depth: number = 0) => {
    const isExpanded = expandedNodes.includes(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} style={{ marginLeft: `${depth * 24}px` }}>
        <div
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
            selectedMember === node.id ? "bg-primary/10 border border-primary" : "hover:bg-muted"
          }`}
          onClick={() => setSelectedMember(node.id)}
        >
          {hasChildren ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(node.id);
              }}
              className="p-1 hover:bg-muted rounded"
            >
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          ) : (
            <div className="w-6" />
          )}

          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            {node.level === 0 ? (
              <Network className="h-5 w-5 text-primary" />
            ) : (
              <span className="text-sm font-medium">{node.name.split(" ").map(n => n[0]).join("")}</span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{node.name}</p>
            <p className="text-sm text-muted-foreground">
              {node.directReferrals} direct • {node.totalNetwork} total
            </p>
          </div>

          <Badge variant={
            node.rank === "Diamond" ? "default" :
            node.rank === "Platinum" ? "secondary" :
            node.rank === "Gold" ? "outline" : "outline"
          }>
            {node.rank}
          </Badge>

          {node.monthlyEarnings > 0 && (
            <span className="text-sm font-medium text-green-500">
              ${node.monthlyEarnings.toLocaleString()}/mo
            </span>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1">
            {node.children!.map((child) => renderTreeNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Members</p>
                <p className="text-2xl font-bold">{mlmStats.totalMembers.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Active Members</p>
            <p className="text-2xl font-bold">{mlmStats.activeMembers.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">{((mlmStats.activeMembers / mlmStats.totalMembers) * 100).toFixed(1)}% active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Commissions</p>
            <p className="text-2xl font-bold">${mlmStats.totalCommissions.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Avg Network Size</p>
            <p className="text-2xl font-bold">{mlmStats.avgNetworkSize}</p>
            <p className="text-sm text-muted-foreground">Members per account</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Network Tree */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Network Structure</CardTitle>
              <CardDescription>MLM hierarchy visualization</CardDescription>
            </div>
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 max-h-[500px] overflow-y-auto">
              {mlmTree.map((node) => renderTreeNode(node))}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Earners */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-500" />
                Top Earners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topEarners.map((earner, i) => (
                  <div key={earner.name} className="flex items-center gap-3">
                    <span className="text-lg font-bold text-muted-foreground w-6">{i + 1}</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{earner.name}</p>
                      <p className="text-xs text-muted-foreground">{earner.network} network</p>
                    </div>
                    <span className="text-sm font-medium text-green-500">${earner.earnings.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rank Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Rank Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {ranks.map((rank) => (
                  <div key={rank.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{rank.name}</Badge>
                      <span className="text-muted-foreground">{rank.commission}</span>
                    </div>
                    <span className="font-medium">{rank.members}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Commission Rules */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-green-500" />
                Commission Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level 1 (Direct)</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level 2</span>
                  <span className="font-medium">5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level 3</span>
                  <span className="font-medium">3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level 4</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level 5+</span>
                  <span className="font-medium">1%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
