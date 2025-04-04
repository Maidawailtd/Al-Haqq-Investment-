"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartLineIcon, ChartBarIcon, ChartCandlestickIcon, MarketTrendsIcon } from "@/components/icons"
import { IconButton } from "@/components/ui/icon-button"

export function MarketAnalysis() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Market Analysis</h2>
        <div className="flex space-x-2">
          <IconButton variant="outline" size="sm" aria-label="Refresh market data">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 2v6h-6"></path>
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
              <path d="M3 22v-6h6"></path>
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
            </svg>
          </IconButton>
          <IconButton variant="outline" size="sm" aria-label="Download market report">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </IconButton>
        </div>
      </div>

      <Tabs defaultValue="line" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="line" className="flex items-center gap-2">
            <ChartLineIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Line</span>
          </TabsTrigger>
          <TabsTrigger value="bar" className="flex items-center gap-2">
            <ChartBarIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Bar</span>
          </TabsTrigger>
          <TabsTrigger value="candlestick" className="flex items-center gap-2">
            <ChartCandlestickIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Candlestick</span>
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <MarketTrendsIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Trends</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="line">
          <Card>
            <CardHeader>
              <CardTitle>Market Performance</CardTitle>
              <CardDescription>Line chart showing market performance over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
              <ChartLineIcon className="h-16 w-16 text-slate-300" />
              <span className="sr-only">Line chart of market performance</span>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bar">
          <Card>
            <CardHeader>
              <CardTitle>Sector Comparison</CardTitle>
              <CardDescription>Bar chart comparing different market sectors</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
              <ChartBarIcon className="h-16 w-16 text-slate-300" />
              <span className="sr-only">Bar chart of sector comparison</span>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="candlestick">
          <Card>
            <CardHeader>
              <CardTitle>Price Movements</CardTitle>
              <CardDescription>Candlestick chart showing price movements</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
              <ChartCandlestickIcon className="h-16 w-16 text-slate-300" />
              <span className="sr-only">Candlestick chart of price movements</span>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Market Trends</CardTitle>
              <CardDescription>Analysis of current market trends</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
              <MarketTrendsIcon className="h-16 w-16 text-slate-300" />
              <span className="sr-only">Market trends analysis</span>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

