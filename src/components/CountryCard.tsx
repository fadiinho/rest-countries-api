import type { Country } from "../../types/utils";

const CardInfo = ({ infoName, infoText }: { infoName: string, infoText: string  }) => {
  return (
    <p className="m-2 mx-4 font-semibold">{infoName}: <span className="font-light">{infoText}</span></p>
  )
}

export const CountryCard = ({ name, flag, population, region, capital }: Country) => {
  return (
    <div className="rounded overflow-hidden bg-white dark:bg-dark-blue drop-shadow-xl">
      <img src={flag} alt={`${name} flag`} className="" />
      <div id="info" className="py-4 px-2">
        <h2 className="m-4 font-bold text-xl">{name}</h2> 
        <CardInfo infoName="Population" infoText={population} />
        <CardInfo infoName="Region" infoText={region} />
        <CardInfo infoName="Capital" infoText={capital} />
      </div>
    </div>
  )
}
