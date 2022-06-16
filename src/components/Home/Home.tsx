import { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CarousalIndex } from "../../state/atoms";
import { Logo } from "../styles";
import { Container } from "../styles";

interface Props {
  children: React.ReactNode;
}

const Home: FC<Props> = ({ children }) => {
  const [touchStart, setTouchStart] = useState(0);
  const setCarousalIndex = useSetRecoilState(CarousalIndex);

  const handleTouchStart = (screenX: number) => {
    setTouchStart(screenX);
  };

  const handleTouchEnd = (touchStart: number, touchEnd: number) => {
    if (touchStart - touchEnd >= 30) {
      setCarousalIndex((prev) => {
        if (prev >= 3) return prev;
        return prev + 1;
      });
    }

    if (touchStart - touchEnd <= -30) {
      setCarousalIndex((prev) => {
        if (prev <= 0) return prev;
        return prev - 1;
      });
    }
  };

  return (
    <Container
      onTouchStart={(e) => handleTouchStart(e.targetTouches[0].screenX)}
      onTouchEnd={(e) => handleTouchEnd(touchStart, e.changedTouches[0].screenX)}
      onMouseUp={(e) => handleTouchEnd(touchStart, e.screenX)}
      onMouseDown={(e) => handleTouchStart(e.screenX)}
    >
      <Logo>투데이</Logo>
      {children}
    </Container>
  );
};

export default Home;
