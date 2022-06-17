import { FC } from "react";
import { Container, Logo, Subtitle } from "../styles";
import styled from "styled-components";
import { useResetRecoilState } from "recoil";
import { TodoContents } from "../../state/atoms";
import { CarousalIndex } from "../../state/atoms";

const Personal: FC = (): JSX.Element => {
  const resetTodo = useResetRecoilState(TodoContents);
  const resetCarousal = useResetRecoilState(CarousalIndex);

  return (
    <Container>
      <Logo>투데이</Logo>
      <Subtitle>내 정보</Subtitle>
      <MasterBedroom
        onClick={() => {
          localStorage.clear();
          resetTodo();
          resetCarousal();
        }}
      >
        내 정보 초기화
      </MasterBedroom>
    </Container>
  );
};

export default Personal;

const MasterBedroom = styled.div`
  margin: auto;
  cursor: pointer;
  font-weight: 900;
`;
