import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  const mainRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="font-openSans">
      <Nav mainRef={mainRef} projectRef={projectRef} contactRef={contactRef}/>
      {/* <Hero mainRef={mainRef}/> */}
      <Projects projectRef={projectRef}/>
      <Contact contactRef={contactRef}/>

      <Routes>
        <Route exact path="/#" element={<Hero/>}/>
        <Route path="/#projects" element={<Projects/>}/>
        <Route path="/#contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
