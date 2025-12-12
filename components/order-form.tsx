"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Minus, ShoppingCart } from "lucide-react"

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

const MENU_ITEMS = [
  { id: "1", name: "Party Jollof Rice", price: 4000 },
  { id: "2", name: "Jollof Rice and Beans", price: 4000 },
  { id: "3", name: "Village Rice", price: 5000 },
  { id: "4", name: "White Rice and Beans", price: 4500 },
  { id: "5", name: "Spicy Spaghetti", price: 4000 },
  { id: "6", name: "Fried Plantain", price: 1000 },
  { id: "7", name: "Egusi Soup", price: 4000 },
  { id: "8", name: "Okro Soup", price: 4000 },
  { id: "9", name: "Eba", price: 700 },
  { id: "10", name: "Poundo", price: 1500 },
  { id: "11", name: "White Yam", price: 3000 },
  { id: "12", name: "Porridge Yam", price: 4000 },
  { id: "13", name: "Shawarma", price: 6000 },
  { id: "14", name: "Instant Noodles", price: 8000 },
  { id: "15", name: "Akara", price: 2000 },
  { id: "16", name: "Pap", price: 200 },
  { id: "17", name: "Banger Soup and Starch (Big)", price: 30000 },
  { id: "18", name: "Banger Soup and Starch (Small)", price: 15000 },
  { id: "19", name: "Owo Soup and Starch (Big)", price: 30000 },
  { id: "20", name: "Owo Soup and Starch (Small)", price: 15000 },
  { id: "21", name: "Barbecue", price: 18000 },
  { id: "22", name: "Suya", price: 1500 },
  { id: "23", name: "Roasted Chicken", price: 6000 },
  { id: "24", name: "Roasted Turkey Wings (3 pcs)", price: 5000 },
  { id: "25", name: "Peppered Chicken", price: 5500 },
  { id: "26", name: "Peppered Turkey", price: 6000 },
  { id: "27", name: "Goatmeat Pepper Soup (Big)", price: 30000 },
  { id: "28", name: "Goatmeat Pepper Soup (Small)", price: 13000 },
  { id: "29", name: "Goatmeat", price: 4000 },
  { id: "30", name: "Beef", price: 2000 },
  { id: "31", name: "Assorted", price: 1500 },
  { id: "32", name: "Cow Leg", price: 2000 },
  { id: "33", name: "Boiled Egg", price: 1000 },
  { id: "34", name: "Sauce Egg", price: 3000 },
  { id: "35", name: "Hollandia Yoghurt", price: 5500 },
  { id: "36", name: "Caprisun", price: 1000 },
  { id: "37", name: "Big Chivita Exotic", price: 5500 },
  { id: "38", name: "Vitamilk", price: 4500 },
  { id: "39", name: "Fanta", price: 1000 },
  { id: "40", name: "Small Chivita Exotic", price: 1500 },
  { id: "41", name: "Sprite", price: 800 },
  { id: "42", name: "Malta Guinness", price: 1500 },
  { id: "43", name: "Fayrouz", price: 1500 },
  { id: "44", name: "Bottle Water", price: 700 },
]

export function OrderForm() {
  const [cart, setCart] = useState<OrderItem[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  })
  const WHATSAPP_NUMBERS = [
    { label: "09063584306", intl: "2349063584306" },
    { label: "09137421838", intl: "2349137421838" },
  ]
  const [recipientIntl, setRecipientIntl] = useState<string>(WHATSAPP_NUMBERS[0].intl)

  const addToCart = (item: (typeof MENU_ITEMS)[0]) => {
    const existing = cart.find((x) => x.id === item.id)
    if (existing) {
      setCart(cart.map((x) => (x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x)))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter((x) => x.id !== id))
    } else {
      setCart(cart.map((x) => (x.id === id ? { ...x, quantity } : x)))
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert("Please add items to your cart")
      return
    }

    const itemsText = cart.map((item) => `${item.name} x${item.quantity} = ₦${item.price * item.quantity}`).join("\n")

    const message = `Hello Bellefood Casher!\n\n*Order Details:*\n${itemsText}\n\n*Total: ₦${total}*\n\n*Delivery Information:*\nName: ${deliveryInfo.name}\nPhone: ${deliveryInfo.phone}\nAddress: ${deliveryInfo.address}\nPayment: ${deliveryInfo.paymentMethod}`

    window.location.href = `https://wa.me/${recipientIntl}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {/* Menu Items */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6">Select Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-white border-white/50 p-2 rounded-md gap-2">
          {MENU_ITEMS.map((item) => (
            <Card key={item.id} className="bg-card border-border/50 p-3 flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-primary font-bold">₦{item.price}</p>
              </div>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => addToCart(item)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Summary & Form */}
      <div>
        <Card className="bg-card border-border/50 p-6 sticky top-24">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {/* Cart Items */}
          <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-foreground/60 text-sm">No items selected</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm pb-2 border-b border-border/50">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-foreground/60">₦{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-primary/20 hover:bg-primary/30 rounded flex items-center justify-center transition"
                    >
                      <Minus className="w-3 h-3 text-primary" />
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-primary/20 hover:bg-primary/30 rounded flex items-center justify-center transition"
                    >
                      <Plus className="w-3 h-3 text-primary" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total */}
          <div className="border-t border-border/50 py-3 mb-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-primary">₦{total}</span>
            </div>
          </div>

          {/* Delivery Form */}
          <form onSubmit={handleSubmitOrder} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={deliveryInfo.name}
              onChange={(e) => setDeliveryInfo({ ...deliveryInfo, name: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={deliveryInfo.phone}
              onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Delivery Address"
              required
              rows={3}
              value={deliveryInfo.address}
              onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <select
              value={recipientIntl}
              onChange={(e) => setRecipientIntl(e.target.value)}
              className="w-full px-3 py-2 bg-input border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {WHATSAPP_NUMBERS.map((n) => (
                <option key={n.intl} value={n.intl}>{`Send to WhatsApp ${n.label}`}</option>
              ))}
            </select>
            <select
              value={deliveryInfo.paymentMethod}
              onChange={(e) => setDeliveryInfo({ ...deliveryInfo, paymentMethod: e.target.value })}
              className="w-full px-3 py-2 bg-input border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Card Payment">Card Payment</option>
            </select>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              disabled={cart.length === 0}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Order on WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
