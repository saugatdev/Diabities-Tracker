import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiabetesTrackingForm = () => {
  const [bloodGlucose, setBloodGlucose] = useState('');
  const [measurementType, setMeasurementType] = useState('');
  const [hbA1c, setHbA1c] = useState('');
  const [dailyInsulin, setDailyInsulin] = useState('');
  const [activeTab, setActiveTab] = useState('daily');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

const handleSubmit = async (event) => {
  event.preventDefault();

  const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage
  if (!userId) {
    console.error("User ID (userId) is missing from localStorage.");
    return;
  }

  // Construct the data object based on the active form tab
  let data = { 
    userId: userId, // Use `userId` as expected by the backend
  };

  if (activeTab === 'daily') {
    data = {
      ...data,
      bloodSugarLevel: bloodGlucose,
      measurementType,
    };
  } else if (activeTab === 'periodic') {
    data = {
      ...data,
      hbA1c,
    };
  } else if (activeTab === 'insulin') {
    data = {
      ...data,
      dailyInsulin,
    };
  }

  console.log("Form data to be submitted:", data); // Log form data for debugging

  try {
    const response = await fetch('http://localhost:3000/user/diabetes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}` // Include token if needed
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Data submitted successfully");
      // Reset form fields after submission
      setBloodGlucose('');
      setMeasurementType('');
      setHbA1c('');
      setDailyInsulin('');
    } else {
      const errorResponse = await response.json();
      console.error("Error submitting data:", errorResponse);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>Welcome, {username || 'User'}!</CardTitle>
        <CardDescription>Log your daily metrics and periodic lab results</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-3 ">
            <TabsTrigger value="daily" className={activeTab === 'daily' ? 'bg-white' : 'bg-gray-100'}>Daily Log</TabsTrigger>
 {/* 
            <TabsTrigger value="periodic" className={activeTab === 'periodic' ? 'bg-white' : 'bg-gray-100'}>Periodic Update</TabsTrigger>
            <TabsTrigger value="insulin" className={activeTab === 'insulin' ? 'bg-white' : 'bg-gray-100'}>Insulin Log</TabsTrigger>
*/}
          </TabsList>
          <TabsContent value="daily">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bloodGlucose">Blood Glucose (mg/dL)</Label>
                <Input
                  id="bloodGlucose"
                  type="number"
                  placeholder="Enter blood glucose level"
                  value={bloodGlucose}
                  onChange={(e) => setBloodGlucose(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="measurementType">Measurement Type</Label>
                <Select value={measurementType} onValueChange={setMeasurementType} required>
                  <SelectTrigger id="measurementType">
                    <SelectValue placeholder="Select measurement type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fasting">Fasting</SelectItem>
                    <SelectItem value="post_meal">Post-meal</SelectItem>
                    <SelectItem value="random">Random</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">Log Blood Glucose</Button>
            </form>
          </TabsContent>
          {/* 
          <TabsContent value="periodic">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hbA1c">HbA1c (%)</Label>
                <Input
                  id="hbA1c"
                  type="number"
                  step="0.1"
                  placeholder="Enter HbA1c value"
                  value={hbA1c}
                  onChange={(e) => setHbA1c(e.target.value)}
                  required
                />
              </div>
              <CardDescription>
                Please update your HbA1c value every 3 months or when you have a new lab result.
              </CardDescription>
              <Button type="submit">Update HbA1c</Button>
            </form>
          </TabsContent>
          <TabsContent value="insulin">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dailyInsulin">Daily Insulin (units)</Label>
                <Input
                  id="dailyInsulin"
                  type="number"
                  placeholder="Enter daily insulin dosage"
                  value={dailyInsulin}
                  onChange={(e) => setDailyInsulin(e.target.value)}
                  required
                />
              </div>
              <CardDescription>
                Log your total daily insulin dosage if you take insulin regularly.
              </CardDescription>
              <Button type="submit">Log Daily Insulin</Button>
            </form>
          </TabsContent>
          */}
        </Tabs>
      </CardContent>
      <CardFooter>
        <CardDescription>
          Remember to log your blood glucose regularly and update your HbA1c every 3 months for accurate tracking.
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default DiabetesTrackingForm;
