import styled from "styled-components";
import profileImg from "../images/profile.jpg";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperBigPc = styled(Wrapper)`
  flex-direction: row;
  margin-top: 40px;
`;

const Img = styled.img.attrs({ src: profileImg, alt: "프로필 사진" })`
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;

const ImgBigPc = styled(Img)`
  border-radius: 5px;
  width: 170px;
  height: 170px;
`;

const ImgBorder = styled.div`
  background: rgba(239, 239, 239, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const ImgBorderBigPc = styled(ImgBorder)`
  width: 180px;
  height: 180px;
  border-radius: 5px;
`;

const Intro = styled.div`
  background-color: rgba(189, 195, 199, 0.6);
  width: 390px;
  height: 200px;
  margin-top: 30px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const IntroPc = styled(Intro)`
  width: 700px;
  height: 230px;
  margin-top: 50px;
`;

const IntroBigPc = styled(Intro)`
  width: 700px;
  height: 180px;
  margin-top: 0px;
  margin-left: 30px;
`;

const IntroText = styled.p`
  font-size: 13px;
  word-break: keep-all;
`;

const IntroTextPc = styled(IntroText)`
  font-size: 16px;
`;

export default function Profile({ device }) {
  return (
    <>
      <Wrapper>
        {(device === "mobile" || device === "tablet") && (
          <>
            <ImgBorder>
              <Img />
            </ImgBorder>
            <Intro>
              <IntroText>
                신입 프론트엔드 개발자 김정현입니다.
                <br />
                만들기를 좋아한다는 이유로 개발을 시작해서 만들고자 의도한
                기능이 제대로 동작하는것에 재미를 느껴 지금까지 공부하고
                있습니다.
                <br />
                코드를 어떻게 써야 읽기 쉽고 가벼운 웹페이지를 만들 수 있을지
                고민합니다.
              </IntroText>
            </Intro>
          </>
        )}
        {device === "pc" && (
          <>
            <ImgBorder>
              <Img />
            </ImgBorder>
            <IntroPc>
              <IntroTextPc>
                신입 프론트엔드 개발자 김정현입니다.
                <br />
                만들기를 좋아한다는 이유로 개발을 시작해서 만들고자 의도한
                기능이 제대로 동작하는것에 재미를 느껴 지금까지 공부하고
                있습니다.
                <br />
                코드를 어떻게 써야 읽기 쉽고 가벼운 웹페이지를 만들 수 있을지
                고민합니다.
              </IntroTextPc>
            </IntroPc>
          </>
        )}
      </Wrapper>

      {device === "bigPc" && (
        <WrapperBigPc>
          <ImgBorderBigPc>
            <ImgBigPc />
          </ImgBorderBigPc>
          <IntroBigPc>
            <IntroTextPc>
              신입 프론트엔드 개발자 김정현입니다.
              <br />
              만들기를 좋아한다는 이유로 개발을 시작해서 만들고자 의도한 기능이
              제대로 동작하는것에 재미를 느껴 지금까지 공부하고 있습니다.
              <br />
              코드를 어떻게 써야 읽기 쉽고 가벼운 웹페이지를 만들 수 있을지
              고민합니다.
            </IntroTextPc>
          </IntroBigPc>
        </WrapperBigPc>
      )}
    </>
  );
}
