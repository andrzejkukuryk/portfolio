import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import { SectionName } from "../models/menu";

const initialNavContext = {
  updateHomePosition: () => {},
  updateProjectsPosition: () => {},
  updateAboutPosition: () => {},
  updateContactPosition: () => {},
  activeSection: "Home",
} as unknown as ValueProp;

export const NavContext = createContext<ValueProp>(initialNavContext);

interface ValueProp {
  updateHomePosition: (position: number) => void;
  updateProjectsPosition: (position: number) => void;
  updateAboutPosition: (position: number) => void;
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
  const [projectsPosition, setProjectsPosition] = useState(0);
  const [aboutPosition, setAboutPosition] = useState(0);
  const [contactPosition, setContactPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  console.log("scrollPosition: ", scrollPosition);

  const handleScroll = () => {
    const position = window.scrollY + 80; // (80px fixed menu height)
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateHomePosition = (position: number) => {
    setHomePosition(position);
  };

  const updateProjectsPosition = (position: number) => {
    setProjectsPosition(position);
  };

  const updateAboutPosition = (position: number) => {
    setAboutPosition(position);
  };

  const updateContactPosition = (position: number) => {
    setContactPosition(position);
  };

  const updateActiveSection = () => {
    if (scrollPosition < projectsPosition) {
      setActiveSection("Home");
    }
    if (scrollPosition < aboutPosition && scrollPosition >= projectsPosition) {
      setActiveSection("Projects");
    }
    if (scrollPosition < contactPosition && scrollPosition >= aboutPosition) {
      setActiveSection("About");
    }
    if (scrollPosition >= contactPosition) {
      setActiveSection("Contact");
    }
  };
  useEffect(() => {
    updateActiveSection();
  }, [scrollPosition]);

  const value: ValueProp = {
    // updateScrollPosition,
    updateHomePosition,
    updateProjectsPosition,
    updateAboutPosition,
    updateContactPosition,
    activeSection,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
