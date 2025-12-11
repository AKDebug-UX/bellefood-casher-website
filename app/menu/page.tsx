"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MenuCategories, type MenuItem } from "@/components/menu-categories"

const ALL_MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Jollof Rice",
    price: "₦1,500",
    description: "Aromatic Nigerian jollof rice with perfectly cooked grains and vibrant flavors",
    image: "/nigerian-jollof-rice.jpg",
    category: "Rice Dishes",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Fried Rice",
    price: "₦1,500",
    description: "Golden fried rice with mixed vegetables and succulent chicken pieces",
    image: "/delicious-fried-rice.jpg",
    category: "Rice Dishes",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "3",
    name: "Ofada Rice",
    price: "₦1,800",
    description: "Traditional Ofada rice with rich, spicy sauce and premium protein",
    image: "/traditional-ofada-rice.jpg",
    category: "Rice Dishes",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "4",
    name: "Coconut Rice",
    price: "₦2,000",
    description: "Creamy coconut rice with a blend of aromatic spices",
    image: "/creamy-coconut-rice.jpg",
    category: "Rice Dishes",
    rating: 4.6,
    reviews: 72,
  },
  {
    id: "5",
    name: "Grilled Chicken",
    price: "₦2,500",
    description: "Juicy grilled chicken marinated with special spices and herbs",
    image: "/juicy-grilled-chicken.jpg",
    category: "Proteins",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "6",
    name: "Fried Turkey",
    price: "₦3,500",
    description: "Golden, crispy fried turkey with a tender, succulent interior",
    image: "/golden-fried-turkey.jpg",
    category: "Proteins",
    rating: 4.8,
    reviews: 178,
  },
  {
    id: "7",
    name: "Beef Stew",
    price: "₦2,000",
    description: "Hearty beef stew with tender meat and rich, savory sauce",
    image: "/hearty-beef-stew.jpg",
    category: "Proteins",
    rating: 4.7,
    reviews: 91,
  },
  {
    id: "8",
    name: "Fried Fish",
    price: "₦2,800",
    description: "Crispy fried fish with flaky white meat and perfect seasoning",
    image: "/crispy-fried-fish.jpg",
    category: "Proteins",
    rating: 4.6,
    reviews: 145,
  },
  {
    id: "9",
    name: "Plantain Chips",
    price: "₦800",
    description: "Crispy, golden plantain chips - the perfect side or snack",
    image: "/crispy-plantain-chips.jpg",
    category: "Sides",
    rating: 4.5,
    reviews: 67,
  },
  {
    id: "10",
    name: "Yam Fries",
    price: "₦900",
    description: "Perfectly fried yam fries with crispy exterior and soft inside",
    image: "/golden-yam-fries.jpg",
    category: "Sides",
    rating: 4.4,
    reviews: 52,
  },
  {
    id: "11",
    name: "Coleslaw",
    price: "₦600",
    description: "Fresh, crunchy coleslaw with a tangy dressing",
    image: "/fresh-coleslaw-salad.jpg",
    category: "Sides",
    rating: 4.3,
    reviews: 38,
  },
  {
    id: "12",
    name: "Beans & Corn",
    price: "₦700",
    description: "Nutritious beans and corn blend, perfectly seasoned",
    image: "/beans-and-corn.jpg",
    category: "Sides",
    rating: 4.4,
    reviews: 44,
  },
]

export default function MenuPage() {
  const handleOrder = (item: MenuItem) => {
    const message = `Hello Bellefood Casher, I want to order:\n\n${item.name}\nPrice: ${item.price}\nQuantity: 1\n\nDelivery Address:`
    window.location.href = `https://wa.me/2349137421838?text=${encodeURIComponent(message)}`
  }

  return (
    <main className="w-full">
      <Header />
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Full Menu</h1>
            <p className="text-lg text-foreground/70">
              Explore our diverse selection of fresh, delicious meals prepared with premium ingredients
            </p>
          </div>

          <MenuCategories items={ALL_MENU_ITEMS} onOrder={handleOrder} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
