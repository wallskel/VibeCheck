import React from 'react';
import DateTitle from './DateTitle';
import GetMoodGhost from './GetMoodGhost';

function PastVibesRows({data, onView}) {
    return (
        <tr>
            <td onClick={() => onView(data)}><DateTitle dateToView={data}></DateTitle></td>
            <td onClick={() => onView(data)}><GetMoodGhost dateToView={data}></GetMoodGhost></td>
        </tr>
    );
}

export default PastVibesRows;