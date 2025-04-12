import React from "react";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const [logic, setLogic] = useState(0);
  console.log(index);
  console.log(setIndex);

  return (
    <div className="body">
      <div className="container">
        <div className="btns">
          <div className="button1">+1</div>
          <div className="button2">Edit</div>
          <div className="button3">Reset</div>
        </div>
        <div className="value">0</div>
        <div className="main">
          <div onClick={} className="next main-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00EA86"
            >
              <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
            </svg>
          </div>
          <div onClick={} className="back main-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00EA86"
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
