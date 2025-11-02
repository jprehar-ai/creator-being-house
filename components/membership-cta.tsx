"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function MembershipCta() {
  return (
    <Card className="bg-gradient-to-r from-yellow-500/70 to-orange-500/70 backdrop-blur-sm border-white/20 p-6 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-2">Enhance Your Journey</h3>
      <p className="text-white/90 mb-6">Join Creator Being+ for exclusive content and deeper experiences.</p>

      <Link href="/membership">
        <Button className="bg-white text-orange-600 hover:bg-white/90 px-6">Join Creator Being+</Button>
      </Link>
    </Card>
  )
}
