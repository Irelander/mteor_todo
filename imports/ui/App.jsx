import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { BoardCollection } from '/imports/api/BoardCollection';
import { Board } from './Board';

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


export const App = () => {
  const tasks = useTracker(() => BoardCollection.find({}).fetch());



  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Table>
        <TableBody>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell>사전이름</TableCell>
              <TableCell>언어</TableCell>
              <TableCell>단어갯수</TableCell>
            </TableRow>
          </TableHead>
          {/* {tasks.map(board => (<Board key={board._no} board={board} />))} */}
          {tasks.map(board => (<Board key={board._no} no={board._no} board={board} category={board.category} dictionary={board.dictionary} language={board.language} word={board.word} />))}

        </TableBody>
      </Table>

    </div>
    // {board.map(board => (<Board key={board._no} no={board._no} board={board} category={board.category} dictionary={board.dictionary} language={board.language} word={board.word} />))}

  );
};

//key작업에 속성 을 추가하는 것을 잊지 마십시오.
//그렇지 않으면 React가 형제와 동일한 유형의 많은 구성 요소를 볼 수 있기 때문에 경고를 내 보냅니다. 
//키가 없으면 React가 필요한 경우 그중 하나를 다시 렌더링하기가 어렵습니다.
// const board = [
//   {
//     no: 1,
//     title: '한국어란?',
//     category: '사전지식',
//     dictionary: '공용테스트사전',
//     language: '한국어,영어',
//     word: '2개',
//   },
//   {
//     no: 2,
//     title: '영어란?',
//     category: '사전지식',
//     dictionary: '공용테스트사전',
//     language: '영어',
//     word: '2개',
//   },
//   {
//     no: 3,
//     title: '중국어란?',
//     category: '사전지식',
//     dictionary: '공용테스트사전',
//     language: '한국어',
//     word: '2개',

//   },
// ];