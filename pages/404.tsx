import Link from 'next/link';
import React  from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

export default function Custom404() {
  return  (
    <Container>
      <h1>404 Error</h1>
      <p>Page not found! Let's go back back {<Link href='/'>home</Link>}</p>
    </Container>
  );
}
