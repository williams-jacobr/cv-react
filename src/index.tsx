import {StrictMode} from 'react';
import {Container, createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = createRoot(document.getElementById('root') as Container);

function Root() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
