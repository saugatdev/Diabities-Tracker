import React from 'react'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import BlogHomepage from '@/components/blogs/bloghomepage'
import { Link } from 'react-router-dom' // Import Link from react-router-dom


const DiabetesTrackerFooter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault()
    // Add your subscription logic here
    console.log("Subscribed to newsletter")
  }

  return (
    <footer className="bg-background border-t w-full max-w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Diabetes Tracker</h3>
            <p className="text-sm text-muted-foreground">
              Empowering you to manage your diabetes with ease and confidence.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blogs" className="hover:underline">Blog</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                required
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Diabetes Tracker. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="" className='bg-transparent'>
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="" className='bg-transparent'>
              <Twitter className="h-5 w-5 " />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="" className='bg-transparent'>
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="" className='bg-transparent'>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default DiabetesTrackerFooter;