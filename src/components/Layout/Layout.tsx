import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Navigation from "../Navigation/Navigation";
import * as S from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.LayoutWrapper>
        {children}
        <Navigation />
      </S.LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
