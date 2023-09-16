import React from "react";
import { SoftSkillsItem } from "./softSkillsItem";
import { softSkills } from "../../data/softSkills";

export function SoftSkillsList() {
  return (
    <div>
      {softSkills.map((skill) => (
        <SoftSkillsItem label={skill} key={`soft${skill}`} />
      ))}
    </div>
  );
}
