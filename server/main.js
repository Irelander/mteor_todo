import { Meteor } from 'meteor/meteor';
import { BoardCollection } from '/imports/api/BoardCollection';

// const insertBoard = taskBoard => BoardCollection.insert({ title: taskBoard });
// const insertBoard = taskBoard => BoardCollection.insert({ text: taskBoard });

const insertBoard = taskBoard => BoardCollection.insert({ no: taskBoard, title: taskBoard, title: taskBoard, category: taskBoard, dictionary: taskBoard, dictionary: taskBoard, word: taskBoard });

Meteor.startup(() => {
  if (BoardCollection.find().count() === 0) {
    [
      {
        no: 1,
        title: '한국어란?',
        category: '사전지식',
        dictionary: '공용테스트사전',
        language: '한국어,영어',
        word: '2개',
      },
      {
        no: 2,
        title: '영어란?',
        category: '사전지식',
        dictionary: '공용테스트사전',
        language: '영어',
        word: '2개',
      },
      {
        no: 3,
        title: '중국어란?',
        category: '사전지식',
        dictionary: '공용테스트사전',
        language: '한국어',
        word: '2개',

      },
    ].forEach(insertBoard);
  }
});












// {
//   no: 1,
//   title: '한국어란?',
//   category: '사전지식',
//   dictionary: '공용테스트사전',
//   language: '한국어,영어',
//   word: '2개',
// },
// {
//   no: 2,
//   title: '영어란?',
//   category: '사전지식',
//   dictionary: '공용테스트사전',
//   language: '영어',
//   word: '2개',
// },
// {
//   no: 3,
//   title: '중국어란?',
//   category: '사전지식',
//   dictionary: '공용테스트사전',
//   language: '한국어',
//   word: '2개',

// },






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
