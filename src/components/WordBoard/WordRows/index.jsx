import WordPiece from './WordPiece';
import * as S from './style';
function WordRows({ attempt, tried }) {

    return (
      <S.WordRows key={tried} data-tried={tried}>
        {attempt.map((cell) => (
          <WordPiece key={cell} tried={tried} cell={cell}  />
        ))}
      </S.WordRows>
    );
}

export default WordRows;
