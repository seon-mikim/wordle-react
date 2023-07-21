import WordRows from './WordRows';
import * as S from './style';

function WordBoard({ attempt }) {
  return (
    <S.WordBoard>
      {attempt.map((rowData) => (
        <WordRows key={rowData.attempt} tried={rowData.attempt} attempt={rowData.count} />
      ))}
    </S.WordBoard>
  );
}

export default WordBoard;
