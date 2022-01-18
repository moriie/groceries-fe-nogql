import React from 'react';
import styled from 'styled-components'

import PublicRoutes from './publicroutes'

function App() {
  return (
    <Wrapper>
      <PublicRoutes />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`