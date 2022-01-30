import React from 'react';
import styled from 'styled-components';
import Container from '../components/Layout/Container';

const ResearchTitle = styled.h1`
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
      <h1>Resarch</h1>
      <ResearchTitle><span>01</span>Veto power among Permanent Members of the United Nations Security Council: How Increased Client Countries Legitimize Hegemony ... ?</ResearchTitle>
      <h4>Published in ...</h4>
      <Paragraph>
        About Veto power among the super nations. I can only hope our leader's desire to keep the 
        U.S. out of the World Cup is met with the same enthusiasm and determination as his team 
        have expressed on Wednesday when they presented him with a trophy.
        <br />
        With Brazil so far, it may seem unbelievable that the world's most famous soccer player, 
        Brazil's President Dilma Rousseff, could be asked why no one except the U.S. is playing 
        for the world's top team at this time of year...
        <br />
        "What the world needs is football," said Rousseff when the U.S. and Argentina's national 
        team traveled to Rio de Janeiro on Wednesday to face Mexico. "Nobody comes up with a 
        different answer. I've always said I think we have four world champions so it would be a 
        bit of a surprise to them if that number dwindles slightly in Rio."
        <br />
        Not only are the numbers going up but, to date, four of the biggest teams from the United 
        States (New England Patriots, San Francisco 49ers, Dallas Cowboys) have played their 
        international football games. Two others are playing in Europe and one in Korea. Brazil's 
        greatest player, Mario Balotelli, will become the U.S. starter for the 2012 FIFA World Cup 
        due to a blood clot he suffered while playing for New England in 2008.
        For the United States, it's the next step in the search for success.
      </Paragraph>
      <ResearchTitle><span>02</span>TBA..</ResearchTitle>
      <Paragraph>
        in progress!
      </Paragraph>
    </div>
  </Container>;
}
