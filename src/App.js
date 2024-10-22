import React, { useRef } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const projectRef = useRef(null);
  
  return (
    <div className="font-openSans scroll-smooth bg-[#202c37] text-white">
      <Hero/>
      <Projects projectRef={projectRef}/>
      <Contact/>
    </div>
  );
}

export default App;

