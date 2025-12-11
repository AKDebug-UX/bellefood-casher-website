"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { X, Play } from "lucide-react"

interface GalleryItem {
  id: string
  type: "image" | "video"
  title: string
  src: string
  thumbnail?: string
  category: "Food" | "Preparation" | "Packaging" | "Team"
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    title: "Jollof Rice Special",
    src: "/nigerian-jollof-rice.jpg",
    category: "Food",
  },
  {
    id: "2",
    type: "image",
    title: "Fried Rice Deluxe",
    src: "/delicious-fried-rice.jpg",
    category: "Food",
  },
  {
    id: "3",
    type: "image",
    title: "Ofada Rice & Stew",
    src: "/traditional-ofada-rice.jpg",
    category: "Food",
  },
  {
    id: "4",
    type: "image",
    title: "Grilled Chicken",
    src: "/juicy-grilled-chicken.jpg",
    category: "Food",
  },
  {
    id: "5",
    type: "image",
    title: "Crispy Turkey",
    src: "/golden-fried-turkey.jpg",
    category: "Food",
  },
  {
    id: "6",
    type: "image",
    title: "Plantain Chips",
    src: "/crispy-plantain-chips.jpg",
    category: "Food",
  },
  {
    id: "7",
    type: "image",
    title: "Yam Fries",
    src: "/golden-yam-fries.jpg",
    category: "Food",
  },
  {
    id: "8",
    type: "image",
    title: "Fresh Coleslaw",
    src: "/fresh-coleslaw-salad.jpg",
    category: "Food",
  },
  {
    id: "9",
    type: "image",
    title: "Beef Stew",
    src: "/hearty-beef-stew.jpg",
    category: "Food",
  },
  {
    id: "10",
    type: "image",
    title: "Fried Fish",
    src: "/crispy-fried-fish.jpg",
    category: "Food",
  },
]

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...new Set(GALLERY_ITEMS.map((item) => item.category))]
  const filteredItems =
    selectedCategory === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <main className="w-full">
      <Header />
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Gallery</h1>
            <p className="text-lg text-foreground/70">
              Explore our beautiful collection of fresh, delicious meals and behind-the-scenes moments
            </p>
          </div>

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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all bg-card border-border/50"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  {item.type === "image" ? (
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <>
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 flex items-center justify-center transition">
                        <Play className="w-12 h-12 text-white fill-white" />
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox/Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src || "/placeholder.svg"}
                alt={selectedItem.title}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <video src={selectedItem.src} controls autoPlay className="w-full h-full object-contain rounded-lg" />
            )}

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-primary/80 hover:bg-primary p-2 rounded-full transition"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-semibold mb-1">{selectedItem.title}</h3>
              <p className="text-white/80">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
