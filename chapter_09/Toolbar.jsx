import React, { useState } from "react";
import styles from "../ready/style";

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn && <span style={styles.nameText}>React 로그인 실습</span>}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default Toolbar;
