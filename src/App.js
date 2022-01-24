import styled from "styled-components";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Contents from "./Components/Contents";
import Contact from "./Components/Contact";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  const contents = [
    {
      img: "reactpress",
      title: "Reactpress",
      explan:
        '정적 웹페이지 생성기인 "vuepress"를 react 라이브러리를 사용해 따라 만들어 보았습니다.',
      githubURL: "https://github.com/wjdgus541/reactpress",
      siteURL: "https://wjdgus541.github.io/reactpress/",
      point: ["md파일을 HTML로 렌더링하기", "검색결과 미리보기", "Recoil"],
    },
    {
      img: "cryptotracker",
      title: "Cryptotracker",
      explan:
        "NomadCoder 강의를 들으며 만든 프로젝트를 조금 더 발전시킨 코인 시세 확인 페이지입니다.",
      githubURL: "https://github.com/wjdgus541/cryptotracker",
      siteURL: "https://wjdgus541.github.io/cryptotracker/#/",
      point: ["API 사용하기", "다크 모드", "차트 그리기"],
    },
    {
      img: "jstodo",
      title: "To-Do",
      explan:
        "NomadCoder 강의를 들으며 만든 프로젝트를 조금 더 발전시킨 ToDo List입니다.",
      githubURL: "https://github.com/wjdgus541/MyToDoPage.github.io",
      siteURL: "https://wjdgus541.github.io/MyToDoPage.github.io/",
      point: ["API 사용하기", "LocalStorage 이용하기"],
    },
  ];
  return (
    <Wrapper>
      <Profile />
      <Contact />
      <Skills />
      {contents.map((item) => (
        <Contents content={item} />
      ))}
    </Wrapper>
  );
}

export default App;
