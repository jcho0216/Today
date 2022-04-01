import React, { useEffect } from "react";
import * as S from "./styles";
import { HomeIcon, PlannerIcon, PersonalIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <S.NavigationWrapper>
      <S.NavigationBox onClick={() => navigate("home")}>
        <HomeIcon
          backgroundColor={pathName === "/home" ? "#03A9F4" : "#1e1e1e"}
        />
        <S.Dot display={pathName === "/home" ? "block" : "none"} />
      </S.NavigationBox>
      <S.NavigationBox onClick={() => navigate("planner")}>
        <PlannerIcon
          backgroundColor={pathName === "/planner" ? "#03A9F4" : "#1e1e1e"}
        />
        <S.Dot display={pathName === "/planner" ? "block" : "none"} />
      </S.NavigationBox>
      <S.NavigationBox onClick={() => navigate("personal")}>
        <PersonalIcon
          backgroundColor={pathName === "/personal" ? "#03A9F4" : "#1e1e1e"}
        />
        <S.Dot display={pathName === "/personal" ? "block" : "none"} />
      </S.NavigationBox>
    </S.NavigationWrapper>
  );
};

export default Navigation;
