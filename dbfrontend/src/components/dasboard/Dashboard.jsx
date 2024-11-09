import React, { useState } from 'react';
import { Bell, Plus, TrendingUp, Activity, Droplet, Apple, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineChartComponent from '../ui/LineChart';
import DiabetesTrackingForm from './component/form';
import AIDiabetesInsights from './component/aiinsight';
import DiabetesTrackerNavbar from './component/navbar';
import DiabetesTrackerFooter from './component/footer';
import DiabetesDashboar from './component/table';

export default function DiabetesDashboard() {
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [mealType, setMealType] = useState('');
  const shouldShowProfileMenu = true;
  const showBackButton = false;

  return (
    <>
     
     <div className="navvbar">
      < DiabetesTrackerNavbar showBackButton={showBackButton} showProfileMenu={shouldShowProfileMenu}/>
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

          
          <div>
            <DiabetesDashboar/>
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
