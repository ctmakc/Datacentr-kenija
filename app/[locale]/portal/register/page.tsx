"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

type AccountType = "investor" | "partner" | "customer";

export default function RegisterPage() {
  const params = useParams();
  const locale = params.locale as string;
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>("investor");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
  });

  const accountTypes = [
    { id: "investor" as const, label: "Investor", description: "Access investment materials and deal room" },
    { id: "partner" as const, label: "Partner", description: "Partner dashboard and collaboration tools" },
    { id: "customer" as const, label: "Customer", description: "Compute services and billing management" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", { ...formData, accountType });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Create Your Account</h1>
          <p className="text-muted-foreground mt-2">Join Kenya AI Compute platform</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Choose your account type and fill in your details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Label className="mb-3 block">Account Type</Label>
              <div className="grid gap-3">
                {accountTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setAccountType(type.id)}
                    className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                      accountType === type.id ? "border-primary bg-primary/5" : "hover:border-muted-foreground/50"
                    }`}
                  >
                    <div className={`mt-0.5 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                      accountType === type.id ? "border-primary" : "border-muted-foreground/50"
                    }`}>
                      {accountType === type.id && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                    </div>
                    <div>
                      <p className="font-medium">{type.label}</p>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="pl-10"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min 8 characters"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <p className="text-muted-foreground">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Create Account <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href={`/${locale}/portal/login`} className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
