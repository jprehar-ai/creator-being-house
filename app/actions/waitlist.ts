"use server"

export async function joinWaitlist(email: string, plan: "monthly" | "annual") {
  try {
    const timestamp = new Date().toISOString()

    // Log to console - visible in Vercel logs
    console.log("=== NEW WAITLIST SUBMISSION ===")
    console.log(`Email: ${email}`)
    console.log(`Plan: ${plan === "monthly" ? "Monthly ($30/month)" : "Annual ($288/year)"}`)
    console.log(`Timestamp: ${timestamp}`)
    console.log("================================")

    // Return success
    return { success: true }
  } catch (error) {
    console.error("Error processing waitlist submission:", error)
    return { success: false, error: "Failed to join waitlist" }
  }
}
