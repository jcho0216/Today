import React from "react";
import * as S from "./styles";
import { HomeIcon, PlannerIcon, PersonalIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/theme";

const Navigation: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <S.NavigationWrapper>
      <S.NavigationBox onClick={() => navigate("home")}>
        <HomeIcon
          backgroundColor={
            pathName === "/home" ? `${theme.colors.blue000}` : `${theme.colors.black000}`
          }
        />
        <S.Dot display={pathName === "/home" ? "block" : "none"} />
      </S.NavigationBox>
      <S.NavigationBox onClick={() => navigate("planner")}>
        <PlannerIcon
          backgroundColor={
            pathName === "/planner" ? `${theme.colors.blue000}` : `${theme.colors.black000}`
          }
        />
        <S.Dot display={pathName === "/planner" ? "block" : "none"} />
      </S.NavigationBox>
      <S.NavigationBox onClick={() => navigate("personal")}>
        <PersonalIcon
          backgroundColor={
            pathName === "/personal" ? `${theme.colors.blue000}` : `${theme.colors.black000}`
          }
        />
        <S.Dot display={pathName === "/personal" ? "block" : "none"} />
      </S.NavigationBox>
    </S.NavigationWrapper>
  );
};

export default Navigation;
