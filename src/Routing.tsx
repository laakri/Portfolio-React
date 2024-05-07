import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import About from "./Pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
