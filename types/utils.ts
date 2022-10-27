export interface Country {
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
