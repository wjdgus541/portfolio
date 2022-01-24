import styled from "styled-components";
import HTMLImg from "../images/html.png";
import CSSImg from "../images/css.png";
import JSImg from "../images/js.png";
import ReactImg from "../images/react.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(189, 195, 199, 0.6);
  width: 390px;
  height: 160px;
  border-radius: 5px;
  margin-top: 30px;
`;

const SkillBox = styled.div`
  width: 80%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Icon = styled.img`
  width: 55px;
  height: 50px;
  margin: auto;
  :hover {
    transform: translateY(-4px);
  }
`;

const JsIcon = styled.img`
  width: 39px;
  height: 50px;
  margin: auto;
  :hover {
    transform: translateY(-4px);
  }
`;

const ReactIcon = styled.img`
  width: 40px;
  margin: auto;
  :hover {
    transform: translateY(-4px);
  }
`;

export default function Skills() {
  return (
    <Wrapper>
      <h2>Skills</h2>
      <SkillBox>
        <Icon src={HTMLImg} />
        <Icon src={CSSImg} />
        <JsIcon src={JSImg} />
        <ReactIcon src={ReactImg} />
      </SkillBox>
    </Wrapper>
  );
}
