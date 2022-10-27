import { Country } from "../../types/utils";

const BASE_API = "https://restcountries.com/v3.1";

export const searchCountryByName: (name: string) => Promise<Country[]> = async (name: string) => {
  const result = await fetch(`${BASE_API}/name/${name}`);

  if (!result.ok) return;

  const jsonResult = await result.json();

  if (!jsonResult) return;

  const filtered = jsonResult.map((_json: any) => {
    return {
      name: _json.name.common,
      population: _json.population,
      capital: _json.capital,
      region: _json.region,
      flag: _json.flags.png
    }
  });

  return filtered;
}
