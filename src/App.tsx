import React from "react";
import "./App.css";
import { Home } from "./scenes/home/home";
import { Projects } from "./scenes/projects/projects";
import { About } from "./scenes/about/about";
import { Contact } from "./scenes/contact/contact";
import { Menu } from "./scenes/home/menu/menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
