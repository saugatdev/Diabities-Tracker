import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from 'lucide-react';

const BlogNavbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const NavLinks = ({ onClick }) => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.name}
          variant="link"
          className="text-black bg-transparent"
          onClick={() => {
            navigate(item.path);
            onClick && onClick();
          }}
        >
          {item.name}
        </Button>
      ))}
    </>
  );

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b md:mx-auto w-full max-w-full">
      <div className="text-2xl font-bold">Blog</div>
      <div className="flex items-center space-x-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="" className="md:hidden bg-transparent">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <Button variant="ghost" className="self-end" onClick={() => setIsSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
              <NavLinks onClick={() => setIsSidebarOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  );
}

export default BlogNavbar;
