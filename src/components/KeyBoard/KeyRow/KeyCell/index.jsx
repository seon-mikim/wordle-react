import { useContext, useState } from 'react';
import { WordContext } from '../../../../context/WordContext';
import * as S from './style';

function KeyCell({ letter }) {
  const { state, dispatch } = useContext(WordContext);
  const { guessWord } = state;
  const [keyLetter] = useState(letter);
  const [matchLetter, setMatchLetter] = useState('');

  const answer = 'APPLE';

  const validateLetter = (word, keyClickLetter) => {
    if (answer[word.length] === keyClickLetter) return setMatchLetter('match');
    if (answer.includes(keyClickLetter)) return setMatchLetter('includes');
    else return setMatchLetter('dismatch');
  };

  const nextLine = () => {
    if (answer !== guessWord) {
      dispatch({ type: 'CURRENTROW' });
      dispatch({ type: 'COMPLETEDROWS' });
      dispatch({ type: 'RESETWORD' });
    }
  };

  const handleEnterClick = (letter) => {
    if (letter === 'Enter') {
      dispatch({ type: 'ENTER', enter: letter.toLowerCase() });
      dispatch({ type: 'ANSWERWORD', answer });
    }
    
    validateLetter(guessWord, letter);
    if (guessWord.length === 5) return nextLine();
  };

  const handleKeyClick = (event) => {
    const clickLetter = event.currentTarget.textContent;
    const checkWord = clickLetter !== 'Enter' && guessWord.length < 6 && guessWord !== answer;
    if (checkWord) dispatch({ type: 'GUESSWORD', guessWord: clickLetter });
    handleEnterClick(clickLetter);
  };

  return (
    <S.KeyCell key={keyLetter} onClick={handleKeyClick} match={matchLetter}>
      {keyLetter}
    </S.KeyCell>
  );
}

export default KeyCell;
