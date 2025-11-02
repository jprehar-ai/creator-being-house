"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using Creator Being's website and services, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Description of Service</h2>
              <p>
                Creator Being provides a digital membership platform offering creative guidance, educational content,
                and community features designed to support personal and creative development.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Membership and Payments</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Subscription Terms</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Memberships are billed on a recurring basis (monthly or annually)</li>
                <li>You may cancel your subscription at any time</li>
                <li>Cancellation takes effect at the end of your current billing period</li>
                <li>No refunds are provided for partial months or unused portions</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Payment Processing</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>All payments are processed securely through third-party payment processors</li>
                <li>You are responsible for providing accurate payment information</li>
                <li>Failed payments may result in suspension of service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">User Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use the service for any unlawful purpose</li>
                <li>Share your account credentials with others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Upload or share inappropriate, harmful, or offensive content</li>
                <li>Violate the intellectual property rights of others</li>
                <li>Interfere with the proper functioning of the service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content provided through Creator Being, including but not limited to text, graphics, logos, images,
                audio clips, and software, is the property of Creator Being or its content suppliers and is protected by
                copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works of our content without explicit
                written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">User-Generated Content</h2>
              <p className="mb-4">
                By submitting content to our platform, you grant Creator Being a non-exclusive, royalty-free, worldwide
                license to use, reproduce, modify, and display such content in connection with our services.
              </p>
              <p>
                You retain ownership of your content and may request its removal at any time. You are responsible for
                ensuring you have the right to share any content you submit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                service, to understand our practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Disclaimers</h2>
              <p className="mb-4">
                Creator Being is provided "as is" without any representations or warranties, express or implied. We make
                no representations or warranties in relation to this website or the information and materials provided
                on this website.
              </p>
              <p>We do not warrant that the service will be uninterrupted, timely, secure, or error-free.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Creator Being, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of the service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever, including but not limited to a
                breach of the Terms.
              </p>
              <p>Upon termination, your right to use the service will cease immediately.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Creator Being
                operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="mt-4">
                <strong>Email:</strong> jem@creatorbeing.co
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
