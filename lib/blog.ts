// Blog data and types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  featured: boolean;
  image?: string;
}

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    slug: "why-kenya-is-the-ideal-location-for-ai-compute",
    title: "Why Kenya is the Ideal Location for AI Compute Infrastructure",
    excerpt: "Discover why Kenya's unique combination of renewable energy, strategic location, and growing tech ecosystem makes it perfect for AI datacenter operations.",
    content: `
Kenya stands at a unique crossroads of opportunity for AI compute infrastructure. With over 90% of its electricity generated from renewable sources—primarily geothermal and hydroelectric—the country offers what few other regions can: truly sustainable AI compute at scale.

## The Energy Advantage

Kenya's geothermal resources, centered around the Rift Valley, provide consistent baseload power that's both clean and cost-effective. This translates directly to lower operating costs and a minimal carbon footprint for AI workloads.

Unlike solar or wind, geothermal power runs 24/7, making it ideal for the continuous demands of AI training and inference. Our facility achieves a Power Usage Effectiveness (PUE) of 1.3-1.4, among the best in the industry.

## Strategic Location Benefits

Positioned along major submarine cable routes, Kenya offers low-latency connectivity to:
- Europe (via PEACE and 2Africa cables)
- Middle East (via EASSy)
- Asia (via multiple routes)

This makes it an excellent hub for serving global AI workloads while maintaining proximity to emerging African markets.

## The Economic Case

Operating costs in Kenya are significantly lower than traditional datacenter markets:
- Energy costs: 40-60% lower than Europe/US
- Real estate: 70% lower than Tier 1 markets
- Skilled labor: Competitive rates with strong technical universities

## Growing Tech Ecosystem

Nairobi, often called "Silicon Savannah," hosts a thriving tech scene:
- 200+ tech startups
- Major tech company offices (Google, Microsoft, IBM)
- Strong university partnerships (University of Nairobi, Strathmore)

## Conclusion

For investors and AI companies looking to optimize costs while maintaining sustainability commitments, Kenya represents a compelling opportunity. The combination of renewable energy, strategic connectivity, and economic advantages creates a unique value proposition that's difficult to replicate elsewhere.
    `,
    author: {
      name: "Dr. James Mwangi",
      role: "Chief Strategy Officer",
      avatar: "JM",
    },
    category: "Industry Insights",
    tags: ["Kenya", "Renewable Energy", "AI Infrastructure", "Geothermal"],
    publishedAt: "2025-01-15",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "depin-revolution-decentralized-compute",
    title: "The DePIN Revolution: How Decentralized Compute is Reshaping AI",
    excerpt: "Explore how Decentralized Physical Infrastructure Networks are creating new opportunities for GPU providers and changing the economics of AI compute.",
    content: `
Decentralized Physical Infrastructure Networks (DePIN) represent a paradigm shift in how compute resources are provisioned and monetized. For datacenter operators, this creates exciting new revenue streams and partnership opportunities.

## What is DePIN?

DePIN networks use blockchain technology to coordinate physical infrastructure—in our case, GPU compute power. Instead of selling directly to end users, datacenter operators can contribute compute to networks like Render, Akash, or io.net, earning tokens and fees.

## Key DePIN Networks We Support

### Render Network
Focused on distributed rendering for 3D content, VFX, and increasingly, AI inference. Node operators earn RNDR tokens for contributing GPU power.

### Akash Network
A decentralized cloud marketplace where providers compete on price for compute resources. Ideal for cost-sensitive AI workloads.

### io.net
Aggregates GPU compute from multiple sources to create a unified network for AI/ML workloads. Growing rapidly with strong VC backing.

### Gensyn
Specifically designed for ML training workloads with verifiable computation. A promising network for trustless AI training.

## The Economics of DePIN Hosting

DePIN hosting offers several advantages:
1. **Diversified Revenue**: Multiple network participation reduces dependency on single clients
2. **Token Upside**: Early participation can yield significant token appreciation
3. **Automated Operations**: Smart contracts handle billing and settlements
4. **Global Demand**: Access to worldwide compute buyers

## Our DePIN Strategy

We've allocated 20% of Phase 1 capacity to DePIN networks, with plans to expand based on performance. Current yields range from 15-30% APR depending on the network and market conditions.

## Conclusion

DePIN isn't just a buzzword—it's a fundamental shift in infrastructure economics. By participating early, we're positioning ourselves at the forefront of this revolution.
    `,
    author: {
      name: "Alex Kimani",
      role: "DePIN Partnerships Lead",
      avatar: "AK",
    },
    category: "Technology",
    tags: ["DePIN", "Blockchain", "Decentralized", "GPU Computing"],
    publishedAt: "2025-01-10",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "h100-vs-a100-choosing-right-gpu",
    title: "H100 vs A100: Choosing the Right GPU for Your AI Workload",
    excerpt: "A technical comparison of NVIDIA's flagship AI accelerators to help you make the right choice for training and inference workloads.",
    content: `
Choosing between NVIDIA's H100 and A100 GPUs depends on your specific use case, budget, and performance requirements. Here's our comprehensive comparison based on real-world deployment experience.

## Performance Comparison

### Raw Compute Power
- **H100**: 3,958 TFLOPS (FP8) / 1,979 TFLOPS (FP16)
- **A100**: 624 TFLOPS (FP16) / 312 TFLOPS (FP32)

The H100 delivers roughly 3x the performance of A100 for transformer-based models thanks to the new Transformer Engine.

### Memory Bandwidth
- **H100**: 3.35 TB/s (HBM3)
- **A100**: 2.0 TB/s (HBM2e)

Higher bandwidth means faster data movement, critical for large language models.

## Use Case Recommendations

### Choose H100 For:
- Large language model training (>7B parameters)
- Production inference at scale
- Cutting-edge research requiring maximum performance
- Workloads that benefit from FP8 precision

### Choose A100 For:
- Cost-sensitive training workloads
- Models up to 7B parameters
- Mixed precision training with FP16
- Established production workloads with known requirements

## Pricing Comparison

At our facility:
- **H100 (80GB)**: $3.50/hour
- **A100 (80GB)**: $2.20/hour

For many workloads, H100's 3x performance at 1.6x the price makes it more cost-effective overall.

## Conclusion

Both GPUs have their place. H100 is the clear choice for maximum performance and future-proofing, while A100 remains excellent value for many production workloads.
    `,
    author: {
      name: "Sarah Oduya",
      role: "Technical Solutions Architect",
      avatar: "SO",
    },
    category: "Technical",
    tags: ["GPU", "NVIDIA", "H100", "A100", "AI Hardware"],
    publishedAt: "2025-01-05",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "africa-ai-market-2025-outlook",
    title: "Africa AI Market 2025: Opportunities and Outlook",
    excerpt: "An analysis of the growing African AI market, key trends, and why infrastructure investment now could yield significant returns.",
    content: `
Africa's AI market is experiencing unprecedented growth, driven by mobile-first innovation, young demographics, and increasing digital infrastructure investment.

## Market Size and Growth

- **2024 Market Size**: $2.3 billion
- **2025 Projected**: $3.5 billion
- **2030 Projected**: $15.5 billion
- **CAGR**: 35%+

This growth outpaces global averages, driven by leapfrog technology adoption.

## Key Sectors Driving Demand

### Fintech
Africa leads in mobile money innovation. AI is being deployed for:
- Credit scoring for unbanked populations
- Fraud detection
- Personalized financial products

### Agriculture
AI applications helping 60%+ agricultural workforce:
- Crop disease detection
- Yield prediction
- Supply chain optimization

### Healthcare
Addressing healthcare access gaps:
- Diagnostic imaging AI
- Telemedicine platforms
- Drug discovery partnerships

## Infrastructure Gap = Opportunity

Current African datacenter capacity is less than 1% of global total, despite having 17% of world population. This gap represents significant opportunity for infrastructure investors.

## Our Role

Kenya AI Compute is positioned to capture this growth by providing:
- Local compute capacity for African AI startups
- Gateway for international companies entering African markets
- Training infrastructure for regional AI talent

## Investment Thesis

Early infrastructure investment in Africa mirrors the Asian datacenter boom of the 2010s. Those who invested early in Singapore, Hong Kong, and Tokyo datacenters saw exceptional returns.

## Conclusion

The African AI market is at an inflection point. Infrastructure built today will power the AI applications of tomorrow across a continent of 1.4 billion people.
    `,
    author: {
      name: "Dr. Amina Hassan",
      role: "Market Research Director",
      avatar: "AH",
    },
    category: "Market Analysis",
    tags: ["Africa", "AI Market", "Investment", "Growth"],
    publishedAt: "2024-12-20",
    readTime: "7 min",
    featured: true,
  },
  {
    slug: "sustainable-ai-green-computing",
    title: "Sustainable AI: Building Green Computing Infrastructure",
    excerpt: "How we're achieving carbon-neutral AI compute through renewable energy, efficient cooling, and sustainable operations.",
    content: `
As AI compute demand grows exponentially, so does its environmental impact. At Kenya AI Compute, sustainability isn't an afterthought—it's core to our value proposition.

## The Problem: AI's Carbon Footprint

Training a single large language model can emit as much CO2 as five cars over their lifetime. With thousands of models being trained daily, the AI industry faces a sustainability crisis.

## Our Solution: Kenya's Green Grid

Kenya's electricity grid is over 90% renewable:
- **Geothermal**: 47% (constant baseload)
- **Hydroelectric**: 35%
- **Wind/Solar**: 10%
- **Other**: 8%

By operating in Kenya, our clients achieve near-zero Scope 2 emissions automatically.

## Efficiency Innovations

### Free Cooling
Nairobi's average temperature of 17°C (63°F) enables free cooling for most of the year, reducing our PUE to 1.3-1.4.

### Hot/Cold Aisle Containment
Strict airflow management prevents mixing of supply and return air, maximizing cooling efficiency.

### Variable Speed Drives
All cooling equipment uses variable speed drives, matching energy consumption to actual load.

## Certifications and Commitments

We're pursuing:
- ISO 14001 Environmental Management
- LEED certification for facilities
- Science-Based Targets initiative alignment

## For ESG-Focused Investors

Our green infrastructure directly supports ESG mandates:
- Measurable Scope 3 reduction for clients
- Verified renewable energy certificates
- Regular sustainability reporting

## Conclusion

Sustainable AI compute isn't just good for the planet—it's increasingly good for business. Clients with ESG commitments actively seek green compute options, and we're positioned to meet that demand.
    `,
    author: {
      name: "Michael Ochieng",
      role: "Sustainability Manager",
      avatar: "MO",
    },
    category: "Sustainability",
    tags: ["Sustainability", "Green Computing", "ESG", "Renewable Energy"],
    publishedAt: "2024-12-15",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "investor-guide-datacenter-economics",
    title: "Investor Guide: Understanding Datacenter Economics",
    excerpt: "A comprehensive guide to datacenter investment metrics, revenue models, and what makes Kenya AI Compute an attractive opportunity.",
    content: `
Datacenter investing requires understanding unique metrics and economic drivers. This guide explains the fundamentals for prospective investors.

## Key Metrics Explained

### Power Usage Effectiveness (PUE)
Ratio of total facility power to IT equipment power. Lower is better.
- **Industry Average**: 1.58
- **Our Target**: 1.3-1.4
- **Best in Class**: 1.1

### Revenue Per MW
Annual revenue generated per megawatt of capacity.
- **Traditional Cloud**: $3-5M/MW
- **AI/GPU Compute**: $8-15M/MW
- **Our Target**: $10M/MW

### EBITDA Margins
- **Industry Average**: 40-50%
- **AI-Focused DCs**: 50-60%
- **Our Target**: 55%+

## Revenue Model

Our revenue comes from multiple streams:

1. **Direct Compute Sales** (60%): Hourly/monthly GPU/CPU rental
2. **DePIN Hosting** (20%): Revenue sharing with decentralized networks
3. **Colocation** (15%): Space and power for client hardware
4. **Value-Added Services** (5%): Managed services, consulting

## Cost Structure

- **Energy**: 35% (lower than industry average due to Kenya rates)
- **Personnel**: 20%
- **Maintenance**: 15%
- **Depreciation**: 20%
- **Other**: 10%

## Investment Tiers

| Tier | Minimum | Target ROI | Lock-up |
|------|---------|------------|---------|
| Seed | $50K | 25-30% | 3 years |
| Growth | $250K | 22-25% | 2 years |
| Strategic | $1M+ | 18-22% | 1 year |

## Risk Factors

Key risks to consider:
- Market demand volatility
- Technology obsolescence
- Regulatory changes
- Currency fluctuation (KES/USD)

We mitigate these through diversified revenue, regular hardware refresh cycles, and USD-denominated contracts.

## Conclusion

Datacenter investment offers attractive risk-adjusted returns, especially in high-growth segments like AI compute. Kenya's unique advantages make our project particularly compelling.
    `,
    author: {
      name: "David Chen",
      role: "Investor Relations",
      avatar: "DC",
    },
    category: "Investment",
    tags: ["Investment", "Datacenter", "Economics", "ROI"],
    publishedAt: "2024-12-10",
    readTime: "9 min",
    featured: false,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))];
}

export function getAllTags(): string[] {
  const tags = blogPosts.flatMap((post) => post.tags);
  return [...new Set(tags)];
}
