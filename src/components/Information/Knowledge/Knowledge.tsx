import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { InformationContainer } from "../styles";
import { Subtitle } from "../../styles";
import { knowledgeData } from "../../../constants/knowledge";

const Knowledge: FC = (): JSX.Element => {
  const [knowledgeIndex, setKnowledgeIndex] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("knowledge-index")) {
      const randomIndex = Math.floor(Math.random() * 146);

      localStorage.setItem("knowledge-index", `${randomIndex}`);
      setKnowledgeIndex(randomIndex);
    } else {
      setKnowledgeIndex(Number(localStorage.getItem("knowledge-index")) ?? 0);
    }
  }, []);

  return (
    <InformationContainer>
      <Subtitle>지식</Subtitle>
      <KnowledgeContainer>
        <KnowledgeTitle>오늘의 잡지식</KnowledgeTitle>
        <DidUKnowText>알고 계셨나요?</DidUKnowText>
        <KnowledgeText>{knowledgeData[knowledgeIndex]}</KnowledgeText>
      </KnowledgeContainer>
    </InformationContainer>
  );
};

export default Knowledge;

const KnowledgeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.green100};
  width: 85%;
  height: 100%;
  border-radius: 5px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
  flex-wrap: wrap;
`;

const KnowledgeTitle = styled.picture`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.yellow100};
  font-weight: 900;
  margin-bottom: 48px;
  display: flex;
  align-self: center;
`;

const DidUKnowText = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray000};
  margin-bottom: 36px;
`;

const KnowledgeText = styled.div`
  word-break: keep-all;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray000};
  font-size: 18px;
  font-weight: 600;
  display: flex;
`;
