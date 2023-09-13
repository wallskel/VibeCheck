import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import PastVibes from '../components/PastVibes';

function PastVibesPage({setDateToView}) {
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const onView = async dateToView => {
        setDateToView(dateToView);
        navigate('/ViewVibe');
    };

    const loadDates = async () => {
        const response = await fetch(`/entries`);
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        loadDates();
    }, []);

    return(
        <>
        <fieldset>
        <h1>Past Vibe Checks</h1>
        <h3>To view the vibe's full entry,<br></br> click the entry's date or vibe.</h3>
        <PastVibes data = {data} onView = {onView}></PastVibes>
        </fieldset>
        </>
    )
};

export default PastVibesPage;