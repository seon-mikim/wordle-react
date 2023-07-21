import { useContext } from 'react';
import { WordContext } from '../../../../context/WordContext';
import * as S from './style';

function KeyCell({ keyCell, }) {
	const { dispatch } = useContext(WordContext);
//  const { guessWord, completedRows } = state;
  const handleKeyClick = () => {
    dispatch({type:'GUESSWORD', guessWord:keyCell })
  }
	
  return <S.KeyCell data-key={keyCell} onClick={handleKeyClick}>{keyCell}</S.KeyCell>;
}

export default KeyCell;
