import { useContext, useState } from 'react';
import { WordContext } from '../../../../context/WordContext';
import * as S from './style';

function KeyCell({ letter }) {
  const { state, dispatch } = useContext(WordContext);
  const { guessWord, currentRow, completedRows, enter } = state;
  const [matchLetter, setMatchLetter] = useState('');

  const answer = 'APPLE';

  const validateLetter = (keyClickLetter) => {
     if (keyClickLetter === 'Enter') return;
    if (currentRow === completedRows.length && letter === keyClickLetter) {
      if (answer[guessWord.length] === keyClickLetter) return setMatchLetter('match');
      if (answer.includes(keyClickLetter)) return setMatchLetter('includes');
      else return setMatchLetter('dismatch');
    }
  };

  const nextLine = () => {
    if (answer !== guessWord) {
      dispatch({ type: 'CURRENTROW' });
      dispatch({ type: 'COMPLETEDROWS' });
      dispatch({ type: 'RESETWORD' });
    }
  };

  const handleEnterClick = () => {
    dispatch({ type: 'ANSWERWORD', answer });
    dispatch({ type: 'ENTER', enter: 'enter' });
    if (guessWord.length === 5) return nextLine();
  };

  const handleKeyClick = (event) => {
    const clickLetter = event.target.innerText;
    const checkWord = clickLetter !== 'Enter' && guessWord.length < 6 && guessWord !== answer;
    if (checkWord) {
      validateLetter(clickLetter);
      dispatch({ type: 'GUESSWORD', guessWord: clickLetter });
    }
    if (clickLetter === 'Enter') return handleEnterClick();
  };
 
  return (
    <S.KeyCell key={letter} onClick={handleKeyClick} match={matchLetter}>
      {letter}
    </S.KeyCell>
  );
}

export default KeyCell;
