import styled from "styled-components";

export const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: ${(props) => props.theme.colors.gray000};
`;

export const NavigationBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme.colors.gray100};
`;

export const Dot = styled.div<{ display: string }>`
  width: 4px;
  height: 4px;
  position: absolute;
  top: 48px;
  display: ${(props) => props.display};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.blue000};
`;
