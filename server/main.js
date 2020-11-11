import { Meteor } from 'meteor/meteor';
import { BoardCollection } from '/imports/api/BoardCollection';

const insertBoard = taskBoard => BoardCollection.insert({ no: taskBoard, title: taskBoard, category: taskBoard, dictionary: taskBoard, language: taskBoard, word: taskBoard });
// const insertBoard = taskBoard => BoardCollection.insert({ no: taskBoard }, { title: taskBoard }, { category: taskBoard }, { dictionary: taskBoard }, { language: taskBoard }, { dictionary: taskBoard }, { word: taskBoard });

//7번줄에 ({}) <--- 저렇게 코드를 정의를 하는게 맞는지 궁금합니다. 여기에 인설트할 데이터들이 들어가는게 맞는지?
Meteor.startup(() => {
  if (BoardCollection.find().count() === 0) {
    [
      ({
        no: 1,
        title: '한국어란?',
        category: '사전지식',
        dictionary: '공용테스트사전',
        language: '한국어,영어',
        word: '2개',
      }),
      ({
        no: 2,
        title: '영어란?',
        category: '사전지식',
        dictionary: '공용테스트사전',
        language: '영어',
        word: '2개',
      }),
      ({
        no: 3,
        title: '중국어란?',
        category: '사전지식',
        dictionary: '공용테스트사전',
        language: '한국어',
        word: '2개',

      }),
    ].forEach(insertBoard);
  }
});
//오류내용
//현재 데이터가 들어오지않고 있습니다.mains.js에서({}) 파라미터 안에 7번처럼 데이터들을 넣는게 맞는지 궁금합니다.
//todo 보면서 데이터들만 추가를 했는데 이렇게 디비 연결해서 하려고 하니 데이터들은 들어가지 않았습니다. 
//그전에 제가 그냥 정의를 해줬을 때는 들어갔는데 지금은 어디가 문제인지 ,,, 도통 모르겠습니다 ㅜㅜ

// modules.js?hash=45011a90ddcd6b8d336c71c26b168dce3da7e685:1359 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
//     in Board (created by App)
//     in App

// modules.js?hash=45011a90ddcd6b8d336c71c26b168dce3da7e685:1359 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
//     in Board (created by App)
//     in App

// modules.js?hash=45011a90ddcd6b8d336c71c26b168dce3da7e685:4402 Warning: validateDOMNesting(...): <table> cannot appear as a child of <tbody>.
//     in table (created by ForwardRef(Table))
//     in ForwardRef(Table) (created by WithStyles(ForwardRef(Table)))
//     in WithStyles(ForwardRef(Table)) (created by Board)
//     in Board (created by App)
//     in tbody (created by ForwardRef(TableBody))
//     in ForwardRef(TableBody) (created by WithStyles(ForwardRef(TableBody)))
//     in WithStyles(ForwardRef(TableBody)) (created by App)
//     in table (created by ForwardRef(Table))
//     in ForwardRef(Table) (created by WithStyles(ForwardRef(Table)))
//     in WithStyles(ForwardRef(Table)) (created by App)
//     in div (created by App)
//     in App













// function insertLink({ title, url }) {
//   LinksCollection.insert({title, url, createdAt: new Date()});
// }

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (LinksCollection.find().count() === 0) {
//     insertLink({
//       title: 'Do the Tutorial',
//       url: 'https://www.meteor.com/tutorials/react/creating-an-app'
//     });

//     insertLink({
//       title: 'Follow the Guide',
//       url: 'http://guide.meteor.com'
//     });

//     insertLink({
//       title: 'Read the Docs',
//       url: 'https://docs.meteor.com'
//     });

//     insertLink({
//       title: 'Discussions',
//       url: 'https://forums.meteor.com'
//     });
//   }
// });
