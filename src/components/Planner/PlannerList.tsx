import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import PlannerCheckBox from "./PlannerCheckBox";
import { useSetRecoilState } from "recoil";
import { TodoContents } from "../../state/atoms/index";
import { DeleteIcon } from "../../assets/icons";

interface Props {
  isChecked: boolean;
  content: string;
  index: number;
}

const PlannerList: FC<Props> = ({ isChecked, content, index }): JSX.Element => {
  const [todo, setTodo] = useState(content);
  const setTodoContents = useSetRecoilState(TodoContents);

  useEffect(() => {
    setTodoContents((prev) => {
      const arr = [...prev].map((value, mapIndex) => {
        if (mapIndex === index) {
          return {
            ...value,
            content: todo,
          };
        } else {
          return value;
        }
      });

      localStorage.setItem("todo-contents", JSON.stringify(arr));
      return arr;
    });
  }, [todo]);

  const deleteTodo = () => {
    setTodoContents((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);

      localStorage.setItem("todo-contents", JSON.stringify(arr));
      return arr;
    });
  };

  return (
    <ListContainer>
      <PlannerCheckBox isChecked={isChecked} index={index} />
      <ListContent
        value={content}
        onChange={(e) => setTodo(e.target.value)}
        deco={isChecked ? "line-through" : "none"}
        disabled={isChecked}
      />
      <img src={DeleteIcon} alt="delete" onClick={deleteTodo} />
    </ListContainer>
  );
};
export default PlannerList;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;
  height: 32px;
  min-height: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

const ListContent = styled.input<{ deco: string }>`
  border: none;
  outline: none;
  text-decoration: ${(props) => props.deco};

  &:disabled {
    background-color: inherit;
  }
`;
