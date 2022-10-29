import { createContext, ReactNode, useState } from "react";
import { Country, SetState } from "../../types/utils";

interface CountryContextProps {
  selectedCountry?: Country;
  setSelectedCountry: SetState<Country | undefined>;
}

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryContext = createContext<CountryContextProps>({} as CountryContextProps);

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  )
}
