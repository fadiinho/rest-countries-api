export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
