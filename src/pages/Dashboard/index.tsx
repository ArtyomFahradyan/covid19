import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { StatisticsSelectors } from "@redux";
import Spinner from "components/Spinner";
import ReportedCases from "./components/ReportedCases";
import RankedCharts from "./components/RankedCharts";
import CountrySelect from "./components/CountrySelect";
import {
  DashboardWrapper,
  StyledTabs,
  StyledCard,
  StyledEmpty,
  StyledText,
  SpinnerWrapper,
} from "./styles";

const { TabPane } = Tabs;

function Dashboard() {
  const { t } = useTranslation("dashboard");
  const selectedCountry = useSelector(StatisticsSelectors.getSelectedCountry);
  const loading = useSelector(StatisticsSelectors.getLoading);

  return (
    <DashboardWrapper>
      <StyledCard>
        <CountrySelect />
        {!loading ? (
          <>
            <StyledTabs defaultActiveKey="1">
              <TabPane tab={t("reportedCases")} key="1">
                {selectedCountry ? (
                  <ReportedCases />
                ) : (
                  <StyledEmpty description={t("pleaseSelectCountry")} />
                )}
              </TabPane>
              <TabPane tab={t("rankedCharts")} key="2">
                <RankedCharts />
              </TabPane>
            </StyledTabs>
          </>
        ) : (
          <SpinnerWrapper>
            <div>
              <Spinner />
            </div>
            <div>
              <StyledText>{t("pleaseWait")}</StyledText>
            </div>
          </SpinnerWrapper>
        )}
      </StyledCard>
    </DashboardWrapper>
  );
}

export default Dashboard;
