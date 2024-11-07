import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Mail, Phone, Edit, TrendingUp, Activity, Droplet } from 'lucide-react'
import DiabetesTrackerNavbar from './component/navbar'
import DiabetesTrackerFooter from './component/footer'

const ProfileDashboard = () => {
  const [user, setUser] = useState({
    username: '',
    fullname: '',
    dateOfBirth: '',
    email: '',
    contactnumber: '',
    avatar: '',
    healthStatus: '',
    healthScore: 0,
    lastCheckup: '',
    bloodSugarLevel: 0,
    hba1c: 0,
    weight: 0,
    height: 0,
  });

  const [loading, setLoading] = useState(true); // To handle loading state

  const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage
  if (!userId) {
    console.error("User ID (userId) is missing from localStorage.");
    return;
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // Get the JWT token from localStorage
  
      if (!token) {
        console.log('No JWT token found');
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:3000/user/getdata/${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
  
        const data = await response.json();
        console.log('Fetched data:', data); // Log the data for debugging
  
        // Access the user data from the nested "user" object
        const userData = data.user;
  
        // Extract the latest or desired blood sugar level from diabetesRecords if available
        const bloodSugarLevel = data.diabetesRecords?.[0]?.bloodSugarLevel || 0; // Use the first record as an example
  
        setUser({
          username: userData.username,
          fullname: userData.fullname,
          dateOfBirth: userData.dateOfBirth || 'N/A', // Add a fallback if dateOfBirth is missing
          email: userData.email,
          contactnumber: userData.contactnumber,
          avatar: userData.avatar || '/path-to-avatar.jpg',
          healthStatus: userData.healthStatus || "Good",
          healthScore: userData.healthScore || 89,
          lastCheckup: userData.lastCheckup || '2023-05-01',
          bloodSugarLevel: userData.bloodSugarLevel,
          hba1c: userData.hba1c || 6.2,
          weight: userData.weight || 75,
          height: userData.height || 175,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false); // Stop loading when the data is fetched
      }
    };
  
    if (userId) { // Ensure userId exists before fetching
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [userId]); // The dependency ensures fetchProfile only runs when userId changes
  
  

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }

  const bmi = calculateBMI(user.weight, user.height);
  const shouldShowProfileMenu = false;

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }

  return (
    <>
    <div>
        <DiabetesTrackerNavbar showProfileMenu={shouldShowProfileMenu}/>
    </div>
    <div className="container mx-auto p-4 space-y-6 w-full md:mx-auto md:w-4/5">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user.avatar} alt={user.fullname || 'User Avatar'} />
          <AvatarFallback>
            {(user.fullname && user.fullname.split(' ').map(n => n[0]).join('')) || 'U'}
          </AvatarFallback>
        </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle>{user.fullname}</CardTitle>
            <CardDescription>@{user.username}</CardDescription>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:ml-auto">
            <Badge 
              className="flex items-center gap-1" 
              variant={user.healthStatus === "Good" ? "success" : "warning"}
            >
              <span className={`w-2 h-2 rounded-full ${user.healthStatus === "Good" ? "bg-green-500" : "bg-yellow-500"}`}></span>
              Health Status: {user.healthStatus}
            </Badge>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 opacity-70" />
              <span className="text-sm">Born: {user.dateOfBirth}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 opacity-70" />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 opacity-70" />
              <span className="text-sm">{user.contactnumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 opacity-70" />
              <span className="text-sm">Last Checkup: {user.lastCheckup}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Overview</CardTitle>
          <CardDescription>Your current health metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Overall Health Score</span>
                <span className="text-sm font-medium">{user.healthScore}%</span>
              </div>
              <Progress value={user.healthScore} className="w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Blood Glucose</CardTitle>
                  <Droplet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.bloodSugarLevel} mg/dL</div>
                  <p className="text-xs text-muted-foreground">Target: 80-130 mg/dL before meals</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">HbA1c</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.hba1c}%</div>
                  <p className="text-xs text-muted-foreground">Target: Below 7%</p>
                </CardContent>
              </Card>
             
            </div>
          </div>
        </CardContent>
      </Card>

      
      <DiabetesTrackerFooter />
    </div>
    
    
  </>
  )
}

export default ProfileDashboard
