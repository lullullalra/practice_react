import React, { useEffect, useState } from "react";

function NameForm(props) {
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const handleSubmit = (event) => {
    alert(`입력한 이름:  ${value}, 선택한 성별:  ${gender}`);
    event.preventDefault();
  };

  const handelChangeGender = (event) => {
    console.log(event.target.value);
    setGender(event.target.value); //업데이트가 일어남
    console.log("select " + gender); //이 구문은 업데이트 하기 전에 일어남
  };

  useEffect(() => {
    console.log("did update " + gender); //그러나 useEffect(willDidUpdate)함수를 사용하여 업데이트 후의 결과를 출력
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label>
        성별 :
        <select onChange={handelChangeGender} value={gender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default NameForm;
