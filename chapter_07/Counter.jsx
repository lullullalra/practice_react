import React, { useEffect, useState } from "react";
import styles from "../ready/style";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [cnt, setCnt] = useState(0);
  const [badCnt, setBadCnt] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log(count);
    return () => {
      console.log("unmount");
    };
  }, [cnt]); //[cnt] 의존성 배열에 들어가있는 변수가 변경될때만 실행 => update를 자동으로 호출함.

  useEffect(() => {
    setBadCount(badCount + 1);
    return () => {};
  }, [badCnt]);

  return (
    <div>
      <p>
        💖 {count - 1} 😡 {badCount - 1}
      </p>

      <button
        style={styles.button}
        onClick={() => {
          // setCount(count + 1);
          setCnt(cnt + 1);
        }}
      >
        좋아요
      </button>
      <button
        style={styles.button}
        onClick={() => {
          setBadCnt(badCnt + 1);
        }}
      >
        화나요
      </button>
    </div>
  );
}

export default Counter;
