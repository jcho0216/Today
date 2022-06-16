import { FC } from "react";
import * as S from "./styles";
import { MyHood } from "../../../state/atoms";
import { useRecoilValue } from "recoil";
import theme from "../../../theme/theme";
import { InformationContainer } from "../styles";
import { Subtitle } from "../../styles";

const Atmosphere: FC = (): JSX.Element => {
  const myHood = useRecoilValue(MyHood);

  return (
    <InformationContainer>
      <Subtitle>대기환경정보</Subtitle>
      {myHood === "" ? (
        <div>프로필에서 내 동네를 설정해주세요</div>
      ) : (
        <S.AtmosphereBox>
          <S.StatusText>이런 날엔 산책이 최고죠</S.StatusText>
          <S.PMContainer>
            <S.PMBox>
              <div className="PMS">
                <S.PMText>미세먼지</S.PMText>
                <S.PMAmount>82mg/m2</S.PMAmount>
              </div>
              <S.PMVisualizer background={theme.colors.blue100}>{"매우 좋음"}</S.PMVisualizer>
            </S.PMBox>
            <S.PMBox>
              <div className="PMS">
                <S.PMText>초미세먼지</S.PMText>
                <S.PMAmount>82mg/m2</S.PMAmount>
              </div>
              <S.PMVisualizer background={theme.colors.blue100}>{"매우 좋음"}</S.PMVisualizer>
            </S.PMBox>
          </S.PMContainer>
          <S.ExtraInfoContainer>
            <S.ExtraTitle>기타정보</S.ExtraTitle>
            <S.Extras background={theme.colors.red000}>
              <S.ExtraText>{"오존"}</S.ExtraText>
              <S.ExtraAmount>{"매우 나쁨"}</S.ExtraAmount>
            </S.Extras>
            <S.Extras background={theme.colors.green000}>
              <S.ExtraText>{"이산화탄소"}</S.ExtraText>
              <S.ExtraAmount>{"보통"}</S.ExtraAmount>
            </S.Extras>
            <S.Extras background={theme.colors.yellow000}>
              <S.ExtraText>{"일산화탄소"}</S.ExtraText>
              <S.ExtraAmount>{"나쁨"}</S.ExtraAmount>
            </S.Extras>
          </S.ExtraInfoContainer>
        </S.AtmosphereBox>
      )}
    </InformationContainer>
  );
};

export default Atmosphere;
