"use server"

export async function joinCommunity(email: string) {
  try {
    const timestamp = new Date().toISOString()

    // Log to console - visible in Vercel logs
    console.log("=== NEW COMMUNITY SUBMISSION ===")
    console.log(`Email: ${email}`)
    console.log(`Timestamp: ${timestamp}`)
    console.log("=================================")

    // Return success
    return { success: true }
  } catch (error) {
    console.error("Error processing community submission:", error)
    return { success: false, error: "Failed to join community" }
  }
}
