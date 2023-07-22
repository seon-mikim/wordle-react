import * as S from './style'
import KeyCell from "./KeyCell"
import { FirstKey, SecondKey, ThirdKey} from '../../../constants/KeyboardData'

function KeyRow() {
	return (
    <S.KeyBoard>
      <S.KeyRow>
        {FirstKey.map((key) => (
          <KeyCell key={key} keyCell={key} />
        ))}
      </S.KeyRow>
      <S.KeyRow>
        {SecondKey.map((key) => (
          <KeyCell key={key} keyCell={key} />
        ))}
      </S.KeyRow>
      <S.KeyRow>
        {ThirdKey.map((key) => (
          <KeyCell key={key} keyCell={key} />
        ))}
      </S.KeyRow>
    </S.KeyBoard>
  );
}

export default KeyRow