import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Award, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bellefood Casher</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Bellefood Casher is your trusted 24/7 food delivery partner in Lagos, dedicated to bringing premium
              Nigerian cuisine to your doorstep at any hour of the day or night.
            </p>
          </div>

          {/* Story */}
          <div className="bg-card border border-border/50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Founded with a passion for quality food and exceptional service, Bellefood Casher emerged from a simple
              idea: great food shouldn't have a closing time. We recognized the need for reliable, tasty meal options
              available around the clock for hardworking Lagosians.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Today, we've grown into a beloved local brand trusted by thousands of customers who rely on us for
              delicious, freshly prepared meals whenever hunger strikes.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border border-border/50 p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
                    <p className="text-foreground/70">We use only the finest, freshest ingredients in all our meals</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border border-border/50 p-6">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Availability</h3>
                    <p className="text-foreground/70">Always open, always ready to serve your cravings</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border border-border/50 p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Service</h3>
                    <p className="text-foreground/70">Fast preparation and delivery without compromising quality</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border border-border/50 p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Customer First</h3>
                    <p className="text-foreground/70">Your satisfaction is our top priority</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <p className="text-foreground/80">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-foreground/80">Hours of Service</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <p className="text-foreground/80">Menu Items</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.7★</div>
                <p className="text-foreground/80">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Bellefood Casher and our 24/7 premium food delivery service in Lagos.",
  alternates: { canonical: "/about" },
}
