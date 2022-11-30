import styled from 'styled-components';

export interface styleType {
  isActive: boolean;
}

export const StyledSideBarBackground = styled.div<{ isActive: boolean }>`
  position: fixed;
  height: 100vh;
  width: 100px;
  background-color: ${({ isActive }) => (!isActive ? 'red' : 'blue')};
  transition: all 0.2s;
`;

export const StyledSideBar = styled.div<{ isActive: boolean }>`
  height: 500px;
  width: 50px;
  transition: all 0.2s;
  background-color: ${({ isActive }) => (isActive ? 'red' : 'blue')};
`;
