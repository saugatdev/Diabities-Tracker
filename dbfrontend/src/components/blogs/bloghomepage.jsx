import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, Search } from 'lucide-react'
import DiabetesTrackerFooter from '../dasboard/component/footer'
import DiabetesTrackerNavbar from '../dasboard/component/navbar'
import { Link } from 'react-router-dom';

import BlogNavbar from './component/navbar'

const blogPosts = [
  {
    id: 1,
    title: "10 Easy Low-Carb Recipes for Diabetics",
    excerpt: "Discover delicious and healthy low-carb meal ideas that help manage blood sugar levels.",
    author: "Jane Doe",
    date: "2023-06-01",
    readTime: "5 min read",
    category: "Nutrition",
    image: "https://images.pexels.com/photos/29172205/pexels-photo-29172205/free-photo-of-rustic-apple-pie-preparation-with-ingredients.jpeg?"
  },
  {
    id: 2,
    title: "Understanding the Glycemic Index",
    excerpt: "Learn how the glycemic index can help you make better food choices for diabetes management.",
    author: "John Smith",
    date: "2023-05-28",
    readTime: "7 min read",
    category: "Education",
   image: "https://images.pexels.com/photos/29172205/pexels-photo-29172205/free-photo-of-rustic-apple-pie-preparation-with-ingredients.jpeg?"
  },
  {
    id: 3,
    title: "The Benefits of Regular Exercise for Diabetics",
    excerpt: "Explore how physical activity can improve insulin sensitivity and overall health.",
    author: "Emily Johnson",
    date: "2023-05-25",
    readTime: "6 min read",
    category: "Lifestyle",
   image: "https://images.pexels.com/photos/29172205/pexels-photo-29172205/free-photo-of-rustic-apple-pie-preparation-with-ingredients.jpeg?"
  },
  {
    id: 4,
    title: "Latest Advancements in Diabetes Technology",
    excerpt: "Stay up-to-date with the newest devices and apps for managing diabetes.",
    author: "Michael Brown",
    date: "2023-05-22",
    readTime: "8 min read",
    category: "Technology",
     image: "https://images.pexels.com/photos/29172205/pexels-photo-29172205/free-photo-of-rustic-apple-pie-preparation-with-ingredients.jpeg?"
  }
]

const BlogHomepage = () => {
  return (
    <div className="container mx-auto px-4 w-full md:w-4/5 max-w-full">
      <BlogNavbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">By {post.author} on {post.date}</p>
            </CardContent>
            <CardFooter>
              <Link to={`/blog/${post.id}`}>
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">Load More Articles</Button>
        <DiabetesTrackerFooter />
      </div>
    </div>
  )
}

export default BlogHomepage