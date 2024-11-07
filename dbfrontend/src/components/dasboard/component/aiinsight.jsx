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
        const response = await fetch('http://localhost:3000/user/generatereport/', {
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

  // Function to format summary text
const formatSummary = (summary) => {
  // Split sections by "##" to separate "Overall Health Status" and "Recommendations"
  const sections = summary.split(/##\s*/).filter(Boolean);
  
  // Clean and extract the health status section
  let healthStatus = sections[0].replace("Overall Health Status:", "").trim();
  
  // Remove unnecessary symbols (*, #, etc.) from health status
  healthStatus = healthStatus.replace(/[^\w\s.,]/g, ""); // Keeps words, spaces, commas, and periods

  // Extract recommendations section and split by numbered points (1., 2., 3., 4.)
  const recommendationsText = sections.find((section) => section.startsWith("Recommendations"));
  const recommendations = recommendationsText
    ? recommendationsText
        .replace("Recommendations:", "")
        .replace(/[^\w\s.,]/g, "")  // Remove symbols from recommendations section as well
        .split(/\n\d+\.\s+/)         // Split recommendations by numbers (1., 2., etc.)
        .filter((item) => item.trim() !== "") 
    : [];

    return (
      <div>
        {/* Render Overall Health Status */}
        <h2 className="text-lg font-bold mt-4">Overall Health Status</h2>
        <p className="mt-2">{healthStatus}</p>

        {/* Render Recommendations */}
        <h2 className="text-lg font-bold mt-4">Recommendations</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {recommendations.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ol>
      </div>
    );
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
            {aiInsights.summary && (
              <div className="text-lg font-medium">
                {formatSummary(aiInsights.summary)}
              </div>
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
