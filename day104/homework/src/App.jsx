import { useState } from "react";
import "./App.css";
import logoSvg from "./assets/Logo.svg";
// import dark from "./assets/Icon.png"
function App() {
  const [text, setText] = useState("")

  const characters = text.length
  const words = text.split(" ").filter(item => item !== "").length
  const sentences = text.split(".").filter(item1 => item1 !== "").length

  return (
    <div className="body">
      <div className="logo">
        <img src={logoSvg} alt="" />
        {/* <button><img src={dark} alt="" /></button> */}
      </div>

      <div className="analyze">
        <h1>
          analyze your text
          <br />
          in real-time
        </h1>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
      />

      <div className="cards">
        <div className="card purple">
          <h2>{characters}</h2>
          <p>Total Characters</p>
        </div>

        <div className="card orange">
          <h2>{words}</h2>
          <p>Word Count</p>
        </div>

        <div className="card coral">
          <h2>{sentences}</h2>
          <p>Sentence Count</p>
        </div>
      </div>
    </div>
  );
}

export default App;