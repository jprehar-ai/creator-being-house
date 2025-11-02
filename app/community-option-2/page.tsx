import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Home } from "lucide-react"

export default function CommunityOption2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/community"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-sm font-medium"
        >
          ← Back to Current
        </Link>
      </div>

      {/* Option Label */}
      <div className="fixed top-4 right-4 z-50">
        <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl text-sm font-bold shadow-lg">
          Option 2: Playful Bento Grid
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-8 shadow-md">
              <span>👥</span>
              <span>COMMUNITY</span>
              <span>👥</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Where Creativity
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Comes Alive
              </span>
            </h1>

            <p className="text-2xl text-gray-700 mb-4 font-semibold">
              We don't just celebrate creativity, we circulate it.
            </p>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In the Creator Being House, your art isn't just something you make for yourself. It becomes part of a
              living, breathing ecosystem traveling from hand to hand, heart to heart, creator to creator.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Monthly Cycle Card */}
          <div className="mb-6">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span>📅</span>
                <span>Monthly Creative Cycle</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">How Art Travels in Our House</h2>

              <div className="space-y-4 text-lg leading-relaxed bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="font-semibold">Once we reach 100 members, we'll begin a monthly creative cycle:</p>

                <p>
                  Each month, we'll purchase a piece of art from one of our members (up to $10, including postage and
                  packaging to all our community, handled by the artist) and gift it to every other member in the
                  community.
                </p>

                <p>
                  This means that every month, one member's work will be chosen and shared with the full group, either
                  as a physical item (like a drawing, painting, postcard, print, or small book) or a digital creation
                  (like a sound file, short video, or PDF). If your work is selected, we'll pay you for it, and other
                  members will have the chance to receive it as a gift.
                </p>

                <p className="italic font-medium">
                  It's a simple way to keep creativity moving, from member to member, month by month.
                </p>
              </div>
            </div>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <div className="text-6xl font-bold mb-4 opacity-20">01</div>
              <h3 className="text-2xl font-bold mb-4">You Share</h3>
              <p className="leading-relaxed">
                Become a member and email us something meaningful you've created that can be sent to all our members. No
                pressure to make something new.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="text-6xl font-bold mb-4 opacity-20">02</div>
              <h3 className="text-2xl font-bold mb-4">We Choose</h3>
              <p className="leading-relaxed">
                Each month, we select one piece from our community collection. We purchase it from the creator (up to
                $10), and it becomes the monthly featured work that travels to our members.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8" />
              </div>
              <div className="text-6xl font-bold mb-4 opacity-20">03</div>
              <h3 className="text-2xl font-bold mb-4">You Receive</h3>
              <p className="leading-relaxed">
                If you choose to participate, you'll receive that month's selected artwork, either in your mailbox or
                inbox. It's like getting a surprise from a fellow creator.
              </p>
            </div>
          </div>

          {/* Why It Matters + Quote Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why It Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your art doesn't just sit in a digital gallery, it travels. It finds its way into someone's hands, onto
                their wall, into their heart. And in return, you receive the same gift from another creator. It's a
                continuous circulation of creativity and connection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl flex items-center">
              <blockquote className="text-xl italic text-white leading-relaxed">
                "True creativity isn't just about making, it's about sharing, circulating, and letting your work find
                its people in the world."
              </blockquote>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-12 text-white shadow-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Circulate Your Creativity?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community where art doesn't just get posted, it gets shared, gifted, and celebrated in real,
              tangible ways. Help us reach 100 members to begin the monthly creative cycle.
            </p>

            <div className="flex gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-orange-500 rounded-2xl hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap font-bold shadow-lg">
                Join Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm opacity-90 mb-2">Be part of the creative circulation</p>
            <p className="font-bold text-lg">Create. Share. Circulate.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
