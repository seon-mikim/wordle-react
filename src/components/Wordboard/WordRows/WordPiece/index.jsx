import { useContext, useEffect, useState } from 'react';
import * as S from './style';
import { WordContext } from '../../../../context/WordContext';

function WordPiece({ tried, cell }) {
  const { state } = useContext(WordContext);
  const { guessWord, currentRow } = state;
  const [letter, setLetter] = useState('');

  useEffect(() => {
    if (currentRow === tried) {
      setLetter(guessWord[cell]);
    }
  },[]);
  const count = Number(`${tried}${cell}`);
  return <S.WordPiece data-count={count}>{letter}</S.WordPiece>;
}

export default WordPiece;
