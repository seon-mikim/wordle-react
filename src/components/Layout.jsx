import {  useState } from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import Wordboard from './Wordboard';
import * as S from './style';
import { AttemptData } from '../constants/TriedBoardData';

function Layout() {
  const [attempt, setAttempt] = useState(AttemptData);
	
  return (
    <S.Layout>
      <Header />
      <Wordboard attempt={attempt} />
      <Keyboard />
    </S.Layout>
  );
}

export default Layout;
