import styled from "styled-components";

export const AtmosphereContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AtmosphereBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const StatusText = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 28px;
  color: ${({ theme }) => theme.colors.blue000};
`;

export const PMContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 48px;
`;

export const PMText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const PMBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 48%;
  min-width: 140px;
  .PMS {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: flex-end;
  }
`;

export const PMAmount = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray100};
`;

export const PMVisualizer = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  height: 130px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray000};
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ExtraTitle = styled.div`
  font-weight: 600;
  font-size: 17px;
`;

export const Extras = styled.div<{ background: string }>`
  min-height: 50px;
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.background};
  border-radius: 5px;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray000};
`;

export const ExtraText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const ExtraAmount = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
