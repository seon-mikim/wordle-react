import styled, { css } from 'styled-components';

export const WordPiece = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #d3d6da;
  width: 60px;
  height: 60px;
  font-weight: 700;
  font-size: 25px;
  ${(props) =>
    props.enter &&
    props.match === 'dismatch' &&
    css`
      background-color: #787c7e;
      color: #fff;
    `}
  ${(props) =>
    props.enter &&
    props.match === 'match' &&
    css`
      background-color: #6aaa64;
      color: #fff;
    `}
    ${(props) =>
    props.enter &&
    props.match === 'includes' &&
    css`
      background-color: #c9b458;
      color: #fff;
    `}
`;
