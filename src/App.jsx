import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact, Socials } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
