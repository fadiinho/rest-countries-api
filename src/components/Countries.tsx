import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { CountryCard } from "./CountryCard";
import type { Country } from "../../types/utils";
import { KeyboardEvent, useState } from "react";

import { searchCountryByName } from "../lib/searchCountryName";

const Error = ({ error }: { error: string }) => {
  return <p>{error}</p>
}

export const Countries = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const [countries, setCountries] = useState<Country[]>([])

  const search = async () => {
    if (!value) return;
    setError("")

    setValue("");

    const result = await searchCountryByName(value).catch((error: Error) => setError(error.message));

    if (!result) return;

    setCountries(result);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;
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
      {!error && countries.map((country) => <CountryCard key={country.name} {...country} />)}
      {error && <Error error={error}/>}
    </div>
  )
};
