"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Introduction</h2>
              <p>
                Creator Being ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                creatorbeing.co and use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name and email address when you sign up for our membership</li>
                <li>Payment information when you purchase our services</li>
                <li>Communication preferences and feedback</li>
                <li>Content you create or share within our platform</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="mb-4">We may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide and maintain our services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send you updates, newsletters, and marketing communications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>With service providers who assist in operating our website and services</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Cookies</h2>
              <p>
                We use cookies to enhance your experience on our website. You can choose to disable cookies through your
                browser settings, though this may affect the functionality of our site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
