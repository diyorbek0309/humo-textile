import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const [lang, setlang] = useState("ru");

  const changeHandler = (event) => {
    setlang(event.target.value);
    dispatch({ type: "LANG_CHANGED", payload: event.target.value });
  };

  return (
    <>
      <select value={lang} onChange={changeHandler}>
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
      </select>
    </>
  );
}

export default Navbar;
