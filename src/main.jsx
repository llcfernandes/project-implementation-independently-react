import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

<ThemeProvider theme={theme}>
  <GlobalStyles />
  <App />
</ThemeProvider>