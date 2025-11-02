import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Home } from "lucide-react"

export default function CommunityOption1() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/community"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm"
        >
          ← Back to Current
        </Link>
      </div>

      {/* Option Label */}
      <div className="fixed top-4 right-4 z-50">
        <div className="px-4 py-2 bg-[#FF6B4A] text-white rounded-full text-sm font-medium">
          Option 1: Minimalist Editorial
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 text-sm tracking-wider text-gray-600">
            <span>👥</span>
            <span>COMMUNITY</span>
            <span>👥</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-light leading-[0.95] mb-8 tracking-tight">
            Where Creativity
            <br />
            <span className="text-[#FF6B4A] font-normal">Comes Alive</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-6 font-light">We don't just celebrate creativity, we circulate it.</p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            In the Creator Being House, your art isn't just something you make for yourself. It becomes part of a
            living, breathing ecosystem traveling from hand to hand, heart to heart, creator to creator.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Monthly Creative Cycle */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF4E6] rounded-full text-sm mb-12">
            <span>📅</span>
            <span className="text-gray-700">Monthly Creative Cycle</span>
          </div>

          <h2 className="text-5xl font-light mb-16 tracking-tight">
            How Art Travels
            <br />
            in Our House
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p className="text-xl text-gray-900">Once we reach 100 members, we'll begin a monthly creative cycle:</p>

            <p>
              Each month, we'll purchase a piece of art from one of our members (up to $10, including postage and
              packaging to all our community, handled by the artist) and gift it to every other member in the community.
            </p>

            <p>
              This means that every month, one member's work will be chosen and shared with the full group, either as a
              physical item (like a drawing, painting, postcard, print, or small book) or a digital creation (like a
              sound file, short video, or PDF). If your work is selected, we'll pay you for it, and other members will
              have the chance to receive it as a gift.
            </p>

            <p className="italic text-gray-600 border-l-2 border-[#FF6B4A] pl-6">
              It's a simple way to keep creativity moving, from member to member, month by month.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6 tracking-tight">How Our Creative Circle Works</h2>
            <p className="text-xl text-gray-600 font-light">
              A simple cycle of sharing, celebrating, and receiving that keeps
              <br />
              creativity flowing between us
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="text-right mb-8 md:mb-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B4A] text-white mb-6">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-light mb-4">You Share</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Become a member and email us something meaningful you've created that can be sent to all our
                      members. No pressure to make something new.
                    </p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="hidden md:block" />
                  <div className="mb-8 md:mb-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B4A] text-white mb-6">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-light mb-4">We Choose</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Each month, we select one piece from our community collection. We purchase it from the creator (up
                      to $10), and it becomes the monthly featured work that travels to our members.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                  <div className="text-right">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B4A] text-white mb-6">
                      <Home className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-light mb-4">You Receive</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you choose to participate, you'll receive that month's selected artwork, either in your mailbox
                      or inbox. It's like getting a surprise from a fellow creator.
                    </p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Why It Matters */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-8 tracking-tight">Why It Matters</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Your art doesn't just sit in a digital gallery, it travels. It finds its way into someone's hands, onto
            their wall, into their heart. And in return, you receive the same gift from another creator. It's a
            continuous circulation of creativity and connection.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-[#FF6B4A] pl-8">
            <p className="text-3xl font-light italic text-gray-800 leading-relaxed">
              "True creativity isn't just about making, it's about sharing, circulating, and letting your work find its
              people in the world."
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-6 tracking-tight">
            Ready to Circulate
            <br />
            Your Creativity?
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Join our community where art doesn't just get posted, it gets shared, gifted, and celebrated in real,
            tangible ways. Help us reach 100 members to begin the monthly creative cycle.
          </p>

          <div className="flex gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#FF6B4A] transition-colors"
            />
            <button className="px-8 py-4 bg-[#FF6B4A] text-white rounded-full hover:bg-[#FF5533] transition-colors flex items-center gap-2 whitespace-nowrap">
              Join the House
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-4">Be part of the creative circulation</p>
          <p className="text-[#FF6B4A] font-light tracking-wide">Create. Share. Circulate.</p>
        </div>
      </section>
    </div>
  )
}
