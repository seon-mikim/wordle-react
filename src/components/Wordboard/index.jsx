import { useEffect, useState } from 'react';
import WordRows from './WordRows';
import * as S from './style';
function Wordboard({ attempt }) {
  const [spelling, setSpelling] = useState('');
  const checkSpelling = /[a-z,A-Z]/g;

  const moveNextLine = () => {
    console.log('여긴');
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (checkSpelling.test(event.key) && event.key !== 'Enter') {
        const word = (spelling + event.key).toUpperCase();
        if (word.length < 6) setSpelling(word);
      } else if (event.key === 'Enter') moveNextLine();
    };

    window.addEventListener('keypress', handleKeyDown);
    return () => window.removeEventListener('keypress', handleKeyDown);
  }, [spelling]);

  return (
    <S.WordBoard>
      {attempt.map((rowData) => (
        <WordRows key={rowData.attempt} tried={rowData.attempt} attempt={rowData.count} spelling={spelling} />
      ))}
    </S.WordBoard>
  );
}

export default Wordboard;
