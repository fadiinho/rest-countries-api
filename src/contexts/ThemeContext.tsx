import { createContext, ReactNode, useState } from "react";

import { SetState } from "../../types/utils"

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: string;
  setTheme: SetState<string>;
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
