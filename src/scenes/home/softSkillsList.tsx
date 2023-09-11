import React from "react";
import { SoftSkillsItem } from "./softSkillsItem";

export function SoftSkillsList() {
  const softSkills = ["patient", "ambitious", "fast learner"];

  const createList = () => {
    return softSkills.map((skill) => <SoftSkillsItem label={skill} />);
  };

  return <div>{createList()}</div>;
}
