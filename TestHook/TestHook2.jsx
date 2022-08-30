import React, { useState } from "react";

function TestHook2() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");

  //text에 입력한 값을 setInput에 넣음
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  //buttonClick이라는 상수는 names에 text에 입력한 값을 넣음
  const buttonClick = (e) => {
    setNames((prevState) => {
      console.log("등록하기 전의 names값", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <header>
        <input type="text" value={input} onChange={inputChange} />
        <button onClick={buttonClick}>update</button>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </header>
    </div>
  );
}

export default TestHook2;
