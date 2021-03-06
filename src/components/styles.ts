import styled from "styled-components";

export const Logo = styled.div`
  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.blue000};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  position: relative;
  height: calc(100vh - 60px);
  width: 100%;
`;

export const Subtitle = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.blue000};
`;
