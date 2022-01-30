import React from 'react';
import styled from 'styled-components';
import Container from '../components/Layout/Container';

const PostTitle = styled.h1`
  font-size: 2rem;

  span {
    color: gray;
    margin-right: 1rem;
  }
`;

export const Paragraph = styled.p`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;

export default function Research() {
  return <Container>
    <div>
      <h1>Other Writing</h1>
      <PostTitle><span>01</span>My thoughts on how amazing Vladimir Putin is</PostTitle>
      <Paragraph>I thought this would be a cool place to share my thoughts..</Paragraph>
    </div>
  </Container>;
}
