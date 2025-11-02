import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Home } from "lucide-react"

export default function MinimalistCommunityPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <div className="space-y-8">
          <h1 className="text-7xl font-light tracking-tight text-gray-900">
            Where Creativity
            <br />
            <span className="text-[#FF6B4A]">Comes Alive</span>
          </h1>

          <p className="text-2xl text-gray-600 font-light max-w-2xl">
            We don't just celebrate creativity, we circulate it.
          </p>

          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            In the Creator Being House, your art isn't just something you make for yourself. It becomes part of a
            living, breathing ecosystem traveling from hand to hand, heart to heart, creator to creator.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Monthly Creative Cycle */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div className="inline-block px-4 py-2 bg-[#FF6B4A]/10 rounded-full">
            <span className="text-sm font-medium text-[#FF6B4A]">Monthly Creative Cycle</span>
          </div>

          <h2 className="text-5xl font-light text-gray-900">How Art Travels in Our House</h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-2 border-[#FF6B4A] pl-8">
            <p>Once we reach 100 members, we'll begin a monthly creative cycle:</p>

            <p>
              Each month, we'll purchase a piece of art from one of our members (up to $10, including postage and
              packaging to all our community members, handled by the artist) and gift it to every other member in the
              community.
            </p>

            <p>
              This means that every month, one member's work will be chosen and shared with the full group, either as a
              physical item (like a drawing, painting, postcard, print, or small book) or a digital creation (like a
              sound file, short video, or PDF). If your work is selected, we'll pay you for it, and other members will
              have the chance to receive it as a gift.
            </p>

            <p className="italic text-gray-500">
              It's a simple way to keep creativity moving, from member to member, month by month.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Process Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-light text-gray-900">How Our Creative Circle Works</h2>
            <p className="text-xl text-gray-500">
              A simple cycle of sharing, celebrating, and receiving that keeps creativity flowing between us
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FF6B4A]/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#FF6B4A]" />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="text-3xl font-light text-gray-900">You Share</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Become a member and email us something meaningful you've created that can be sent to all our members.
                  No pressure to make something new.
                </p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="ml-8 h-12 w-px bg-gray-200" />

            {/* Step 2 */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FF6B4A]/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#FF6B4A]" />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="text-3xl font-light text-gray-900">We Choose</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each month, we select one piece from our community collection. We purchase it from the creator (up to
                  $10), and it becomes the monthly featured work that travels to our members.
                </p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="ml-8 h-12 w-px bg-gray-200" />

            {/* Step 3 */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#FF6B4A]/10 flex items-center justify-center">
                  <Home className="w-8 h-8 text-[#FF6B4A]" />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="text-3xl font-light text-gray-900">You Receive</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  If you choose to participate, you'll receive that month's selected artwork, either in your mailbox or
                  inbox. It's like getting a surprise from a fellow creator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Why It Matters */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-8">
          <h2 className="text-4xl font-light text-gray-900">Why It Matters</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your art doesn't just sit in a digital gallery, it travels. It finds its way into someone's hands, onto
            their wall, into their heart. And in return, you receive the same gift from another creator. It's a
            continuous circulation of creativity and connection.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <blockquote className="text-3xl font-light text-gray-900 italic border-l-2 border-[#FF6B4A] pl-8">
          "True creativity isn't just about making, it's about sharing, circulating, and letting your work find its
          people in the world."
        </blockquote>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light text-gray-900 mb-12">Common Questions</h2>

        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-gray-900">When does the monthly cycle start?</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Once we reach 100 members, we'll begin the monthly creative cycle. Until then, you're welcome to join and
              start sharing your work with the community.
            </p>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="space-y-3">
            <h3 className="text-xl font-medium text-gray-900">What kind of art can I share?</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Anything meaningful you've created! Physical items like drawings, paintings, postcards, prints, or small
              books. Digital creations like sound files, short videos, or PDFs. The key is that it can be shared with
              all members.
            </p>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="space-y-3">
            <h3 className="text-xl font-medium text-gray-900">How much does it cost to participate?</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Membership gives you access to the creative cycle. If your work is selected, we pay you up to $10 (which
              covers your creation plus postage and packaging to all members). You handle the shipping logistics.
            </p>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="space-y-3">
            <h3 className="text-xl font-medium text-gray-900">Do I have to participate every month?</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Not at all. You can choose to participate when you feel called to. There's no pressure to create or share
              every month. This is about joy, not obligation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center space-y-8">
          <h2 className="text-5xl font-light text-gray-900">Ready to Circulate Your Creativity?</h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community where art doesn't just get posted, it gets shared, gifted, and celebrated in real,
            tangible ways. Help us reach 100 members to begin the monthly creative cycle.
          </p>

          <div className="flex gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF6B4A] text-gray-900"
            />
            <button className="px-8 py-4 bg-[#FF6B4A] text-white rounded-full hover:bg-[#FF5A39] transition-colors flex items-center gap-2 whitespace-nowrap">
              Join the House
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-gray-500">Be part of the creative circulation</p>

          <p className="text-lg text-[#FF6B4A] font-medium">Create. Share. Circulate.</p>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF6B4A] transition-colors"
        >
          ← Back to current design
        </Link>
      </div>
    </div>
  )
}
