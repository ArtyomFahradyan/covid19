import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { GlobalStyle, dark, light } from "theme";
import Router from "./components/Router";
import "antd/dist/antd.css";
import "./index.css";
import { ThemeSwitchWrapper, StyledSwitch } from "./styles";

function App() {
  const { t } = useTranslation("dashboard");
  const defTheme = localStorage.getItem("theme");
  const [isThemeLight, setIsThemeLight] = useState(
    !(defTheme && defTheme === "false")
  );
  const theme = isThemeLight ? light : dark;
  const handleThemeChange = (value: boolean) => {
    setIsThemeLight(value);
    localStorage.setItem("theme", String(value));
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitchWrapper>
        <StyledSwitch
          onChange={handleThemeChange}
          checkedChildren={t("lightTheme")}
          unCheckedChildren={t("darkTheme")}
          checked={isThemeLight}
        />
      </ThemeSwitchWrapper>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
