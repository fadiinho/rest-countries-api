import { Country } from "../../types/utils";
import { BASE_API, getProperties } from "./";

export const searchCountriesByCode: (codes: string[]) => Promise<Country[]> = async (codes: string[]) => {
  const result = await fetch(`${BASE_API}/alpha?codes=${codes.join(",")}`).catch((error) => {
    console.error(error.message);
    return;
  });
  if (!result) {
    throw new Error("Unexpected error")
  }

  if (!result.ok) {
    if (result.status === 404) {
      throw new Error("Country not found");
    }

    if (result.status >= 400) {
      throw new Error(result.statusText);
    }

    if (result.status >= 500) {
      throw new Error("Internal error");
    }

    throw new Error(`Unexpected error. ${result.statusText} (${result.status})`);
  }

  const jsonResult = await result.json().catch((error: Error) => console.log(error));

  if (!jsonResult) return [];


  const filtered: Country[] = jsonResult.map((_json: any) => {
    return {
      name: { ..._json.name, nativeName: getProperties(_json.name.nativeName, "common")},
      population: _json.population,
      capital: _json.capital,
      region: _json.region,
      subRegion: _json.subRegion,
      flag: _json.flags.png,
      tld: _json.tld,
      currencies: getProperties(_json.currencies, "name"),
      languages: getProperties(_json.languages),
      borderCountries: _json.borders
    }
  });

  return filtered;
}
