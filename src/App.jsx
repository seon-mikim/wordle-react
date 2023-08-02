import { useContext, useEffect } from 'react';
import Layout from './components/Layout';
import { WordContext } from './context/WordContext';

function App() {
  const answer = 'APPLE';
  const { state, dispatch } = useContext(WordContext);
  const { guessWord, completedRows, currentRow,} = state;
  
  console.log(guessWord)
  const gameOver = () => {
    alert(`게임 종료 정답은 두구두구🤔${answer}였어요.`);
  };
  const nextLine = () => {
    if (guessWord === answer) return;
    dispatch({ type: 'CURRENTROW' });
    dispatch({ type: 'COMPLETEDROWS' });
    if (completedRows.length === 4) return gameOver();
  };


  const checkWord = () => {
    const matchAnswer = answer.includes(guessWord);
    const includesLetter = Array.from(guessWord).filter((letter) => answer.includes(letter));
    if (completedRows.length <= 3) {
      if (matchAnswer) return alert('오~~! 정답이에요.');
      if (includesLetter && includesLetter.length !== 0) return alert('욜~! 정답 단어에 해당 문자가 들어가요!!');
      if (!includesLetter && !matchAnswer) return alert('앗 정답과 달라요');
    }
  };

  const handleEnter = () => {
    if (guessWord.length < 6) {
      nextLine();
      checkWord();
      if (answer !== guessWord)return dispatch({ type: 'RESETWORD' });
      if (currentRow === 0 || currentRow === completedRows[currentRow])
        return dispatch({ type: 'ENTER', enter: 'enter' });
    }
  };

  const setGuessLetter = (letter) => {
    dispatch({ type: 'ANSWERWORD', answer });
    dispatch({ type: 'GUESSWORD', guessWord: letter });
   
  };
  const handleBackspace = () => {
    dispatch({ type: 'REMOVEWORD' });
  };

  const handleKeyDown = (event) => {
    const { key, keyCode } = event;
    event.preventDefault();
    const checkWord = 65 <= keyCode && keyCode <= 90;
    if (checkWord) {
      const word = key.toUpperCase();
      if (guessWord.length < 6 && answer !== guessWord) return setGuessLetter(word);
    }
    if (key === 'Enter') return handleEnter();
    if (key === 'Backspace') return handleBackspace();
    if (guessWord === answer) return;
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return <Layout onEnter={handleEnter} onDelete={handleBackspace} onGuess={setGuessLetter} />;
}

export default App;
