import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO",
    bio: "John is the CEO of Alhagg Investment. He has over 20 years of experience in the investment industry.",
  },
  {
    name: "Jane Smith",
    role: "CFO",
    bio: "Jane is the CFO of Alhagg Investment. She has over 15 years of experience in the finance industry.",
  },
  {
    name: "Peter Jones",
    role: "CTO",
    bio: "Peter is the CTO of Alhagg Investment. He has over 10 years of experience in the technology industry.",
  },
]

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Alhagg Investment is a leading investment firm dedicated to providing innovative and sustainable investment
          solutions. Our team of experts is committed to helping our clients achieve their financial goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={`team-member-${index}`} className="text-center">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={`${member.name} - ${member.role} at Alhagg Investment`}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
