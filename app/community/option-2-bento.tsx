"use client"

import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Home, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function BentoCommunityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="text-center space-y-6">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
            <span className="text-gray-900">Where Creativity</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Comes Alive
            </span>
          </h1>

          <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
            We don't just celebrate creativity, we circulate it.
          </p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            In the Creator Being House, your art isn't just something you make for yourself. It becomes part of a
            living, breathing ecosystem traveling from hand to hand, heart to heart, creator to creator.
          </p>
        </div>
      </section>

      {/* Bento Grid - Monthly Cycle */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">Monthly Creative Cycle</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">How Art Travels in Our House</h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="font-semibold text-gray-900">
              Once we reach 100 members, we'll begin a monthly creative cycle:
            </p>

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

            <p className="italic text-gray-600 border-l-4 border-orange-400 pl-6">
              It's a simple way to keep creativity moving, from member to member, month by month.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid - Process Steps */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Our Creative Circle Works</h2>
          <p className="text-xl text-gray-600">A simple cycle of sharing, celebrating, and receiving</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <div className="text-6xl font-bold mb-4 opacity-20">01</div>
            <h3 className="text-3xl font-bold mb-4">You Share</h3>
            <p className="text-orange-50 leading-relaxed">
              Become a member and email us something meaningful you've created that can be sent to all our members. No
              pressure to make something new.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-6xl font-bold mb-4 opacity-20">02</div>
            <h3 className="text-3xl font-bold mb-4">We Choose</h3>
            <p className="text-pink-50 leading-relaxed">
              Each month, we select one piece from our community collection. We purchase it from the creator (up to
              $10), and it becomes the monthly featured work that travels to our members.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Home className="w-8 h-8" />
            </div>
            <div className="text-6xl font-bold mb-4 opacity-20">03</div>
            <h3 className="text-3xl font-bold mb-4">You Receive</h3>
            <p className="text-purple-50 leading-relaxed">
              If you choose to participate, you'll receive that month's selected artwork, either in your mailbox or
              inbox. It's like getting a surprise from a fellow creator.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters - Split Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why It Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your art doesn't just sit in a digital gallery, it travels. It finds its way into someone's hands, onto
              their wall, into their heart. And in return, you receive the same gift from another creator. It's a
              continuous circulation of creativity and connection.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl p-8 md:p-12 shadow-xl text-white flex items-center">
            <blockquote className="text-2xl font-bold italic">
              "True creativity isn't just about making, it's about sharing, circulating, and letting your work find its
              people in the world."
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Bento */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Common Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "When does the monthly cycle start?",
                a: "Once we reach 100 members, we'll begin the monthly creative cycle. Until then, you're welcome to join and start sharing your work with the community.",
              },
              {
                q: "What kind of art can I share?",
                a: "Anything meaningful you've created! Physical items like drawings, paintings, postcards, prints, or small books. Digital creations like sound files, short videos, or PDFs. The key is that it can be shared with all members.",
              },
              {
                q: "How much does it cost to participate?",
                a: "Membership gives you access to the creative cycle. If your work is selected, we pay you up to $10 (which covers your creation plus postage and packaging to all members). You handle the shipping logistics.",
              },
              {
                q: "Do I have to participate every month?",
                a: "Not at all. You can choose to participate when you feel called to. There's no pressure to create or share every month. This is about joy, not obligation.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-4 flex items-center justify-between text-left hover:text-orange-600 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <div className="pb-4 text-gray-700 leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Circulate Your Creativity?</h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join our community where art doesn't just get posted, it gets shared, gifted, and celebrated in real,
            tangible ways. Help us reach 100 members to begin the monthly creative cycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 font-bold whitespace-nowrap">
              Join the House
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-white/80 mb-4">Be part of the creative circulation</p>

          <p className="text-2xl font-bold">Create. Share. Circulate.</p>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium"
        >
          ← Back to current design
        </Link>
      </div>
    </div>
  )
}
