import React from "react";
import "./App.css";
import { Message } from "./scenes/greeting/message";
import { StackItem } from "./scenes/greeting/stackItem";
import { stack } from "./models/stackIcons";

function App() {
  return (
    <div className="App">
      <Message />
      <StackItem item={stack[0]} />
    </div>
  );
}

export default App;
