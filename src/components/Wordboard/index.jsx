import { useContext, useEffect } from 'react';
import WordRows from './WordRows';
import * as S from './style';
import { WordContext } from '../../context/WordContext';
function Wordboard({ attempt }) {
  const answer = 'APPLE';
  const { state, dispatch } = useContext(WordContext);
  const { guessWord, completedRows } = state;

  const gameOver = () => {
   
    alert(`게임 종료 정답은 두구두구🤔${answer}였어요.`);
  };
  const nextLine = () => {
    if (guessWord === answer) return;
    dispatch({ type: 'CURRENTROW' });
    dispatch({ type: 'COMPLETEDROWS' });
    if(completedRows.length === 4) return gameOver()
  };

  const matchLatter = () => {
    const matchAnswer = answer.includes(guessWord);
    const includesLetter = Array.from(guessWord).filter((letter) => answer.includes(letter));
    if (completedRows.length <= 3) {
      if (matchAnswer) return alert('오~~! 정답이에요.');
      if (includesLetter && includesLetter.length !== 0) return alert('욜~! 정답 단어에 해당 문자가 들어가요!!');
      if (!includesLetter && !matchAnswer) return alert('앗 정답과 달라요');
    }
  };
  const handleEnter = (enter) => {
    if (guessWord.length === 5 ) {
      nextLine();
      matchLatter()
      if (answer !== guessWord) dispatch({ type: 'RESETWORD' });
      if (enter) return dispatch({ type: 'ENTER', enter });
    }
  };

  const handleBackspace = () => {
    dispatch({ type: 'REMOVEWORD' });
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    dispatch({ type: 'ANSWERWORD', answer });
    const { key, keyCode } = event;
    const checkWord = 65 <= keyCode && keyCode <= 90;
    // if(guessWord === answer) return event.preventDefault()
    if (checkWord) {
      const word = key.toUpperCase();
      if (word.length < 6) dispatch({ type: 'GUESSWORD', guessWord: word });
    }
    if (key === 'Enter') return handleEnter('enter');
    if (key === 'Backspace') return handleBackspace();
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
