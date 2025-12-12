"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

const MENU_CATEGORIES = {
  "Rice Dishes": [
    { name: "Party Jollof Rice", price: "₦4,000", image: "/nigerian-jollof-rice.jpg" },
    { name: "Jollof Rice and Beans", price: "₦4,000", image: "/delicious-jollof-rice-with-chicken.jpg" },
    { name: "Village Rice", price: "₦5,000", image: "/traditional-nigerian-soup-and-swallow.jpg" },
    { name: "White Rice and Beans", price: "₦4,500", image: "/fresh-fried-rice-with-crispy-chicken.jpg" },
  ],
  Proteins: [
    { name: "Peppered Chicken", price: "₦5,500", image: "/juicy-grilled-chicken.jpg" },
    { name: "Peppered Turkey", price: "₦6,000", image: "/golden-fried-turkey.jpg" },
    { name: "Beef", price: "₦2,000", image: "/hearty-beef-stew.jpg" },
    { name: "Goatmeat", price: "₦4,000", image: "/placeholder.jpg" },
  ],
  "Soft Drinks": [
    { name: "Hollandia Yoghurt", price: "₦5,500", image: "/placeholder.svg" },
    { name: "Caprisun", price: "₦1,000", image: "/placeholder.svg" },
    { name: "Fanta", price: "₦1,000", image: "/placeholder.svg" },
    { name: "Bottle Water", price: "₦700", image: "/placeholder.svg" },
  ],
}

export function MenuSection() {
  const handleOrderClick = () => {
    window.location.href = "/order"
  }

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg text-foreground/70">Freshly prepared meals available 24/7</p>
        </div>

        {Object.entries(MENU_CATEGORIES).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <Card
                  key={item.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border/50"
                >
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={handleOrderClick}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
