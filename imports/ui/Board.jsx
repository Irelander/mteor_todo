import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

/**
 *   Table 구조에 대해서도 이해를 하고 쓰셔야합니다. 
 * 
 *   Tbody안에 Thead는 사용할수 없습니다. 
 *   잘못된 HTML 시멘틱 마크업으로 인해서 Material 라이브러리에서 오류가 발생합니다. 
 *   아래와 같이 변경합니다.
 */

export const Board = ({ no, title, category, dictionary, language, word }) => {
    return <TableRow>
        <TableCell>{no}</TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{dictionary}</TableCell>
        <TableCell>{language}</TableCell>
        <TableCell>{word}</TableCell>
    </TableRow>
};







{/* <TableRow>
<TableCell>{board.no}</TableCell>
<TableCell>{board.category}</TableCell>
<TableCell>{board.dictionary}</TableCell>
<TableCell>{board.language}</TableCell>
<TableCell>{board.word}</TableCell>
</TableRow> */}

