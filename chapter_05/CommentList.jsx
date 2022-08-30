import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "유재석",
    comment: "안녕하세요~ 반갑습니다.",
  },
  {
    name: "지석진",
    comment: "안녕하세요~ 반갑습니다.",
  },
  {
    name: "양세형",
    comment: "안녕하세요~ 반갑습니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((item) => {
        return <Comment name={item.name} comment={item.comment} />;
      })}
    </div>
  );
}

export default CommentList;
