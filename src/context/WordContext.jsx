import { createContext, useReducer } from 'react';
import WordReducer from '../reducer/WordReducer';

export const WordContext = createContext();

const initialState = {
	answerWord: null,
	guessWord: '',
  currentRow: 0,
	completedRows: [],
	
};

function WordProvider({ children }) {
  const [state, dispatch] = useReducer(WordReducer, initialState);
  return <WordContext.Provider value={{ state, dispatch }}>{children}</WordContext.Provider>;
}

export default WordProvider;
