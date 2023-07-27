import { useContext, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { WordContext } from '../../../../context/WordContext';

function WordPiece({ tried, cell }) {
  const { state } = useContext(WordContext);
  const { guessWord, currentRow, answerWord, enter, completedRows } = state;
  const [letter, setLetter] = useState('');
  const [matchLetter, setMatchLetter] = useState('');
  const wordPieceRef = useRef(null);
  const checkGuessWord = () => {
    if (wordPieceRef.current.innerText) {
      const validateWord = wordPieceRef.current.innerText === answerWord[cell];
      const matchLetter = validateWord ? 'match' : 'dismatch';
      const includesLetter =
        !validateWord && answerWord.includes(wordPieceRef.current.innerText) ? 'includes' : matchLetter;
      setMatchLetter(includesLetter);
    }
  };

  useEffect(() => {
    if (currentRow === tried) {
      setLetter(guessWord[cell]);
    }
  }, [currentRow, tried, guessWord, cell]);

  useEffect(() => {
     if (enter && currentRow === completedRows.length) {
       checkGuessWord();
     }
  },[enter, completedRows, currentRow])
  return (
    <S.WordPiece data-count={`${tried}${cell}`} match={matchLetter} ref={wordPieceRef}>
      {letter}
    </S.WordPiece>
  );
}

export default WordPiece;
