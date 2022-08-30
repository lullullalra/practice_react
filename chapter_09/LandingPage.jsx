import React, { useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import styles from "../ready/style";
import Counter from "../chapter_07/Counter";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   useEffect(() => {
  //     setIsLoggedIn(true);
  //   });

  const onClickLogin = () => {
    setIsLoggedIn(true);
    alert("xxx님 환영합니다^^");
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
    alert("정상적으로 로그아웃 되었습니다.");
  };

  function BlogText() {
    return (
      <div style={styles.wrapper}>
        <table>
          <tr>
            <th>댓글</th>
          </tr>
          <tr>
            <td>제목: </td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td>내용: </td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <Counter />
            </td>
          </tr>
        </table>
      </div>
    );
  }

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <hr />
      <div style={styles.nameText}>리액트와 함께하는 공부</div>
      <BlogText></BlogText>
      <BlogText></BlogText>
      <BlogText></BlogText>
    </div>
  );
}

export default LandingPage;
