"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

const MENU_CATEGORIES = {
  "Rice Dishes": [
    { name: "Jollof Rice", price: "₦1,500", image: "/nigerian-jollof-rice.jpg" },
    { name: "Fried Rice", price: "₦1,500", image: "/delicious-fried-rice.jpg" },
    { name: "Ofada Rice", price: "₦1,800", image: "/traditional-ofada-rice.jpg" },
    { name: "Coconut Rice", price: "₦2,000", image: "/creamy-coconut-rice.jpg" },
  ],
  Proteins: [
    { name: "Grilled Chicken", price: "₦2,500", image: "/juicy-grilled-chicken.jpg" },
    { name: "Fried Turkey", price: "₦3,500", image: "/golden-fried-turkey.jpg" },
    { name: "Beef Stew", price: "₦2,000", image: "/hearty-beef-stew.jpg" },
    { name: "Fried Fish", price: "₦2,800", image: "/crispy-fried-fish.jpg" },
  ],
  Sides: [
    { name: "Plantain Chips", price: "₦800", image: "/crispy-plantain-chips.jpg" },
    { name: "Yam Fries", price: "₦900", image: "/golden-yam-fries.jpg" },
    { name: "Coleslaw", price: "₦600", image: "/fresh-coleslaw-salad.jpg" },
    { name: "Beans & Corn", price: "₦700", image: "/beans-and-corn.jpg" },
  ],
}

export function MenuSection() {
  const handleOrderClick = (itemName: string) => {
    const message = `Hello Bellefood Casher, I want to order ${itemName}`
    window.location.href = `https://wa.me/2349137421838?text=${encodeURIComponent(message)}`
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
                        onClick={() => handleOrderClick(item.name)}
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
