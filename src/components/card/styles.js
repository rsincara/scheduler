import styled from "styled-components";

export const Card = styled.div`
  max-width: 350px;
  
  background: rgba(160, 169, 112, 0.7);
  
  padding: 14px;
  
  border-radius: 4px;
  
  font-family: Inter, sans-serif;
  color: #ffffff;
  
  box-shadow: 0 1px 10px 3px rgba(34, 60, 80, 0.19);
  
  @media (max-width: 768px) {
    max-width: unset;
    width: 100%;
  }
  
  transition: 1s;
  
  &:hover {
    transform: scale(1.1);
    
    background: rgba(160, 169, 112, 1);
    box-shadow: 0 0 21px 15px rgba(34, 60, 80, 0.2);
  }
`;

export const Day = styled.div`
  text-align: center;
  
  margin-bottom: 20px;
`;

export const SelfStudyDay = styled.div`
  text-align: center;
`;

export const ScheduleSubjectWrapper = styled.div`
  display: flex;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ScheduleTimeBlock = styled.div`
  flex-shrink: 0;
  
  width: 60px;

  margin-right: 20px;
`;

export const ScheduleSubject = styled.div`
  overflow-wrap: anywhere;
`;



