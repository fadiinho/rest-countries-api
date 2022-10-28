import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { CountryCard } from "./CountryCard";
import type { Country } from "../../types/utils";
import { KeyboardEvent, useEffect, useState } from "react";

import { searchCountryByName } from "../lib/searchCountryName";

const Error = ({ error }: { error: string }) => {
  return <p className="text-red-600">{error}</p>
}

export const Countries = () => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");

  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

  const applyFilter = () => {
    if (!countries.length) return [];

    if (!filter) {
      setFilteredCountries(countries);
      return;
    }

    setFilteredCountries(countries.filter((_c) => _c.region.toLowerCase() === filter.toLowerCase()));
  }

  const search = async () => {
    if (!value) return;
    setError("")

    const result = await searchCountryByName(value).catch((error: Error) => setError(error.message));

    if (!result) return;

    setCountries(result);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;
    search()
  }

  useEffect(() => {
    applyFilter();
  }, [countries, filter]);

  return (
    <div className="p-4 sm:w-full flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col justify-between sm:flex-row gap-8">
        <div className="sm:w-1/3 bg-white dark:bg-dark-blue flex rounded drop-shadow">
          <MagnifyingGlassIcon onClick={search} className="w-6 h-6 m-4" />
          <input
            className="w-full min-h-full bg-white dark:bg-dark-blue rounded"
            placeholder="Search for a country..."
            onChange={(event) => setValue(event.target.value)}
            value={value}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="sm:m-0 bg-white dark:bg-dark-blue flex items-center self-start sm:self-center relative rounded drop-shadow">
          <select
            className="p-4 min-h-full bg-white dark:bg-dark-blue rounded"
            onChange={(event) => setFilter(event.target.value)}
            value={filter}
          >
            <option value="" disabled hidden>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <XCircleIcon onClick={() => setFilter("")} className={`w-6 h-6 cursor-pointer ${filter ? "opacity-1" : "opacity-0"}`} />
        </div>
      </div>
      <div className="m-8 p-4 sm:m-8 w-full flex flex-col justify-center gap-8 sm:flex-row sm:flex-wrap">
        {!error && filteredCountries.map((country) => <CountryCard key={country.name} {...country} />)}
        {error && <Error error={error}/>}
      </div>
    </div>
  )
};
