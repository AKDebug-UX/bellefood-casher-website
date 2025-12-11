import { Card } from "@/components/ui/card"
import { Truck, Clock, Leaf, ThumbsUp } from "lucide-react"

const FEATURES = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick preparation and delivery to your location",
  },
  {
    icon: Clock,
    title: "24/7 Open",
    description: "We never close - order anytime you want",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Premium quality ingredients in every meal",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "Your satisfaction is our top priority",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-card border-border/50 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
