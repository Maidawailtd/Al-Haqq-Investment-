import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Code, LayoutDashboard, Settings } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Crafting responsive and dynamic websites tailored to your needs.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces for seamless experiences.",
    icon: LayoutDashboard,
  },
  {
    title: "Security Audits",
    description: "Ensuring the safety and integrity of your systems with thorough security assessments.",
    icon: ShieldCheck,
  },
  {
    title: "System Configuration",
    description: "Optimizing and configuring your systems for peak performance and reliability.",
    icon: Settings,
  },
]

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={`service-${index}`} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <service.icon className="h-12 w-12 mx-auto text-blue-600" alt={`${service.title} Icon`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
