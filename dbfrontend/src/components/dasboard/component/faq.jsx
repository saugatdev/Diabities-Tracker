import React, { useState } from 'react'
import {motion, AnimatePresence} from '../../../../node_modules/framer-motion'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, Search, Lightbulb, Activity, Pill, Apple } from 'lucide-react'

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    {
      category: "General",
      icon: <Lightbulb className="h-6 w-6" />,
      questions: [
        {
          q: "What is the Diabetes Tracker app?",
          a: "The Diabetes Tracker app is a comprehensive tool designed to help individuals manage their diabetes effectively. It allows you to track blood glucose levels, medication, diet, and exercise, providing insights and reminders to support your health journey."
        },
        {
          q: "Is my data secure?",
          a: "Yes, we take data security very seriously. All your personal and health information is encrypted and stored securely. We comply with HIPAA regulations and never share your data without your explicit consent."
        }
      ]
    },
    {
      category: "Blood Sugar",
      icon: <Activity className="h-6 w-6" />,
      questions: [
        {
          q: "How often should I check my blood sugar?",
          a: "The frequency of blood sugar checks depends on your individual treatment plan. Generally, people with type 1 diabetes check 4-10 times a day, while those with type 2 might check less frequently. Always follow your healthcare provider's recommendations."
        },
        {
          q: "What are normal blood sugar levels?",
          a: "For most people with diabetes, the American Diabetes Association recommends aiming for a blood sugar level of 80-130 mg/dL before meals and less than 180 mg/dL two hours after meals. However, your target range may be different based on your age, health conditions, and other factors."
        }
      ]
    },
    {
      category: "Medication",
      icon: <Pill className="h-6 w-6 bg-transparent" />,
      questions: [
        {
          q: "Can I track multiple medications?",
          a: "Yes, our app allows you to track multiple medications, including insulin, oral medications, and other prescriptions. You can set reminders for each medication and log when you've taken them."
        },
        {
          q: "What if I forget to take my medication?",
          a: "If you miss a dose, take it as soon as you remember unless it's almost time for your next dose. Never double up on medication. Our app can help by sending reminders and allowing you to log missed doses to discuss with your healthcare provider."
        }
      ]
    },
    {
      category: "Diet",
      icon: <Apple className="h-6 w-6" />,
      questions: [
        {
          q: "How can I track my carbohydrate intake?",
          a: "Our app includes a food diary feature where you can log your meals and snacks. It has a database of common foods with their carbohydrate content, and you can also add custom foods. The app will calculate your total carb intake for each meal and day."
        },
        {
          q: "Are there meal suggestions for diabetics?",
          a: "Yes, we provide a variety of diabetic-friendly meal suggestions and recipes. These are designed to help manage blood sugar levels while ensuring you get a balanced, nutritious diet. You can also customize these based on your preferences and dietary restrictions."
        }
      ]
    }
  ]

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
             faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Frequently Asked Questions</CardTitle>
          <CardDescription className="text-center">
            Find answers to common questions about our Diabetes Tracker app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <AnimatePresence>
        {filteredFAQs.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-transparent">
                  {category.icon}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem value={`item-${index}-${faqIndex}`} key={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      {filteredFAQs.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No matching questions found. Try a different search term.</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="text-center py-8">
          <p className="mb-4">Can't find what you're looking for?</p>
          <Button>Contact Support</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default FAQPage;