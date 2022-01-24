import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ImgLink = styled.a`
  width: 390px;
  height: 260px;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 5px;
  background-color: rgba(241, 196, 15, 0);
  position: absolute;
  :hover {
    background-color: rgba(241, 196, 15, 0.5);
    p {
      display: block;
    }
  }
  p {
    display: none;
  }
`;

const Img = styled.img`
  margin-top: 30px;
  width: 390px;
  height: 260px;
  border-radius: 5px;
  z-index: 1;
  position: relative;
`;

const Explanation = styled.p`
  font-size: 15px;
`;

const ContentsWrapper = styled.div`
  background-color: rgba(189, 195, 199, 0.5);
  width: 390px;
  border-radius: 5px;
  padding: 30px 10px;
  margin-top: 10px;
`;

const StudyPointList = styled.ul`
  list-style: none;
`;

const StudyPointItem = styled.li`
  font-size: 14px;
`;

const GithubLink = styled.a`
  background: rgba(255, 221, 89, 1);
  background: linear-gradient(
    0deg,
    rgba(255, 211, 42, 1) 0%,
    rgba(255, 221, 89, 1) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  width: 160px;
  height: 30px;
  margin: auto;
  margin-top: 30px;
  justify-content: center;
  :hover {
    box-shadow: -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

const GithubIcon = styled(FaGithub)`
  margin-right: 6px;
`;

const GithubText = styled.span`
  font-size: 15px;
`;

export default function Contents({ content }) {
  const { img, title, explan, githubURL, siteURL, point } = content;

  return (
    <Wrapper>
      <ImgLink href={siteURL} target="_blank" rel="noopener noreferrer">
        <p>go to Site</p>
      </ImgLink>
      <Img src={require(`../images/${img}.png`)} alt={title} />
      <ContentsWrapper>
        <h3>{title}</h3>
        <Explanation>{explan}</Explanation>
        <StudyPointList>
          <span>Study Point</span>
          {point.map((item) => (
            <StudyPointItem>- {item}</StudyPointItem>
          ))}
        </StudyPointList>
        <GithubLink href={githubURL} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          <GithubText>Github 바로가기</GithubText>
        </GithubLink>
      </ContentsWrapper>
    </Wrapper>
  );
}
