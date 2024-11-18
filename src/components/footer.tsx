import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-4 mt-2">
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
