"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  BarChart3,
  Info,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
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

interface ROICalculatorProps {
  locale: string;
}

type Scenario = "conservative" | "base" | "optimistic";

interface ScenarioParams {
  utilizationRate: number;
  revenueMultiplier: number;
  exitMultiple: number;
}

const scenarios: Record<Scenario, ScenarioParams> = {
  conservative: {
    utilizationRate: 0.55,
    revenueMultiplier: 0.8,
    exitMultiple: 6,
  },
  base: {
    utilizationRate: 0.70,
    revenueMultiplier: 1.0,
    exitMultiple: 8,
  },
  optimistic: {
    utilizationRate: 0.85,
    revenueMultiplier: 1.2,
    exitMultiple: 10,
  },
};

// Base revenue projections (in millions) for 100% of the project
const baseRevenueByYear = [2.5, 6.5, 10, 12.5, 15];

// EBITDA margin
const ebitdaMargin = 0.42;

export function ROICalculator({ locale }: ROICalculatorProps) {
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [scenario, setScenario] = useState<Scenario>("base");
  const [exitYear, setExitYear] = useState(5);
  const [discountRate, setDiscountRate] = useState(12);

  const totalCapex = 22500000; // $22.5M total CAPEX

  const calculations = useMemo(() => {
    const params = scenarios[scenario];
    const equityStake = (investmentAmount / totalCapex) * 100;

    // Calculate yearly cash flows
    const cashFlows: number[] = [];
    let cumulativeCashFlow = -investmentAmount;

    for (let year = 1; year <= exitYear; year++) {
      const yearIndex = Math.min(year - 1, baseRevenueByYear.length - 1);
      const revenue = baseRevenueByYear[yearIndex] * params.revenueMultiplier * 1000000;
      const ebitda = revenue * ebitdaMargin;
      const investorShare = ebitda * (equityStake / 100);
      cashFlows.push(investorShare);
      cumulativeCashFlow += investorShare;
    }

    // Calculate exit value
    const finalYearRevenue = baseRevenueByYear[Math.min(exitYear - 1, baseRevenueByYear.length - 1)] * params.revenueMultiplier * 1000000;
    const finalYearEbitda = finalYearRevenue * ebitdaMargin;
    const enterpriseValue = finalYearEbitda * params.exitMultiple;
    const exitValue = enterpriseValue * (equityStake / 100);

    // Calculate NPV
    let npv = -investmentAmount;
    for (let i = 0; i < cashFlows.length; i++) {
      npv += cashFlows[i] / Math.pow(1 + discountRate / 100, i + 1);
    }
    npv += exitValue / Math.pow(1 + discountRate / 100, exitYear);

    // Calculate IRR (simplified Newton-Raphson method)
    let irr = 0.15; // Initial guess
    for (let iteration = 0; iteration < 100; iteration++) {
      let npvAtIrr = -investmentAmount;
      let derivative = 0;
      for (let i = 0; i < cashFlows.length; i++) {
        const discountFactor = Math.pow(1 + irr, i + 1);
        npvAtIrr += cashFlows[i] / discountFactor;
        derivative -= (i + 1) * cashFlows[i] / Math.pow(1 + irr, i + 2);
      }
      npvAtIrr += exitValue / Math.pow(1 + irr, exitYear);
      derivative -= exitYear * exitValue / Math.pow(1 + irr, exitYear + 1);

      if (Math.abs(npvAtIrr) < 0.01) break;
      irr = irr - npvAtIrr / derivative;
    }

    // Calculate MOIC (Multiple on Invested Capital)
    const totalReturn = cashFlows.reduce((a, b) => a + b, 0) + exitValue;
    const moic = totalReturn / investmentAmount;

    // Calculate payback period
    let paybackPeriod = exitYear;
    let cumulative = 0;
    for (let i = 0; i < cashFlows.length; i++) {
      cumulative += cashFlows[i];
      if (cumulative >= investmentAmount) {
        paybackPeriod = i + 1 - (cumulative - investmentAmount) / cashFlows[i];
        break;
      }
    }

    return {
      equityStake,
      cashFlows,
      exitValue,
      npv,
      irr: irr * 100,
      moic,
      paybackPeriod,
      totalReturn,
    };
  }, [investmentAmount, scenario, exitYear, discountRate]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Input Controls */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Investment Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Investment Amount */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Investment Amount</Label>
                  <span className="text-lg font-bold text-primary">
                    {formatCurrency(investmentAmount)}
                  </span>
                </div>
                <Slider
                  value={[investmentAmount]}
                  onValueChange={(value) => setInvestmentAmount(value[0])}
                  min={100000}
                  max={5000000}
                  step={50000}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$100K</span>
                  <span>$5M</span>
                </div>
              </div>

              {/* Scenario */}
              <div className="space-y-2">
                <Label>Scenario</Label>
                <Select value={scenario} onValueChange={(v) => setScenario(v as Scenario)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative</SelectItem>
                    <SelectItem value="base">Base Case</SelectItem>
                    <SelectItem value="optimistic">Optimistic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Exit Year */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Exit Year</Label>
                  <span className="font-semibold">Year {exitYear}</span>
                </div>
                <Slider
                  value={[exitYear]}
                  onValueChange={(value) => setExitYear(value[0])}
                  min={3}
                  max={10}
                  step={1}
                />
              </div>

              {/* Discount Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-1">
                    Discount Rate
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Required rate of return for NPV calculation</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <span className="font-semibold">{discountRate}%</span>
                </div>
                <Slider
                  value={[discountRate]}
                  onValueChange={(value) => setDiscountRate(value[0])}
                  min={8}
                  max={25}
                  step={1}
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Investment Returns
              </CardTitle>
              <CardDescription>
                Based on {scenario} scenario assumptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  key={`irr-${calculations.irr}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-lg bg-primary/10 p-4 text-center"
                >
                  <div className="text-3xl font-bold text-primary">
                    {calculations.irr.toFixed(1)}%
                  </div>
                  <div className="text-sm text-muted-foreground">IRR</div>
                </motion.div>

                <motion.div
                  key={`moic-${calculations.moic}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-lg bg-secondary/10 p-4 text-center"
                >
                  <div className="text-3xl font-bold text-secondary">
                    {calculations.moic.toFixed(2)}x
                  </div>
                  <div className="text-sm text-muted-foreground">MOIC</div>
                </motion.div>

                <motion.div
                  key={`npv-${calculations.npv}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-lg border p-4 text-center"
                >
                  <div className="text-2xl font-bold">
                    {formatCurrency(calculations.npv)}
                  </div>
                  <div className="text-sm text-muted-foreground">NPV</div>
                </motion.div>

                <motion.div
                  key={`payback-${calculations.paybackPeriod}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-lg border p-4 text-center"
                >
                  <div className="text-2xl font-bold">
                    {calculations.paybackPeriod.toFixed(1)} yrs
                  </div>
                  <div className="text-sm text-muted-foreground">Payback</div>
                </motion.div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Equity Stake</span>
                  <span className="font-medium">{calculations.equityStake.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Exit Value</span>
                  <span className="font-medium">{formatCurrency(calculations.exitValue)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Return</span>
                  <span className="font-medium text-primary">{formatCurrency(calculations.totalReturn)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cash Flow Projection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Cash Flow Projection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-48">
              {calculations.cashFlows.map((cf, index) => {
                const maxCf = Math.max(...calculations.cashFlows, calculations.exitValue / 3);
                const height = (cf / maxCf) * 100;
                return (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-1 relative group"
                  >
                    <div className="absolute bottom-0 w-full bg-primary/80 rounded-t hover:bg-primary transition-colors" style={{ height: '100%' }} />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {formatCurrency(cf)}
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                      Y{index + 1}
                    </div>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(calculations.exitValue / 3 / Math.max(...calculations.cashFlows, calculations.exitValue / 3)) * 100}%` }}
                transition={{ duration: 0.5, delay: calculations.cashFlows.length * 0.1 }}
                className="flex-1 relative group"
              >
                <div className="absolute bottom-0 w-full bg-secondary/80 rounded-t hover:bg-secondary transition-colors" style={{ height: '100%' }} />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {formatCurrency(calculations.exitValue)}
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                  Exit
                </div>
              </motion.div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-primary" />
                <span className="text-muted-foreground">Annual Distributions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-secondary" />
                <span className="text-muted-foreground">Exit Proceeds</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scenario Assumptions */}
        <Card>
          <CardHeader>
            <CardTitle>Scenario Assumptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {(Object.entries(scenarios) as [Scenario, ScenarioParams][]).map(([key, params]) => (
                <div
                  key={key}
                  className={`rounded-lg border p-4 ${scenario === key ? 'border-primary bg-primary/5' : ''}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold capitalize">{key}</span>
                    {scenario === key && <Badge>Selected</Badge>}
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Utilization</span>
                      <span>{(params.utilizationRate * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Revenue Factor</span>
                      <span>{params.revenueMultiplier}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exit Multiple</span>
                      <span>{params.exitMultiple}x EBITDA</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}

export default ROICalculator;
