import { KeyboardData } from '../../constants/KeyboardData';
import KeyRow from './KeyRow';
import * as S from './style'

function Keyboard({ onDelete, onEnter, onGuess }) {
  return (
    <S.KeyBoard>
      {KeyboardData.map((row) => (
        <KeyRow key={row} keyLetter={row} onDelete={onDelete} onEnter={onEnter} onGuess={onGuess} />
      ))}
    </S.KeyBoard>
  );
}

export default Keyboard;
