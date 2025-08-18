import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ProjectPage from "./Pages/ProjectPage";
import DraftBoard from "./Pages/DraftBoard";

// Accept handleImageLoaded as a prop
const Routing = ({ handleImageLoaded }: { handleImageLoaded: () => void }) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    let section = "Home";
    if (path.startsWith("/projects/")) section = "Project";
    else if (path === "/projects") section = "Projects";
    else if (path === "/draftboard") section = "Draft Board";
    else if (path === "/") section = "Home";

    document.title = `Seif Jlassi | ${section}`;
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<About handleImageLoaded={handleImageLoaded} />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/DraftBoard" element={<DraftBoard />} />
    </Routes>
  );
};

export default Routing;
