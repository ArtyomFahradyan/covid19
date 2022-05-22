import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bar } from "@ant-design/plots";
import { Radio, RadioChangeEvent, Select } from "antd";
import { config, countOptions } from "./constants";
import type { Data } from "types";
import useFilterCountries from "../ReportedCases/useFilterCountries";
import { Controls } from "../../styles";

const { Option } = Select;

function RankedCharts() {
  const { t } = useTranslation("dashboard");
  const [selectedCasesControl, setSelectedCasesControl] =
    useState<keyof Data>("total_deaths");
  const [countOfCountries, setCountOfCountries] = useState(
    countOptions[0].value
  );
  const optionsReportedCases = [
    { label: t("totalDeaths"), value: "total_deaths" },
    { label: t("totalCases"), value: "total_cases" },
  ];

  const data = useFilterCountries(selectedCasesControl, countOfCountries);

  const handleControlsChange = (e: RadioChangeEvent) => {
    setSelectedCasesControl(e.target.value);
  };

  const handleCountChange = (value: string) => {
    setCountOfCountries(value);
  };

  return (
    <>
      {data && (
        <Bar
          {...{
            ...config,
            data,
          }}
        />
      )}
      <Controls>
        <Radio.Group
          options={optionsReportedCases}
          onChange={handleControlsChange}
          value={selectedCasesControl}
          optionType="button"
        />
        <Select
          value={countOfCountries}
          style={{ minWidth: 120 }}
          onChange={handleCountChange}
        >
          {countOptions.map(({ value }) => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Controls>
    </>
  );
}

export default RankedCharts;
