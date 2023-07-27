import { useContext, useEffect, useState } from 'react';
import * as S from './style';
import { WordContext } from '../../../../context/WordContext';

function WordPiece({ tried, cell }) {
  const { state } = useContext(WordContext);
  const { guessWord, currentRow, answerWord, enter, completedRows } = state;
  const [letter, setLetter] = useState('');
  const [matchLetter, setMatchLetter] = useState('')
  const checkGuessWord = () => {
    
    if (answerWord && letter !== '') {
      const validateWord = answerWord[cell] === letter;
      const matchLetter = validateWord ? 'match' : 'dismatch';
      const includesLetter = !validateWord && answerWord.includes(letter) ? 'includes' : matchLetter;
      setMatchLetter(includesLetter)
     
    }
  };

 

  useEffect(() => {
    if (currentRow === tried) {
      setLetter(guessWord[cell]);
    }
    if (enter && completedRows[tried] === tried|| currentRow === 0) {
      checkGuessWord()
    }
  });
  const count = Number(`${tried}${cell}`);
  return (
    <S.WordPiece
      data-count={count}
      match={matchLetter}
      
  
    >
      {letter}
    </S.WordPiece>
  );
}

export default WordPiece;
