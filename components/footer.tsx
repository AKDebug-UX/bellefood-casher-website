import Link from "next/link"
import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Bellefood Casher</h3>
            <p className="text-foreground/70 text-sm">
              Premium 24/7 food delivery service in Lagos. Fresh, delicious meals at your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="#menu" className="text-foreground/70 hover:text-primary transition">
                Menu
              </Link>
              <Link href="#gallery" className="text-foreground/70 hover:text-primary transition">
                Gallery
              </Link>
              <Link href="#about" className="text-foreground/70 hover:text-primary transition">
                About Us
              </Link>
              <Link href="#contact" className="text-foreground/70 hover:text-primary transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+2349137421838" className="hover:text-primary transition">
                  +234 913 742 1838
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Jiuhua Street, Ikota, Lagos</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition text-primary hover:text-primary-foreground"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition text-primary hover:text-primary-foreground"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition text-primary hover:text-primary-foreground"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>
            © 2025 Bellefood Casher. All rights reserved.
            <span className="ml-2">• Built by <a href="https://upraisertech.name.ng">AKDebug</a></span>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
