import { type NextRequest, NextResponse } from "next/server"
import { loginUser, createSessionToken, setSessionCookie } from "@/lib/auth"
import { z } from "zod"

// Validation schema for login
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const result = loginSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { email, password } = result.data

    // Login user
    const user = await loginUser(email, password)

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Create session token
    const token = await createSessionToken(user)

    // Set session cookie
    setSessionCookie(token)

    // Return success response
    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

