import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Contents from "./Components/Contents";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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

  let device = "";
  const isTablet = useMediaQuery({
    query: "(min-width:480px) and (max-width:767px)",
  });
  const isPc = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isBigPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  if (isTablet) device = "tablet";
  else if (isPc) device = "pc";
  else if (isBigPc) device = "bigPc";
  else device = "mobile";
  console.log(device);

  return (
    <Wrapper>
      <Profile device={device} />
      <Contact device={device} />
      <Skills device={device} />
      {contents.map((item) => (
        <Contents content={item} device={device} />
      ))}
      <Footer />
    </Wrapper>
  );
}

export default App;
