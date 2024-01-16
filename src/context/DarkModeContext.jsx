import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme : dark)").matches, // check if is dark mode activated at my operating system
    "isDarkMode"
  );

  const toggleDarkMode = () => setIsDarkMode((dark) => !dark);

  useEffect(() => {
    document.documentElement.className = isDarkMode // access to html tag element
      ? "dark-mode"
      : "light-mode";
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const ctx = useContext(DarkModeContext);
  if (ctx === undefined)
    throw new Error("DarkModeContext was used outside DarkModeProvider ");
  return ctx;
};
export default DarkModeProvider;
