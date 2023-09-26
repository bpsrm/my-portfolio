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

  const toggleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };

  return (
    <div className="dark-mode" style={toggleStyle}>
      <i
        className={`bx change-theme ${isDarkMode ? "bxs-moon" : "bxs-sun"}`}
        id="theme-button"
        onClick={toggleTheme}
      ></i>
    </div>
  );
};
