import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
import { Projects } from "components/Projects";
import { Posts } from "components/Posts";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/Niharika.jpg";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Niharika Tuladhar</h1>
          <h2>B.A. in Political Science, Film & Rhetoric. Minor in Philosophy.</h2>
          <p>
            Senior at Bates College in Lewiston, Maine. Passionate about international security,
            women empowerment, and my German Shepard Bella 👑. Most of the time, you can find me
            catching up on the latest Harry Potter fan-fic, binging kdrama, or swimming. Part-time
            food and movie critic –&nbsp;
            {"while you're here "}
            <Link href="/about">
              <a>learn more about me.</a>
            </Link>
          </p>
        </ContentWrapper>
        <RoundImage
          src={ProfilePicture}
          alt="Picture of Niharika"
          width="150px"
          height="150px"
        />
      </HeroFlex>
      <Projects />
      <Posts title="Featured Stories" />
      <Timeline />
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
