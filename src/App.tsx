import React from "react";
import "./App.css";
import { Message } from "./scenes/greeting/message";
import { StackItem } from "./scenes/greeting/stackItem";

function App() {
  return (
    <div className="App">
      <Message />
      <StackItem />
    </div>
  );
}

export default App;
