import React from "react";
import { personalLinks } from "../../data/personalLinks";
import { PersonalLinksItem } from "./personalLinksItem";

export function PersonalLinks() {
  const createList = () => {
    return personalLinks.map((link) => <PersonalLinksItem info={link} />);
  };

  return (
    <div>
      <h3>Personal links:</h3>
      {createList()}
    </div>
  );
}
