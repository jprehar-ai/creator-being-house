"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinCommunity } from "@/app/actions/community"

export default function CommunityPage() {
  const [email, setEmail] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && !isSubmitting) {
      setIsSubmitting(true)

      try {
        const result = await joinCommunity(email)

        if (result.success) {
          setShowSuccess(true)
          setTimeout(() => {
            setShowSuccess(false)
            setEmail("")
            setIsSubmitting(false)
          }, 3000)
        } else {
          alert("Something went wrong. Please try again.")
          setIsSubmitting(false)
        }
      } catch (error) {
        console.error("Error submitting community form:", error)
        alert("Something went wrong. Please try again.")
        setIsSubmitting(false)
      }
    }
  }

  const faqs = [
    {
      question: "What happens if my art is selected?",
      answer:
        "We'll purchase your piece for up to $10 per item. You'll handle the creation and distribution, and we'll provide you with member details and support throughout the process.",
    },
    {
      question: "What kind of art can I share?",
      answer:
        "Anything that holds meaning for you. Think drawings, paintings, poems, photographs, postcards, prints, small handmade books, digital art, sound files, videos, or PDFs.",
    },
    {
      question: "When does the monthly cycle start?",
      answer:
        "Once we reach 100 members. Until then, we're gathering our creative tribe and building the foundation for this beautiful exchange.",
    },
    {
      question: "Do I have to participate every month?",
      answer:
        "Not at all! Participation is entirely optional. You can choose to receive artwork whenever it feels right for you.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-25 blur-[140px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 text-balance">
            Where Creativity
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Circulates
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 mb-6 font-light max-w-3xl mx-auto text-balance">
            Each month, we purchase art from one member and gift it to everyone else.
          </p>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Your art travels from your hands to the community. And you receive the same gift in return.
          </p>
        </div>
      </section>

      {/* How Art Travels Section */}
      <section className="px-6 py-24 relative">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 blur-[130px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">How It Works</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A simple cycle that keeps creativity flowing between us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all">
              <div className="text-6xl font-bold bg-gradient-to-br from-purple-500/50 to-pink-500/50 bg-clip-text text-transparent leading-none mb-4">
                01
              </div>
              <h3 className="text-2xl font-bold mb-3">You Share</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
              <p className="text-white/60 leading-relaxed">
                Email us something meaningful you've created. No pressure to make something new.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all">
              <div className="text-6xl font-bold bg-gradient-to-br from-blue-500/50 to-cyan-500/50 bg-clip-text text-transparent leading-none mb-4">
                02
              </div>
              <h3 className="text-2xl font-bold mb-3">We Choose</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
              <p className="text-white/60 leading-relaxed">
                Each month, we select one piece and purchase it directly from the creator. That piece then travels to
                every member.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all">
              <div className="text-6xl font-bold bg-gradient-to-br from-orange-500/50 to-yellow-500/50 bg-clip-text text-transparent leading-none mb-4">
                03
              </div>
              <h3 className="text-2xl font-bold mb-3">You Receive</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mb-4 shadow-[0_0_20px_rgba(249,115,22,0.6)]"></div>
              <p className="text-white/60 leading-relaxed">
                Get that month's artwork in your mailbox or inbox. Like a surprise from a fellow creator.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="border-l-4 border-purple-500/50 pl-8 py-6 bg-white/5 backdrop-blur-sm rounded-r-2xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">
              <p className="text-xl md:text-2xl italic leading-relaxed text-white/90 font-light text-balance">
                "True creativity isn't just about making—it's about sharing, circulating, and letting your work find its
                people."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 relative">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 opacity-15 blur-[130px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Questions?</h2>
            <p className="text-lg text-white/60">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-25 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-[120px]" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-balance">
            Ready to Circulate Your Creativity?
          </h2>
          <p className="text-xl mb-12 leading-relaxed text-white/60">
            Join our community where art doesn't just get posted, it gets shared, gifted, and celebrated in real,
            tangible ways. Help us reach 100 members to begin the monthly creative cycle.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
            {showSuccess ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-6 mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <p className="text-green-400 font-medium text-lg">✓ You're on the list! We'll be in touch soon.</p>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-6 text-lg rounded-2xl bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 focus:border-purple-500/50 focus:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-6 text-lg rounded-2xl font-medium whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join the House"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </div>
            )}
          </form>

          <p className="text-xl font-medium tracking-wide text-white/80">Create. Share. Circulate.</p>
        </div>
      </section>
    </div>
  )
}
