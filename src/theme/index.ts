const theme = {
  purple: "#623bea",
  green: "#38cc6b",
  draftTextGray: "#a7a7a7",
  yellow: "#ffc700",
  red: "#ff2c44",
  violet: "#9013fe",
  blue: "#4299ff",
  black: "#333",
  primaryShadow: "#e8e2fc",
  primaryDisabled: "#c9bbf8",
  light: "#fff",
  dark: "#000",
  successColor: "#38cc6b",
  warningColor: "#ffc500",
  lightGrey: "#f7f7f7",
  grey: "#f6f6f8",
  lightGray: "#f6f6f8",
};

const light = {
  ...theme,
  primary: "#623bea",
  primarySwitch: "#4299ff",
  background: "#fff",
  fieldsBackground: "#fff",
  cardBackground: "#fff",
  cardBorderColor: "#f0f0f0",
  selectBackground: "#fff",
  textColor: "#0f0f0f",
  textColor2: "#e2e2e2",
  secondaryTextColor: "#7c7c7c",
};

const dark = {
  ...theme,
  primary: "#bb86fc",
  primarySwitch: "#47525d",
  background: "#000",
  fieldsBackground: "#47525d",
  cardBackground: "#141414",
  cardBorderColor: "#141414",
  selectBackground: "#42484e",
  textColor: "#e2e2e2",
  textColor2: "#0f0f0f",
  secondaryTextColor: "#9f9f9f",
};

export { default as GlobalStyle } from "./globalStyles";
export { dark, light };
