import * as S from './style'
function WordPiece({ tried, cell, spelling }) {
	const count = Number(`${tried}${cell}`);
	if(spelling[5]) 
	return <S.WordPiece data-count={count}>{spelling[count]}</S.WordPiece>;
}

export default WordPiece