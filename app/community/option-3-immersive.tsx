import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Home } from "lucide-react"

export default function ImmersiveCommunityPage() {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#C1502E] to-[#8B4513] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
            Where Creativity
            <br />
            <span className="text-[#FFB88C]">Comes Alive</span>
          </h1>

          <p className="text-3xl font-light max-w-3xl mx-auto">We don't just celebrate creativity, we circulate it.</p>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            In the Creator Being House, your art isn't just something you make for yourself. It becomes part of a
            living, breathing ecosystem traveling from hand to hand, heart to heart, creator to creator.
          </p>

          <div className="pt-8">
            <div className="animate-bounce">
              <div className="w-12 h-12 mx-auto border-2 border-white rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Cycle - Light Section */}
      <section className="py-32 px-6 bg-[#F5E6D3]">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#C1502E]/10 rounded-full mb-12">
            <Sparkles className="w-5 h-5 text-[#C1502E]" />
            <span className="text-sm font-bold text-[#C1502E] uppercase tracking-wide">Monthly Creative Cycle</span>
          </div>

          <h2 className="text-6xl font-bold text-[#2D3436] mb-12">How Art Travels in Our House</h2>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 space-y-8 text-lg text-[#2D3436] leading-relaxed shadow-2xl">
            <p className="text-2xl font-semibold">Once we reach 100 members, we'll begin a monthly creative cycle:</p>

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

            <p className="text-xl italic text-[#8B4513] border-l-4 border-[#C1502E] pl-8">
              It's a simple way to keep creativity moving, from member to member, month by month.
            </p>
          </div>
        </div>
      </section>

      {/* Process - Dark Section */}
      <section className="py-32 px-6 bg-[#2D3436] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">How Our Creative Circle Works</h2>
            <p className="text-2xl text-white/80">A simple cycle of sharing, celebrating, and receiving</p>
          </div>

          <div className="space-y-32">
            {/* Step 1 - Left Aligned */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-[#C1502E] rounded-2xl flex items-center justify-center">
                  <Heart className="w-10 h-10" />
                </div>
                <div className="text-8xl font-bold text-white/10">01</div>
                <h3 className="text-5xl font-bold">You Share</h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  Become a member and email us something meaningful you've created that can be sent to all our members.
                  No pressure to make something new.
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-[#C1502E] to-[#8B4513] rounded-3xl" />
            </div>

            {/* Step 2 - Right Aligned */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="h-96 bg-gradient-to-br from-[#8B9D83] to-[#6B7D63] rounded-3xl md:order-1" />
              <div className="space-y-6 md:order-2">
                <div className="w-20 h-20 bg-[#8B9D83] rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-10 h-10" />
                </div>
                <div className="text-8xl font-bold text-white/10">02</div>
                <h3 className="text-5xl font-bold">We Choose</h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  Each month, we select one piece from our community collection. We purchase it from the creator (up to
                  $10), and it becomes the monthly featured work that travels to our members.
                </p>
              </div>
            </div>

            {/* Step 3 - Left Aligned */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-[#C1502E] rounded-2xl flex items-center justify-center">
                  <Home className="w-10 h-10" />
                </div>
                <div className="text-8xl font-bold text-white/10">03</div>
                <h3 className="text-5xl font-bold">You Receive</h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  If you choose to participate, you'll receive that month's selected artwork, either in your mailbox or
                  inbox. It's like getting a surprise from a fellow creator.
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-[#FFB88C] to-[#FF9966] rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters - Light Section */}
      <section className="py-32 px-6 bg-[#F5E6D3]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-5xl font-bold text-[#2D3436] mb-8">Why It Matters</h2>
            <p className="text-2xl text-[#2D3436] leading-relaxed mb-12">
              Your art doesn't just sit in a digital gallery, it travels. It finds its way into someone's hands, onto
              their wall, into their heart. And in return, you receive the same gift from another creator. It's a
              continuous circulation of creativity and connection.
            </p>

            <blockquote className="text-3xl font-bold italic text-[#8B4513] border-l-8 border-[#C1502E] pl-8">
              "True creativity isn't just about making, it's about sharing, circulating, and letting your work find its
              people in the world."
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ - Dark Section */}
      <section className="py-32 px-6 bg-[#2D3436] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Common Questions</h2>

          <div className="space-y-12">
            <div className="border-l-4 border-[#C1502E] pl-8 space-y-4">
              <h3 className="text-2xl font-bold">When does the monthly cycle start?</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Once we reach 100 members, we'll begin the monthly creative cycle. Until then, you're welcome to join
                and start sharing your work with the community.
              </p>
            </div>

            <div className="border-l-4 border-[#8B9D83] pl-8 space-y-4">
              <h3 className="text-2xl font-bold">What kind of art can I share?</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Anything meaningful you've created! Physical items like drawings, paintings, postcards, prints, or small
                books. Digital creations like sound files, short videos, or PDFs. The key is that it can be shared with
                all members.
              </p>
            </div>

            <div className="border-l-4 border-[#FFB88C] pl-8 space-y-4">
              <h3 className="text-2xl font-bold">How much does it cost to participate?</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Membership gives you access to the creative cycle. If your work is selected, we pay you up to $10 (which
                covers your creation plus postage and packaging to all members). You handle the shipping logistics.
              </p>
            </div>

            <div className="border-l-4 border-[#C1502E] pl-8 space-y-4">
              <h3 className="text-2xl font-bold">Do I have to participate every month?</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Not at all. You can choose to participate when you feel called to. There's no pressure to create or
                share every month. This is about joy, not obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Gradient Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#C1502E] to-[#8B4513] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-6xl md:text-7xl font-bold">Ready to Circulate Your Creativity?</h2>

          <p className="text-2xl text-white/90 leading-relaxed">
            Join our community where art doesn't just get posted, it gets shared, gifted, and celebrated in real,
            tangible ways. Help us reach 100 members to begin the monthly creative cycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-8 py-5 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#C1502E] rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 font-bold text-lg whitespace-nowrap">
              Join the House
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <p className="text-white/80 text-lg">Be part of the creative circulation</p>

          <p className="text-3xl font-bold">Create. Share. Circulate.</p>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 py-16 bg-[#F5E6D3]">
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-[#2D3436] hover:text-[#C1502E] transition-colors font-medium text-lg"
        >
          ← Back to current design
        </Link>
      </div>
    </div>
  )
}
