import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const contentRef = useRef([]);

  const handleClick = (i) => {
    contentRef.current[i].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <nav>
        <p onClick={() => handleClick(0)}>content1</p>
        <p onClick={() => handleClick(1)}>content2</p>
        <p onClick={() => handleClick(2)}>content3</p>
        <p onClick={() => handleClick(3)}>content4</p>
      </nav>

      <div className="toTop" onClick={() => handleClick(0)}>
        Top
      </div>
      <div
        ref={(e) => {
          contentRef.current[0] = e;
        }}
        className="container"
        id="content1"
      >
        1
      </div>
      <div
        ref={(e) => {
          contentRef.current[1] = e;
        }}
        className="container"
        id="content2"
      >
        2
      </div>
      <div
        ref={(e) => {
          contentRef.current[2] = e;
        }}
        className="container"
        id="content3"
      >
        3
      </div>
      <div
        ref={(e) => {
          contentRef.current[3] = e;
        }}
        className="container"
        id="content4"
      >
        4
      </div>
    </div>
  );
}

export default App;
