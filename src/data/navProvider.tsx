import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import { SectionName } from "../models/menu";
import variables from "../variables.module.scss";

const initialNavContext = {
  updateHomePosition: () => {},
  updateAboutPosition: () => {},
  updateProjectsPosition: () => {},
  updateContactPosition: () => {},
  activeSection: "Home",
} as unknown as ValueProp;

export const NavContext = createContext<ValueProp>(initialNavContext);

interface ValueProp {
  updateHomePosition: (position: number) => void;
  updateAboutPosition: (position: number) => void;
  updateProjectsPosition: (position: number) => void;
  updateContactPosition: (position: number) => void;
  activeSection: SectionName;
}

interface NavProviderProps {
  children?: ReactNode;
}

export const useNavContext = () => {
  return useContext(NavContext);
};

export const NavProvider: FC<NavProviderProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [homePosition, setHomePosition] = useState(0);
  const [aboutPosition, setAboutPosition] = useState(0);
  const [projectsPosition, setProjectsPosition] = useState(0);
  const [contactPosition, setContactPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  const handleScroll = () => {
    const menuHeight = Number(variables.menuHeight.replace("px", ""));
    const position = window.scrollY + menuHeight;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const updateHomePosition = (position: number) => {
    setHomePosition(position);
  };

  const updateAboutPosition = (position: number) => {
    setAboutPosition(position);
  };

  const updateProjectsPosition = (position: number) => {
    setProjectsPosition(position);
  };

  const updateContactPosition = (position: number) => {
    setContactPosition(position);
  };

  const updateActiveSection = () => {
    if (scrollPosition < aboutPosition) {
      setActiveSection("Home");
    }
    if (scrollPosition < projectsPosition && scrollPosition >= aboutPosition) {
      setActiveSection("About");
    }
    if (
      scrollPosition < contactPosition &&
      scrollPosition >= projectsPosition
    ) {
      setActiveSection("Projects");
    }
    if (scrollPosition >= contactPosition) {
      setActiveSection("Contact");
    }
    if (scrollPosition === 0) {
      setActiveSection("Home");
    }
  };
  useEffect(() => {
    updateActiveSection();
  }, [scrollPosition]);

  const value: ValueProp = {
    updateHomePosition,
    updateProjectsPosition,
    updateAboutPosition,
    updateContactPosition,
    activeSection,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
