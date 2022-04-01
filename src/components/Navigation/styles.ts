import styled from "styled-components";

export const NavigationWrapper = styled.div`
  background-color: #fbfbfb;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
`;

export const NavigationBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Dot = styled.div<{ display: string }>`
  width: 4px;
  height: 4px;
  background-color: #03a9f4;
  position: absolute;
  top: 48px;
  display: ${(props) => props.display};
  border-radius: 100%;
`;
