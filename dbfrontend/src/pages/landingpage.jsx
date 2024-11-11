import React, { useState, useEffect, } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain, Smartphone, ChartLine, Utensils, Bell, Users, ChevronRight, Sun, Moon } from 'lucide-react'
import ECGHeart from '@/components/ui/ecgheart'
import { useNavigate } from 'react-router-dom';  



const DiaBuddyLandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path); // Navigate to the passed path (not the literal string 'path')
  };

  const FeatureCard = ({ icon, title, content, isDarkMode }) => (
    <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="flex items-start  mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );

  const TestimonialCard = ({ content, name, avatar, isDarkMode }) => (
    <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
      <p className="text-lg mb-4">{content}</p>
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
  
  
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">DiaBuddy</div>
          <nav  className={` flex gap-3 text-gray-900 ${isDarkMode ? 'text-white' : 'text-black'} border-none`}>
            <Button className='bg-transparent'variant="ghost" onClick={() => handleClick('/blogs')}>Blogs</Button>
            <Button className='bg-transparent' variant="ghost" onClick={() => handleClick('/about-us')}>About</Button>
            <Button className='bg-transparent' variant="ghost" onClick={() => handleClick('/features')}>Contact</Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className={`pt-32 pb-20 px-4 overflow-hidden ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
          <div className="container mx-auto text-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
            <section className="w-screen h-auto md:h-32 lg:h-40 flex justify-center items-center">
                <div className="w-full max-w-6xl"> {/* Controls maximum width */}
                    <ECGHeart />
                </div>
            </section>

              <div 
                className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
              ></div>
              <div 
                className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                style={{
                  transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
              ></div>
              <div 
                className="absolute -bottom-8 left-20 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * -0.02}px)`,
                }}
              ></div>
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-green-600 text-transparent bg-clip-text' : 'text-gray-900'} relative z-10`}>
              Manage Diabetes with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto relative z-10">
              DiaBuddy: Your AI-powered companion for effortless diabetes management.
            </p>
            <Button
                size="lg"
                className="animate-pulse relative z-10"
                onClick={() => handleClick('/login')}  // Add onClick event to trigger navigation
                >
                Get Started Free <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            <Button 
              variant="outline" 
              size=""
              className="ml-4 relative z-10 text-black "
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
           
          </div>
        </section>

        <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <div className="container mx-auto px-4">
    <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      Why Choose DiaBuddy?
    </h2>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<Brain className="h-12 w-12 mb-4 text-blue-500" />}
        title="AI-Powered Insights"
        content="Our advanced AI analyzes your data to provide personalized recommendations and predict potential issues before they arise."
        isDarkMode={isDarkMode}
      />
      <FeatureCard
        icon={<Smartphone className="h-12 w-12 mb-4 text-green-500" />}
        title="Easy Tracking"
        content="Effortlessly log your blood glucose, meals, medication, and exercise with our user-friendly interface."
        isDarkMode={isDarkMode}
      />
      <FeatureCard
        icon={<ChartLine className="h-12 w-12 mb-4 text-purple-500" />}
        title="Comprehensive Reports"
        content="Generate detailed reports to share with your healthcare provider, ensuring better-informed decisions about your care."
        isDarkMode={isDarkMode}
      />
    </div>
  </div>
</section>


<section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <TestimonialCard
        content="DiaBuddy has revolutionized how I manage my diabetes. The AI insights are incredibly helpful!"
        name="Sarah J."
        avatar="https://cdn.goenhance.ai/user/2024/07/19/c0c1400b-abc2-4541-a849-a7e4f361d28d_0.jpg"
        isDarkMode={isDarkMode} // Pass isDarkMode prop here
      />
      <TestimonialCard
        content="DiaBuddy has revolutionized how I manage my diabetes. The AI insights are incredibly helpful!"
        name="Sarah J."
        avatar="https://cdn.goenhance.ai/user/2024/07/19/c0c1400b-abc2-4541-a849-a7e4f361d28d_0.jpg"
        isDarkMode={isDarkMode} // Pass isDarkMode prop here
      />
      <TestimonialCard
        content="DiaBuddy has revolutionized how I manage my diabetes. The AI insights are incredibly helpful!"
        name="Sarah J."
        avatar="https://cdn.goenhance.ai/user/2024/07/19/c0c1400b-abc2-4541-a849-a7e4f361d28d_0.jpg"
        isDarkMode={isDarkMode} // Pass isDarkMode prop here
      />
    </div>
  </div>
  
</section>

      </main>

      <footer className={`py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 DiaBuddy. All rights reserved.</p>
          <div isDarkMode={isDarkMode}>
         
          </div>
        </div>
      </footer>
    </div>
  )
}



export default DiaBuddyLandingPage
