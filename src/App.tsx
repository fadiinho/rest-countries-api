import { useContext } from "react";
import { Navbar } from "./components/Navbar";
import { Countries } from "./components/Countries"
import { ThemeContext } from "./contexts/ThemeContext";
import { CountryContext } from "./contexts/CountryContext";
import { CountryModal } from "./components/CountryModal";

function App() {
  const { theme } = useContext(ThemeContext);
  const { selectedCountry } = useContext(CountryContext);

  return (
    <div className={`App ${theme}`}>
      <div className="w-full min-h-full text-very-dark-blue-2 bg-very-light-gray dark:text-white dark:bg-very-dark-blue flex flex-col">
        <Navbar />
        <div className="relative">
          {selectedCountry ? <CountryModal country={selectedCountry} /> : <Countries />}
        </div>
      </div>
    </div>
  )
}

export default App
