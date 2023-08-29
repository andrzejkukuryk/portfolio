import React from "react";
import { StackInfo } from "../../models/stackIcons";

interface StackItemProps {
  item: StackInfo;
}

export function StackItem({ item }: StackItemProps) {
  return (
    <div>
      <div style={{ backgroundColor: "#093f96" }}>
        <item.component />
        <p>{item.label}</p>
      </div>
    </div>
  );
}
