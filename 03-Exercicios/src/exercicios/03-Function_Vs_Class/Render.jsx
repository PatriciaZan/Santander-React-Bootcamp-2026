import React from "react";
import CounterFunctionalComponent from "./CounterFunctionalComponent";
import CounterClassComponent from "./CounterClassComponent";

export default function Render() {
  return (
    <div>
      <CounterFunctionalComponent message="Functional Component: " />
      <CounterClassComponent message="Class Component" />
    </div>
  );
}
