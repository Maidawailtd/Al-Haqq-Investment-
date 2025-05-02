import { hash, compare } from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"

// Secret key for JWT signing - in production, use environment variables
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-at-least-32-characters-long")

export type UserData = {
  id: string
  email: string
  name: string
  role: "user" | "admin"
}

// MongoDB setup
const client = new MongoClient(process.env.MONGO_URI || "mongodb://localhost:27017")
const db = client.db("alhaqq_investment")
const usersCollection = db.collection("users")

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
  const existingUser = await usersCollection.findOne({ email })
  if (existingUser) {
    return null
  }

  const passwordHash = await hashPassword(password)
  const newUser = { email, name, passwordHash, role: "user" }

  await usersCollection.insertOne(newUser)
  return { email: newUser.email, name: newUser.name, role: newUser.role as 'user' | 'admin' }
}

// User login
export async function loginUser(email: string, password: string): Promise<UserData | null> {
  const user = await usersCollection.findOne({ email })
  if (!user) {
    return null
  }

  const isPasswordValid = await verifyPassword(password, user.passwordHash)
  if (!isPasswordValid) {
    return null
  }

  return { email: user.email, name: user.name, role: user.role, id: user.id }
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
export async function setSessionCookie(token: string): Promise<void> {
  const cookiesInstance = await cookies()
  cookiesInstance.set({
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
export async function clearSessionCookie(): Promise<void> {
  const cookiesInstance = await cookies()
  cookiesInstance.set({
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
  const cookiesInstance = await cookies()
  const token = (await cookiesInstance.get("session_token"))?.value

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
  const cookiesInstance = await cookies()
  const token = (await cookiesInstance.get("session_token"))?.value

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

