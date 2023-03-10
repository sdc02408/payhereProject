# 프로젝트명 
[페이히어] 양찬석 프론트엔드 엔지니어 과제

## 프로젝트 설명
- react, npm, Github API를 이용하여 구현하였습니다.
- 등록된 레파지토리 정보 저장은 redux와 localstorage를 이용하였습니다.
- 다른 페이지로 이동하지 않고 한 페이지에서 볼 수 있도록 구현하였습니다.

## 프로젝트 실행 
- git에서 https://github.com/sdc02408/payhere 다운로드 
- npm install로 설치
- npm run start로(localhost:3000) 실행
- 메일로 전달받은 token 값 입력(SearchComponent.jsx 파일 token 자리)

## 구현하지 못한 기능
- 등록된 레파지토리가 3개인 경우 페이지네이션의 마지막 페이지에서 마지막 레파지토리 삭제시 
  리스트를 불러오지 못하였습니다.
- 코드 재사용성 및 컴포넌트화, 렌더링 최적화를 하지 못해 아쉽습니다. 추후 수정 가능하다면 (api호출, 로딩중UI, 컴포넌트 분리)을 수정하고 싶습니다.
 
## 프로젝트 화면

메인화면

<img src="https://user-images.githubusercontent.com/46953352/217288434-53e68b2f-9bda-4497-b1b7-72689079c932.png" width="1000" height="400"/>

검색화면, 중복확인 화면

![image](https://user-images.githubusercontent.com/46953352/217288879-321e64e8-d10c-439d-815f-51db7e64af56.png)

검색 후 등록된 레파지토리 이슈리스트 페이지, 등록된 레파지토리 삭제 페이지

![image](https://user-images.githubusercontent.com/46953352/217289336-4021f0dd-0da4-4214-90d3-89083278a1d7.png)





