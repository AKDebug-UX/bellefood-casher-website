import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderForm } from "@/components/order-form"

export default function OrderPage() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Place Your Order</h1>
            <p className="text-lg text-foreground/70">
              Select your items, fill in delivery details, and we'll get your order ready in no time
            </p>
          </div>

          <OrderForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
