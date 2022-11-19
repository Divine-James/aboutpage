import { ThemeProvider } from "styled-components";

import React from "react";
import Hero from "./components/hero/Hero";
import Story from "./components/story/Story";
import Fix from "./components/fixit/Fix";
import Help from "./components/help/Help";
import GlobalStyles from "./components/styled/Global";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Hero />
        <Story />
        <Fix />
        <Help />
      </>
    </ThemeProvider>
  );
}

export default App;
