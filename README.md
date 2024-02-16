# sparta-fancafe
팬레터 만들기

## 필수 구현 사항

- 팬레터 CRUD 구현 (작성, 조회, 수정, 삭제)
- 아티스트별 게시물 조회 기능 구현 (Home - Read)
- 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
- 팬레터 상세 화면 구현 (Detail - Read)
- 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
- 상세화면에서 팬레터 삭제 구현 (Detail - Delete)

- [ ]  styled-components 를 이용하여 스타일링
    - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)
    - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- [ ]  전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정
- [ ]  styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
    - 아티스트 선택탭에 적용해 보세요
- [ ]  팬레터 등록 시 id는 uuid 라이브러리를 이용

- props-drilling 브랜치에서는 context나 redux 없이 useState만으로 상태관리해서 코드를 작성합니다.
- props-drilling 으로 코드를 모두 작성 및 커밋을 완료했으면 context 브랜치로 생성 및 이동합니다.
- context 브랜치에서는 props-drilling으로 작업한 코드에서 react context API를 사용하여 전역상태를 이용한 코드로 리팩터링합니다.
- context 브랜치에서 리팩터링 및 커밋을 완료했으면 redux 브랜치 생성 및 이동합니다.
- redux 브랜치에서는 context api로 전역상태를 관리한 코드를 모두 redux 라이브러리를 이용한 코드로 리팩터링합니다.
