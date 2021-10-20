import "./App.css";
import { useRef } from "react";
import Cards from "./Cards";

function App() {
  const contentRef = useRef([]);

  const handleClick = (i) => {
    contentRef.current[i].scrollIntoView({ behavior: "smooth" });
  };

  const spreadCollect = () => {
    if (contentRef.current[1].style.display === "block") {
      // contentRef.current[1].style.display = "grid";
      console.log(contentRef.current[1].childNodes);
      contentRef.current[1].childNodes.forEach(
        (e) => (e.style.position = "relative")
      );
    } else {
      // contentRef.current[1].style.display = "block";
      contentRef.current[1].childNodes.forEach(
        (e) => (e.style.position = "absolute")
      );
    }
    console.log();
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

      <div className="toTop" onClick={() => spreadCollect()}>
        Top
      </div>
      <div
        ref={(e) => {
          contentRef.current[0] = e;
        }}
        className="container"
        id="content1"
      >
        <Cards />
      </div>
      <div
        ref={(e) => {
          contentRef.current[1] = e;
        }}
        className="container"
        id="content2"
      >
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
        <div className="card">11</div>
        <div className="card">12</div>
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
