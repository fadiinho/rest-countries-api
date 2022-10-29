import { useContext, useEffect, useState } from "react";
import { Country } from "../../types/utils";
import { CountryContext } from "../contexts/CountryContext";
import { searchCountriesByCode } from "../lib/searchCountryByCode";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

const CardInfo = ({ infoName, infoText }: { infoName: string, infoText: string  }) => {
  return (
    <p className="my-2 sm:m-0 font-semibold">{infoName}: <span className="font-light">{infoText}</span></p>
  )
}

export const CountryModal = ({ country }: { country: Country }) => {
  const { setSelectedCountry } = useContext(CountryContext);
  const [borders, setBorders] = useState<string[]>([]);

  const {
    name,
    flag,
    population,
    tld,
    region,
    subRegion,
    capital,
    languages,
    currencies,
    borderCountries
  } = country;

  useEffect(() => {
    searchCountriesByCode(borderCountries).then((countries) => {
      setBorders(countries.map((country) => country.name.common).slice(0, 3));
    }).catch((error: Error) => {
      console.error(error.message);
      setBorders(["N/A"]);
    });
  }, []);

  return (
    <div className="p-4 w-screen absolute top-0 left-0 z-10 sm:text-xl bg-very-light-gray dark:bg-very-dark-blue flex flex-col justify-between">
      <button className="m-2 p-1 w-1/3 sm:m-8 sm:w-28 bg-white dark:bg-dark-blue rounded drop-shadow-md hover:brightness-125"
        onClick={() => setSelectedCountry(undefined)}
      >
        <ArrowLeftIcon className="mx-1 w-4 h-4 inline" /> Back
      </button>
      <div className="sm:p-8 sm:flex sm:flex-row justify-between">
        <img id={name.common} src={flag.svg} alt={`${name.common} flag`} className="m-2 my-10 sm:m-0 sm:w-96" />
        <div id="info" className="m-2 sm:w-1/2 sm:grid grid-cols-1">
          <h2 className="font-bold text-xl sm:text-2xl">{name.common}</h2>
          <div className="sm:grid sm:grid-cols-2">
            <div className="my-6 sm:m-0">
              <CardInfo infoName="Native Name" infoText={name.nativeName[0]} />
              <CardInfo infoName="Population" infoText={population.toLocaleString("en-us")} />
              <CardInfo infoName="Region" infoText={region} />
              <CardInfo infoName="Sub Region" infoText={subRegion} />
              <CardInfo infoName="Capital" infoText={capital?.length ? capital[0] : "N/A"} />
            </div>
            <div className="my-8 sm:m-0">
              <CardInfo infoName="Top Level Domain" infoText={tld[0]} />
              <CardInfo infoName="Currencies" infoText={currencies.join(", ")} />
              <CardInfo infoName="Languages" infoText={languages[0]} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h3 className="my-4 sm:m-0 sm:mr-4 font-semibold text-lg grow sm:grow-0">Border Countries:</h3>
            <div className="flex justify-between sm:gap-4">
              {borders.map((border) => {
                return <span className="p-1 px-4 rounded bg-white dark:bg-dark-blue drop-shadow-lg" key={border}>{border}</span>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
