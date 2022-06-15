import { FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CarousalIndex } from "../../state/atoms";
import * as S from "./styles";

interface Props {
  children: React.ReactNode;
}

const Home: FC<Props> = ({ children }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [moved, setMoved] = useState(false);
  const setCarousalIndex = useSetRecoilState(CarousalIndex);

  function handleTouchStart(e: any) {
    setTouchStart(e.targetTouches[0].screenX);
  }

  function handleTouchMove(e: any) {
    setMoved(true);
    setTouchEnd(e.targetTouches[0].screenX);
  }

  function handleTouchEnd() {
    if (!moved) return;

    if (touchStart - touchEnd > 30) {
      setCarousalIndex((prev) => {
        if (prev >= 4) return prev;
        return prev + 1;
      });
    }

    if (touchStart - touchEnd < -30) {
      setCarousalIndex((prev) => {
        if (prev <= 0) return prev;
        return prev - 1;
      });
    }

    setMoved(false);
  }
  return (
    <S.HomeContainer
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={handleTouchEnd}
      onMouseUp={(e) => console.log(e)}
      onMouseMove={(e) => console.log(e)}
      onMouseOut
    >
      <S.Logo>투데이</S.Logo>
      {children}
    </S.HomeContainer>
  );
};

export default Home;
