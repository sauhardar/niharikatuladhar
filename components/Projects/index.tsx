import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Flex } from "components/Layout/Container/styles";
import { Container, Item } from "components/Posts/styles";
import { Data, ProjectsProps } from "lib/types";
import works from '../../public/works.json';

export const Projects = () => {
  const { data } = useSWR<Data>("/api/github", fetcher);

  return (
    <Container>
      <h3>Featured Work</h3>
        {works.map((item: {title: string, description: string}, id: number) => {
          return (
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="color-black"
              key={id}
              rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number">{`${id < 9 ? "0" : ""}${
                      id + 1
                    }`}</span>
                    <h4>{item.title}</h4>
                  </Flex>
                  <span>{item.description}</span>
                </Flex>
                <p>{item.description}</p>
              </Item>
            </a>
          );
        })}
    </Container>
  );
};
