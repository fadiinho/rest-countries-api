import { useContext } from "react";
import { Navbar } from "./components/Navbar";
import { Countries } from "./components/Countries"
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext); 

  return (
    <div className={`App ${theme}`}>
      <div className="w-full h-full text-very-dark-blue-2 bg-very-light-gray dark:text-white dark:bg-very-dark-blue flex flex-col">
        <Navbar />
        <Countries />
      </div>
    </div>
  )
}

export default App
