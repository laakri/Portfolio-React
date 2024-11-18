import React from "react";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ActiveIcon from "./ui/ActiveIcon";
import { BiAccessibility, BiBadgeCheck } from "react-icons/bi";
import { ModeToggle } from "./mode-toggle";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 w-full bg-opacity-50 backdrop-filter backdrop-blur-lg p-2  z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/About"
              className=" font-bold text-xl flex items-center gap-2 "
            >
              <BiBadgeCheck className="text-xl" />
              Seif Eddine Jelassi
            </Link>
          </div>
          <div className="flex space-x-4  rounded-lg px-1 py-1 "></div>
          <div className="flex space-x-4">
            <div className="flex items-center gap-2 text-green-500 ">
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
