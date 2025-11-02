"use client"

import { CustomButton } from "@/components/custom-button"

export default function ButtonExamples() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Button Examples</h1>

      <div className="space-y-4">
        <CustomButton href="#" variant="pink-yellow" icon="arrow">
          Step inside the Creator Being House
        </CustomButton>

        <CustomButton href="#" variant="purple-pink" icon="arrow">
          Experience a day as a Harmonic Human
        </CustomButton>

        <CustomButton href="#" variant="join" icon="sparkle">
          Join Creator Being+
        </CustomButton>
      </div>
    </div>
  )
}
