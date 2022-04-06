import React from "react";
import "./App.css";
import { CounterProvider } from "./contexts/CounterContext";
import Routing from "./routes";

function App() {
  return (
    <CounterProvider>
      <Routing />
    </CounterProvider>
  );
}

export default App;
