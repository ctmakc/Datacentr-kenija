"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  HardDrive,
  Calculator,
  Check,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PricingCalculatorProps {
  locale: string;
}

type ResourceType = "gpu" | "cpu" | "storage";
type Commitment = "on-demand" | "1-month" | "6-month" | "1-year";

interface GPUOption {
  name: string;
  hourlyRate: number;
  memory: string;
}

interface CPUOption {
  name: string;
  hourlyRate: number;
  cores: number;
  ram: number;
}

interface StorageOption {
  name: string;
  monthlyRate: number;
  type: string;
}

const gpuOptions: GPUOption[] = [
  { name: "NVIDIA H100 80GB", hourlyRate: 1.50, memory: "80GB HBM3" },
  { name: "NVIDIA A100 80GB", hourlyRate: 1.20, memory: "80GB HBM2e" },
  { name: "NVIDIA A100 40GB", hourlyRate: 0.90, memory: "40GB HBM2e" },
  { name: "NVIDIA L40S", hourlyRate: 0.70, memory: "48GB GDDR6" },
  { name: "NVIDIA T4", hourlyRate: 0.35, memory: "16GB GDDR6" },
];

const cpuOptions: CPUOption[] = [
  { name: "Standard", hourlyRate: 0.08, cores: 4, ram: 16 },
  { name: "Compute-Optimized", hourlyRate: 0.12, cores: 8, ram: 16 },
  { name: "Memory-Optimized", hourlyRate: 0.14, cores: 4, ram: 32 },
  { name: "High-Performance", hourlyRate: 0.24, cores: 16, ram: 64 },
];

const storageOptions: StorageOption[] = [
  { name: "NVMe SSD", monthlyRate: 0.15, type: "High Performance" },
  { name: "SSD", monthlyRate: 0.10, type: "Balanced" },
  { name: "Object Storage", monthlyRate: 0.03, type: "Archive" },
];

const commitmentDiscounts: Record<Commitment, number> = {
  "on-demand": 0,
  "1-month": 0.20,
  "6-month": 0.35,
  "1-year": 0.50,
};

// Cloud provider comparison (approximate rates for similar resources)
const cloudComparison = {
  aws: { multiplier: 1.8, name: "AWS" },
  gcp: { multiplier: 1.7, name: "Google Cloud" },
  azure: { multiplier: 1.75, name: "Azure" },
  lambda: { multiplier: 1.3, name: "Lambda Labs" },
};

export function PricingCalculator({ locale }: PricingCalculatorProps) {
  const [resourceType, setResourceType] = useState<ResourceType>("gpu");
  const [selectedGpu, setSelectedGpu] = useState(gpuOptions[1].name);
  const [gpuCount, setGpuCount] = useState(1);
  const [selectedCpu, setSelectedCpu] = useState(cpuOptions[0].name);
  const [cpuCount, setCpuCount] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[0].name);
  const [storageAmount, setStorageAmount] = useState(100);
  const [commitment, setCommitment] = useState<Commitment>("on-demand");
  const [hoursPerMonth, setHoursPerMonth] = useState(720); // Full month

  const calculations = useMemo(() => {
    let baseHourlyRate = 0;
    let monthlyBase = 0;
    let resourceDescription = "";

    if (resourceType === "gpu") {
      const gpu = gpuOptions.find(g => g.name === selectedGpu)!;
      baseHourlyRate = gpu.hourlyRate * gpuCount;
      monthlyBase = baseHourlyRate * hoursPerMonth;
      resourceDescription = `${gpuCount}x ${gpu.name}`;
    } else if (resourceType === "cpu") {
      const cpu = cpuOptions.find(c => c.name === selectedCpu)!;
      baseHourlyRate = cpu.hourlyRate * cpuCount;
      monthlyBase = baseHourlyRate * hoursPerMonth;
      resourceDescription = `${cpuCount}x ${cpu.name} (${cpu.cores} vCPU, ${cpu.ram}GB RAM)`;
    } else {
      const storage = storageOptions.find(s => s.name === selectedStorage)!;
      monthlyBase = storage.monthlyRate * storageAmount;
      resourceDescription = `${storageAmount}GB ${storage.name}`;
    }

    const discount = commitmentDiscounts[commitment];
    const discountedMonthly = monthlyBase * (1 - discount);
    const yearlyEstimate = discountedMonthly * 12;

    // Calculate savings vs cloud providers
    const savings = Object.entries(cloudComparison).map(([key, provider]) => ({
      provider: provider.name,
      theirPrice: monthlyBase * provider.multiplier,
      savings: (monthlyBase * provider.multiplier) - discountedMonthly,
      savingsPercent: ((provider.multiplier - (1 - discount)) / provider.multiplier) * 100,
    }));

    return {
      baseHourlyRate,
      monthlyBase,
      discount,
      discountedMonthly,
      yearlyEstimate,
      resourceDescription,
      savings,
    };
  }, [resourceType, selectedGpu, gpuCount, selectedCpu, cpuCount, selectedStorage, storageAmount, commitment, hoursPerMonth]);

  const formatCurrency = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  return (
    <div className="space-y-6">
      {/* Resource Type Selection */}
      <Tabs value={resourceType} onValueChange={(v) => setResourceType(v as ResourceType)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="gpu" className="gap-2">
            <Server className="h-4 w-4" />
            GPU
          </TabsTrigger>
          <TabsTrigger value="cpu" className="gap-2">
            <Cpu className="h-4 w-4" />
            CPU
          </TabsTrigger>
          <TabsTrigger value="storage" className="gap-2">
            <HardDrive className="h-4 w-4" />
            Storage
          </TabsTrigger>
        </TabsList>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Select your resource specifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <TabsContent value="gpu" className="m-0 space-y-6">
                <div className="space-y-2">
                  <Label>GPU Type</Label>
                  <Select value={selectedGpu} onValueChange={setSelectedGpu}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {gpuOptions.map((gpu) => (
                        <SelectItem key={gpu.name} value={gpu.name}>
                          <div className="flex items-center justify-between gap-4">
                            <span>{gpu.name}</span>
                            <span className="text-muted-foreground text-sm">${gpu.hourlyRate}/hr</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Number of GPUs</Label>
                    <span className="font-semibold">{gpuCount}</span>
                  </div>
                  <Slider
                    value={[gpuCount]}
                    onValueChange={(value) => setGpuCount(value[0])}
                    min={1}
                    max={8}
                    step={1}
                  />
                </div>
              </TabsContent>

              <TabsContent value="cpu" className="m-0 space-y-6">
                <div className="space-y-2">
                  <Label>Instance Type</Label>
                  <Select value={selectedCpu} onValueChange={setSelectedCpu}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cpuOptions.map((cpu) => (
                        <SelectItem key={cpu.name} value={cpu.name}>
                          <div className="flex items-center justify-between gap-4">
                            <span>{cpu.name}</span>
                            <span className="text-muted-foreground text-sm">
                              {cpu.cores} vCPU, {cpu.ram}GB - ${cpu.hourlyRate}/hr
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Number of Instances</Label>
                    <span className="font-semibold">{cpuCount}</span>
                  </div>
                  <Slider
                    value={[cpuCount]}
                    onValueChange={(value) => setCpuCount(value[0])}
                    min={1}
                    max={20}
                    step={1}
                  />
                </div>
              </TabsContent>

              <TabsContent value="storage" className="m-0 space-y-6">
                <div className="space-y-2">
                  <Label>Storage Type</Label>
                  <Select value={selectedStorage} onValueChange={setSelectedStorage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {storageOptions.map((storage) => (
                        <SelectItem key={storage.name} value={storage.name}>
                          <div className="flex items-center justify-between gap-4">
                            <span>{storage.name}</span>
                            <span className="text-muted-foreground text-sm">${storage.monthlyRate}/GB/mo</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Storage Amount (GB)</Label>
                    <span className="font-semibold">{storageAmount} GB</span>
                  </div>
                  <Slider
                    value={[storageAmount]}
                    onValueChange={(value) => setStorageAmount(value[0])}
                    min={10}
                    max={10000}
                    step={10}
                  />
                </div>
              </TabsContent>

              {resourceType !== "storage" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Hours per Month</Label>
                    <span className="font-semibold">{hoursPerMonth} hrs</span>
                  </div>
                  <Slider
                    value={[hoursPerMonth]}
                    onValueChange={(value) => setHoursPerMonth(value[0])}
                    min={1}
                    max={720}
                    step={1}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 hour</span>
                    <span>720 hrs (full month)</span>
                  </div>
                </div>
              )}

              {/* Commitment Term */}
              <div className="space-y-2">
                <Label>Commitment Term</Label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.entries(commitmentDiscounts) as [Commitment, number][]).map(([term, discount]) => (
                    <Button
                      key={term}
                      variant={commitment === term ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCommitment(term)}
                      className="justify-start"
                    >
                      <span className="capitalize">{term.replace("-", " ")}</span>
                      {discount > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          -{(discount * 100).toFixed(0)}%
                        </Badge>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Your Estimate
              </CardTitle>
              <CardDescription>{calculations.resourceDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Main Price */}
                <motion.div
                  key={calculations.discountedMonthly}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center rounded-lg bg-primary/10 p-6"
                >
                  <div className="text-4xl font-bold text-primary">
                    {formatCurrency(calculations.discountedMonthly)}
                  </div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  {calculations.discount > 0 && (
                    <div className="mt-2">
                      <Badge variant="secondary">
                        Save {(calculations.discount * 100).toFixed(0)}% with {commitment.replace("-", " ")} commitment
                      </Badge>
                    </div>
                  )}
                </motion.div>

                {/* Price Breakdown */}
                <div className="space-y-3">
                  {resourceType !== "storage" && calculations.baseHourlyRate > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Hourly Rate</span>
                      <span>${calculations.baseHourlyRate.toFixed(2)}/hr</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monthly (before discount)</span>
                    <span>{formatCurrency(calculations.monthlyBase)}</span>
                  </div>
                  {calculations.discount > 0 && (
                    <div className="flex justify-between text-sm text-primary">
                      <span>Discount</span>
                      <span>-{formatCurrency(calculations.monthlyBase * calculations.discount)}</span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Yearly Estimate</span>
                    <span>{formatCurrency(calculations.yearlyEstimate)}</span>
                  </div>
                </div>

                {/* Cloud Comparison */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">vs. Cloud Providers</h4>
                  <div className="space-y-2">
                    {calculations.savings.map((item) => (
                      <div key={item.provider} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.provider}</span>
                        <div className="flex items-center gap-2">
                          <span className="line-through text-muted-foreground">
                            {formatCurrency(item.theirPrice)}
                          </span>
                          <Badge variant="outline" className="text-primary">
                            Save {item.savingsPercent.toFixed(0)}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full" size="lg">
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Included with All Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "24/7 Support",
              "99.9% SLA",
              "DDoS Protection",
              "Green Energy",
              "No Egress Fees",
              "API Access",
              "SSH Access",
              "Monitoring Dashboard",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PricingCalculator;
