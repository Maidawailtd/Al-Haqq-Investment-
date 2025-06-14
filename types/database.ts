export type User = {
  id: string
  email: string
  full_name: string
  phone_number?: string
  created_at: string
  updated_at: string
  last_login?: string
  is_active: boolean
  is_verified: boolean
  profile_image_url?: string
}

export type UserProfile = {
  id: string
  user_id: string
  date_of_birth?: string
  nationality?: string
  address?: string
  city?: string
  country?: string
  postal_code?: string
  occupation?: string
  income_range?: string
  risk_tolerance?: "low" | "medium" | "high"
  investment_goals?: string
  kyc_status: "pending" | "submitted" | "verified" | "rejected"
  created_at: string
  updated_at: string
}

export type InvestmentProduct = {
  id: string
  name: string
  type: "sukuk" | "equity" | "real_estate"
  description?: string
  min_investment: number
  expected_return_min?: number
  expected_return_max?: number
  risk_level: "low" | "medium" | "high"
  duration_months?: number
  profit_distribution_frequency?: "monthly" | "quarterly" | "bi-annual" | "annual"
  is_active: boolean
  created_at: string
  updated_at: string
}

export type UserInvestment = {
  id: string
  user_id: string
  product_id: string
  amount: number
  units?: number
  purchase_date: string
  maturity_date?: string
  status: "active" | "matured" | "withdrawn"
  created_at: string
  updated_at: string
}

export type Transaction = {
  id: string
  user_id: string
  investment_id?: string
  type: "deposit" | "withdrawal" | "profit_distribution"
  amount: number
  status: "pending" | "completed" | "failed" | "cancelled"
  payment_method?: string
  reference_number?: string
  description?: string
  created_at: string
  updated_at: string
}

export type InvestmentPerformance = {
  id: string
  product_id: string
  date: string
  unit_price: number
  change_percentage?: number
  created_at: string
}

export type ProfitDistribution = {
  id: string
  product_id: string
  distribution_date: string
  rate: number
  description?: string
  created_at: string
}

export type UserProfitDistribution = {
  id: string
  distribution_id: string
  user_investment_id: string
  amount: number
  status: "pending" | "processed" | "reinvested"
  created_at: string
  updated_at: string
}

export type Document = {
  id: string
  user_id?: string
  product_id?: string
  type: "kyc" | "contract" | "report" | "statement"
  name: string
  file_url: string
  mime_type?: string
  size?: number
  is_verified: boolean
  created_at: string
  updated_at: string
}

export type Notification = {
  id: string
  user_id: string
  title: string
  message: string
  type?: "info" | "success" | "warning" | "error"
  is_read: boolean
  created_at: string
}

export type FaqCategory = {
  id: string
  name: string
  description?: string
  created_at: string
  updated_at: string
}

export type Faq = {
  id: string
  category_id?: string
  question: string
  answer: string
  is_published: boolean
  order_index?: number
  created_at: string
  updated_at: string
}
