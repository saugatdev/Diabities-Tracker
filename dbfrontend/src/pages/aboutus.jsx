import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Users, Mail } from 'lucide-react'
import DiabetesTrackerNavbar from '@/components/dasboard/component/navbar'
import DiabetesTrackerFooter from '@/components/dasboard/component/footer'

const AboutUsPage = () => {
  const teamMembers = [
    { name: "Dr. Jane Smith", role: "Founder & Endocrinologist", image: "data:image/jpeg;base64,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" },
    { name: "Saugat Ghimire", role: "Backend Developer", image: "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/387802327_2224469114411151_4590540537751352155_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWVbEHTC3Xexe22Tgh0CPcuPKEjuROnRu48oSO5E6dG9rMLjfl-U3mNX2KUU4u4uEIdjOradN3Ref8KVwWi1l4&_nc_ohc=NCsJKOraJa4Q7kNvgFCAky-&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=ADWCTd0W0LDKj4vCU_AIK_7&oh=00_AYAtWLeSJAdXYtB30sU4fdqy50takgG3LXmKutxSsrnGpw&oe=6732AD85" },
    { name: "Sudip Acharya", role: "Frontend Developer", image: "https://media.licdn.com/dms/image/v2/D5603AQH_akcB-Kh2nQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722150590008?e=1736380800&v=beta&t=fMAIA175exJPG-2vhGUwhFiSzUAPlOGT3xt1qYlFKX0" },
    { name: "Michael Johnson", role: "UX Designer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0DWFUHtpTrcIb63URF8Wa_5uRDNm8fYWPQ&s" },
  ]

  return (
    <>
    <div>
      <DiabetesTrackerNavbar/>
    </div>
    <div className="container mx-auto p-4 space-y-8 md:w-4/5 md:mx-auto w-full">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">About DiaBuddy</CardTitle>
          <CardDescription>Empowering Diabetes Management Through Technology</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mt-4 text-lg">
            DiaBuddy is more than just a diabetes tracker. We're a dedicated team of healthcare professionals, 
            technologists, and individuals passionate about improving the lives of people with diabetes.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To empower individuals with diabetes to lead healthier, more confident lives through 
              innovative technology and personalized support.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-500" />
              Our Approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We combine medical expertise with cutting-edge technology to provide a comprehensive, 
              user-friendly diabetes management solution.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-green-500" />
              Our Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Join thousands of users who are taking control of their diabetes with DiaBuddy. 
              Share experiences, learn from others, and grow together.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Meet Our Team</CardTitle>
          <CardDescription>The experts behind DiaBuddy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={member.image} alt={member.name}  className='w-full h-auto object-cover'/>
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Commitment to You</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            At DiaBuddy, we're committed to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing accurate, up-to-date information and tools for diabetes management</li>
            <li>Ensuring the highest standards of data privacy and security</li>
            <li>Continuously improving our app based on user feedback and medical advancements</li>
            <li>Offering responsive customer support to address your needs and concerns</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="text-center py-8">
          <h3 className="text-xl font-semibold mb-4">Ready to Take Control of Your Diabetes?</h3>
          <Button size="lg" className="mr-4">
            Download DiaBuddy
          </Button>
          <Button variant="outline" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </CardContent>
      </Card>
      <div>
   <DiabetesTrackerFooter/>
   </div>
    </div>
   
    </>
  )
}

export default AboutUsPage;