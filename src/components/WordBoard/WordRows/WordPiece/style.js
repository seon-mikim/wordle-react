import styled from 'styled-components';

export const WordPiece = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #d3d6da;
  width: 60px;
  height: 60px;
  font-weight: 700;
  font-size: 25px;
  background-color: #fff;
  ${(props) => {
    if (props.match === 'match') {
      return `
       background-color: #6aaa64;
       color: #fff;
      `;
    } else if (props.match === 'includes') {
      return `
    background-color: #c9b458;
      color: #fff;
    `;
    } else if (props.match === 'dismatch') {
      return `
    background-color: #787c7e;
      color: #fff;
    `;
    }
  }}
`;
