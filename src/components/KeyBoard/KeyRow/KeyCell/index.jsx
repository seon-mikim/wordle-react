import { useContext } from 'react';
import { WordContext } from '../../../../context/WordContext';
import * as S from './style';

function KeyCell({ keyCell }) {
  const answer = 'ABLER';
  
  const { state, dispatch } = useContext(WordContext);
  
  const { guessWord } = state;

  const handleValidate = (letter) => {
    const answerLetterArray = Array.from(answer).map((answerLetter,index) => ({ answerLetter, letterIndex: index, match: answerLetter ===letter[index] }));
   
console.log(answerLetterArray)
  }
  
  const handleKeyClick = (event) => {
    const clickLetter = event.currentTarget.textContent
    if (keyCell !== 'Enter' && guessWord.length < 6 && guessWord !== answer) {
      dispatch({ type: 'GUESSWORD', guessWord: clickLetter});
      dispatch({ type: 'ANSWERWORD', answer });
    }
    if (keyCell === 'Enter' && guessWord.length === 5) {
      const enter = 'enter';
      handleValidate(guessWord)
      if (answer !== guessWord) {
        dispatch({ type: 'CURRENTROW' });
        dispatch({ type: 'COMPLETEDROWS' });
        dispatch({ type: 'RESETWORD' });
      }
      
      return dispatch({ type: 'ENTER', enter });
    }
   
  };

  return (
    <S.KeyCell key={keyCell} onClick={handleKeyClick}>
      {keyCell}
    </S.KeyCell>
  );
}

export default KeyCell;
