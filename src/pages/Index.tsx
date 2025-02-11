
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PiggyBank, BarChart3, Clock, Wallet } from "lucide-react";

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
      icon: <Wallet className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Smart Money Management,{" "}
            <span className="text-primary">Simplified</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take control of your finances with our intuitive money management tool.
            No sign-up required, just start tracking.
          </p>
          <Button
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Our Money Manager?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
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
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Trusted by Smart Savers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["10k+", "Active Users"],
              ["1M+", "Transactions Tracked"],
              ["$500k+", "Money Managed"],
            ].map(([stat, label], index) => (
              <div
                key={index}
                className="p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start tracking your money today. No sign-up required.
          </p>
          <Button
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg"
          >
            Launch Dashboard
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
