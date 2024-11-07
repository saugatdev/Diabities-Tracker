import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Users, Mail } from 'lucide-react'
import DiabetesTrackerNavbar from '@/components/dasboard/component/navbar'
import DiabetesTrackerFooter from '@/components/dasboard/component/footer'

const AboutUsPage = () => {
  const teamMembers = [
    { name: "Dr. Jane Smith", role: "Founder & Endocrinologist", image: "" },
    { name: "Saugat Ghimire", role: "Backend Developer", image: "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/387802327_2224469114411151_4590540537751352155_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWVbEHTC3Xexe22Tgh0CPcuPKEjuROnRu48oSO5E6dG9rMLjfl-U3mNX2KUU4u4uEIdjOradN3Ref8KVwWi1l4&_nc_ohc=NCsJKOraJa4Q7kNvgFCAky-&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=ADWCTd0W0LDKj4vCU_AIK_7&oh=00_AYAtWLeSJAdXYtB30sU4fdqy50takgG3LXmKutxSsrnGpw&oe=6732AD85" },
    { name: "Sudip Acharya", role: "Frontend Developer", image: "https://media.licdn.com/dms/image/v2/D5603AQH_akcB-Kh2nQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722150590008?e=1736380800&v=beta&t=fMAIA175exJPG-2vhGUwhFiSzUAPlOGT3xt1qYlFKX0" },
    { name: "Michael Johnson", role: "UX Designer", image: "/path-to-michael-image.jpg" },
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