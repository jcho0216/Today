import { FC } from "react";
import styled from "styled-components";
import { InformationContainer } from "../styles";
import { Subtitle } from "../../styles";
import SunnyIcon from "../../../assets/icons/Sunny";
import CloudIcon from "../../../assets/icons/weather/CloundIcon";
import LightningIcon from "../../../assets/icons/weather/LigntningIcon";
import RainIcon from "../../../assets/icons/weather/RainIcon";
import theme from "../../../theme/theme";

const Weather: FC = (): JSX.Element => {
  const date = new Date();
  const today = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일, ${date.getHours()}시`;

  return (
    <InformationContainer>
      <Subtitle>날씨정보</Subtitle>
      <WeatherBox>
        <DateText>{today}</DateText>
        <WeatherState>{"구름"}</WeatherState>
        {/* <SunnyIcon color="white" width="130" height="130" /> */}
        <CloudIcon color={theme.colors.gray000} width="130" height="130" />
        <Degrees>{"23°"}</Degrees>
      </WeatherBox>
      <WeatherToday>
        <p id="today">오늘</p>
        <WeatherSlider>
          <WeatherElementBox>
            <WeatherElementTitle>10시</WeatherElementTitle>
            {/* <SunnyIcon color={theme.colors.yellow200} width="50" height="50" /> */}
            {/* <WeatherElementState>구름</WeatherElementState> */}
            <CloudIcon color={theme.colors.gray100} width="50" height="50" />
            <WeatherElementDegree>23°</WeatherElementDegree>
          </WeatherElementBox>
          <WeatherElementBox>
            <WeatherElementTitle>13시</WeatherElementTitle>
            {/* <SunnyIcon color={theme.colors.yellow200} width="50" height="50" /> */}
            {/* <WeatherElementState>구름</WeatherElementState> */}
            <CloudIcon color={theme.colors.gray100} width="50" height="50" />
            <WeatherElementDegree>27°</WeatherElementDegree>
          </WeatherElementBox>
          <WeatherElementBox>
            <WeatherElementTitle>16시</WeatherElementTitle>
            {/* <SunnyIcon color={theme.colors.yellow200} width="50" height="50" /> */}
            {/* <WeatherElementState>구름</WeatherElementState> */}
            <CloudIcon color={theme.colors.gray100} width="50" height="50" />
            <WeatherElementDegree>29°</WeatherElementDegree>
          </WeatherElementBox>
          <WeatherElementBox>
            <WeatherElementTitle>19시</WeatherElementTitle>
            {/* <SunnyIcon color={theme.colors.yellow200} width="50" height="50" /> */}
            {/* <WeatherElementState>비비</WeatherElementState> */}
            <RainIcon color={theme.colors.blue000} width="50" height="50" />
            <WeatherElementDegree>27°</WeatherElementDegree>
          </WeatherElementBox>
          <WeatherElementBox>
            <WeatherElementTitle>22시</WeatherElementTitle>
            {/* <SunnyIcon color={theme.colors.yellow200} width="50" height="50" /> */}
            {/* <WeatherElementState>번개 비</WeatherElementState> */}
            <LightningIcon color={theme.colors.yellow100} width="50" height="50" />
            <WeatherElementDegree>18°</WeatherElementDegree>
          </WeatherElementBox>
        </WeatherSlider>
      </WeatherToday>
    </InformationContainer>
  );
};

export default Weather;

const WeatherBox = styled.div`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 20px 0;
  border-radius: 5px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DateText = styled.div`
  color: ${({ theme }) => theme.colors.gray000};
`;

const WeatherState = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray000};
  margin-bottom: 16px;
`;

const WeatherIcon = styled.img`
  width: clamp(100px, 50%, 200px);
  aspect-ratio: 1/1;
  margin-bottom: 12px;
`;

const Degrees = styled.div`
  color: ${({ theme }) => theme.colors.gray000};
  font-size: 36px;
  font-weight: 600;
`;

const WeatherToday = styled.div`
  margin-top: 42px;
  width: 100%;
  font-weight: 600;
  #today {
    color: ${({ theme }) => theme.colors.gray200};
    margin-left: 12px;
    margin-bottom: 12px;
  }
`;

const WeatherSlider = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.gray100};
  height: 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 5px 4px;
  overflow-x: none;
`;

const WeatherElementBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 2px;
  background-color: ${({ theme }) => theme.colors.gray000};
  border-radius: 5px;
  height: 100%;
`;

const WeatherElementTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray100};
`;

const WeatherElementDegree = styled.div`
  color: ${({ theme }) => theme.colors.gray100};
`;

const WeatherElementState = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: center;
`;
