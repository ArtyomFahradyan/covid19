import { useSelector } from "react-redux";
import { StatisticsSelectors } from "@redux";
import { useEffect, useState } from "react";
import { Data } from "types";

export default function (
  selectedCasesControl: keyof Data,
  countOfCountries: string
) {
  const statistic = useSelector(StatisticsSelectors.getStatistic);
  const selectedCountry = useSelector(StatisticsSelectors.getSelectedCountry);
  const [countries, setCountries] = useState<
    {
      name: string;
      value: number;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    if (statistic && statistic.length) {
      const data = statistic
        .sort((a, b) => {
          return (
            b.data[b.data.length - 1][selectedCasesControl] -
            a.data[a.data.length - 1][selectedCasesControl]
          );
        })
        .slice(
          0,
          selectedCountry
            ? Number(countOfCountries) - 1
            : Number(countOfCountries)
        )
        .map((country) => ({
          name: country.location,
          value: country.data[country.data.length - 1][selectedCasesControl],
          type: "regular",
        }));
      if (selectedCountry) {
        data.push({
          name: selectedCountry.location,
          value: selectedCountry.data.slice(-1)[0][selectedCasesControl],
          type: "selected",
        });
      }
      setCountries(data);
    }
  }, [selectedCasesControl, countOfCountries, selectedCountry, statistic]);

  return countries;
}
