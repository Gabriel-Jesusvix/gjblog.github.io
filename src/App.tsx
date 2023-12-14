import { ThemeProvider } from "styled-components";
import { GithubProvider } from "./contexts/GithubContenxt";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <Home />
      </GithubProvider>
    </ThemeProvider>
  )
}