import Header from './Header';
import Keyboard from './Keyboard';
import Wordboard from './Wordboard';
import * as S from './style';
import { AttemptData } from '../constants/TriedBoardData';

function Layout() {
  
	
  return (
    <S.Layout>
      <Header />
      <Wordboard attempt={AttemptData} />
      <Keyboard />
    </S.Layout>
  );
}

export default Layout;
