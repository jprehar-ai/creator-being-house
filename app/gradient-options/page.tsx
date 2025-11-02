"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function GradientOptionsPage() {
  const houseImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HOUSE-oTcgxyyeZzxNiFVzs9OwmnEmzuARcn.png"

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-wrap gap-2 bg-black/40 backdrop-blur-xl rounded-full p-2 border border-white/10 max-w-[90vw]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <a
            key={num}
            href={`#option${num}`}
            className="px-3 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            {num}
          </a>
        ))}
      </div>

      {/* Option 1: Centered Monument */}
      <section id="option1" className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFE5D9] via-[#FFB4A2] via-[#E5DEFF] to-[#6B5B95]" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center py-20">
          <div className="mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm text-gray-800">
            Option 1: Centered Monument
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            The Art of
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Living in Creation
            </span>
          </h1>

          <div className="my-12 w-full max-w-2xl">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={800}
              height={800}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-8 leading-relaxed text-balance">
            AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
          </p>

          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
            Discover Your Path
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Option 2: Split Screen - House Left */}
      <section id="option2" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative bg-gradient-to-br from-[#FFE5D9] to-[#FFB4A2] flex items-center justify-center p-8">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>

          <div className="relative bg-gradient-to-br from-[#E5DEFF] to-[#9D7FEA] flex items-center justify-center p-8 md:p-16">
            <div className="max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm text-white inline-block">
                Option 2: Split Screen - House Left
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Option 3: Split Screen - House Right */}
      <section id="option3" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative bg-gradient-to-br from-[#9D7FEA] to-[#6B5B95] flex items-center justify-center p-8 md:p-16">
            <div className="max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm text-white inline-block">
                Option 3: Split Screen - House Right
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-pink-200 to-orange-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#FFD4E5] to-[#FFE5D9] flex items-center justify-center p-8">
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

      {/* Option 4: House as Background */}
      <section id="option4" className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5D9] via-[#E5DEFF] to-[#9D7FEA]" />

        <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-sm">
          <Image
            src={houseImage || "/placeholder.svg"}
            alt="Creator Being House"
            width={1200}
            height={1200}
            className="w-full max-w-4xl h-auto"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/80 text-center">
            <div className="mb-6 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200/60 text-sm text-purple-800 inline-block">
              Option 4: House as Background
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              The Art of
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Living in Creation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-balance">
              AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
            </p>

            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
              Discover Your Path
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Option 5: Floating House */}
      <section id="option5" className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-radial from-[#FFF5F0] via-[#FFE5D9] to-[#E5DEFF]"
          style={{ background: "radial-gradient(circle at center, #FFF5F0 0%, #FFE5D9 40%, #E5DEFF 100%)" }}
        />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center py-20">
          <div className="mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/70 text-sm text-gray-800 inline-block">
            Option 5: Floating House
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            The Art of
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Living in Creation
            </span>
          </h1>

          <div className="my-12 w-full max-w-2xl relative">
            <div className="absolute inset-0 translate-y-8 blur-3xl opacity-40 bg-gradient-to-b from-purple-400 to-transparent rounded-full" />
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={800}
              height={800}
              className="relative w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-8 leading-relaxed text-balance">
            AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
          </p>

          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
            Discover Your Path
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Option 6: Text Overlaid on House */}
      <section
        id="option6"
        className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FFE5D9] to-[#E5DEFF]"
      >
        <div className="relative container mx-auto px-4 py-20">
          <div className="relative max-w-5xl mx-auto">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={1200}
              height={1200}
              className="w-full h-auto drop-shadow-2xl"
            />

            <div className="absolute top-0 left-0 right-0 text-center pt-8">
              <div className="mb-4 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-sm text-gray-800 inline-block">
                Option 6: Text Overlaid on House
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 drop-shadow-lg">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center px-4">
              <p className="text-base md:text-lg text-gray-800 max-w-xl mx-auto mb-6 leading-relaxed text-balance drop-shadow-md">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Option 7: Stacked Vertical */}
      <section
        id="option7"
        className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#FFE5D9] via-[#E5DEFF] to-[#9D7FEA]"
      >
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
          <div className="mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm text-gray-800 inline-block">
            Option 7: Stacked Vertical
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-gray-900 text-center">
            The Art of
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Living in Creation
            </span>
          </h1>

          <div className="w-full max-w-2xl mb-12">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={800}
              height={800}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-8 leading-relaxed text-balance text-center">
            AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
          </p>

          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
            Discover Your Path
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Option 8: Zoomed Room Focus */}
      <section id="option8" className="min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="relative bg-gradient-to-br from-[#FFE5D9] to-[#FFB4A2] flex items-center justify-center overflow-hidden">
            <div className="scale-150 origin-center">
              <Image
                src={houseImage || "/placeholder.svg"}
                alt="Creator Being House"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#E5DEFF] to-[#9D7FEA] flex items-center justify-center p-8 md:p-16">
            <div className="max-w-xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm text-white inline-block">
                Option 8: Zoomed Room Focus
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-pink-200 to-orange-200 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Option 9: Circular Spotlight */}
      <section id="option9" className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, #FFF5F0 0%, #FFE5D9 30%, #E5DEFF 60%, #6B5B95 100%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center py-20">
          <div className="mb-6 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-sm text-gray-800 inline-block">
            Option 9: Circular Spotlight
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            The Art of
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Living in Creation
            </span>
          </h1>

          <div className="my-12 w-full max-w-2xl">
            <Image
              src={houseImage || "/placeholder.svg"}
              alt="Creator Being House"
              width={800}
              height={800}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-8 leading-relaxed text-balance">
            AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
          </p>

          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
            Discover Your Path
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Option 10: Diagonal Split */}
      <section id="option10" className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5D9] to-[#9D7FEA]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #FFE5D9 0%, #FFE5D9 45%, transparent 45%, transparent 55%, #9D7FEA 55%, #9D7FEA 100%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-center">
              <Image
                src={houseImage || "/placeholder.svg"}
                alt="Creator Being House"
                width={600}
                height={600}
                className="w-full max-w-lg h-auto drop-shadow-2xl transform -rotate-3"
              />
            </div>

            <div className="text-left">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 text-sm text-gray-800 inline-block">
                Option 10: Diagonal Split
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Option 11: House Bottom, Text Top */}
      <section id="option11" className="min-h-screen relative overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F0] via-[#FFE5D9] to-[#E5DEFF]" />

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center px-4 pt-20">
            <div className="text-center max-w-3xl">
              <div className="mb-6 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-sm text-gray-800 inline-block">
                Option 11: House Bottom, Text Top
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed text-balance">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-end justify-center px-4">
            <div className="w-full max-w-3xl">
              <Image
                src={houseImage || "/placeholder.svg"}
                alt="Creator Being House"
                width={1000}
                height={1000}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Option 12: Asymmetric Overlap */}
      <section
        id="option12"
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFE5D9] via-[#E5DEFF] to-[#9D7FEA]"
      >
        <div className="container mx-auto px-4 min-h-screen flex items-center py-20">
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/5 md:w-1/2">
              <Image
                src={houseImage || "/placeholder.svg"}
                alt="Creator Being House"
                width={800}
                height={800}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            <div className="relative z-10 max-w-xl bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/80">
              <div className="mb-6 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200/60 text-sm text-purple-800 inline-block">
                Option 12: Asymmetric Overlap
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                The Art of
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Living in Creation
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                AI will handle the doing. Humanity must remember the being. This is where that remembering begins.
              </p>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
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
