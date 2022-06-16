import { FC, useState } from "react";
import styled from "styled-components";
import { Logo } from "../styles";
import { Container, Subtitle } from "../styles";
import PlannerList from "./PlannerList";
import { TodoContents } from "../../state/atoms";
import { useRecoilState } from "recoil";

const Planner: FC = (): JSX.Element => {
  const date = new Date();
  const [todos, setTodos] = useRecoilState(TodoContents);
  const [todoInput, setTodoInput] = useState("");

  const getDay = (day: number) => {
    switch (day) {
      case 0:
        return "일요일";
      case 1:
        return "월요일";
      case 2:
        return "화요일";
      case 3:
        return "수요일";
      case 4:
        return "목요일";
      case 5:
        return "금요일";
      case 6:
        return "토요일";
    }
  };

  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일, ${getDay(
    date.getDay()
  )}`;

  const addTodo = () => {
    setTodos((prev) => {
      const arr = [...prev];

      arr.push({
        isChecked: false,
        content: todoInput,
      });

      localStorage.setItem("todo-contents", JSON.stringify(arr));
      return arr;
    });
    setTodoInput("");
  };

  return (
    <Container>
      <Logo>투데이</Logo>
      <Subtitle>오늘 하루를 설계해보세요</Subtitle>
      <TodoContainer>
        <TodoDate>{today}</TodoDate>
        <TodoAddBox>
          <TodoInput
            placeholder="할 일을 입력해주세요"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <TodoAddButton onClick={addTodo}>추가</TodoAddButton>
        </TodoAddBox>
        <TodoBox>
          {todos.map((value, index) => {
            return <PlannerList {...value} key={index} index={index} />;
          })}
        </TodoBox>
      </TodoContainer>
    </Container>
  );
};

export default Planner;

const TodoContainer = styled.div`
  width: clamp(300px, 85%, 600px);
  height: 100%;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
`;

const TodoDate = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 12px;
`;

const TodoInput = styled.input`
  border: none;
  outline: none;
  padding: 0 12px;
  font-size: 14px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-right: none;
`;

const TodoAddBox = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  /* grid-column-gap: 8px; */
  height: 30px;
`;

const TodoAddButton = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.colors.blue000};
  color: ${({ theme }) => theme.colors.gray000};
  border: 1px solid ${({ theme }) => theme.colors.blue000};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 600;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  overflow: auto;
  max-height: 500px;
`;
