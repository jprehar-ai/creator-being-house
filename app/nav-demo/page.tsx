"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function NavigationDemoPage() {
  const [openDropdown1, setOpenDropdown1] = useState(false)
  const [openDropdown2, setOpenDropdown2] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif mb-2 text-center">Navigation Options</h1>
        <p className="text-muted-foreground text-center mb-12">Compare the different navigation structures below</p>

        {/* Option 1: More Dropdown */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-4">Option 1: "More" Dropdown</h2>
          <p className="text-sm text-muted-foreground mb-6">Secondary items grouped under "More"</p>
          <div className="border rounded-lg p-6 bg-card">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-serif">Creator Being</div>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm hover:text-foreground/80 transition-colors">
                  Home
                </Link>
                <Link href="/archetype-explorer" className="text-sm hover:text-foreground/80 transition-colors">
                  Discover Your Path
                </Link>
                <Link href="/shop" className="text-sm hover:text-foreground/80 transition-colors">
                  Shop
                </Link>
                <Link href="/community" className="text-sm hover:text-foreground/80 transition-colors">
                  Community
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown1(!openDropdown1)}
                    className="text-sm hover:text-foreground/80 transition-colors flex items-center gap-1"
                  >
                    More
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown1 && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-card border rounded-lg shadow-lg py-2">
                      <Link href="/about" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                        About
                      </Link>
                      <a
                        href="https://workisdead.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                      >
                        Work Is Dead
                      </a>
                    </div>
                  )}
                </div>
                <Link
                  href="/membership"
                  className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
                >
                  Join Waitlist
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Option 2: About Dropdown */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-4">Option 2: "About" Dropdown</h2>
          <p className="text-sm text-muted-foreground mb-6">Work Is Dead nested under About</p>
          <div className="border rounded-lg p-6 bg-card">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-serif">Creator Being</div>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm hover:text-foreground/80 transition-colors">
                  Home
                </Link>
                <Link href="/archetype-explorer" className="text-sm hover:text-foreground/80 transition-colors">
                  Discover Your Path
                </Link>
                <Link href="/shop" className="text-sm hover:text-foreground/80 transition-colors">
                  Shop
                </Link>
                <Link href="/community" className="text-sm hover:text-foreground/80 transition-colors">
                  Community
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown2(!openDropdown2)}
                    className="text-sm hover:text-foreground/80 transition-colors flex items-center gap-1"
                  >
                    About
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown2 && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-card border rounded-lg shadow-lg py-2">
                      <Link href="/about" className="block px-4 py-2 text-sm hover:bg-accent transition-colors">
                        Our Story
                      </Link>
                      <a
                        href="https://workisdead.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                      >
                        Work Is Dead
                        <span className="text-xs text-muted-foreground block">Sister Project</span>
                      </a>
                    </div>
                  )}
                </div>
                <Link
                  href="/membership"
                  className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
                >
                  Join Waitlist
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Option 3: Utility Bar */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-4">Option 3: Utility Bar (Current)</h2>
          <p className="text-sm text-muted-foreground mb-6">Two-tier navigation with utility bar on top</p>
          <div className="border rounded-lg overflow-hidden bg-card">
            {/* Utility Bar */}
            <div className="bg-muted/30 border-b px-6 py-2">
              <div className="flex items-center justify-end gap-6 text-xs">
                <a
                  href="https://workisdead.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground/80 transition-colors"
                >
                  Work Is Dead
                </a>
                <Link href="/about" className="hover:text-foreground/80 transition-colors">
                  About
                </Link>
              </div>
            </div>
            {/* Main Nav */}
            <div className="p-6">
              <nav className="flex items-center justify-between">
                <div className="text-xl font-serif">Creator Being</div>
                <div className="flex items-center gap-8">
                  <Link href="/" className="text-sm hover:text-foreground/80 transition-colors">
                    Home
                  </Link>
                  <Link href="/archetype-explorer" className="text-sm hover:text-foreground/80 transition-colors">
                    Discover Your Path
                  </Link>
                  <Link href="/shop" className="text-sm hover:text-foreground/80 transition-colors">
                    Shop
                  </Link>
                  <Link href="/community" className="text-sm hover:text-foreground/80 transition-colors">
                    Community
                  </Link>
                  <Link
                    href="/membership"
                    className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
                  >
                    Join Waitlist
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Option 4: All Horizontal */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-4">Option 4: All Horizontal (No Dropdown)</h2>
          <p className="text-sm text-muted-foreground mb-6">All items visible, no hidden menus</p>
          <div className="border rounded-lg p-6 bg-card">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-serif">Creator Being</div>
              <div className="flex items-center gap-6">
                <Link href="/" className="text-sm hover:text-foreground/80 transition-colors">
                  Home
                </Link>
                <Link href="/archetype-explorer" className="text-sm hover:text-foreground/80 transition-colors">
                  Discover Your Path
                </Link>
                <Link href="/shop" className="text-sm hover:text-foreground/80 transition-colors">
                  Shop
                </Link>
                <Link href="/community" className="text-sm hover:text-foreground/80 transition-colors">
                  Community
                </Link>
                <Link href="/about" className="text-sm hover:text-foreground/80 transition-colors">
                  About
                </Link>
                <a
                  href="https://workisdead.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-foreground/80 transition-colors"
                >
                  Work Is Dead
                </a>
                <Link
                  href="/membership"
                  className="text-sm bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
                >
                  Join Waitlist
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Comparison Notes */}
        <div className="border rounded-lg p-6 bg-muted/30">
          <h3 className="font-serif text-lg mb-4">Quick Comparison</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Option 1 (More Dropdown):</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Cleanest main nav (5 items)</li>
                <li>Clear hierarchy</li>
                <li>Scalable for future items</li>
              </ul>
            </div>
            <div>
              <strong>Option 2 (About Dropdown):</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Logical grouping</li>
                <li>Shows project relationship</li>
                <li>Clean but contextual</li>
              </ul>
            </div>
            <div>
              <strong>Option 3 (Utility Bar):</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Separates utility from primary</li>
                <li>Two-tier structure</li>
                <li>Currently implemented</li>
              </ul>
            </div>
            <div>
              <strong>Option 4 (All Horizontal):</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Everything visible</li>
                <li>No hidden items</li>
                <li>Can feel crowded (7 items)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
