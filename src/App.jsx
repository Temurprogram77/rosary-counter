import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [zikr, setZikr] = useState("Alhamdulillah");

  let arr = [
    "Alhamdulillah",
    "Allahu Akbar",
    "Subhanallah",
    "Siz 99 Zikrni aytib bo'ldingiz!",
  ];

  function clickedBtn() {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === 33) {
      setZikr(arr[1]);
    } else if (newCount === 66) {
      setZikr(arr[2]);
    } else if (newCount === 99) {
      setZikr(arr[3]);
    } else if (newCount === 100) {
      setZikr(arr[0]);
    }
  }

  function resetBtn() {
    setCount(0);
    setZikr("");
  }

  function clickBtn() {
    if (count !== 0) {
      const newCount = count - 1;
      setCount(newCount);

      if (newCount === 33) {
        setZikr(arr[0]);
      } else if (newCount === 66) {
        setZikr(arr[1]);
      } else if (newCount === 99) {
        setZikr(arr[2]);
      }
    }
  }

  return (
    <div className="body">
      <div className="container">
        <div className="btns">
          <div className="button1">+1</div>
          <div className="button2">Edit</div>
          <div onClick={resetBtn} className="button3">
            Reset
          </div>
        </div>
        <div className="text">{zikr}</div>
        <div className="value">{count}</div>
        <div className="main">
          <div onClick={clickedBtn} className="next main-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00EA86"
            >
              <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
            </svg>
          </div>
          <div onClick={clickBtn} className="back main-btn">
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
