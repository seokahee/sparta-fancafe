import React, { useState } from "react";
import main from "image/main-img.png";
import head from "image/head.png";
import GlobalStyle from "GlobalStyle";
import styled from "styled-components";
import AddForm from "components/AddForm";

function Home() {
  const [members, setMembers] = useState([
    {
      id: 1,
      nickName: "치타",
      content: "짱구가 짱구했다",
      writedTo: "짱구",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
        ${now.getMonth() + 1}월
        ${now.getDate()}일
        (${now.getHours()} :
        ${now.getMinutes()})`;
        return today;
      })(),
    },
    {
      id: 2,
      nickName: "봉미선",
      content:
        "개미는 뚠뚠 오늘도 뚠뚠 열심히~ 일을 하~네 뚠뚠 개미는 뚠뚠 언제나 뚠뚠 열심히~ 일을 하~네",
      writedTo: "짱구",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
        ${now.getMonth() + 1}월
        ${now.getDate()}일
        (${now.getHours()} :
        ${now.getMinutes()})`;
        return today;
      })(),
    },
    {
      id: 1,
      nickName: "철수엄마",
      content: "철수는 학원에 가야지",
      writedTo: "철수",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
          ${now.getMonth() + 1}월
          ${now.getDate()}일
          (${now.getHours()} :
          ${now.getMinutes()})`;
        return today;
      })(),
    },
  ]);

  // 리스트 선택시 색상을 변경하기 위한 state
  const [selectedColor, setSelectedColor] = useState(null);

  // 리스트 선택 이벤트, 클릭하면 selectedColor에 인자로 받은 color를 설정한다
  const memberClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <HeadImg>
        <img src={head} alt="헤드 이미지" />
      </HeadImg>

      <MainImg>
        <img src={main} alt="메인 이미지" />
      </MainImg>

      <Members>
        <ul>
          {backgroundColor.map((color) => {
            return (
              <List
                key={color}
                onClick={() => {
                  memberClick(color);
                }}
                backgroundColor={color}
                // 선택한 리스트를 찾기 위한 변수 selectedColor에 설정한 색상과 매개변수의 색상이 맞는지 확인
                selected={selectedColor === color}
              >
                {getBackgroundColor(color)}
              </List>
            );
          })}
        </ul>
      </Members>
      <AddForm />

      {members.map((item) => {
        return (
          <ContentsDiv>
            <ul>
              <li>{item.nickName}</li>
              <li>{item.content}</li>
              <li>{item.regDate}</li>
            </ul>
          </ContentsDiv>
        );
      })}
      <GlobalStyle />
    </div>
  );
}

export default Home;

const HeadImg = styled.header`
  img {
    width: 40%;
    margin: 1% auto auto;
    display: flex;
  }
`;
const MainImg = styled.div`
  width: 0%;
  float: left;
  img {
    height: 70vh;
  }
`;

const Members = styled.nav`
  margin: 3% 0 2%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    font-size: 20px;
  }
`;

const List = styled.li`
  width: 10%;
  border-radius: 1rem;
  padding: 10px;
  text-align: center;
  border: 3px solid ${(props) => props.backgroundColor};

  /* List에서 선택한 li가 맞다면 백그라운드 컬러를 바꿀것 */
  background-color: ${(props) =>
    props.selected ? props.backgroundColor : "transparent"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
  }
`;

const backgroundColor = [
  "#ff242482",
  "#03a9f496",
  "#ffc0cbab",
  "#ffea32cc",
  "#8bc34ab0",
];

const getBackgroundColor = function (color) {
  switch (color) {
    case "#ff242482":
      return "짱구";
    case "#03a9f496":
      return "철수";
    case "#ffc0cbab":
      return "유리";
    case "#ffea32cc":
      return "맹구";
    case "#8bc34ab0":
      return "훈이";
    default:
      return "떡잎마을 방위대";
  }
};

const ContentsDiv = styled.div`
  display: flex;
  width: 22%;
  margin: 0 auto;

  ul {
    width: 100%;
    height: 10vh;
    padding: 2% 5%;
    margin: 3% 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    list-style: none;
    background-color: #ffffffba;
    border-radius: 1rem;
  }
  li {
    white-space: nowrap; /* 텍스트를 한 줄에만 표시 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 줄임표로 표시 */
    max-width: 300px;
  }
`;
