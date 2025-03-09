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
    { name: "Dr. Jane Smith", role: "Founder & Endocrinologist", image: "https://img.freepik.com/premium-photo/medical-hospital-doctor-image-by-ai-generator_1020925-766.jpg?w=360" },
    { name: "Saugat Ghimire", role: "Backend Developer", image: "#" },
    { name: "Sudip Acharya", role: "Frontend Developer", image: "#" },
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
          <CardTitle className="text-4xl font-bold">About Mero Gluco</CardTitle>
          <CardDescription>Empowering Diabetes Management Through Technology</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mt-4 text-lg">
            Mero Gluco is more than just a diabetes tracker. We're a dedicated team of healthcare professionals, 
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
              Join thousands of users who are taking control of their diabetes with Mero Gluco. 
              Share experiences, learn from others, and grow together.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Meet Our Team</CardTitle>
          <CardDescription>The experts behind Mero Gluco</CardDescription>
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
            At Mero Gluco, we're committed to:
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
            Download Mero Gluco
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