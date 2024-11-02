import React, { useState } from 'react';
import { Bell, Plus, TrendingUp, Activity, Droplet, Apple, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineChartComponent from '../ui/LineChart';
import DiabetesTrackingForm from './component/form';
import AIDiabetesInsights from './component/aiinsight';
import DiabetesTrackerNavbar from './component/navbar';
import DiabetesTrackerFooter from './component/footer';


export default function DiabetesDashboard() {
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [mealType, setMealType] = useState('');

  return (
    <>
     
     <div className="navvbar">
      < DiabetesTrackerNavbar/>
     </div>
 
       {/* <header className="flex items-center justify-between px-4 py-4 border-b w-full">
          <h1 className="text-3xl font-bold">Diabetes Tracker</h1>
          <div className="flex items-center space-x-1"> 
            <Button className="bg-transparent text-black hover:bg-transparent">
              <Bell className="h-6 w-6" />
              <span className="sr-only">Notifications</span>
            </Button>

            <Button className="bg-transparent text-black hover:bg-transparent">
              <User className="h-6 w-6" />
              <span className="sr-only">User</span> 
            </Button>
          </div>
        </header> */}

        
        <div className="flex flex-col min-h-screen bg-background">

        {/* Correctly closed the <main> tag */}
        <main className="flex-1 px-4 py-6 space-y-6 w-full p-5 flex flex-col gap-5 md:w-4/5 md:mx-auto">
          {/* import form componet*/}
          <div className="Form">
            <DiabetesTrackingForm/>
          </div>
          {/* Set grid to occupy full width with no max width constraints */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <Card className="p-6">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg font-medium">Blood Glucose</CardTitle>
                <TrendingUp className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">112 mg/dL</div>
                <p className="text-sm text-muted-foreground">Last reading 2 hours ago</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg font-medium">HbA1c</CardTitle>
                <Activity className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6.5%</div>
                <p className="text-sm text-muted-foreground">Last test 3 months ago</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg font-medium">Daily Insulin</CardTitle>
                <Droplet className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">22 units</div>
                <p className="text-sm text-muted-foreground">Average over last 7 days</p>
              </CardContent>
            </Card>
          </div>

        

          <div className="Chart">
       
            <LineChartComponent />
          </div>
          {/* import the ai insight componet here*/}
          <div className="AiInsight">
            <AIDiabetesInsights/>
          </div>

          <div className='footer'>
          <DiabetesTrackerFooter/>
        </div>

        </main> 

      
      </div>
    </>
  );
}
