import React from 'react';
import GlobalStyle from './styles/global';
import BasicInput from './components/BasicInput';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <>
    {/* <h1>Olá na parada!</h1>
    <BasicInput /> */}

    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    <GlobalStyle />
  </>

);

export default App;
