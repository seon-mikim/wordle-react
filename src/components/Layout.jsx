import Header from './Header';
import Keyboard from './Keyboard';
import WordBoard from './WordBoard';
import * as S from './style';
import { AttemptData } from '../constants/TriedBoardData';

function Layout({ onEnter, onDelete, onGuess}) {
  return (
    <S.Layout>
      <Header />
      <WordBoard attempt={AttemptData} />
      <Keyboard onDelete={onDelete} onEnter={onEnter} onGuess={onGuess} />
    </S.Layout>
  );
}

export default Layout;
