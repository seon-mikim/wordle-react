import * as S from './style'
import KeyCell from './KeyCell'
function KeyRow({ keyLetter}) {
  
  return (<S.KeyRow>
    {keyLetter.map((letter) => <KeyCell key={letter} letter={letter } />)}

  </S.KeyRow>
    // <S.KeyBoard>
    //   <S.KeyRow>
    //     {FirstKey.map((key) => (
    //       <KeyCell key={key} keyCell={key} />
    //     ))}
    //   </S.KeyRow>
    //   <S.KeyRow>
    //     {SecondKey.map((key) => (
    //       <KeyCell key={key} keyCell={key} />
    //     ))}
    //   </S.KeyRow>
    //   <S.KeyRow>
    //     {ThirdKey.map((key) => (
    //       <KeyCell key={key} keyCell={key} />
    //     ))}
    //   </S.KeyRow>
    // </S.KeyBoard>
  );
}

export default KeyRow