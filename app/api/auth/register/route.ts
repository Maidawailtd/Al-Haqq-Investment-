import { type NextRequest, NextResponse } from "next/server"
import { registerUser, createSessionToken, setSessionCookie } from "@/lib/auth"
import { z } from "zod"

// Validation schema for registration
const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const result = registerSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { email, password, name } = result.data

    // Register user
    const user = await registerUser(email, password, name)

    if (!user) {
      return NextResponse.json({ error: "User already exists with this email" }, { status: 409 })
    }

    // Create session token
    const token = await createSessionToken(user)

    // Set session cookie
    setSessionCookie(token)

    // Return success response
    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

