import React from "react";
import { StackInfo } from "../../data/stackIcons";

interface StackItemProps {
  item: StackInfo;
}

export function StackItem({ item }: StackItemProps) {
  return (
    <div>
      <div>
        <item.component />
        <p>{item.label}</p>
      </div>
    </div>
  );
}
