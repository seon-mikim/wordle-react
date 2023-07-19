import { useContext, useEffect } from 'react';
import WordRows from './WordRows';
import * as S from './style';
import { WordContext } from '../../context/WordContext';
function Wordboard({ attempt }) {

  const answer = 'APPLE';
  const { state, dispatch } = useContext(WordContext);
  const { guessWord } = state;

  const handleEnter = () => {
    if (guessWord === answer) alert('오~~! 정답이에요.');
    
    if (answer.includes(guessWord)) alert('앗! 정답과 달라요.');
    dispatch({ type: 'ANSWERWORD', answer });
    dispatch({ type: 'CURRENTROW' });
    dispatch({ type: 'COMPLETEDROWS' });
    dispatch({ type: 'RESETWORD' });
  };

  const handleBackspace = () => {
    dispatch({ type: 'REMOVEWORD' });
  };

  const handleKeyDown = (event) => {
    const { key, keyCode } = event;
    const checkWord = 65 <= keyCode && keyCode <= 90;

    if (checkWord) {
      const word = key.toUpperCase();
      if (word.length < 6) dispatch({ type: 'GUESSWORD', guessWord: word });
    } else if (key === 'Enter') handleEnter();
    else if (key === 'Backspace') handleBackspace();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <S.WordBoard>
      {attempt.map((rowData) => (
        <WordRows key={rowData.attempt} tried={rowData.attempt} attempt={rowData.count} />
      ))}
    </S.WordBoard>
  );
}

export default Wordboard;
