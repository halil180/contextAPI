import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function ButtonComp() {
  const { setDarkTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default ButtonComp;
