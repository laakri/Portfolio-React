import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import ActiveIcon from "./ui/ActiveIcon";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="sticky top-0 left-0 w-full bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex space-x-4 rounded-lg px-1 py-1">
              <Link to="/">
                <Button 
                  variant={isActive("/") ? "secondary" : "ghost"}
                  className={cn(
                    "transition-colors",
                    isActive("/") && "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  About
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant={isActive("/projects") ? "secondary" : "ghost"}
                  className={cn(
                    "transition-colors",
                    isActive("/projects") && "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  Projects
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-green-500">
              <ActiveIcon /> Online
            </div>
            <a
              href="https://github.com/laakri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size={"icon"} variant={"outline"}>
                <FaGithubAlt />
              </Button>
            </a>
            <a
              href="https://x.com/SaifJlassi2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size={"icon"} variant={"outline"}>
                <FaTwitter />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/jlassi-seif-03a041338/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size={"icon"} variant={"outline"}>
                <FaLinkedinIn />
              </Button>
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
