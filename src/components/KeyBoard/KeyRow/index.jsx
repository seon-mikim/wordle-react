import * as S from './style';
import KeyCell from './KeyCell';
function KeyRow({ keyLetter, onDelete, onEnter, onGuess }) {
  return (
    <S.KeyRow>
      {keyLetter.map((letter) => (
        <KeyCell key={letter} letter={letter} onDelete={onDelete} onEnter={onEnter} onGuess={onGuess} />
      ))}
    </S.KeyRow>
  );
}

export default KeyRow;
