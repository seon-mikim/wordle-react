import styled, { css } from 'styled-components';

export const KeyCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5d5e60;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  height: 58px;
  padding: 0 10px;
  border-radius: 4px;
  ${(props) =>
   
    props.match === 'dismatch' &&
    css`
      background-color: #787c72;
      color: #fff;
    `}
  ${(props) =>
    
    props.match === 'match' &&
    css`
      background-color: #6aaa64;
      color: #fff;
    `}
    ${(props) =>
    props.match === 'includes' &&
    css`
      background-color: #c9b458;
      color: #fff;
    `}
`;
