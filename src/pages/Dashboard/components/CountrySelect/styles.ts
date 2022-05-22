import styled from "styled-components";
import { theme } from "helpers";

export const SelectWrapper = styled.div`
  width: 100%;

  > div {
    width: 100%;
  }

  && .ant-select-selector {
    background-color: ${theme("selectBackground")};
    color: ${theme("textColor")};
  }
`;
