"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Chioma A.",
    role: "Verified Customer",
    content: "Best food delivery service in Lagos! Always fresh and delivered hot. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Tunde O.",
    role: "Regular Customer",
    content: "24/7 availability is a lifesaver for night-shift workers like me. Food quality never disappoints.",
    rating: 5,
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Adeola K.",
    role: "Food Enthusiast",
    content: "The flavors are authentic and portions are generous. Bellefood is my go-to spot!",
    rating: 4,
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Customers Say</h2>
          <p className="text-lg text-foreground/70">Join thousands of satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border-border/50 p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
