import { useContext, useState } from 'react';
import { WordContext } from '../../../../context/WordContext';
import * as S from './style';

function KeyCell({ letter, onEnter, onDelete, onGuess }) {
  const { state } = useContext(WordContext);
  const { guessWord} = state;
  const [matchLetter] = useState('');
  const answer = 'APPLE';

  // const validateLetter = (keyClickLetter) => {
  //    if (keyClickLetter === 'Enter') return;
  //   if (currentRow === completedRows.length && letter === keyClickLetter) {
  //     if (answer[guessWord.length] === keyClickLetter) return setMatchLetter('match');
  //     if (answer.includes(keyClickLetter)) return setMatchLetter('includes');
  //     else return setMatchLetter('dismatch');
  //   }
  // };

  const handleKeyClick = (event) => {
    const clickLetter = event.target.innerText;
    const checkWord =
      clickLetter !== 'Enter' && clickLetter !== 'Backspace' && guessWord.length < 6 && guessWord !== answer;
    if (checkWord) return onGuess(clickLetter)
    if (clickLetter === 'Enter') return onEnter();
    if (clickLetter === 'Backspace') return onDelete();
    
  };

  return (
    <S.KeyCell key={letter} onClick={handleKeyClick} match={matchLetter}>
      {letter}
    </S.KeyCell>
  );
}

export default KeyCell;
