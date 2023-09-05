import React from "react";

import { PersonalLinksInfo } from "../../data/personalLinks";

interface PersonalLinksInfoProps {
  info: PersonalLinksInfo;
}
export function PersonalLinksItem({ info }: PersonalLinksInfoProps) {
  return (
    <a href={info.url}>
      <div>
        <info.icon />
        <p>{info.label}</p>
      </div>
    </a>
  );
}
