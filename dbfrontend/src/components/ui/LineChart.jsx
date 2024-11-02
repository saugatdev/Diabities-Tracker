// src/components/ui/LineChart.jsx
import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Exported components
export const ChartContainer = ({ children, config, className }) => {
  return <div className={className}>{children}</div>; // Basic container for chart
};

export const ChartTooltip = ({ content }) => {
  return <div>{content}</div>; // Basic tooltip component
};

export const ChartTooltipContent = () => {
  return <div>Tooltip Content</div>; // Content for the tooltip
};

// Sample data for the chart
const data = [
  { date: '2023-06-01', value: 120 },
  { date: '2023-06-02', value: 115 },
  { date: '2023-06-03', value: 118 },
  { date: '2023-06-04', value: 122 },
  { date: '2023-06-05', value: 110 },
  { date: '2023-06-06', value: 105 },
  { date: '2023-06-07', value: 112 },
];

// LineChartComponent definition
const LineChartComponent = () => {
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>Data Trend</CardTitle>
        <CardDescription>Weekly data visualization</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
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
                tickFormatter={(value) => `${value}`}
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
