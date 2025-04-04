// This is a simplified mock implementation for demo purposes
// In a real application, you would use a proper authentication library

// Mock function to simulate login
export async function login(email: string, password: string) {
  // In a real app, this would validate credentials against a backend
  if (!email || !password) {
    throw new Error("Email and password are required")
  }

  // For demo purposes, we'll accept any non-empty credentials
  // and set a cookie on the client side
  document.cookie = `auth_token=demo_token; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`

  return {
    success: true,
    user: {
      email,
      name: email.split("@")[0],
    },
  }
}

// Mock function to simulate logout
export async function logout() {
  // Clear the auth cookie
  document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict"

  return {
    success: true,
  }
}

// Mock function to check if user is authenticated
export function isAuthenticated() {
  // In a real app, this would validate the token
  return document.cookie.includes("auth_token=")
}

