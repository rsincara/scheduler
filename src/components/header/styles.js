import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  
  padding: 0 30px;
  
  height: 50px;
  
  font-size: 16px;
  font-family: Inter, sans-serif;
  box-shadow: 0 10px 10px 3px rgba(34, 60, 80, 0.19);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Logo = styled.div`
  color: #ffffff;
`;

export const WeekNumber = styled.div`
  color: #ffffff;
`;