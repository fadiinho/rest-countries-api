import { CountryCard } from "./CountryCard";
import type { Country } from "../../types/utils";



export const Countries = () => {
  const countries: Country[] = [{
    name: "Brazil",
    population: "206.135.893",
    region: "Americas",
    capital: "Brasília",
    flag: "https://flagcdn.com/w320/br.png"
  }]

  return (
    <div className="flex justify-center">
      {countries.map((country) => <CountryCard key={country.name} {...country} />)}
    </div>
  )
};
