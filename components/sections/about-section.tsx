import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
  name: string
  role: string
  bio: string
  expertise: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Chief Executive Officer",
    bio: "John leads Alhagg Investment with over 20 years of experience in the investment industry, specializing in portfolio management and strategic planning.",
    expertise: ["Portfolio Management", "Strategic Planning", "Risk Assessment"],
  },
  {
    name: "Jane Smith",
    role: "Chief Financial Officer",
    bio: "Jane oversees financial operations with 15+ years in finance, ensuring optimal capital allocation and financial performance across all investment strategies.",
    expertise: ["Financial Analysis", "Capital Allocation", "Compliance"],
  },
  {
    name: "Peter Jones",
    role: "Chief Technology Officer",
    bio: "Peter drives technological innovation with 10+ years in fintech, developing cutting-edge solutions for investment analysis and client management.",
    expertise: ["Fintech Innovation", "Data Analytics", "System Architecture"],
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">About Alhagg Investment</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
            We are a leading investment firm dedicated to providing innovative and sustainable investment solutions. Our
            experienced team combines deep market knowledge with cutting-edge technology to deliver exceptional results
            for our clients.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={`team-member-${index}`} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200&text=Team+Member"
                    alt={`${member.name} - ${member.role} at Alhagg Investment`}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full object-cover ring-4 ring-muted/10 group-hover:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
