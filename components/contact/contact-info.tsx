"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EmailIcon, PhoneIcon, LocationIcon, SupportIcon } from "@/components/icons"

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <EmailIcon className="h-8 w-8 text-emerald-600" />
            <div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Reach out via email</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">
              For general inquiries:{" "}
              <a href="mailto:info@alhagginvestment.com" className="text-emerald-600 hover:underline">
                info@alhagginvestment.com
              </a>
            </p>
            <p className="text-sm text-slate-500 mb-4">
              For support:{" "}
              <a href="mailto:support@alhagginvestment.com" className="text-emerald-600 hover:underline">
                support@alhagginvestment.com
              </a>
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => (window.location.href = "mailto:info@alhagginvestment.com")}
            >
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <PhoneIcon className="h-8 w-8 text-emerald-600" />
            <div>
              <CardTitle>Phone</CardTitle>
              <CardDescription>Call us directly</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">
              Main Office:{" "}
              <a href="tel:+15551234567" className="text-emerald-600 hover:underline">
                +1 (555) 123-4567
              </a>
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Customer Support:{" "}
              <a href="tel:+15559876543" className="text-emerald-600 hover:underline">
                +1 (555) 987-6543
              </a>
            </p>
            <Button variant="outline" className="w-full" onClick={() => (window.location.href = "tel:+15551234567")}>
              Call Now
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <LocationIcon className="h-8 w-8 text-emerald-600" />
            <div>
              <CardTitle>Location</CardTitle>
              <CardDescription>Visit our office</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">
              123 Financial District
              <br />
              New York, NY 10001
              <br />
              United States
            </p>
            <p className="text-sm text-slate-500 mb-4">
              <strong>Business Hours:</strong>
              <br />
              Monday - Friday: 9AM - 5PM
              <br />
              Saturday - Sunday: Closed
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                window.open("https://maps.google.com/?q=123+Financial+District+New+York+NY+10001", "_blank")
              }
            >
              Get Directions
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <SupportIcon className="h-8 w-8 text-emerald-600" />
            <div>
              <CardTitle>Support</CardTitle>
              <CardDescription>Get help with your account</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">
              Our support team is available to assist you with any questions or issues you may have.
            </p>
            <p className="text-sm text-slate-500 mb-4">
              For immediate assistance, please contact us through our support portal or call our dedicated support line.
            </p>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

