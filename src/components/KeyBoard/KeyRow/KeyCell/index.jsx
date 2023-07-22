import { useContext } from 'react';
import { WordContext } from '../../../../context/WordContext';
import * as S from './style';

function KeyCell({ keyCell }) {
  const answer = 'APPLE';
  const { state, dispatch } = useContext(WordContext);
  const { guessWord,  answerWord} = state;

  const handleKeyClick = () => {
    if(!answerWord) return dispatch({ type: 'ANSWERWORD', answer });
    if (keyCell !== 'Enter' && guessWord.length < 6) return dispatch({ type: 'GUESSWORD', guessWord: keyCell });
    if (keyCell === 'Enter' && guessWord.length === 5) {
      const enter = 'enter';
      if (answer !== guessWord) {
        dispatch({ type: 'CURRENTROW' });
        dispatch({ type: 'COMPLETEDROWS' });
        dispatch({ type: 'RESETWORD' });
      }
     return dispatch({ type: 'ENTER', enter });
    }
    return
  };

  return (
    <S.KeyCell data-key={keyCell} onClick={handleKeyClick}>
      {keyCell}
    </S.KeyCell>
  );
}

export default KeyCell;
