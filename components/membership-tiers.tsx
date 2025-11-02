"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function MembershipTiers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const tiers = [
    {
      name: "Dreamer",
      price: billingCycle === "monthly" ? 11 : 110,
      features: [
        "Access to Welcome Room",
        "Access to Creator Being Room",
        "Access to Mirror Room",
        "Basic Resonance Compass",
        "Monthly content updates",
      ],
      highlighted: false,
    },
    {
      name: "Creator",
      price: billingCycle === "monthly" ? 22 : 220,
      features: [
        "Access to all 6 rooms",
        "Full Resonance Compass",
        "Monthly content updates",
        "Exclusive masterclasses",
        "Community access",
        "10% off Skins of Light",
      ],
      highlighted: true,
    },
    {
      name: "Cosmic",
      price: billingCycle === "monthly" ? 44 : 440,
      features: [
        "Access to all 6 rooms",
        "Advanced Resonance Compass",
        "Priority monthly content",
        "All masterclasses + archives",
        "Private community access",
        "20% off Skins of Light",
        "Quarterly 1:1 guidance",
      ],
      highlighted: false,
    },
  ]

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              billingCycle === "monthly" ? "bg-yellow-500 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              billingCycle === "yearly" ? "bg-yellow-500 text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Yearly (Save 15%)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`overflow-hidden ${
              tier.highlighted ? "border-2 border-yellow-400 bg-white/15" : "border border-white/20 bg-white/10"
            } backdrop-blur-sm`}
          >
            {tier.highlighted && (
              <div className="bg-yellow-400 text-yellow-900 py-1 px-4 text-center text-sm font-medium">
                Most Popular
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>

              <div className="mb-6">
                <span className="text-3xl font-bold text-white">${tier.price}</span>
                <span className="text-white/70">/{billingCycle === "monthly" ? "month" : "year"}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                Subscribe Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
