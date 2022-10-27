import { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

import { ThemeContext } from "../contexts/ThemeContext";

const Icon = ({ theme, className }: { theme: string, className: string }) => {
  return <>
      {theme === "dark" && 
        <MoonIcon className={className} />
      }

      {theme === "light" && 
        <SunIcon className={className} />
      }
    </>
}

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="px-4 py-6 bg-white dark:bg-dark-blue drop-shadow flex justify-between">
      <h1 className="font-extrabold">Where in the world?</h1>
      <button onClick={toggleTheme}>
        <Icon theme={theme} className="w-6 h-6" />
      </button>
    </nav>
  )
}
