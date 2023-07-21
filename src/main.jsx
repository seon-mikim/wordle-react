import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import WordProvider from './context/WordContext.jsx';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WordProvider>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </WordProvider>
);
