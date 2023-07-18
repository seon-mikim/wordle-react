import WordPiece from './WordPiece/index';
import * as S from './style';
function WordRows({ attempt, tried, spelling }) {

    return (
      <S.WordRows key={tried} data-tried={tried}>
        {attempt.map((cell, index) => (
          <WordPiece key={cell[index]} tried={tried} cell={cell} spelling={spelling} />
        ))}
      </S.WordRows>
    );
}

export default WordRows;
