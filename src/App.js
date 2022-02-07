import { useState } from "react";
import "./App.scss";
import first from "./images/eeeee.jpg";
import second from "./images/eeree.jpg";
import third from "./images/f.jpg";
import fourth from "./images/ff.jpg";
import fifth from "./images/frrr.jpg";

import { Link } from "react-router-dom";

function App() {
  const items = [
    { name: "CARE", image: first },
    { name: "HOTELS", image: second },
    { name: "LOUNGE", image: third },
    { name: "SUITES", image: first },
    { name: "GUESTS", image: fourth },
    { name: "LAND", image: fifth },
  ];
  const [active, setActive] = useState();

  return (
    <div className="Apps">
      <header className="App-header">
        <Link to="first" style={{ textDecoration: "none" }} to="/">
          <nav className="logo">
            <img src={second} />
          </nav>
        </Link>
        <div className="socio">
          <nav>Facebook</nav>
          <nav>LinkedIn</nav>
          <nav>YouTube</nav>
        </div>
        <span className="get">Get the full report</span>
      </header>
      <h1 className="sectors">OUR SECTORS</h1>
      <div className="frames" style={{ marginTop: "-2rem" }}>
        {items.map((item, index) => (
          <Link
            to="first"
            style={{ textDecoration: "none" }}
            to="/view"
            key={index}
          >
            <div
              className={`imgdiv imgdiv-${index}${
                index === active ? " active" : ""
              }`}
              onMouseEnter={(_) => setActive(index)}
              onMouseLeave={(_) => setActive()}
            >
              <span className="num">
                <h2 className="numnum">0{index + 1}</h2>
                <h2 className="numword">
                  AX
                  <br />
                  {item.name}
                </h2>
              </span>
              <div
                className="img"
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
