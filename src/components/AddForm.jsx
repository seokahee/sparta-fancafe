import React, { useState } from "react";
import styled from "styled-components";

function AddForm() {
  // 댓글 등록 스테이트 만들기
  // const [comment, setComment] = useState(() => JSON.parse);

  return (
    <div>
      <InputContainer>
        <InputDiv>
          <label htmlFor="nickName">작성자</label>
          <input
            type="text"
            id="nickName"
            placeholder="닉네임을 입력해 주세요"
          />
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            cols="10"
            rows="5"
            placeholder="내용을 입력해 주세요"
          ></textarea>
          <SelectDiv>
            <h5>누구에게 보낼까요?</h5>
            <select name="" id="">
              <option value="">짱구</option>
              <option value="">철수</option>
              <option value="">유리</option>
              <option value="">맹구</option>
              <option value="">훈이</option>
            </select>
          </SelectDiv>

          <button>등록</button>
        </InputDiv>
      </InputContainer>
    </div>
  );
}

export default AddForm;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputDiv = styled.div`
  width: 25%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  font-size: 15px;

  input {
    padding: 10px;
    border: none;
    border-radius: 1rem;
    margin-bottom: 2%;
  }
  textarea {
    border: none;
    border-radius: 1rem;
    padding: 10px;
  }
  button {
    padding: 5px;
    background-color: #ffc10769;
    margin-bottom: 5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 17px;
    &:hover {
      background-color: #6464641e;
      cursor: pointer;
    }
  }
`;

const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  gap: 5%;

  select {
    width: 20%;
    padding: 5px;
    border-radius: 5px;
  }
`;
