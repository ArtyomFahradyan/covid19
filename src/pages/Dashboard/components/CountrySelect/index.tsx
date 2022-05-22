import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Select, notification } from "antd";
import { useSelector } from "react-redux";
import { useStatisticActions, StatisticsSelectors } from "@redux";
import { getStatistic } from "requests";
import { SelectWrapper } from "./styles";

const { Option } = Select;

function CountrySelect() {
  const { t } = useTranslation("dashboard");
  const statistic = useSelector(StatisticsSelectors.getStatistic);
  const selectedCountry = useSelector(StatisticsSelectors.getSelectedCountry);
  const [filteredCountries, setFilteredCountries] = useState(statistic);
  const { setStatistics, setSelectedCountry, setLoading } =
    useStatisticActions();

  useEffect(() => {
    try {
      (async function () {
        setLoading(true);
        const statistic = await getStatistic();
        setLoading(false);
        const countries = Object.values(statistic);
        setStatistics(countries);
        setFilteredCountries(countries);
      })();
    } catch (e) {
      notification.error({
        message: t("errMessage"),
        description: t("errDescription"),
      });
    }
  }, []);

  const handleSearch = (value: string) => {
    setFilteredCountries(
      statistic.filter(({ location }) =>
        location.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  const handleChange = (value: string) => {
    const country = filteredCountries?.find(
      (country) => value === country.location
    );

    if (country) {
      setSelectedCountry(country);
    }
  };

  return (
    <SelectWrapper>
      <Select
        showSearch
        value={selectedCountry?.location || undefined}
        placeholder={t("selectCountry")}
        onSearch={handleSearch}
        onChange={handleChange}
      >
        {filteredCountries?.map(({ location }) => (
          <Option key={location} value={location}>
            {location}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  );
}

export default CountrySelect;
