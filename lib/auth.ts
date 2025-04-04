import { hash, compare } from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

// Secret key for JWT signing - in production, use environment variables
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-at-least-32-characters-long")

export type UserData = {
  id: string
  email: string
  name: string
  role: "user" | "admin"
}

// Mock database for demo purposes
// In a real app, this would be replaced with a database connection
const USERS_DB: Record<
  string,
  {
    id: string
    email: string
    name: string
    passwordHash: string
    role: "user" | "admin"
  }
> = {
  user1: {
    id: "user1",
    email: "demo@example.com",
    name: "Demo User",
    passwordHash: "$2a$10$8Wia.1rlHJfGaAncUfZhvOQvGGZBLXS9XpOiXR7Vv5c8QKwVzQnQe", // 'password123'
    role: "user",
  },
  admin1: {
    id: "admin1",
    email: "admin@example.com",
    name: "Admin User",
    passwordHash: "$2a$10$8Wia.1rlHJfGaAncUfZhvOQvGGZBLXS9XpOiXR7Vv5c8QKwVzQnQe", // 'password123'
    role: "admin",
  },
}

// Password hashing
export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10)
}

// Password verification
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword)
}

// User registration
export async function registerUser(email: string, password: string, name: string): Promise<UserData | null> {
  // Check if user already exists
  const existingUser = Object.values(USERS_DB).find((user) => user.email === email)
  if (existingUser) {
    return null
  }

  // Hash password
  const passwordHash = await hashPassword(password)

  // Generate unique ID (in a real app, this would be handled by the database)
  const id = `user${Date.now()}`

  // Create new user
  const newUser = {
    id,
    email,
    name,
    passwordHash,
    role: "user" as const,
  }

  // Save user to "database"
  USERS_DB[id] = newUser

  // Return user data (excluding password)
  return {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
  }
}

// User login
export async function loginUser(email: string, password: string): Promise<UserData | null> {
  // Find user by email
  const user = Object.values(USERS_DB).find((user) => user.email === email)
  if (!user) {
    return null
  }

  // Verify password
  const isPasswordValid = await verifyPassword(password, user.passwordHash)
  if (!isPasswordValid) {
    return null
  }

  // Return user data (excluding password)
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  }
}

// Create session token
export async function createSessionToken(user: UserData): Promise<string> {
  // Create JWT token that expires in 7 days
  return new SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET)
}

// Set session cookie
export function setSessionCookie(token: string): void {
  cookies().set({
    name: "session_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: "strict",
  })
}

// Clear session cookie
export function clearSessionCookie(): void {
  cookies().set({
    name: "session_token",
    value: "",
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    sameSite: "strict",
  })
}

// Get current user from session
export async function getCurrentUser(): Promise<UserData | null> {
  const token = cookies().get("session_token")?.value

  if (!token) {
    return null
  }

  try {
    const verified = await jwtVerify(token, JWT_SECRET)
    return verified.payload as unknown as UserData
  } catch (error) {
    return null
  }
}

// Middleware to protect routes
export async function protectRoute(request: NextRequest) {
  const token = request.cookies.get("session_token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    await jwtVerify(token, JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

