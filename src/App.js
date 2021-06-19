import React from 'react';

import Header from './components/Header';
import Acquisitions from './pages/Acquisitions';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Acquisitions />
    </>
  );
}

export default App;
