
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PiggyBank,
  BarChart3,
  Clock,
  Wallet,
  Globe2,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smart Tracking",
      description: "Effortlessly track your income and expenses with our intuitive interface",
      icon: <PiggyBank className="w-12 h-12 text-primary" />,
    },
    {
      title: "Visual Insights",
      description: "Get clear visual representations of your spending patterns",
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
    },
    {
      title: "Real-time Updates",
      description: "See your financial changes reflect instantly",
      icon: <Clock className="w-12 h-12 text-primary" />,
    },
    {
      title: "Secure Storage",
      description: "Your data is stored safely on your device",
      icon: <Shield className="w-12 h-12 text-primary" />,
    },
    {
      title: "Multiple Currencies",
      description: "Track expenses in different currencies seamlessly",
      icon: <Globe2 className="w-12 h-12 text-primary" />,
    },
    {
      title: "Offline Access",
      description: "Access your data anytime, even without internet",
      icon: <Smartphone className="w-12 h-12 text-primary" />,
    },
    {
      title: "Quick Entry",
      description: "Add transactions in seconds with our streamlined interface",
      icon: <Zap className="w-12 h-12 text-primary" />,
    },
    {
      title: "Budget Planning",
      description: "Set and track your budgeting goals effectively",
      icon: <Wallet className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            Smart Money Management Made Simple
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Master Your Money, <br />
            <span className="text-foreground">Shape Your Future</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take control of your finances with our intuitive money management tool.
            No sign-up required, just start tracking and watch your savings grow.
          </p>
          <Button
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Money Manager?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience a new way of managing your finances with features designed
              for simplicity and effectiveness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card hover:bg-accent/5 border border-border/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Trusted by Smart Savers Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["10k+", "Active Users"],
              ["1M+", "Transactions Tracked"],
              ["$500k+", "Money Managed"],
            ].map(([stat, label], index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat}
                </div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Simple Steps to Financial Freedom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Start Tracking",
                description: "Add your first transaction in seconds",
              },
              {
                step: "2",
                title: "Monitor Progress",
                description: "Watch your financial habits improve",
              },
              {
                step: "3",
                title: "Achieve Goals",
                description: "Reach your savings targets faster",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of users who have already transformed their financial
            habits. Start your journey today.
          </p>
          <Button
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group"
          >
            Launch Dashboard
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
