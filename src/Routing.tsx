import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ProjectPage from "./Pages/ProjectPage";

// Accept handleImageLoaded as a prop
const Routing = ({ handleImageLoaded }: { handleImageLoaded: () => void }) => {
  return (
    <Routes>
      <Route path="/" element={<About handleImageLoaded={handleImageLoaded} />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  );
};

export default Routing;
