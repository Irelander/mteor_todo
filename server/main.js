import { Meteor } from "meteor/meteor";
import { BoardCollection } from "/imports/api/BoardCollection";

/**
  
  insert 의 실제 객체들을 .. 왜 taskBoard로 쓰셨는지.. 모든 필드에 동일한 오브젝트가 연속적으로 들어갑니다. 
  DB 데이터 입력부터 잘못 되신거 같습니다.

  아래 수정된 코드를 참고하세요.
  저는 아래의 코드처럼 작성합니다. 

 */
// const insertBoard = (taskBoard) =>
//   BoardCollection.insert({
//     no: taskBoard,
//     title: taskBoard,
//     category: taskBoard,
//     dictionary: taskBoard,
//     language: taskBoard,
//     word: taskBoard,
//   });

//7번줄에 ({}) <--- 저렇게 코드를 정의를 하는게 맞는지 궁금합니다. 여기에 인설트할 데이터들이 들어가는게 맞는지?

const dummyDataSet = [
  {
    no: 1,
    title: "한국어란?",
    category: "사전지식",
    dictionary: "공용테스트사전",
    language: "한국어,영어",
    word: "2개",
  },
  {
    no: 2,
    title: "영어란?",
    category: "사전지식",
    dictionary: "공용테스트사전 ",
    language: "영어",
    word: "2개",
  },
  {
    no: 3,
    title: "중국어란?",
    category: "사전지식",
    dictionary: "공용테스트사전",
    language: "한국어",
    word: "2개",
  },
]

const initializeBoard = ()=>{
  
  for (let data of dummyDataSet){
    BoardCollection.insert(data);
  }

}

Meteor.startup(() => {
  
  // 초기 보드 데이터 생성
  BoardCollection.find().count() 
    ? null
    : initializeBoard()

});
