import React, { useState } from "react";
import main from "image/main-img.png";
import head from "image/head.png";
import GlobalStyle from "GlobalStyle";
import styled from "styled-components";
import AddForm from "components/AddForm";
import CommentList from "components/CommentList";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

function Home() {
  const [comments, setComments] = useState([
    {
      id: uuid(),
      nickName: "채송화",
      profileImg:
        "https://ncache3.ilbe.com/files/attach/new/20220930/14357299/9823166558/11441948187/1d3f10b6fc715fbf540e4b22bdd574c2_11441948199.jpg",
      content:
        "개미는 뚠뚠 오늘도 뚠뚠 열심히~ 일을 하~네 뚠뚠 개미는 뚠뚠 언제나 뚠뚠 열심히~ 일을 하~네",
      writedTo: "짱구",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
        ${now.getMonth() + 1}월
        ${now.getDate()}일
        (${now.getHours()}시
        ${now.getMinutes()}분)`;
        return today;
      })(),
    },
    {
      id: uuid(),
      nickName: "봉미선",
      profileImg:
        "https://i.namu.wiki/i/JW2QBVsoDYd01-PdVQ6Vo_If87Eo9wjc6gitnvDHWJDtjYBkBv5qlc3FqinjqeOaGAPaVwx5w_EZbf2bGmpT4g.webp",
      content:
        "천방지축 어리둥절 빙글빙글 돌아가는 짱구의 하루~ 우리의 짱구는 정말 못말려 (짱구야~)",
      writedTo: "짱구",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
        ${now.getMonth() + 1}월
        ${now.getDate()}일
        (${now.getHours()}시
        ${now.getMinutes()}분)`;
        return today;
      })(),
    },
    {
      id: uuid(),
      nickName: "철수엄마",
      profileImg:
        "https://i.namu.wiki/i/XVdNc1huwiU5ePIkSrUdN-pIdIktHn1W9TvH7s0la0lhMCY9s7E3ketyLQ0mstmmitNbArg4unAnSYgHaTwNqw.webp",
      content: "철수는 학원에 가야지",
      writedTo: "철수",
      regDate: (() => {
        const now = new Date();
        const today = `${now.getFullYear()}년
          ${now.getMonth() + 1}월
          ${now.getDate()}일
          (${now.getHours()}시
          ${now.getMinutes()}분)`;
        return today;
      })(),
    },
  ]);

  const navigate = useNavigate();

  // 리스트 선택시 색상을 변경하기 위한 state
  const [selectedColor, setSelectedColor] = useState(null);

  // 리스트 선택 이벤트, 클릭하면 selectedColor에 인자로 받은 color를 설정한다
  const memberClick = (color) => {
    setSelectedColor(color);
    // 클릭하면 색상도 변하고, 해당 페이지로 이동해야하는데 맵 키가 컬러야 그럼 빨강 => 짱구로 이동시켜야하는데 페이지 한글로 가도 되나?
    navigate("/짱구");
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
          {bgcolor.map((color) => {
            return (
              <List
                key={color}
                onClick={() => {
                  memberClick(color);
                }}
                bgcolor={color}
                // 선택한 리스트를 찾기 위한 변수 selectedColor에 설정한 색상과 매개변수의 색상이 맞는지 확인
                selected={selectedColor === color}
              >
                {getbgcolor(color)}
              </List>
            );
          })}
        </ul>
      </Members>

      <AddForm comments={comments} setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
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
  border: 3px solid ${(props) => props.bgcolor};

  /* List에서 선택한 li가 맞다면 백그라운드 컬러를 바꿀것 */
  background-color: ${(props) =>
    props.selected ? props.bgcolor : "transparent"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.bgcolor};
  }
`;

const bgcolor = [
  "#ff242482",
  "#03a9f496",
  "#ffc0cbab",
  "#ffea32cc",
  "#8bc34ab0",
];

const getbgcolor = function (color) {
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
