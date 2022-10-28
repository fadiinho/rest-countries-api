import type { Country } from "../../types/utils";

const CardInfo = ({ infoName, infoText }: { infoName: string, infoText: string  }) => {
  return (
    <p className="m-2 font-semibold">{infoName}: <span className="font-light">{infoText}</span></p>
  )
}

export const CountryCard = ({ name, flag, population, region, capital }: Country) => {
  return (
    <div className="max-w-32 rounded overflow-hidden bg-white dark:bg-dark-blue flex flex-col drop-shadow-xl">
      <img id={name} src={flag} alt={`${name} flag`} className="grow" />
      <div id="info" className="pt-2 px-2">
        <h2 className="m-2 font-bold text-xl">{name}</h2>
        <CardInfo infoName="Population" infoText={population.toLocaleString("en-us")} />
        <CardInfo infoName="Region" infoText={region} />
        <CardInfo infoName="Capital" infoText={capital} />
      </div>
    </div>
  )
}
