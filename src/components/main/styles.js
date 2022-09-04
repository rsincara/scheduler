import styled from "styled-components";

export const Main = styled.main`
  padding: 30px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  margin-right: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;