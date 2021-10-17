import "./App.css";
import { useRef } from "react";

function App() {
  const contentRef = useRef([]);

  const handleClick = (i) => {
    contentRef.current[i].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <nav>
        <p
          className="navLink"
          onClick={() => handleClick(0)}
          data-hover="content1"
        >
          content1
        </p>
        <p
          className="navLink"
          onClick={() => handleClick(1)}
          data-hover="content2"
        >
          content2
        </p>
        <p
          className="navLink"
          onClick={() => handleClick(2)}
          data-hover="content3"
        >
          content3
        </p>
        <p
          className="navLink"
          onClick={() => handleClick(3)}
          data-hover="content4"
        >
          content4
        </p>
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
