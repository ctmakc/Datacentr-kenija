"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Coins, TrendingUp, Users, DollarSign, Search, Filter,
  ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, XCircle
} from "lucide-react";

export default function TokensPage() {
  const [activeTab, setActiveTab] = useState<"holders" | "transactions" | "settings">("holders");

  const tokenStats = {
    totalSupply: 100000000,
    circulatingSupply: 15847290,
    holders: 1284,
    price: 0.042,
    marketCap: 665586,
    change24h: 5.7,
  };

  const tokenHolders = [
    { address: "0x1a2b...3c4d", name: "John Smith", balance: 250000, value: 10500, percentage: 1.58, type: "investor" },
    { address: "0x5e6f...7g8h", name: "Wei Zhang", balance: 180000, value: 7560, percentage: 1.14, type: "investor" },
    { address: "0x9i0j...1k2l", name: "Sarah Chen", balance: 120000, value: 5040, percentage: 0.76, type: "franchisee" },
    { address: "0x3m4n...5o6p", name: "Mike Johnson", balance: 95000, value: 3990, percentage: 0.60, type: "franchisee" },
    { address: "0x7q8r...9s0t", name: "Company Reserve", balance: 5000000, value: 210000, percentage: 31.54, type: "reserve" },
  ];

  const transactions = [
    { id: "TX001", type: "buy", from: "0x123...456", to: "John Smith", amount: 50000, value: 2100, status: "completed", date: "2025-02-05 14:32" },
    { id: "TX002", type: "transfer", from: "Wei Zhang", to: "Sarah Chen", amount: 10000, value: 420, status: "completed", date: "2025-02-05 12:15" },
    { id: "TX003", type: "sell", from: "Mike Johnson", to: "0x789...abc", amount: 25000, value: 1050, status: "pending", date: "2025-02-05 10:45" },
    { id: "TX004", type: "reward", from: "System", to: "Lisa Wang", amount: 5000, value: 210, status: "completed", date: "2025-02-04 18:20" },
    { id: "TX005", type: "buy", from: "0xdef...012", to: "David Ochieng", amount: 75000, value: 3150, status: "failed", date: "2025-02-04 09:10" },
  ];

  const tabs = [
    { id: "holders" as const, label: "Token Holders" },
    { id: "transactions" as const, label: "Transactions" },
    { id: "settings" as const, label: "Token Settings" },
  ];

  return (
    <div className="space-y-6">
      {/* Token Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Token Price</p>
                <p className="text-2xl font-bold">${tokenStats.price.toFixed(4)}</p>
                <p className="text-sm text-green-500 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +{tokenStats.change24h}% (24h)
                </p>
              </div>
              <Coins className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Market Cap</p>
            <p className="text-2xl font-bold">${tokenStats.marketCap.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Based on circulating supply</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Circulating Supply</p>
            <p className="text-2xl font-bold">{(tokenStats.circulatingSupply / 1000000).toFixed(2)}M</p>
            <p className="text-sm text-muted-foreground">{((tokenStats.circulatingSupply / tokenStats.totalSupply) * 100).toFixed(1)}% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Token Holders</p>
            <p className="text-2xl font-bold">{tokenStats.holders.toLocaleString()}</p>
            <p className="text-sm text-green-500 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +127 this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === tab.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "holders" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Token Holders</CardTitle>
              <CardDescription>All token holder accounts</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search holders..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Holder</th>
                    <th className="text-left p-3 font-medium">Type</th>
                    <th className="text-right p-3 font-medium">Balance</th>
                    <th className="text-right p-3 font-medium">Value (USD)</th>
                    <th className="text-right p-3 font-medium">% of Supply</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {tokenHolders.map((holder) => (
                    <tr key={holder.address} className="hover:bg-muted/30">
                      <td className="p-3">
                        <div>
                          <p className="font-medium">{holder.name}</p>
                          <p className="text-sm text-muted-foreground font-mono">{holder.address}</p>
                        </div>
                      </td>
                      <td className="p-3">
                        <Badge variant={
                          holder.type === "investor" ? "default" :
                          holder.type === "franchisee" ? "secondary" : "outline"
                        }>
                          {holder.type}
                        </Badge>
                      </td>
                      <td className="p-3 text-right font-mono">{holder.balance.toLocaleString()}</td>
                      <td className="p-3 text-right">${holder.value.toLocaleString()}</td>
                      <td className="p-3 text-right">{holder.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "transactions" && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Token transfer and trading activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">ID</th>
                    <th className="text-left p-3 font-medium">Type</th>
                    <th className="text-left p-3 font-medium">From</th>
                    <th className="text-left p-3 font-medium">To</th>
                    <th className="text-right p-3 font-medium">Amount</th>
                    <th className="text-right p-3 font-medium">Value</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-muted/30">
                      <td className="p-3 font-mono text-sm">{tx.id}</td>
                      <td className="p-3">
                        <Badge variant={
                          tx.type === "buy" ? "default" :
                          tx.type === "sell" ? "secondary" :
                          tx.type === "reward" ? "outline" : "secondary"
                        }>
                          {tx.type}
                        </Badge>
                      </td>
                      <td className="p-3 text-sm">{tx.from}</td>
                      <td className="p-3 text-sm">{tx.to}</td>
                      <td className="p-3 text-right font-mono">{tx.amount.toLocaleString()}</td>
                      <td className="p-3 text-right">${tx.value.toLocaleString()}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-1">
                          {tx.status === "completed" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                          {tx.status === "pending" && <Clock className="h-4 w-4 text-amber-500" />}
                          {tx.status === "failed" && <XCircle className="h-4 w-4 text-red-500" />}
                          <span className="text-sm capitalize">{tx.status}</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "settings" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Token Parameters</CardTitle>
              <CardDescription>Core token configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Token Name</span>
                <span className="font-medium">Kenya AI Compute Token</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Symbol</span>
                <span className="font-mono">KAIC</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Total Supply</span>
                <span className="font-mono">100,000,000</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Decimals</span>
                <span className="font-mono">18</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Contract Address</span>
                <span className="font-mono text-sm">0x742d...8f2e</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribution</CardTitle>
              <CardDescription>Token allocation breakdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Public Sale", percentage: 30, color: "bg-primary" },
                { label: "Team & Advisors", percentage: 15, color: "bg-secondary" },
                { label: "Company Reserve", percentage: 25, color: "bg-amber-500" },
                { label: "Community Rewards", percentage: 20, color: "bg-green-500" },
                { label: "Liquidity", percentage: 10, color: "bg-purple-500" },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
