import Home from "../../components/Home/Home";
import Atmosphere from "../../components/Information/Atmosphere/Atmosphere";
import Weather from "../../components/Information/Weather/Weather";
import Knowledge from "../../components/Information/Knowledge/Knowledge";
import Song from "../../components/Information/\bSong/Song";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import theme from "../../theme/theme";
import { CarousalIndex } from "../../state/atoms";
import { useRecoilState } from "recoil";

const HomePage: React.FC = (): JSX.Element => {
  const [carousalIndex, setCarousalIndex] = useRecoilState(CarousalIndex);
  const [windowWidth, setWindowWidth] = useState(0);
  const carousalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    if (carousalRef.current) {
      carousalRef.current.style.transform = `translateX(-${carousalIndex * windowWidth}px)`;
    }
  }, [carousalIndex]);

  return (
    <Home>
      <CarousalContainer>
        <Carousal ref={carousalRef}>
          <Atmosphere />
          <Weather />
          <Knowledge />
          <Song />
        </Carousal>
      </CarousalContainer>
      <CarousalDotContainer>
        {[...Array(4)].map((_, index) => {
          return (
            <CarousalDot
              key={index}
              background={carousalIndex === index ? theme.colors.blue000 : theme.colors.gray100}
              onClick={() => setCarousalIndex(index)}
            />
          );
        })}
      </CarousalDotContainer>
    </Home>
  );
};

export default HomePage;

const CarousalDotContainer = styled.div`
  display: flex;
  gap: 32px;
  position: absolute;
  bottom: 20px;
`;

const CarousalDot = styled.div<{ background: string }>`
  width: 6px;
  height: 6px;
  background-color: ${(props) => props.background};
  border-radius: 100%;
  cursor: pointer;
`;

const Carousal = styled.div`
  position: relative;
  transition: all 1s ease;
  display: flex;
  width: fit-content;
`;

const CarousalContainer = styled.div`
  max-width: 100vw;
  position: relative;
  overflow: hidden;
`;
