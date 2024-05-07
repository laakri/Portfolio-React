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
import { BiAccessibility } from "react-icons/bi";
import { ModeToggle } from "./mode-toggle";
import ContactPopup from "@/Pages/Contact";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 w-full bg-opacity-50 backdrop-filter backdrop-blur-lg p-2  z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className=" font-bold text-xl flex items-center gap-2 "
            >
              <BiAccessibility className="text-xl" />
              LAAKRI
            </Link>
          </div>
          <div className="flex space-x-4  rounded-lg px-1 py-1 ">
            <Link to="/">
              <Button variant={"ghost"} className="">
                Home
              </Button>
            </Link>
            <Link to="/About">
              <Button variant={"ghost"} className="">
                About
              </Button>
            </Link>
            <ContactPopup />
            {/* <Link to="/">
              <Button variant={"ghost"} className="">
                Contact
              </Button>
            </Link> */}
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center gap-2 text-green-500 ">
              <ActiveIcon /> Online
            </div>
            <Link to="/">
              <Button size={"icon"} variant={"outline"}>
                <FaGithubAlt />
              </Button>
            </Link>
            <Link to="/about">
              <Button size={"icon"} variant={"outline"}>
                <FaTwitter />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size={"icon"} variant={"outline"}>
                <FaFacebookF />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size={"icon"} variant={"outline"}>
                <FaLinkedinIn />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
