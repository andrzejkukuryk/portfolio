import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Home } from "./scenes/home/home";
import { Projects } from "./scenes/projects/projects";
import { About } from "./scenes/about/about";
import { Contact } from "./scenes/contact/contact";
import { Menu } from "./scenes/menu/menu";
import { NavProvider, useNavContext } from "./data/navProvider";

function App() {
  const { updateScrollPosition } = useNavContext();
  const handleScroll = () => {
    let position = window.scrollY;
    console.log(position);
    updateScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavProvider>
      <div className="App">
        <Menu />
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </NavProvider>
  );
}

export default App;
