'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Code2, Cpu, Globe2, Layers, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Global CDN",
    description: "Lightning-fast content delivery across 200+ locations worldwide"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-time Updates",
    description: "Instant synchronization across all connected devices"
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "API Integration",
    description: "Seamless integration with your existing tech stack"
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Scalable Infrastructure",
    description: "Built to handle millions of requests without breaking a sweat"
  }
];

const pricing = [
  {
    title: "Starter",
    price: "$29",
    features: ["5 Team Members", "10GB Storage", "Basic Analytics", "24/7 Support"],
    popular: false
  },
  {
    title: "Pro",
    price: "$79",
    features: ["15 Team Members", "50GB Storage", "Advanced Analytics", "Priority Support"],
    popular: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Unlimited Team Members", "Unlimited Storage", "Custom Analytics", "Dedicated Support"],
    popular: false
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Build Faster, Scale Better
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              The modern platform for building and scaling your SaaS application.
              Deploy in minutes, scale to millions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-muted-foreground">
              Built by developers, for developers. Simple yet powerful.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-muted-foreground">
              No hidden fees. No surprises. Start building for free.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-8 h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="text-primary text-sm font-semibold mb-2">Most Popular</div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-muted-foreground text-sm font-normal">/month</span></div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building the future with our platform.
            </p>
            <Button size="lg" variant="secondary">
              Start Building Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}