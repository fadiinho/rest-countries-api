import type { Country } from "../../types/utils";

interface CountryCardProps {
  onClick: (name: string) => void;
  country: Country;
}

const CardInfo = ({ infoName, infoText }: { infoName: string, infoText: string  }) => {
  return (
    <p className="m-2 font-semibold">{infoName}: <span className="font-light">{infoText}</span></p>
  )
}

export const CountryCard = ({ country: { name, flag, population, region, capital }, onClick }: CountryCardProps) => {
  return (
      <div onClick={() => onClick(name.common)} className="min-w-32 sm:w-64 rounded overflow-hidden bg-white dark:bg-dark-blue flex flex-col drop-shadow-xl cursor-pointer hover:outline hover:outline-1 hover:outline-very-dark-blue-2 dark:hover:outline-white">
      <img id={name.common} src={flag.png} alt={`${name.common} flag`} className="grow sm:h-40" />
      <div id="info" className="pt-2 px-2">
        <h2 className="m-2 font-bold text-xl">{name.common}</h2>
        <CardInfo infoName="Population" infoText={population.toLocaleString("en-us")} />
        <CardInfo infoName="Region" infoText={region} />
        <CardInfo infoName="Capital" infoText={capital?.length ? capital[0] : "N/A"} />
      </div>
    </div>
  )
}
