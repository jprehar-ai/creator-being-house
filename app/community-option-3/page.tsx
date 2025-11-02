import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Home } from "lucide-react"

export default function CommunityOption3() {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/community"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D3436] text-white rounded-lg shadow-lg hover:bg-[#1a1d1f] transition-colors text-sm"
        >
          ← Back to Current
        </Link>
      </div>

      {/* Option Label */}
      <div className="fixed top-4 right-4 z-50">
        <div className="px-4 py-2 bg-[#C1502E] text-white rounded-lg text-sm font-medium shadow-lg">
          Option 3: Immersive Storytelling
        </div>
      </div>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C1502E]/10 to-[#8B9D83]/10" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm tracking-wider mb-12 shadow-lg">
            <span>👥</span>
            <span className="text-[#2D3436]">COMMUNITY</span>
            <span>👥</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold leading-[0.95] mb-8 text-[#2D3436]">
            Where Creativity
            <br />
            <span className="text-[#C1502E]">Comes Alive</span>
          </h1>

          <p className="text-3xl text-[#2D3436] mb-8 font-medium">
            We don't just celebrate creativity, we circulate it.
          </p>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            In the Creator Being House, your art isn't just something you make for yourself. It becomes part of a
            living, breathing ecosystem traveling from hand to hand, heart to heart, creator to creator.
          </p>
        </div>
      </section>

      {/* Monthly Cycle Section - Dark */}
      <section className="min-h-screen flex items-center bg-[#2D3436] text-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C1502E] rounded-full text-sm mb-8">
                <span>📅</span>
                <span>Monthly Creative Cycle</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">How Art Travels in Our House</h2>

              <p className="text-xl mb-6 text-gray-300">
                Once we reach 100 members, we'll begin a monthly creative cycle:
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Each month, we'll purchase a piece of art from one of our members (up to $10, including postage and
                packaging to all our community, handled by the artist) and gift it to every other member in the
                community.
              </p>

              <p>
                This means that every month, one member's work will be chosen and shared with the full group, either as
                a physical item (like a drawing, painting, postcard, print, or small book) or a digital creation (like a
                sound file, short video, or PDF). If your work is selected, we'll pay you for it, and other members will
                have the chance to receive it as a gift.
              </p>

              <p className="italic text-[#C1502E] text-xl font-medium">
                It's a simple way to keep creativity moving, from member to member, month by month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Light */}
      <section className="min-h-screen flex items-center bg-[#F5E6D3] px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#2D3436]">How Our Creative Circle Works</h2>
            <p className="text-2xl text-gray-700">
              A simple cycle of sharing, celebrating, and receiving that keeps
              <br />
              creativity flowing between us
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-[#C1502E] to-[#a03d1f] rounded-3xl p-12 text-white shadow-2xl">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
                  <Heart className="w-10 h-10" />
                </div>
                <div className="text-8xl font-bold mb-6 opacity-20">01</div>
                <h3 className="text-4xl font-bold mb-4">You Share</h3>
              </div>
              <div>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Become a member and email us something meaningful you've created that can be sent to all our members.
                  No pressure to make something new.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 bg-gradient-to-br from-[#8B9D83] to-[#6d7d68] rounded-3xl p-12 text-white shadow-2xl">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
                  <Sparkles className="w-10 h-10" />
                </div>
                <div className="text-8xl font-bold mb-6 opacity-20">02</div>
                <h3 className="text-4xl font-bold mb-4">We Choose</h3>
              </div>
              <div className="md:order-1">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Each month, we select one piece from our community collection. We purchase it from the creator (up to
                  $10), and it becomes the monthly featured work that travels to our members.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-[#2D3436] to-[#1a1d1f] rounded-3xl p-12 text-white shadow-2xl">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
                  <Home className="w-10 h-10" />
                </div>
                <div className="text-8xl font-bold mb-6 opacity-20">03</div>
                <h3 className="text-4xl font-bold mb-4">You Receive</h3>
              </div>
              <div>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  If you choose to participate, you'll receive that month's selected artwork, either in your mailbox or
                  inbox. It's like getting a surprise from a fellow creator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters - Dark */}
      <section className="min-h-screen flex items-center bg-[#2D3436] text-white px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-[#C1502E]">Why It Matters</h2>
          <p className="text-3xl leading-relaxed text-gray-300 mb-16">
            Your art doesn't just sit in a digital gallery, it travels. It finds its way into someone's hands, onto
            their wall, into their heart. And in return, you receive the same gift from another creator. It's a
            continuous circulation of creativity and connection.
          </p>

          <blockquote className="border-l-4 border-[#C1502E] pl-8">
            <p className="text-4xl italic leading-relaxed">
              "True creativity isn't just about making, it's about sharing, circulating, and letting your work find its
              people in the world."
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA - Light */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#C1502E] to-[#8B9D83] text-white px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">Ready to Circulate Your Creativity?</h2>
          <p className="text-2xl mb-12 leading-relaxed">
            Join our community where art doesn't just get posted, it gets shared, gifted, and celebrated in real,
            tangible ways. Help us reach 100 members to begin the monthly creative cycle.
          </p>

          <div className="flex gap-4 max-w-lg mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-5 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="px-10 py-5 bg-[#2D3436] text-white rounded-xl hover:bg-[#1a1d1f] transition-colors flex items-center gap-2 whitespace-nowrap font-bold text-lg shadow-2xl">
              Join the House
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <p className="text-lg mb-4 opacity-90">Be part of the creative circulation</p>
          <p className="text-2xl font-bold tracking-wide">Create. Share. Circulate.</p>
        </div>
      </section>
    </div>
  )
}
