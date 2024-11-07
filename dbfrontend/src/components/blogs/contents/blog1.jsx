import React from 'react'
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const SingleBlogPost = () => {
  // In a real application, you'd fetch this data based on the post ID
  const post = {
    id: 1,
    title: "10 Easy Low-Carb Recipes for Diabetics",
    content: `
      <p>Managing diabetes often involves careful consideration of your diet, particularly when it comes to carbohydrate intake. However, eating low-carb doesn't have to mean sacrificing flavor or satisfaction. Here are 10 delicious and easy low-carb recipes that can help you maintain stable blood sugar levels while enjoying tasty meals.</p>

      <h2>1. Cauliflower Rice Stir-Fry</h2>
      <p>Replace regular rice with cauliflower rice for a low-carb base. Add your favorite vegetables and protein for a quick and nutritious meal.</p>

      <h2>2. Zucchini Noodles with Pesto</h2>
      <p>Swap pasta for zucchini noodles and top with homemade or store-bought pesto for a light yet satisfying dish.</p>

      <h2>3. Grilled Chicken with Avocado Salsa</h2>
      <p>Lean protein paired with heart-healthy fats from avocado makes for a filling and diabetes-friendly meal.</p>

      <h2>4. Egg and Vegetable Frittata</h2>
      <p>A versatile dish that's great for any meal of the day. Pack it with your favorite low-carb vegetables.</p>

      <h2>5. Stuffed Bell Peppers</h2>
      <p>Fill bell peppers with a mixture of ground turkey, vegetables, and a small amount of cheese for a colorful and nutritious meal.</p>

      <p>... [content continues] ...</p>

      <h2>Conclusion</h2>
      <p>These recipes demonstrate that managing diabetes through diet doesn't mean giving up on delicious food. By focusing on low-carb ingredients and creative cooking methods, you can enjoy a wide variety of meals while keeping your blood sugar levels in check. Remember to always consult with your healthcare provider or a registered dietitian for personalized advice on your diabetes management plan.</p>
    `,
    author: "Jane Doe",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "2023-06-01",
    readTime: "5 min read",
    category: "Nutrition",
    image: "/placeholder.svg?height=400&width=800"
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Button>

      <article className="space-y-8">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <Badge variant="secondary">{post.category}</Badge>
          </div>

          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={post.authorAvatar} />
              <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="font-semibold">{post.author}</div>
          </div>
        </div>

        <Separator />

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Share this article</h2>
          <div className="flex space-x-2">
            <Button variant="outline">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Button>
            <Button variant="outline">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Button>
            <Button variant="outline">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default SingleBlogPost