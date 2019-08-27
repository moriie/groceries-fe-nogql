import React from 'react';
import './App.css';
import styled from 'styled-components'

import Routes from './routes'

function App() {
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`