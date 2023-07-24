import { useContext} from 'react';
import { WordContext } from '../../../../context/WordContext';
import * as S from './style';

function KeyCell({ keyCell }) {
  const answer = 'APPLE';

  const { state, dispatch } = useContext(WordContext);
  const { guessWord } = state;

  const handleKeyClick = () => {
    
    if (keyCell !== 'Enter' && guessWord.length < 6&& guessWord !== answer) {
      dispatch({ type: 'GUESSWORD', guessWord: keyCell });
      dispatch({ type: 'ANSWERWORD',answer });
    }
    if (keyCell === 'Enter' && guessWord.length === 5) {
      const enter = 'enter';
      if (answer !== guessWord) {
        dispatch({ type: 'CURRENTROW' });
        dispatch({ type: 'COMPLETEDROWS' });
        dispatch({ type: 'RESETWORD' });
      }
      return dispatch({ type: 'ENTER', enter });
    }
  };
  

  return (
    <S.KeyCell key={keyCell} onClick={handleKeyClick} >
      {keyCell}
    </S.KeyCell>
  );
}

export default KeyCell;
