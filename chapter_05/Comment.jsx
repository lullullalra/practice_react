import React from "react";
import styles from "../ready/style";

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div>
        <img src="logo192.png" alt="icon" style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
