"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ColorPalettesPage() {
  const houseImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOUSE-oTcgxyyeZzxNiFVzs9OwmnEmzuARcn.png"

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-wrap gap-2 bg-black/40 backdrop-blur-xl rounded-full p-2 border border-white/10 max-w-[90vw]">
        {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
          <a
            key={letter}
            href={`#option${letter}`}
            className="px-3 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Option A: Deep Twilight */}
      <section id="optionA" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
            {/* Gradient background with fade to right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #1a1f3a 0%, #4a3f6b 30%, #6b5b95 60%, #5b7c99 80%, transparent 100%)",
              }}
            />
            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white inline-block">
                Option A: Deep Twilight
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-teal-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* House side */}
          <div className="relative bg-gray-950 flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Option B: Sunset Ember */}
      <section id="optionB" className="min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #d97706 0%, #c2410c 20%, #b45309 40%, #0f766e 60%, #115e59 80%, #1e3a5f 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="grid md:grid-cols-2 min-h-screen relative z-10">
          <div className="relative flex items-center justify-center p-8 md:p-16">
            <div className="relative z-10 max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white inline-block">
                Option B: Sunset Ember
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-orange-200 via-amber-200 to-teal-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-orange-900 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* House side */}
          <div className="relative flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Option C: Storm Dawn */}
      <section id="optionC" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #475569 0%, #334155 25%, #3b4f66 50%, #1e293b 75%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white inline-block">
                Option C: Storm Dawn
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-300 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative bg-gray-950 flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Option D: Desert Dusk */}
      <section id="optionD" className="min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #d4a574 0%, #b8735f 25%, #9d6b53 50%, #7d5a6f 70%, #5a4a5e 85%, #3d2e40 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="grid md:grid-cols-2 min-h-screen relative z-10">
          <div className="relative flex items-center justify-center p-8 md:p-16">
            <div className="relative z-10 max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white inline-block">
                Option D: Desert Dusk
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-purple-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-amber-900 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* House side */}
          <div className="relative flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Option E: Arctic Dawn */}
      <section id="optionE" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #7dd3fc 0%, #22d3ee 20%, #0891b2 40%, #0e7490 60%, #3730a3 80%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white inline-block">
                Option E: Arctic Dawn
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-cyan-900 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative bg-gray-950 flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Option F: Forest Twilight */}
      <section id="optionF" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #166534 0%, #14532d 25%, #115e59 50%, #581c87 75%, #4c1d95 90%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white inline-block">
                Option F: Forest Twilight
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-purple-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-emerald-900 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative bg-gray-950 flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Option G: Industrial Dusk */}
      <section id="optionG" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #9a3412 0%, #7c2d12 20%, #44403c 40%, #374151 60%, #1f2937 80%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                backgroundSize: "200px 200px",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white inline-block">
                Option G: Industrial Dusk
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-orange-200 via-stone-200 to-slate-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-stone-900 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative bg-gray-950 flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-black/40 backdrop-blur-xl border-white/10 text-white hover:bg-black/60"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
