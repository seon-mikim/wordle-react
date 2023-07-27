import { KeyboardData } from '../../constants/KeyboardData';
import KeyRow from './KeyRow';
import * as S from './style'

function Keyboard() {
  return (
    <S.KeyBoard>
      {
        KeyboardData.map((row) =>
          <KeyRow key={row} keyLetter={row } />
       )
      }
    </S.KeyBoard>
  );
}

export default Keyboard;
