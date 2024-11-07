import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from 'lucide-react'

const AIDiabetesInsights = () => {
  const [loading, setLoading] = useState(false);
  const [aiInsights, setAiInsights] = useState(null);

  const userId = localStorage.getItem('userId');
  const fetchAIInsights = async () => {
    setLoading(true);
    try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/generatereport/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId })
        });

        if (!response.ok) {
            throw new Error("Failed to fetch AI insights.");
        }

        const data = await response.json();
        setAiInsights(data.insights);
    } catch (error) {
        console.error("Error fetching AI insights:", error);
    } finally {
        setLoading(false);
    }
  };

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
            {aiInsights.summary && <p className="text-lg font-medium">{aiInsights.summary}</p>}
            {aiInsights.recommendations && aiInsights.recommendations.length > 0 && (
              <Accordion type="single" collapsible>
                <AccordionItem value="recommendations">
                  <AccordionTrigger>Recommendations</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {aiInsights.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
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
  );
};

export default AIDiabetesInsights;
