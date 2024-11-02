import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from 'lucide-react'

const AIDiabetesInsights = () => {
  const [loading, setLoading] = useState(false)
  const [aiInsights, setAiInsights] = useState(null)

  const fetchAIInsights = async () => {
    setLoading(true)
    try {
      // This is where you would make an API call to your AI service
      // For demonstration, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulated AI response
      const mockAIResponse = {
        summary: "Based on your recent data, your blood glucose levels have been relatively stable. However, there's room for improvement in your post-meal readings.",
        recommendations: [
          "Consider adjusting your carbohydrate intake during dinner to help stabilize evening glucose levels.",
          "Your morning fasting glucose has shown improvement. Keep up your current routine.",
          "Your HbA1c trend is positive, showing a slight decrease over the past 3 months."
        ],
        alert: {
          type: "info",
          message: "Your next HbA1c test is due in 2 weeks. Schedule an appointment with your healthcare provider."
        }
      }
      
      setAiInsights(mockAIResponse)
    } catch (error) {
      console.error("Error fetching AI insights:", error)
      // Handle error state here
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>AI-Powered Diabetes Insights</CardTitle>
        <CardDescription>Get personalized insights based on your diabetes data</CardDescription>
      </CardHeader>
      <CardContent className='overflow-hidden'>
        {!aiInsights && !loading && (
          <Button onClick={fetchAIInsights}>Generate AI Insights</Button>
        )}
        {loading && (
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p>Analyzing your data...</p>
          </div>
        )}
        {aiInsights && (
          <div className="space-y-4">
            <p className="text-lg font-medium">{aiInsights.summary}</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="recommendations">
                <AccordionTrigger className='bg-transparent border-none focus:outline-none no-flash' >Recommendations</AccordionTrigger>
                <AccordionContent className='bg-transparent outline-none'>
                  <ul className="list-disc pl-5 space-y-2">
                    {aiInsights.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {aiInsights.alert && (
              <Alert>
                <AlertTitle>Important Notice</AlertTitle>
                <AlertDescription>{aiInsights.alert.message}</AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <CardDescription>
          These insights are generated based on your historical data and should be reviewed with your healthcare provider.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default AIDiabetesInsights;