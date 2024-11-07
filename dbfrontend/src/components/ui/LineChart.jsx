// src/components/ui/LineChart.jsx
import React, { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Exported components
export const ChartContainer = ({ children, className }) => {
  return <div className={className}>{children}</div>; // Basic container for chart
};

export const ChartTooltip = ({ content }) => {
  return <div>{content}</div>; // Basic tooltip component
};

export const ChartTooltipContent = () => {
  return <div>Tooltip Content</div>; // Content for the tooltip
};

// LineChartComponent definition
const LineChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Retrieve userId from local storage
  const userId = localStorage.getItem('userId'); // Replace 'userId' with the actual key used to store the ID

  useEffect(() => {
    const fetchChartData = async () => {
      if (!userId) {
        setError("User ID not found in local storage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/getdata/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Process data to fit the chart format (you may need to adjust this based on your actual data structure)
        const formattedData = data.map(entry => ({
          date: new Date(entry.createdAt).toISOString().split('T')[0], // Format date as YYYY-MM-DD
          value: entry.bloodSugarLevel, // Assuming bloodSugarLevel is the value you want to plot
        }));

        setChartData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [userId]); // userId is added as a dependency

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>Data Trend</CardTitle>
        <CardDescription>Weekly data visualization</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`} // You can modify this for better formatting
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="blue" // Set the line color to blue
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartComponent;
