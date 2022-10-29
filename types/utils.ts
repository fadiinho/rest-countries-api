export interface Country {
  name: {
    common: string;
    official: string;
    nativeName:  string[];
  };
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  flag: { png: string; svg: string };
  tld: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
