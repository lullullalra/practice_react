import React from "react";
import Book from "./book";
import Test from "./test";
import test from "./test";

function Library(props) {
  return (
    <div>
      <Book
        name="처음 만난 파이썬"
        numOfPage={300}
        button={"TEST"}
        link={"location.href=''"}
      />
      <Book name="처음 만난 AWS" numOfPage={400} button={"TEST"} />
      <Book name="처음 만난 리액트" numOfPage={500} button={"TEST"} />
    </div>
  );
}

export default Library;
