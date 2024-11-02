import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User, LogOut } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import photo from './photo.jpg'; // Adjust the path if necessary

const DiabetesTrackerNavbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [notificationCount, setNotificationCount] = useState(3); // Example notification count

  const handleProfileClick = () => {
    console.log("Navigate to profile");
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    console.log("Logged out successfully");
    navigate('/login');
  };
  

  const handleNotificationClick = () => {
    console.log("Opening notifications");
    setNotificationCount(0);
  };

  
return (
  <nav className="flex items-center justify-between p-4 bg-background border-b  w-full md:w-4/5 md:mx-auto">
    <div className="text-2xl font-bold">Diabetes Tracker</div>
    <div className="flex items-center space-x-4">
   

      <Button variant="ghost" size="" onClick={handleNotificationClick} className="relative bg-transparent text-black">
        <Bell className="h-6 w-6" /> {/* Increased size for visibility */}
        {notificationCount > 0 && (
          <Badge variant="destructive" className="absolute -top-1 -right-1 px-1 min-w-[1.25rem] h-5">
            {notificationCount}
          </Badge>
        )}
      </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
              <AvatarImage src={photo} alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem onClick={handleProfileClick}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default DiabetesTrackerNavbar;
