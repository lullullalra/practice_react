import React, { useState } from "react";

function ConfrimButton(props) {
  const [isConfrimed, setIsConfrimed] = useState(false);
  const handleConfirm = () => {
    // setIsConfrimed((prevIsConfirmed) => !prevIsConfirmed);
    setIsConfrimed(!isConfrimed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfrimed}>
      {isConfrimed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfrimButton;
