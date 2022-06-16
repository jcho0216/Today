import { FC, useState } from "react";
import styled from "styled-components";
import { CheckIcon } from "../../assets/icons";
import { useSetRecoilState } from "recoil";
import { TodoContents } from "../../state/atoms/index";

interface Props {
  isChecked: boolean;
  index: number;
}

const PlannerCheckBox: FC<Props> = ({ isChecked, index }): JSX.Element => {
  const setTodoContents = useSetRecoilState(TodoContents);

  const handleCheckBoxChange = () => {
    setTodoContents((prev) => {
      const arr = [...prev].map((value, mapIndex) => {
        if (mapIndex === index) {
          return {
            ...value,
            isChecked: !isChecked,
          };
        } else {
          return value;
        }
      });
      localStorage.setItem("todo-contents", JSON.stringify(arr));
      return arr;
    });
  };

  return (
    <CheckBoxContainer onClick={handleCheckBoxChange}>
      {isChecked && <img src={CheckIcon} />}
    </CheckBoxContainer>
  );
};

export default PlannerCheckBox;

const CheckBoxContainer = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
`;
