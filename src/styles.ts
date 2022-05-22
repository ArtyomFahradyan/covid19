import styled from "styled-components";
import { Switch } from "antd";
import { theme } from "./helpers";

export const ThemeSwitchWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const StyledSwitch = styled(Switch)`
  margin-right: 20px;
  background-color: ${theme("primarySwitch")};
  > span {
    color: ${theme("textColor")};
  }
`;
