import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
