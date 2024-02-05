import React, { useState } from "react";
import main from "image/main-img.png";
import head from "image/head.png";
import GlobalStyle from "GlobalStyle";
import AddForm from "components/AddForm";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home({ comments, setComments }) {
  // url에 pathname을 가져옴
  const { pathname } = useLocation();

  const navigate = useNavigate();

  // 멤버이름 선택시 색상을 변경하기 위한 state에 / 이후 이름을 기본값으로 넣어줌 ex.jjanggu
  const [selectedColor, setSelectedColor] = useState(pathname.slice(1));

  // 스위치 문을 통해 키 값에 맞는 색상을 반환하고, 클릭 이벤트 navigate를 사용하기 위한 객체
  const members = {
    jjanggu: "짱구",
    cheolsu: "철수",
    yuri: "유리",
    maenggu: "맹구",
    huni: "훈이",
  };

  // 멤버이름 선택 이벤트
  const memberClick = (member) => {
    // selectedColor에 클릭한 멤버객체가 들어감 jjanggu: "짱구",
    setSelectedColor(member);
    navigate(`/${member}`);
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
                // selected는 선택한 멤버이름과(item)  selectedColor state에 저장된 멤버 이름이 맞는지 확인
                selected={selectedColor === item}
                $selectedMember={selectedColor}
                // $ : 스타일드컴포넌트에서만 사용하는 변수를 의미함
                // 선택한 멤버 이름을 selectedMember에 넣어준다
                member={item}
              >
                {`${members[item]}`}
              </List>
            );
          })}
        </ul>
      </Members>

      <AddForm comments={comments} setComments={setComments} />
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

  /* 선택한 멤버 이름이 맞을 경우 백그라운드 컬러를 바꾸고 아니면 투명으로 */
  background-color: ${(props) =>
    props.selected ? memberColor(props.$selectedMember) : "transparent"};

  &:hover {
    cursor: pointer;
    // 멤버 객체 키에 맞는 색상을 반환
    background-color: ${(props) => memberColor(props.member)};
  }
`;
// 멤버 객체 키 값에 맞는 색상을 반환
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
