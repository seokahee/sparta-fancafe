import React, { useState } from "react";
import main from "image/main-img.png";
import head from "image/head.png";
import GlobalStyle from "GlobalStyle";
import AddForm from "components/AddForm";
import CommentList from "components/CommentList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home({ comments, setComments }) {
  const navigate = useNavigate();

  // 리스트 선택시 색상을 변경하기 위한 state
  const [selectedColor, setSelectedColor] = useState("");

  // 리스트 선택 이벤트, 클릭하면 selectedColor에 인자로 받은 color를 설정한다
  const memberClick = (member) => {
    setSelectedColor(member);
    navigate(`/${member}`);
  };
  const members = {
    jjanggu: "짱구",
    cheolsu: "철수",
    yuri: "유리",
    maenggu: "맹구",
    huni: "훈이",
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
          {Object.keys(members).map((item, idx) => {
            return (
              <List
                key={idx}
                onClick={() => {
                  memberClick(item);
                }}
                // 선택한 리스트를 찾기 위한 변수 selectedColor에 설정한 색상과 매개변수의 색상이 맞는지 확인
                selected={selectedColor === item}
                selectedMember={selectedColor}
                member={item}
              >
                {`${members[item]}`}
              </List>
            );
          })}
        </ul>
      </Members>

      <AddForm comments={comments} setComments={setComments} />
      {/* <CommentList comments={comments} setComments={setComments} /> */}
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
  border: 3px solid ${(props) => memberColor(props.member)};

  /* List에서 선택한 li가 맞다면 백그라운드 컬러를 바꿀것 */
  background-color: ${(props) =>
    props.selected ? memberColor(props.selectedMember) : "transparent"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => memberColor(props.member)};
  }
`;

const memberColor = function (members) {
  switch (members) {
    case "jjanggu":
      return "#ff242482";
    case "cheolsu":
      return "#03a9f496";
    case "yuri":
      return "#ffc0cbab";
    case "maenggu":
      return "#ffea32cc";
    case "huni":
      return "#8bc34ab0";
    default:
      return "떡잎마을 방위대";
  }
};
