import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Navigation from "../Navigation/Navigation";
import * as S from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <S.LayoutWrapper>
        {children}
        <Navigation />
      </S.LayoutWrapper>
    </>
  );
};

export default Layout;
