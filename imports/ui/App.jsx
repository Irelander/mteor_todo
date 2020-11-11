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
        <TableHead>
          <TableRow>
            <TableCell> 번호</TableCell>
            <TableCell> 카테고리</TableCell>
            <TableCell> 사전이름</TableCell>
            <TableCell> 언어</TableCell>
            <TableCell> 단어수</TableCell>
            <TableCell> 등록일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 

            아래 코드에서 서버쪽 내용과 마찬가지로 데이터 스키마에 대한 잘못된 인지로 인해서 넘겨줘야 하는 키들이 잘못되었습니다.
            기존에 각 필드들에 실제 값들이 아닌 객체가 들어있었으므로 당연히 key 에 넣어줬던 값은 유니크속성이 되지 않아 ( [object object] 로 toString 되어 ) 키가 유니크 하지 않다고 뜹니다.
            
            1. 일반적으로 Mongo 컬렉션 데이터를 쓸땐 유니크키로 컬렉션의 _id 를 넣어줍니다. 
            
            2. Board의 props 로 여러가지를 넘기도록 작성하셨는데 구조분해할당 문법을 통해서 풀어서 넣어준뒤 사용하면 좋습니다.

          */}
          {
            tasks.map(board => (<Board key={board._id} {...board}/>))
          }
        </TableBody>
      </Table>
    </div>
  );
};

