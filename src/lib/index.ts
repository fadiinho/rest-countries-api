export const BASE_API = "https://restcountries.com/v3.1"

export const getProperties = (target: { [key: string]: any }, unknownProp?: string, callback?: (value: string, index: number, array: string[]) => unknown[]) => {
  const keys = Object.keys(target);

  if (typeof callback === "function") {
    return keys.map(callback);
  }

  if (unknownProp) {
    return keys.map((_key) => target[_key][unknownProp]);
  }

  return keys.map((_key) => target[_key]);

}
