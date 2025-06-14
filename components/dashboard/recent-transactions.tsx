"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Transaction } from "@/types/database"
import { Loader2, ArrowUpRight, ArrowDownLeft, DollarSign } from "lucide-react"
import { format } from "date-fns"

type TransactionWithDetails = Transaction & {
  user_investments?: {
    product_id: string
    investment_products: {
      name: string
    }
  }
}

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState<TransactionWithDetails[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions?limit=5")

        if (!response.ok) {
          throw new Error("Failed to fetch transactions")
        }

        const data = await response.json()
        setTransactions(data.transactions)
      } catch (err) {
        setError("Failed to load transaction data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [])

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <ArrowDownLeft className="h-4 w-4 text-emerald-600" />
      case "withdrawal":
        return <ArrowUpRight className="h-4 w-4 text-red-600" />
      case "profit_distribution":
        return <DollarSign className="h-4 w-4 text-blue-600" />
      default:
        return <DollarSign className="h-4 w-4 text-gray-600" />
    }
  }

  const getTransactionTitle = (transaction: TransactionWithDetails) => {
    switch (transaction.type) {
      case "deposit":
        return `Deposit to ${transaction.user_investments?.investment_products.name || "Investment"}`
      case "withdrawal":
        return `Withdrawal from ${transaction.user_investments?.investment_products.name || "Investment"}`
      case "profit_distribution":
        return `Profit from ${transaction.user_investments?.investment_products.name || "Investment"}`
      default:
        return transaction.description || "Transaction"
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-700" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-600">{error}</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <div className="text-center py-6 text-gray-500">No transactions found</div>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 bg-gray-100 p-2 rounded-full">{getTransactionIcon(transaction.type)}</div>
                  <div>
                    <div className="font-medium">{getTransactionTitle(transaction)}</div>
                    <div className="text-sm text-gray-500">
                      {format(new Date(transaction.created_at), "MMM d, yyyy")}
                    </div>
                  </div>
                </div>
                <div
                  className={`font-medium ${
                    transaction.type === "deposit" || transaction.type === "profit_distribution"
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "withdrawal" ? "-" : "+"}${transaction.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
