import { FC } from "react";
import styled from "styled-components";
import { InformationContainer } from "../styles";
import { Subtitle } from "../../styles";

const Weather: FC = (): JSX.Element => {
  return (
    <InformationContainer>
      <Subtitle>날씨정보</Subtitle>
    </InformationContainer>
  );
};

export default Weather;
