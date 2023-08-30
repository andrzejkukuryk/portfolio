import React from "react";
import "./App.css";
import { Home } from "./scenes/home/home";
import { Projects } from "./scenes/projects/projects";
import { About } from "./scenes/about/about";
import { Contact } from "./scenes/contact/contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
