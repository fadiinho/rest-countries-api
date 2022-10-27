import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { CountryCard } from "./CountryCard";
import type { Country } from "../../types/utils";
import { KeyboardEvent, useState } from "react";

import { searchCountryByName } from "../lib/searchCountryName";



export const Countries = () => {
  const [value, setValue] = useState("");

  const [countries, setCountries] = useState<Country[]>([{
    name: "Brazil",
    population: "206.135.893",
    region: "Americas",
    capital: "Brasília",
    flag: "https://flagcdn.com/w320/br.png"
  }])

  const search = async () => {
    if (!value) return;

    const result = await searchCountryByName(value);

    setValue("");

    if (!result) return;
    setCountries(result);

  }
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code !== "Enter") return;
    search()
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center ">
      <div className="m-4 w-full bg-white dark:bg-dark-blue flex rounded drop-shadow">
        <MagnifyingGlassIcon onClick={search} className="w-6 h-6 m-4" />
        <input
          className="w-full min-h-full bg-white dark:bg-dark-blue rounded"
          placeholder="Search for a country..."
          onChange={(event) => setValue(event.target.value)}
          value={value}
          onKeyDown={handleKeyDown}
        />
      </div>
      {countries.map((country) => <CountryCard key={country.name} {...country} />)}
    </div>
  )
};
