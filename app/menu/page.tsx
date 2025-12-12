"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MenuCategories, type MenuItem } from "@/components/menu-categories"

const ALL_MENU_ITEMS: MenuItem[] = [
  { id: "1", name: "Party Jollof Rice", price: "₦4,000", description: "Premium party-style jollof rice", image: "/nigerian-jollof-rice.jpg", category: "MENU" },
  { id: "2", name: "Jollof Rice and Beans", price: "₦4,000", description: "Jollof rice served with beans", image: "/delicious-jollof-rice-with-chicken.jpg", category: "MENU" },
  { id: "3", name: "Village Rice", price: "₦5,000", description: "Traditional village-style rice", image: "/traditional-nigerian-soup-and-swallow.jpg", category: "MENU" },
  { id: "4", name: "White Rice and Beans", price: "₦4,500", description: "White rice served with beans", image: "/fresh-fried-rice-with-crispy-chicken.jpg", category: "MENU" },
  { id: "5", name: "Spicy Spaghetti", price: "₦4,000", description: "Hot and spicy spaghetti", image: "/placeholder.svg", category: "MENU" },
  { id: "6", name: "Fried Plantain", price: "₦1,000", description: "Crispy fried plantain", image: "/crispy-plantain-chips.jpg", category: "MENU" },
  { id: "7", name: "Egusi Soup", price: "₦4,000", description: "Rich egusi soup", image: "/placeholder.svg", category: "MENU" },
  { id: "8", name: "Okro Soup", price: "₦4,000", description: "Fresh okro soup", image: "/placeholder.svg", category: "MENU" },
  { id: "9", name: "Eba", price: "₦700", description: "Garri swallow", image: "/placeholder.svg", category: "MENU" },
  { id: "10", name: "Poundo", price: "₦1,500", description: "Pounded yam flour", image: "/placeholder.svg", category: "MENU" },
  { id: "11", name: "White Yam", price: "₦3,000", description: "Boiled white yam", image: "/placeholder.svg", category: "MENU" },
  { id: "12", name: "Porridge Yam", price: "₦4,000", description: "Yam porridge", image: "/placeholder.svg", category: "MENU" },
  { id: "13", name: "Shawarma", price: "₦6,000", description: "Tasty shawarma wrap", image: "/placeholder.svg", category: "MENU" },
  { id: "14", name: "Instant Noodles", price: "₦8,000", description: "Instant noodles meal", image: "/placeholder.svg", category: "MENU" },
  { id: "15", name: "Akara", price: "₦2,000", description: "Fried bean cakes", image: "/placeholder.svg", category: "MENU" },
  { id: "16", name: "Pap", price: "₦200", description: "Fermented corn meal", image: "/placeholder.svg", category: "MENU" },
  { id: "17", name: "Banger Soup and Starch (Big)", price: "₦30,000", description: "Big size", image: "/placeholder.svg", category: "MENU" },
  { id: "18", name: "Banger Soup and Starch (Small)", price: "₦15,000", description: "Small size", image: "/placeholder.svg", category: "MENU" },
  { id: "19", name: "Owo Soup and Starch (Big)", price: "₦30,000", description: "Big size", image: "/placeholder.svg", category: "MENU" },
  { id: "20", name: "Owo Soup and Starch (Small)", price: "₦15,000", description: "Small size", image: "/placeholder.svg", category: "MENU" },
  { id: "21", name: "Barbecue", price: "₦18,000", description: "Barbecue special", image: "/placeholder.svg", category: "MENU" },
  { id: "22", name: "Suya", price: "₦1,500", description: "Spicy suya", image: "/placeholder.svg", category: "MENU" },
  { id: "23", name: "Roasted Chicken", price: "₦6,000", description: "Roasted chicken", image: "/juicy-grilled-chicken.jpg", category: "MENU" },
  { id: "24", name: "Roasted Turkey Wings (3 pcs)", price: "₦5,000", description: "Three wings", image: "/golden-fried-turkey.jpg", category: "MENU" },
  { id: "25", name: "Peppered Chicken", price: "₦5,500", description: "Peppered chicken", image: "/juicy-grilled-chicken.jpg", category: "PROTEINS" },
  { id: "26", name: "Peppered Turkey", price: "₦6,000", description: "Peppered turkey", image: "/golden-fried-turkey.jpg", category: "PROTEINS" },
  { id: "27", name: "Goatmeat Pepper Soup (Big)", price: "₦30,000", description: "Big size", image: "/placeholder.svg", category: "PROTEINS" },
  { id: "28", name: "Goatmeat Pepper Soup (Small)", price: "₦13,000", description: "Small size", image: "/placeholder.svg", category: "PROTEINS" },
  { id: "29", name: "Goatmeat", price: "₦4,000", description: "Grilled goat meat", image: "/placeholder.svg", category: "PROTEINS" },
  { id: "30", name: "Beef", price: "₦2,000", description: "Beef portion", image: "/hearty-beef-stew.jpg", category: "PROTEINS" },
  { id: "31", name: "Assorted", price: "₦1,500", description: "Assorted meat", image: "/placeholder.svg", category: "PROTEINS" },
  { id: "32", name: "Cow Leg", price: "₦2,000", description: "Cow leg portion", image: "/placeholder.svg", category: "PROTEINS" },
  { id: "33", name: "Boiled Egg", price: "₦1,000", description: "Boiled egg", image: "/placeholder.svg", category: "PROTEINS" },
  { id: "34", name: "Sauce Egg", price: "₦3,000", description: "Egg in sauce", image: "/placeholder.svg", category: "PROTEINS" },
  { id: "35", name: "Hollandia Yoghurt", price: "₦5,500", description: "Yoghurt drink", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "36", name: "Caprisun", price: "₦1,000", description: "Caprisun drink", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "37", name: "Big Chivita Exotic", price: "₦5,500", description: "Chivita exotic big", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "38", name: "Vitamilk", price: "₦4,500", description: "Vitamilk drink", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "39", name: "Fanta", price: "₦1,000", description: "Fanta soda", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "40", name: "Small Chivita Exotic", price: "₦1,500", description: "Chivita exotic small", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "41", name: "Sprite", price: "₦800", description: "Sprite soda", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "42", name: "Malta Guinness", price: "₦1,500", description: "Malt drink", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "43", name: "Fayrouz", price: "₦1,500", description: "Fayrouz drink", image: "/placeholder.svg", category: "SOFT DRINKS" },
  { id: "44", name: "Bottle Water", price: "₦700", description: "Bottled water", image: "/placeholder.svg", category: "SOFT DRINKS" },
]

export default function MenuPage() {
  const handleOrder = (item: MenuItem) => {
    window.location.href = "/order"
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
