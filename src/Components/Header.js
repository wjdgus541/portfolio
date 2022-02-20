import styled from "styled-components";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const Wrapper = styled.header`
  /* border-bottom: 2px solid white; */
  background-color: black;
  top: 0;
  left: 0;
  position: fixed;
  padding: 0 15px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const RightWrapper = styled.div`
  margin-right: 25px;
  display: flex;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
`;

const NavLink = styled.div`
  cursor: pointer;
  &:hover {
    color: #ffe062;
  }
`;

const UpBtn = styled(AiOutlineArrowUp)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`;

export default function Header({ device }) {
  const [YValue, setYValue] = useState();
  const [btnStatus, setBtnStatus] = useState(false);

  function handleFollow() {
    setYValue(window.pageYOffset);
    if (YValue > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }

  useEffect(() => {
    function watch() {
      window.addEventListener("scroll", handleFollow); //스크롤 변경시 YValue에 값 저장
    }
    watch();
    // 여러번 addEventListener를 사용할 때에는 꼭 removeEventListener를 해주어야 메모리 낭비가 없다.
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  function goScrollY(y) {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
  return (
    <Wrapper>
      <Logo
        onClick={() => {
          goScrollY(0);
        }}
      >
        JungHyeon
      </Logo>
      <RightWrapper>
        {(device === "mobile" || device === "tablet") && (
          <LinkWrapper>
            <NavLink
              onClick={() => {
                goScrollY(469);
              }}
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => {
                goScrollY(710);
              }}
            >
              Skills
            </NavLink>
            <NavLink
              onClick={() => {
                goScrollY(917);
              }}
            >
              Project
            </NavLink>
          </LinkWrapper>
        )}
        {device === "pc" && (
          <LinkWrapper>
            <NavLink
              onClick={() => {
                goScrollY(537);
              }}
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => {
                goScrollY(846);
              }}
            >
              Skills
            </NavLink>
            <NavLink
              onClick={() => {
                goScrollY(1076);
              }}
            >
              Project
            </NavLink>
          </LinkWrapper>
        )}
        {device === "bigPc" && (
          <LinkWrapper>
            <NavLink
              onClick={() => {
                goScrollY(321);
              }}
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => {
                goScrollY(625);
              }}
            >
              Skills
            </NavLink>
            <NavLink
              onClick={() => {
                goScrollY(871);
              }}
            >
              Project
            </NavLink>
          </LinkWrapper>
        )}
        {btnStatus && (
          <UpBtn
            onClick={() => {
              goScrollY(0);
            }}
          ></UpBtn>
        )}
        <a
          href="https://github.com/wjdgus541/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <HiOutlineExternalLink style={{ color: "gray" }} />
        </a>
      </RightWrapper>
    </Wrapper>
  );
}
