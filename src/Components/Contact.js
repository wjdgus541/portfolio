import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(189, 195, 199, 0.6);
  width: 390px;
  height: 220px;
  border-radius: 5px;
  margin-top: 30px;
`;

const Title = styled.h2`
  margin: 0;
`;

const MailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const IconMail = styled(FiMail)`
  font-size: 30px;
  margin-bottom: 5px;
  transform-origin: center center;
  color: #ffe062;
  :hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const IconsTitle = styled.span`
  margin-bottom: 8px;
  color: #ffe062;
  font-weight: 600;
`;

const LinkWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :first-child {
    margin-right: 10px;
  }
`;

const IconNotion = styled(SiNotion)`
  font-size: 30px;
  :hover {
    transform: scale(1.3);
    color: #ffe062;
  }
`;

const IconGithub = styled(FaGithubSquare)`
  font-size: 30px;
  :hover {
    transform: scale(1.3);
    color: #ffe062;
  }
`;

export default function Contact() {
  const copyMail = () => {
    const email = "nnn5425@naver.com";
    try {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("메일 주소가 클립보드에 복사되었습니다.");
    } catch {
      alert("클립보드 복사에 실패했습니다.");
    }
  };
  return (
    <Wrapper>
      <Title>Contact</Title>
      <MailBox>
        <IconMail onClick={copyMail} />
        <span>nnn5425@naver.com</span>
      </MailBox>
      <LinkWrapper>
        <LinkBox>
          <IconsTitle>Notion</IconsTitle>
          <a
            href="https://www.notion.so/Pin-s-TIL-5a5a5d8b2a644d92b1d37812026eb21c"
            target="_blank"
            rel="noreferrer"
          >
            <IconNotion />
          </a>
        </LinkBox>
        <LinkBox>
          <IconsTitle>GitHub</IconsTitle>
          <a
            href="https://github.com/wjdgus541"
            target="_blank"
            rel="noreferrer"
          >
            <IconGithub />
          </a>
        </LinkBox>
      </LinkWrapper>
    </Wrapper>
  );
}
