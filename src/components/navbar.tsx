import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="sticky top-0 left-0 w-full bg-background/80 backdrop-blur-sm  z-50">
      <div className="max-w-3xl mx-auto px-3 py-1.5">
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-1">
            <Link to="/">
              <Button
                variant={isActive("/") ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "h-7 px-3 text-xs font-medium transition-all duration-200",
                  isActive("/") && "bg-secondary/80 text-secondary-foreground"
                )}
              >
                About
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant={isActive("/projects") ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "h-7 px-3 text-xs font-medium transition-all duration-200",
                  isActive("/projects") && "bg-secondary/80 text-secondary-foreground"
                )}
              >
                Projects
              </Button>
            </Link>
          </nav>
         
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              <a href="https://github.com/laakri" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 hover:bg-accent">
                  <FaGithubAlt className="h-3.5 w-3.5" />
                </Button>
              </a>
              <a href="https://x.com/SaifJlassi2" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 hover:bg-accent">
                  <FaTwitter className="h-3.5 w-3.5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/jlassi-seif-03a041338/" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 hover:bg-accent">
                  <FaLinkedinIn className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
           
            <div className="h-4 w-px bg-border/60 mx-1" />
            
            <ModeToggle />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;