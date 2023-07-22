import { useContext, useEffect, useState } from 'react';
import * as S from './style';
import { WordContext } from '../../../../context/WordContext';

function WordPiece({ tried, cell }) {
  const { state } = useContext(WordContext);
  const { guessWord, currentRow, answerWord, enter, completedRows } = state;
  const [letter, setLetter] = useState('');

  const checkGuessWord = () => {
    if (answerWord && letter !== '') {
      const validateWord = answerWord[cell] === letter;
      const matchLetter = validateWord ? 'match' : 'dismatch';
      const includesLetter = !validateWord && answerWord.includes(letter) ? 'includes' : matchLetter;
      return includesLetter;
    }
  };

  const setEnterData = () => {
    if (completedRows[tried] === tried || answerWord === guessWord) {
      return enter;
    }
  };

  useEffect(() => {
    if (currentRow === tried) {
      setLetter(guessWord[cell]);
    }
  });
  const count = Number(`${tried}${cell}`);
  return (
    <S.WordPiece
      data-count={count}
      match={checkGuessWord()}
      enter={setEnterData()}
      data-enter={enter}
      data-match={checkGuessWord()}
    >
      {letter}
    </S.WordPiece>
  );
}

export default WordPiece;
