import styled from "styled-components";
import { Card, Tabs, Empty, Typography } from "antd";
import { inLessThan, theme } from "helpers";

export const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const SpinnerWrapper = styled.div`
  display: block;
  margin-top: 60px;
  text-align: center;
`;

export const StyledCard = styled(Card)`
  background-color: ${theme("cardBackground")};
  border-color: ${theme("cardBorderColor")};
`;

export const StyledEmpty = styled(Empty)`
  .ant-empty-description {
    color: ${theme("textColor")};
  }
`;

export const StyledText = styled(Typography.Text)`
  color: ${theme("textColor")};
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
  }

  .ant-tabs-content-holder {
    margin-top: 20px;
  }

  .ant-tabs-tab-btn {
    color: ${theme("textColor")};
  }
`;

export const Controls = styled.div`
  position: relative;
  margin-top: 28px;

  > div:last-child {
    position: absolute;
    right: 0;
  }

  && .ant-radio-button-wrapper {
    background-color: ${theme("selectBackground")};
    color: ${theme("textColor")};
  }

  && .ant-select-selector {
    background-color: ${theme("selectBackground")};
    color: ${theme("textColor")};
  }

  .ant-radio-button-wrapper:focus-within {
    box-shadow: none;
  }

  ${inLessThan("sm")`
    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    > div:last-child {
        position: inherit;
        margin-top: 10px;
    }
  `}
`;
