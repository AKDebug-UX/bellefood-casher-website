"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"

export interface MenuItem {
  id: string
  name: string
  price: string
  description: string
  image: string
  category: string
  rating?: number
  reviews?: number
}

interface MenuCategoriesProps {
  items: MenuItem[]
  onOrder: (item: MenuItem) => void
}

export function MenuCategories({ items, onOrder }: MenuCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...new Set(items.map((item) => item.category))]
  const filteredItems = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-foreground hover:border-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-xl transition-shadow bg-card border-border/50 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {item.rating && (
                <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                  <span className="text-sm font-semibold text-primary-foreground">{item.rating}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.name}</h3>
              <p className="text-foreground/70 text-sm mb-3 line-clamp-2 flex-1">{item.description}</p>

              {item.reviews && <div className="text-xs text-foreground/60 mb-3">{item.reviews} reviews</div>}

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <span className="text-primary font-bold text-lg">{item.price}</span>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => onOrder(item)}
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
