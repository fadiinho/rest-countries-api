import { Country } from "../../types/utils";
import { BASE_API } from "./"

const getProperties = (target: { [key: string]: any }, unknownProp?: string, callback?: (value: string, index: number, array: string[]) => unknown[]) => {
  const keys = Object.keys(target);

  if (typeof callback === "function") {
    return keys.map(callback);
  }

  if (unknownProp) {
    return keys.map((_key) => target[_key][unknownProp]);
  }

  return keys.map((_key) => target[_key]);

}

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

    throw new Error(`Unexpected error. ${result.statusText} (${result.status})`);
  }

  const jsonResult = await result.json().catch((error: Error) => console.log(error));

  if (!jsonResult) return;

  const filtered: Country[] = jsonResult.map((_json: any) => {
    return {
      name: { ..._json.name, nativeName: getProperties(_json.name.nativeName, "common")},
      population: _json.population,
      capital: _json.capital,
      region: _json.region,
      subRegion: _json.subRegion,
      flag: _json.flags,
      tld: _json.tld,
      currencies: getProperties(_json.currencies, "name"),
      languages: getProperties(_json.languages),
      borderCountries: _json.borders
    }
  });

  return filtered;
}
