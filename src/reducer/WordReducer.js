function WordReducer(state, action) {
	switch (action.type) {
		case 'ANSWERWORD': 
			return {...state, answerWord: action.answer }
    case 'GUESSWORD':
      return { ...state, guessWord: state.guessWord + action.guessWord };
    case 'CURRENTROW':
			return { ...state, currentRow: state.currentRow+1 };
		case 'COMPLETEDROWS':
			return { ...state, completedRows: [...Array(state.currentRow).keys()] };
		case 'REMOVEWORD':
			return { ...state, guessWord: state.guessWord.slice(0, -1) }
		case 'RESETWORD':
			return {...state, guessWord: ''}
		default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default WordReducer;
