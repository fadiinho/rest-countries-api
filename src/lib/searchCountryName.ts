import { Country } from "../../types/utils";

const BASE_API = "https://restcountries.com/v3.1";

export const searchCountryByName: (name: string) => Promise<Country[] | undefined> = async (name: string) => {
  const result = await fetch(`${BASE_API}/name/${name}`).catch((error) => {
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
  }

  const jsonResult = await result.json().catch((error: Error) => console.log(error));

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
