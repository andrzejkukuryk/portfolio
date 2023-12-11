import React from "react";
import "./App.css";
import { Home } from "./scenes/home/home";
import { Projects } from "./scenes/projects/projects";
import { About } from "./scenes/about/about";
import { Contact } from "./scenes/contact/contact";
import { Menu } from "./scenes/menu/menu";
import { NavProvider } from "./data/navProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavProvider>
        <div className="App">
          <Menu />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </NavProvider>
    </I18nextProvider>
  );
}

export default App;
