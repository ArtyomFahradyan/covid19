import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Line } from "@ant-design/plots";
import { Radio, RadioChangeEvent } from "antd";
import { StatisticsSelectors } from "@redux";
import { config } from "./constants";
import { Controls } from "../../styles";

function ReportedCases() {
  const { t } = useTranslation("dashboard");
  const [selectedCasesControl, setSelectedCasesControl] = useState("deaths");
  const selectedCountry = useSelector(StatisticsSelectors.getSelectedCountry);
  const [selectedNewOrTotalControl, setSelectedNewORTotalControl] =
    useState("new");
  const optionsReportedCases = [
    { label: t("deathCount"), value: "deaths" },
    { label: t("confirmedCases"), value: "cases" },
  ];

  const optionsReportedNewCases = [
    { label: t("daily"), value: "new" },
    { label: t("total"), value: "total" },
  ];

  const handleControlsChange = (e: RadioChangeEvent) => {
    setSelectedCasesControl(e.target.value);
  };

  const handleControlsChange2 = (e: RadioChangeEvent) => {
    setSelectedNewORTotalControl(e.target.value);
  };

  return (
    <>
      {selectedCountry && (
        <Line
          {...{
            ...config,
            yField: `${selectedNewOrTotalControl}_${selectedCasesControl}`,
            data: selectedCountry.data,
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
        <Radio.Group
          options={optionsReportedNewCases}
          onChange={handleControlsChange2}
          value={selectedNewOrTotalControl}
          optionType="button"
        />
      </Controls>
    </>
  );
}

export default ReportedCases;
