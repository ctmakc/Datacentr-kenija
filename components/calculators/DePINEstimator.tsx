"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Network,
  Coins,
  TrendingUp,
  Clock,
  Info,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DePINEstimatorProps {
  locale: string;
}

type DePINNetwork = "render" | "akash" | "ionet" | "gensyn" | "bittensor";

interface NetworkConfig {
  name: string;
  token: string;
  description: string;
  gpuEarningsPerDay: Record<string, number>; // USD per GPU per day
  tokenPrice: number; // Current token price
  volatilityFactor: number;
  status: "live" | "coming-soon";
}

const networks: Record<DePINNetwork, NetworkConfig> = {
  render: {
    name: "Render Network",
    token: "RNDR",
    description: "Decentralized GPU rendering platform",
    gpuEarningsPerDay: {
      "NVIDIA H100": 45,
      "NVIDIA A100 80GB": 35,
      "NVIDIA A100 40GB": 28,
      "NVIDIA L40S": 22,
      "NVIDIA T4": 12,
    },
    tokenPrice: 7.50,
    volatilityFactor: 0.25,
    status: "live",
  },
  akash: {
    name: "Akash Network",
    token: "AKT",
    description: "Decentralized cloud computing marketplace",
    gpuEarningsPerDay: {
      "NVIDIA H100": 38,
      "NVIDIA A100 80GB": 30,
      "NVIDIA A100 40GB": 24,
      "NVIDIA L40S": 18,
      "NVIDIA T4": 10,
    },
    tokenPrice: 4.20,
    volatilityFactor: 0.30,
    status: "live",
  },
  ionet: {
    name: "io.net",
    token: "IO",
    description: "Decentralized computing network",
    gpuEarningsPerDay: {
      "NVIDIA H100": 52,
      "NVIDIA A100 80GB": 42,
      "NVIDIA A100 40GB": 32,
      "NVIDIA L40S": 25,
      "NVIDIA T4": 14,
    },
    tokenPrice: 3.80,
    volatilityFactor: 0.35,
    status: "live",
  },
  gensyn: {
    name: "Gensyn",
    token: "GEN",
    description: "Trustless ML training protocol",
    gpuEarningsPerDay: {
      "NVIDIA H100": 55,
      "NVIDIA A100 80GB": 45,
      "NVIDIA A100 40GB": 35,
      "NVIDIA L40S": 28,
      "NVIDIA T4": 15,
    },
    tokenPrice: 5.00,
    volatilityFactor: 0.40,
    status: "coming-soon",
  },
  bittensor: {
    name: "Bittensor",
    token: "TAO",
    description: "Decentralized machine learning network",
    gpuEarningsPerDay: {
      "NVIDIA H100": 60,
      "NVIDIA A100 80GB": 48,
      "NVIDIA A100 40GB": 38,
      "NVIDIA L40S": 30,
      "NVIDIA T4": 16,
    },
    tokenPrice: 450.00,
    volatilityFactor: 0.35,
    status: "coming-soon",
  },
};

const gpuTypes = [
  "NVIDIA H100",
  "NVIDIA A100 80GB",
  "NVIDIA A100 40GB",
  "NVIDIA L40S",
  "NVIDIA T4",
];

// GPU costs (monthly ownership/rental cost)
const gpuMonthlyCosts: Record<string, number> = {
  "NVIDIA H100": 2500,
  "NVIDIA A100 80GB": 1800,
  "NVIDIA A100 40GB": 1200,
  "NVIDIA L40S": 900,
  "NVIDIA T4": 400,
};

export function DePINEstimator({ locale }: DePINEstimatorProps) {
  const [selectedNetwork, setSelectedNetwork] = useState<DePINNetwork>("render");
  const [gpuType, setGpuType] = useState(gpuTypes[1]);
  const [gpuCount, setGpuCount] = useState(4);
  const [hoursPerDay, setHoursPerDay] = useState(20);
  const [utilizationRate, setUtilizationRate] = useState(75);

  const calculations = useMemo(() => {
    const network = networks[selectedNetwork];
    const baseEarningsPerGpu = network.gpuEarningsPerDay[gpuType] || 0;

    // Factor in hours per day and utilization
    const effectiveEarningsPerGpu = baseEarningsPerGpu * (hoursPerDay / 24) * (utilizationRate / 100);

    // Calculate totals
    const dailyEarningsUsd = effectiveEarningsPerGpu * gpuCount;
    const dailyTokens = dailyEarningsUsd / network.tokenPrice;

    const monthlyEarningsUsd = dailyEarningsUsd * 30;
    const monthlyTokens = dailyTokens * 30;

    const yearlyEarningsUsd = dailyEarningsUsd * 365;
    const yearlyTokens = dailyTokens * 365;

    // Calculate costs and profit
    const monthlyCost = gpuMonthlyCosts[gpuType] * gpuCount;
    const monthlyProfit = monthlyEarningsUsd - monthlyCost;
    const profitMargin = (monthlyProfit / monthlyEarningsUsd) * 100;

    // ROI calculation (assuming hardware purchase)
    const hardwareCost = gpuMonthlyCosts[gpuType] * gpuCount * 24; // ~2 year depreciation
    const paybackMonths = hardwareCost / monthlyProfit;

    // Volatility ranges
    const lowEstimate = monthlyEarningsUsd * (1 - network.volatilityFactor);
    const highEstimate = monthlyEarningsUsd * (1 + network.volatilityFactor);

    return {
      network,
      dailyEarningsUsd,
      dailyTokens,
      monthlyEarningsUsd,
      monthlyTokens,
      yearlyEarningsUsd,
      yearlyTokens,
      monthlyCost,
      monthlyProfit,
      profitMargin,
      paybackMonths,
      lowEstimate,
      highEstimate,
    };
  }, [selectedNetwork, gpuType, gpuCount, hoursPerDay, utilizationRate]);

  const formatCurrency = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  const formatTokens = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(2)}K`;
    }
    return value.toFixed(2);
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Network Selection */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {(Object.entries(networks) as [DePINNetwork, NetworkConfig][]).map(([key, config]) => (
            <Button
              key={key}
              variant={selectedNetwork === key ? "default" : "outline"}
              className="h-auto flex-col items-start p-4 justify-start"
              onClick={() => setSelectedNetwork(key)}
            >
              <div className="flex w-full items-center justify-between">
                <span className="font-semibold">{config.name}</span>
                <Badge variant={config.status === "live" ? "default" : "secondary"} className="text-xs">
                  {config.status === "live" ? "Live" : "Soon"}
                </Badge>
              </div>
              <span className="text-xs text-muted-foreground mt-1">{config.token}</span>
            </Button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5" />
                Node Configuration
              </CardTitle>
              <CardDescription>
                Configure your {calculations.network.name} node
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* GPU Type */}
              <div className="space-y-2">
                <Label>GPU Type</Label>
                <Select value={gpuType} onValueChange={setGpuType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {gpuTypes.map((gpu) => (
                      <SelectItem key={gpu} value={gpu}>
                        <div className="flex items-center justify-between gap-4">
                          <span>{gpu}</span>
                          <span className="text-muted-foreground text-sm">
                            ~${networks[selectedNetwork].gpuEarningsPerDay[gpu]}/day
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* GPU Count */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Number of GPUs</Label>
                  <span className="font-semibold">{gpuCount}</span>
                </div>
                <Slider
                  value={[gpuCount]}
                  onValueChange={(value) => setGpuCount(value[0])}
                  min={1}
                  max={16}
                  step={1}
                />
              </div>

              {/* Hours Per Day */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-1">
                    Hours Per Day
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Hours your nodes are online and available</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <span className="font-semibold">{hoursPerDay}h</span>
                </div>
                <Slider
                  value={[hoursPerDay]}
                  onValueChange={(value) => setHoursPerDay(value[0])}
                  min={1}
                  max={24}
                  step={1}
                />
              </div>

              {/* Utilization Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-1">
                    Utilization Rate
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Percentage of time your GPUs are actively working on jobs</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <span className="font-semibold">{utilizationRate}%</span>
                </div>
                <Slider
                  value={[utilizationRate]}
                  onValueChange={(value) => setUtilizationRate(value[0])}
                  min={10}
                  max={100}
                  step={5}
                />
              </div>

              {/* Network Info */}
              <div className="rounded-lg border p-4 bg-muted/30">
                <h4 className="font-semibold flex items-center gap-2">
                  About {calculations.network.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {calculations.network.description}
                </p>
                <div className="mt-3 flex items-center gap-4 text-sm">
                  <span>Token: <strong>{calculations.network.token}</strong></span>
                  <span>Price: <strong>${calculations.network.tokenPrice.toFixed(2)}</strong></span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Earnings Estimate */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-5 w-5" />
                Earnings Estimate
              </CardTitle>
              <CardDescription>
                Based on current network conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Main Earnings Display */}
                <motion.div
                  key={calculations.monthlyEarningsUsd}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center rounded-lg bg-primary/10 p-6"
                >
                  <div className="text-4xl font-bold text-primary">
                    {formatCurrency(calculations.monthlyEarningsUsd)}
                  </div>
                  <div className="text-sm text-muted-foreground">estimated monthly earnings</div>
                  <div className="mt-2 text-sm">
                    ≈ {formatTokens(calculations.monthlyTokens)} {calculations.network.token}
                  </div>
                </motion.div>

                {/* Earnings Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4 text-center">
                    <div className="text-2xl font-bold">{formatCurrency(calculations.dailyEarningsUsd)}</div>
                    <div className="text-xs text-muted-foreground">Daily</div>
                    <div className="text-xs mt-1">{formatTokens(calculations.dailyTokens)} {calculations.network.token}</div>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <div className="text-2xl font-bold">{formatCurrency(calculations.yearlyEarningsUsd)}</div>
                    <div className="text-xs text-muted-foreground">Yearly</div>
                    <div className="text-xs mt-1">{formatTokens(calculations.yearlyTokens)} {calculations.network.token}</div>
                  </div>
                </div>

                {/* Profit Analysis */}
                <div className="space-y-3 border-t pt-4">
                  <h4 className="font-semibold">Profit Analysis</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Revenue</span>
                      <span>{formatCurrency(calculations.monthlyEarningsUsd)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Infrastructure Cost</span>
                      <span>-{formatCurrency(calculations.monthlyCost)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-primary">
                      <span>Net Profit</span>
                      <span>{formatCurrency(calculations.monthlyProfit)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profit Margin</span>
                      <span>{calculations.profitMargin.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="rounded-lg bg-muted/30 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Estimated Payback</span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold">
                        {calculations.paybackMonths > 0 ? `${calculations.paybackMonths.toFixed(1)} months` : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Volatility Warning */}
                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
                  <h4 className="font-semibold flex items-center gap-2 text-yellow-600">
                    <TrendingUp className="h-4 w-4" />
                    Earnings Range
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Based on ±{(calculations.network.volatilityFactor * 100).toFixed(0)}% volatility factor
                  </p>
                  <div className="mt-2 flex justify-between text-sm">
                    <span>Low: {formatCurrency(calculations.lowEstimate)}/mo</span>
                    <span>High: {formatCurrency(calculations.highEstimate)}/mo</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full" size="lg">
                  Get Started with {calculations.network.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> These estimates are based on current network conditions and historical data.
              Actual earnings may vary significantly based on network demand, token price fluctuations, job availability,
              and other factors. Token earnings are subject to market volatility. This is not financial advice.
            </p>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}

export default DePINEstimator;
