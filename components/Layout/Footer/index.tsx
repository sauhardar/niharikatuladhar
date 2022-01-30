import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "lib/types";
import ScrollToTop from "components/Layout/ScrollToTop";

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />
          <GridContainer>
            <FlexLinks>
              <Navigation href="/" text="Home" />
              <Navigation href="/about" text="About" />
              <Navigation href="/blog" text="Blog" />
              <Navigation href="/research" text="Research" />
              <Navigation href="/other-writing" text="Other Writing" />
            </FlexLinks>
            <FlexLinks>
              <ExternalLink href="https://twitter.com/KremlinRussia_E">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/neha-tuladhar-3223ab14b/">
                LinkedIn
              </ExternalLink>
              <ExternalLink href="mailto:niharika.tuladhar@gmail.com">
                Get in touch!
              </ExternalLink>
            </FlexLinks>
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
