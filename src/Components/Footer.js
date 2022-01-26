import styled from "styled-components";

const Wrapper = styled.footer`
  margin-top: 60px;
  height: 100px;
  width: 100%;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 13px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Text>⨳해당 사이트는 포트폴리오의 목적으로 만들어졌습니다.</Text>
    </Wrapper>
  );
}
