import Header from './Header';
import Keyboard from './Keyboard';
import WordBoard from './WordBoard';
import * as S from './style';
import { AttemptData } from '../constants/TriedBoardData';

function Layout() {
  
	
  return (
    <S.Layout>
      <Header />
      <WordBoard attempt={AttemptData} />
      <Keyboard />
    </S.Layout>
  );
}

export default Layout;
