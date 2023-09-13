import React from 'react';
import PastVibesRows from './PastVibesRows';

function PastVibes({ data, onView}) {
    return (
        <table id="data">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Vibe</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data, i) => <PastVibesRows data={data} onView = {onView}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default PastVibes;