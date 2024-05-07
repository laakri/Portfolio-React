import React from "react";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-4 mt-2">
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
        </div>
        <div>
          <p className="">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
