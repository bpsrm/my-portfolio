import { useState } from "react";

export const SwitchToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const body = document.querySelector("body");
    body.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    if (isDarkMode) localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
  };

  return (
    <div className="dark-mode">
      <span onClick={toggleTheme} className="change-theme">
        {isDarkMode ? "Eclipse" : "Illuminate"}
        <i
          className={`bx  ${
            isDarkMode ? "fa-solid fa-moon ps-2" : "fa-solid fa-sun ps-2"
          }`}
          id="theme-button"
        ></i>
      </span>
    </div>
  );
};
