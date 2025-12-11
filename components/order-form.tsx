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
  { id: "1", name: "Jollof Rice", price: 1500 },
  { id: "2", name: "Fried Rice", price: 1500 },
  { id: "3", name: "Ofada Rice", price: 1800 },
  { id: "4", name: "Coconut Rice", price: 2000 },
  { id: "5", name: "Grilled Chicken", price: 2500 },
  { id: "6", name: "Fried Turkey", price: 3500 },
  { id: "7", name: "Beef Stew", price: 2000 },
  { id: "8", name: "Fried Fish", price: 2800 },
  { id: "9", name: "Plantain Chips", price: 800 },
  { id: "10", name: "Yam Fries", price: 900 },
]

export function OrderForm() {
  const [cart, setCart] = useState<OrderItem[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  })

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

    window.location.href = `https://wa.me/2349137421838?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Menu Items */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6">Select Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MENU_ITEMS.map((item) => (
            <Card key={item.id} className="bg-card border-border/50 p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
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
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
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
