import { useContext, useEffect, useState } from 'react';
import * as S from './style';
import { WordContext } from '../../../../context/WordContext';

function WordPiece({ tried, cell }) {
  const { state } = useContext(WordContext);
  const { guessWord, currentRow, answerWord, enter, completedRows } = state;
  const [letter, setLetter] = useState('');
  const [matchLetter, setMatchLetter] = useState('');

  console.log();

  const setGuessWord = () => {
    setLetter(guessWord[cell]);
  };

  const checkGuessWord = () => {
    const isMatch = guessWord[cell] === answerWord[cell];
    const includesLetter = answerWord.includes(guessWord[cell]);
    if (isMatch && includesLetter) return setMatchLetter('match');
    if (!isMatch && includesLetter) return setMatchLetter('includes');
    else return setMatchLetter('dismatch');
  };

  useEffect(() => {
    if (currentRow === tried) {
      setGuessWord();
    }
  }, [currentRow, tried, cell, guessWord]);

  useEffect(() => {
    if ((enter && completedRows[tried] === tried) || currentRow === tried) {
      checkGuessWord();
    }
  }, [enter, completedRows, tried, currentRow]);
  return (
    <S.WordPiece data-count={`${tried}${cell}`} match={matchLetter} data-match={matchLetter} data-letter={letter}>
      {letter}
    </S.WordPiece>
  );
}

export default WordPiece;
